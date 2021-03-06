import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { AuthService } from 'src/app/utils/Services/auth.service';
import { CartService } from '../../utils/Services/cart.service';

@Component({
  selector: 'app-cart-ui',
  templateUrl: './cart-ui.component.html',
  styleUrls: ['./cart-ui.component.css']
})
export class CartUIComponent implements OnInit, OnDestroy {

  cart;
  cartSubs: Subscription;

  authId;

  constructor(
    private cartService: CartService,
    private router: Router,
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

  incrementQuantityButton(productId): any {
    this.cartService.incrementQuantity(this.authId, productId);
    this.cartService.getCartByAuthId(this.authId);
    this.cart = this.cartService.getCart();
  }

  decrementQuantityButton(productId): any {
    this.cartService.decrementQuantity(this.authId, productId);
    this.cartService.getCartByAuthId(this.authId);
    this.cart = this.cartService.getCart();
  }

  onCheckout(): any {
    this.cartService.getCartByAuthId(this.authId);
    this.cart = this.cartService.getCart();
    this.router.navigate(['/cart/checkout']);
  }

  removeProductFromCart(productId): any {
    this.cartService.removeProductFromCart(this.authId, productId);
    this.cartService.getCartByAuthId(this.authId);
    this.cart = this.cartService.getCart();
  }

  ngOnInit(): void {
    this.authId = this.authService.getUserId();

    // get cart
    this.cartService.getCartByAuthId(this.authId);
    this.cart = this.cartService.getCart();
    this.cartSubs = this.cartService.getCartDataUpdated()
      .subscribe(fetchedCart => {
        this.cart = fetchedCart.products;
      });
  }

  ngOnDestroy(): void {
    this.cartSubs.unsubscribe();
  }

}
