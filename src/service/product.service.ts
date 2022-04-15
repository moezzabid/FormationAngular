import { Injectable } from '@angular/core';
import {product} from "../product/product";
import {Observable} from "rxjs";
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {catchError, tap} from "rxjs/operators";
import {throwError} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ProductService {
apiUrl="api/product/products.json";
  constructor(private http:HttpClient) { }


  getProduct():Observable<product[]> {
    return this.http.get<product[]>(this.apiUrl).pipe(
      tap(data=>console.log('All',JSON.stringify(data))),
      catchError(this.handleError)
    );
  }


  private handleError(err:HttpErrorResponse) {

    let errorMessage='';
    if(err.error instanceof ErrorEvent){
      errorMessage='An error :';
    }else{
      errorMessage='server returned code ';
    }

    return throwError(errorMessage);

  }
}
