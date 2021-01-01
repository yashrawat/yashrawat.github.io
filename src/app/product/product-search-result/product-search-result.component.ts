import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';

import { AuthService } from 'src/app/utils/Services/auth.service';
import { CartService } from 'src/app/utils/Services/cart.service';
import { ProductService } from '../../utils/Services/product.service';

@Component({
  selector: 'app-product-search-result',
  templateUrl: './product-search-result.component.html',
  styleUrls: ['./product-search-result.component.css']
})
export class ProductSearchResultComponent implements OnInit, OnDestroy {

  searchForm1: FormGroup;
  filteredData;
  authId;

  cart;
  cartSubs: Subscription;

  resultArray;

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

    // change button to added to cart, on button click
    this.filteredData.forEach(product => {
      if (product._id === productId) {
        product.isAddedToCart = true;
      }
    });
  }

  ngOnInit(): void {
    this.authId = this.authService.getUserId();
    this.searchForm1 = this.fb.group({
      searchText: ['', [Validators.required]]
    });
    this.filteredData = this.productService.filteredData;

    // getting cart
    this.cartService.getCartByAuthId(this.authId);
    this.cartSubs = this.cartService.getCartDataUpdated()
      .subscribe(fetchedCart => {
        this.cart = fetchedCart.products;

        // match productId of cart & filteredData, if productId match set button to added to cart from add to cart
        this.resultArray = this.filteredData?.filter(o1 => {
          return this.cart?.some(o2 => {
            return o1._id === o2.productId._id;
          });
        });

        this.resultArray?.forEach(filteredProducts => {
          filteredProducts.isAddedToCart = true;
        });
      });
  }

  ngOnDestroy(): void {
    this.cartSubs.unsubscribe();
  }

}
