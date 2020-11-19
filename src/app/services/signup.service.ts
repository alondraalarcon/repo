import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse} from '@angular/common/http';
import { retry, catchError } from 'rxjs/operators';
import {  throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})


export class SignUpService {

  url = 'https://www.karinderya24x7.com/';
  consumerKey = 'ck_77300cf86ff3c9aa0c3f1d5729eb1c9a9af8d639';   
  consumerSecret = 'cs_2eb6e739b6c640d4495d7267a39728f8209086e0';
  
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


}
