import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/utils/auth.service';

import { CartService } from '../../utils/cart.service';
import { ProductService } from '../../utils/product.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit, OnDestroy {

  searchForm: FormGroup;
  productData;
  filteredData;
  productDataSubs: Subscription;
  authId;

  constructor(
    private productService: ProductService,
    private fb: FormBuilder,
    private cartService: CartService,
    private authService: AuthService
  ) { }

  filterSearch(): any {
    const searchTextResult = this.searchForm.get('searchText').value;
    this.productService.filterSearchResults(searchTextResult);
  }

  addToCart(productId): any {
    this.cartService.addProductToCart(this.authId, productId, 1);
  }

  ngOnInit(): void {
    this.authId = this.authService.getUserId();
    this.searchForm = this.fb.group({
      searchText: ['', [Validators.required]]
    });
    this.productData = this.productService.getProductData();
    this.productDataSubs = this.productService.getProductDataUpdated()
      .subscribe(productStatus => {
        this.productData = productStatus.products;
      });
  }

  ngOnDestroy(): void {
    this.productDataSubs.unsubscribe();
  }

}
