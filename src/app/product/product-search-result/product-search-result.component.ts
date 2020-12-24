import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/utils/auth.service';
import { CartService } from 'src/app/utils/cart.service';

import { ProductService } from '../../utils/product.service';

@Component({
  selector: 'app-product-search-result',
  templateUrl: './product-search-result.component.html',
  styleUrls: ['./product-search-result.component.css']
})
export class ProductSearchResultComponent implements OnInit {

  searchForm1: FormGroup;
  filteredData;
  authId;

  constructor(
    private productService: ProductService,
    private fb: FormBuilder,
    private cartService: CartService,
    private authService: AuthService
  ) { }

  filterSearch1(): void {
    const searchTextResult = this.searchForm1.get('searchText').value;
    this.productService.filterSearchResults(searchTextResult);
    this.filteredData = this.productService.filteredData;
  }

  addToCart(productId): any {
    this.cartService.addProductToCart(this.authId, productId, 1);
  }

  ngOnInit(): void {
    this.authId = this.authService.getUserId();
    this.searchForm1 = this.fb.group({
      searchText: ['', [Validators.required]]
    });
    this.filteredData = this.productService.filteredData;
  }

}
