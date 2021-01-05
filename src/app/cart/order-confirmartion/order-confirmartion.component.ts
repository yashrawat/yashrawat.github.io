import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { AuthService } from 'src/app/utils/Services/auth.service';
import { CartService } from 'src/app/utils/Services/cart.service';

@Component({
  selector: 'app-order-confirmartion',
  templateUrl: './order-confirmartion.component.html',
  styleUrls: ['./order-confirmartion.component.css']
})
export class OrderConfirmartionComponent implements OnInit, OnDestroy {

  userData;
  userDataSubs: Subscription;

  paymentMethodValue;
  date = new Date();

  cart;
  cartSubs: Subscription;
  authId;

  constructor(
    private cartService: CartService,
    private authService: AuthService
  ) { }

  calculateTotalPrice(): any {
    if (this.cart) {
      return this.cart.map(grandTotal => grandTotal.productId.price * grandTotal.quantity)
        .reduce((a, value) =>
          a + value, 0
        );
    }
  }

  ngOnInit(): void {
    this.authId = this.authService.getUserId();

    // get cart
    this.cart = this.cartService.getCartByAuthId(this.authId);
    this.cart = this.cartService.getCart();
    this.cartSubs = this.cartService.getCartDataUpdated()
      .subscribe(fetchedCart => {
        this.cart = fetchedCart.products;
      });

    // get userData
    this.authService.getUserById(this.authId);
    this.userDataSubs = this.authService.getUserDataUpdated()
      .subscribe(fetchedUserData => {
        this.userData = fetchedUserData;
      });

    // get paymentMethodValue
    this.paymentMethodValue = this.cartService.getPaymentMethodValue();
  }

  ngOnDestroy(): any {
    this.userDataSubs.unsubscribe();
  }

}
