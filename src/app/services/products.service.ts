import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/Product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  public host = "http://127.0.0.1:5000";

  constructor(private http : HttpClient) { }

  public searchProductByKeyword(keyword : String): Observable<Product[]>{
    return this.http.get<Product[]>(`${this.host}/search?key=${keyword}`);
  }
}
