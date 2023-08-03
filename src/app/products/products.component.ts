import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../services/products.service';
import { Product } from './products';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  products$: Observable<Product[]>;

  constructor(
    private productsService: ProductsService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.products$ = this.productsService.getProducts();
    console.log(this.authService.getLoggedInUser());
  }
}
