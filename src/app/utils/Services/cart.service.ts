import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Subject } from 'rxjs';

import { environment } from 'src/environments/environment';
import { AuthService } from './auth.service';
import { OrderHistoryService } from './order-history.service';

const BACKEND_URL = `${environment.apiUrl}/cart`;

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cart;
  private cartData = new Subject();
  private paymentMethodValue;
  private authId;
  private date = Date.now();
  private quantity;

  constructor(
    private snackbar: MatSnackBar,
    private http: HttpClient,
    private orderHistoryService: OrderHistoryService,
    private authService: AuthService
  ) { }

  openSnackbar(message, action): any {
    this.snackbar.open(message, action, {
      duration: 2000,
    });
  }

  getPaymentMethodValue(): any {
    return this.paymentMethodValue;
  }

  getCart(): any {
    return this.cart;
  }

  getCartDataUpdated(): any {
    return this.cartData.asObservable();
  }

  // add product to cart
  addProductToCart(authId, productId, quantity): any {
    this.http.post<{ message: string; cart; }>(`${BACKEND_URL}/addProductToCart`, { authId, productId, quantity })
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
    this.http.put<{ message: string; cart; }>(`${BACKEND_URL}/removeProductFromCart`, { authId, productId })
      .subscribe(updatedCart => {
        this.cart = updatedCart.cart;
        this.cartData.next(this.cart);
        this.openSnackbar('Deleted from cart', 'Deleted');
      });
  }

  incrementQuantity(authId, productId): any {
    this.http.put<{ message: string; cart; }>(`${BACKEND_URL}/incrementQuantity`, {authId, productId})
      .subscribe(updatedCart => {
        this.cart = updatedCart.cart;
        this.cartData.next(this.cart);
        this.openSnackbar('Quantity Incremented', 'Incremented');
      });
  }

  decrementQuantity(authId, productId): any {
    this.http.put<{ message: string; cart; }>(`${BACKEND_URL}/decrementQuantity`, {authId, productId})
      .subscribe(updatedCart => {
        this.cart = updatedCart.cart;
        this.cartData.next(this.cart);
        this.openSnackbar('Quantity Decremented', 'Decremented');
      });
  }

  emptyCart(): any {
    this.authId = this.authService.getUserId();
    this.http.delete<{ message: string; cart; }>(`${BACKEND_URL}/emptyCart/${this.authId}`)
      .subscribe(deletedCart => {
        console.log(deletedCart);
      });
  }

  // TODO: add ordered items in orderHistory
  // ordered product is added to orderHistory, but only one product at a time
  // Fix: allow to add multiple products to be added to orderHistory in single order
  confirmOrder(paymentMethod, productIds): any {
    const productId = [];
    productIds.forEach(products => {
      productId.push(products.productId._id);
    });
    console.log(productId);
    this.paymentMethodValue = paymentMethod;
    this.authId = this.authService.getUserId();
    // TODO: fix on line 115
    this.orderHistoryService.addProductToOrderHistory(this.authId, productId, this.date, paymentMethod);
    this.emptyCart();
  }

}
