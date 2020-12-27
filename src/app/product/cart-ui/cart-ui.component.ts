import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/utils/auth.service';

import { CartService } from '../../utils/cart.service';

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
    this.cartService.getCart();
  }

  decrementQuantityButton(productId): any {
    this.cartService.decrementQuantity(this.authId, productId);
    this.cartService.getCartByAuthId(this.authId);
    this.cartService.getCart();
  }

  onCheckout(): any {
    this.router.navigate(['/product/checkout']);
  }

  removeProductFromCart(productId): any {
    this.cartService.removeProductFromCart(this.authId, productId);
    this.cartService.getCartByAuthId(this.authId);
    this.cart = this.cartService.getCart();
  }

  ngOnInit(): void {
    this.authId = this.authService.getUserId();
    this.cartService.getCartByAuthId(this.authId);
    this.cartSubs = this.cartService.getCartDataUpdated()
      .subscribe(fetchedCart => {
        this.cart = fetchedCart.products;
      });
  }

  ngOnDestroy(): void {
    this.cartSubs.unsubscribe();
  }

}
