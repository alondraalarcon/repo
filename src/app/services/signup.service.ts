import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse} from '@angular/common/http';
import { retry, catchError } from 'rxjs/operators';
import {  throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})


export class SignUpService {

  url = 'https://palengke24x7.com/';
  consumerKey = 'ck_59fd55fc5cee69474040447324b5f90b54071cfb';
  consumerSecret = 'cs_1d44d814beef787524f16b9ab6753baae0c5163b';

  handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    return throwError(
      'Something bad happened; please try again later.');
  };
  
  constructor(private http: HttpClient) { }
  getEmailAddress(email){

    return this.http.get(`${this.url}wp-json/wc/v3/customers?consumer_key=${
      this.consumerKey
    }&consumer_secret=${this.consumerSecret}&email=` + email + ``)
      .pipe(
        retry(2),
        catchError(this.handleError)
    )

  }

  createNewCustomer(customerData){

    this.http.post(`${this.url}wp-json/wc/v3/customers?consumer_key=${
      this.consumerKey
    }&consumer_secret=${this.consumerSecret}`, customerData, { headers: this.header })
    .pipe(
        retry(2),
        catchError(this.handleError)
    )

  }

}
