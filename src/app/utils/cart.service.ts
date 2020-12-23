import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Subject } from 'rxjs';

import { environment } from 'src/environments/environment';

const BACKEND_URL = `${environment.apiUrl}/cart`;

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cart;
  private cartData = new Subject();

  constructor(
    private snackbar: MatSnackBar,
    private http: HttpClient
  ) { }

  openSnackbar(message, action): any {
    this.snackbar.open(message, action, {
      duration: 2000,
    });
  }

  getCart(): any {
    return this.cart;
  }

  getCartDataUpdated(): any {
    return this.cartData.asObservable();
  }

  // add product to cart
  addProductToCart(authId, productId, quantity): any {
    this.http.post<{ message: string; cart; }>(`${BACKEND_URL}/addProductToCart`, {authId, productId, quantity})
      .subscribe(updatedCart => {
        this.cart = updatedCart.cart;
        this.cartData.next(this.cart);
        this.openSnackbar('Added to cart', 'Added');
      });
  }

  // get products from cart
  getCartByAuthId(authId): any {
    this.http.get<{ message: string; cart; }>(`${BACKEND_URL}/getCartByAuthId/${authId}`)
      .subscribe(fetchedCart => {
        this.cart = fetchedCart.cart;
        this.cartData.next(this.cart);
      });
  }

  // remove product from cart
  removeProductFromCart(authId, productId): any {
    this.http.put<{ message: string; cart; }>(`${BACKEND_URL}/removeProductFromCart`, {authId, productId})
      .subscribe(updatedCart => {
        this.cart = updatedCart.cart;
        this.cartData.next(this.cart);
        this.openSnackbar('Deleted from cart', 'Deleted');
      });
  }

  // TODO
  incrementQuantity(): any {
    console.log('Increment quantity');
  }

  // TODO
  decrementQuantity(): any {
    console.log('Decrement quantity');
  }

  // clearCart(): any {
  //   this.itemsService = [];
  //   return this.itemsService;
  // }

  // Checkout
  // 1. Cartitems added to checkout (TODO: on placement of order, add these items to orderlist)
  // 2. also send value of payment method selected to orderlist
  // 3. Fetch address of user, then on order placement send address to orderlist
  // onCheckout(): any {}
}
