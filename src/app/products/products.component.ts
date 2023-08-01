import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../services/products.service';
import { Product } from './products';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})

export class ProductsComponent implements OnInit {

  

  products$: Observable <Product[]> 

  constructor(private productsService: ProductsService) {

  }

  ngOnInit(): void {
    this.products$ = this.productsService.getProducts()
  }

  
}
