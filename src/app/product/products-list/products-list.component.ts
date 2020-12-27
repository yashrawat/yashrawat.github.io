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

  cart;
  cartSubs: Subscription;

  resultArray;

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

    // change button to added to cart, on button click
    this.productData.forEach(product => {
      if (product._id === productId) {
        product.isAddedToCart = true;
      }
    });
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

    // getting cart
    this.cartService.getCartByAuthId(this.authId);
    this.cartSubs = this.cartService.getCartDataUpdated()
      .subscribe(fetchedCart => {
        this.cart = fetchedCart.products;

        // match productId of cart & productData, if productId match set button to added to cart from add to cart
        this.resultArray = this.productData?.filter(o1 => {
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
    this.productDataSubs.unsubscribe();
    this.cartSubs.unsubscribe();
  }

}
