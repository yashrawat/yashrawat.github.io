import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { AuthService } from 'src/app/utils/Services/auth.service';
import { CartService } from 'src/app/utils/Services/cart.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit, OnDestroy {

  paymentMethods = ['UPI', 'Credit Card', 'Debit Card', 'Net Banking', 'Wallet'];
  radioPaymentMethod;

  userData;
  userDataSubs: Subscription;

  cart;
  cartSubs: Subscription;
  authId;

  constructor(
    private cartService: CartService,
    private authService: AuthService,
    private router: Router
  ) { }

  // radio buttons change handler
  radioChangeHandler(event): any {
    this.radioPaymentMethod = event.target.value;
  }

  calculateTotalPrice(): any {
    if (this.cart) {
      return this.cart.map(grandTotal => grandTotal.productId.price * grandTotal.quantity)
        .reduce((a, value) =>
          a + value, 0
        );
    }
  }

  incrementQuantityButton(productId): any {
    this.cartService.incrementQuantity(this.authId, productId);
    this.cartService.getCartByAuthId(this.authId);
    this.cartService.getCart();
  }

  decrementQuantityButton(productId): any {
    this.cartService.decrementQuantity(this.authId, productId);
    this.cartService.getCartByAuthId(this.authId);
    this.cartService.getCart();
  }

  deleteCartItem(productId): any {
    this.cartService.removeProductFromCart(this.authId, productId);
    this.cartService.getCartByAuthId(this.authId);
    this.cart = this.cartService.getCart();
  }

  // check it
  onConfirmOrder(): any {
    this.cartService.confirmOrder(this.radioPaymentMethod, this.cart);
    this.router.navigate(['/cart/order-confirmation']);
  }

  ngOnInit(): void {
    this.authId = this.authService.getUserId();

    // get cart data
    this.cartService.getCartByAuthId(this.authId);
    this.cart = this.cartService.getCart();
    this.cartSubs = this.cartService.getCartDataUpdated()
      .subscribe(fetchedCart => {
        this.cart = fetchedCart.products;
      });

    // get userData
    this.authService.getUserById(this.authId);
    this.userData = this.authService.getUserData();
    this.userDataSubs = this.authService.getUserDataUpdated()
      .subscribe(fetchedUserData => {
        this.userData = fetchedUserData;
      });
  }

  ngOnDestroy(): any {
    this.userDataSubs.unsubscribe();
    this.cartSubs.unsubscribe();
  }

}
