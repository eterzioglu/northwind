import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ListresponseModel } from '../models/listResponseModel';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  apiUrl = 'https://localhost:44320/api/';
  constructor(private httpClient: HttpClient) {}

  //subscribe olunabilir bir response model döneceksin.
  getProducts():Observable<ListresponseModel<Product>>{
    let newPath = this.apiUrl + "products/getall"
    return this.httpClient.get<ListresponseModel<Product>>(newPath);
  }
  getProductsByCategory(categoryId:number):Observable<ListresponseModel<Product>>{
    let newPath = this.apiUrl +"products/getbycategory?categoryId="+categoryId
    return this.httpClient.get<ListresponseModel<Product>>(newPath);
  }
}
