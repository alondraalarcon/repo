import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse} from '@angular/common/http';
import { retry, catchError } from 'rxjs/operators';
import {  throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ProductAPIService {

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

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private http: HttpClient) { }


  getProductCategories(){
    return this.http.get(`${this.url}wp-json/wc/v3/products/categories?consumer_key=${
      this.consumerKey
    }&consumer_secret=${this.consumerSecret}&hide_empty=true`)
      .pipe(
        retry(2),
        catchError(this.handleError)
    )
  }

  getKarneProducts(){
    return this.http.get(`${this.url}wp-json/wc/v3/products?consumer_key=${
      this.consumerKey
    }&consumer_secret=${this.consumerSecret}&category=75&hide_empty=true`)
      .pipe(
        retry(2),
        catchError(this.handleError)
    )
  }

  getIsdaProducts(){
    return this.http.get(`${this.url}wp-json/wc/v3/products?consumer_key=${
      this.consumerKey
    }&consumer_secret=${this.consumerSecret}&category=76&hide_empty=true`)
      .pipe(
        retry(2),
        catchError(this.handleError)
    )
  }

  getGulayProducts(){
    return this.http.get(`${this.url}wp-json/wc/v3/products?consumer_key=${
      this.consumerKey
    }&consumer_secret=${this.consumerSecret}&category=73&hide_empty=true`)
      .pipe(
        retry(2),
        catchError(this.handleError)
    )
  }

  getPrutasProducts(){
    return this.http.get(`${this.url}wp-json/wc/v3/products?consumer_key=${
      this.consumerKey
    }&consumer_secret=${this.consumerSecret}&category=74&hide_empty=true`)
      .pipe(
        retry(2),
        catchError(this.handleError)
    )
  }

  getDriedFishProducts(){
    return this.http.get(`${this.url}wp-json/wc/v3/products?consumer_key=${
      this.consumerKey
    }&consumer_secret=${this.consumerSecret}&category=100&hide_empty=true`)
      .pipe(
        retry(2),
        catchError(this.handleError)
    )
  }

  getOtherProducts(){
    return this.http.get(`${this.url}wp-json/wc/v3/products?consumer_key=${
      this.consumerKey
    }&consumer_secret=${this.consumerSecret}&category=105&hide_empty=true`)
      .pipe(
        retry(2),
        catchError(this.handleError)
    )
  }

  getSingleProduct(id){

    return this.http.get(`${this.url}wp-json/wc/v3/products/` + id + `?consumer_key=${
      this.consumerKey
    }&consumer_secret=${this.consumerSecret}`)
      .pipe(
        retry(2),
        catchError(this.handleError)
    )

  }
}
