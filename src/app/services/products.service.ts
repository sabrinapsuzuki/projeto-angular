import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Product } from '../products/products';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private apiUrl: string = environment.API_URL;

  constructor(private http: HttpClient) {}

  getProducts(): Observable<Product[]> {
    const url = `${this.apiUrl}/products`
    return this.http.get<Product[]>(url)
  }
}
