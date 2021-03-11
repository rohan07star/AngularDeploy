import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Product} from './product';
import { Observable } from 'rxjs';
import { Category } from '../site-framework/category';
@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private httpClient:HttpClient) { }

  getAllProducts():Observable<Product>{
    const productUrl = 'http://localhost:3000/products';
    return this.httpClient.get<Product>(productUrl); //return an observable
  }

  getCategories():Observable<Category>{
    const categoriesUrl = 'http://localhost:3000/categories';
    return this.httpClient.get<Category>(categoriesUrl);
  }

  createProduct(productBody:any):Observable<Product>{
    const productUrl = 'http://localhost:3000/products';
    return this.httpClient.post<Product>(productUrl,productBody); //return an observable
  }

  viewProduct(productId:any):Observable<Product>{
    const productUrl = 'http://localhost:3000/product/'+productId;
    return this.httpClient.get<Product>(productUrl); //return observable
  }

  updateProduct(productId:string , productBody:any):Observable<Product>{
   const productUrl = 'http://localhost:3000/products/' +productId;
   return this.httpClient.put<Product>(productUrl , productBody); //return observable

  }

  deleteProduct(productId:string):Observable<Product>{
    const productUrl = 'http://localhost:3000/product/'+productId;
    return this.httpClient.delete<Product>(productUrl); //return observable
  }

  searchCategoryProducts(CategoryId:any):Observable<Product>{
    const productUrl = 'http://localhost:3000/products?categoryId='+CategoryId;
    return this.httpClient.get<Product>(productUrl);  //return an observable
  }

  searchDateProducts(dateParam:any):Observable<Product>{
    const productUrl = 'http://localhost:3000/products/date='+dateParam;
    return this.httpClient.get<Product>(productUrl); //return observable
  }

}
