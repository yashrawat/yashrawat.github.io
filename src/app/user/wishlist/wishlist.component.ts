import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { AuthService } from 'src/app/utils/Services/auth.service';
import { CartService } from 'src/app/utils/Services/cart.service';
import { WishlistService } from 'src/app/utils/Services/wishlist.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit, OnDestroy {

  wishlist;
  wishlistSubs: Subscription;
  authUserId;

  constructor(
    private authService: AuthService,
    private wishlistService: WishlistService,
    private cartService: CartService
  ) { }

  addProductToCart(productData): any {
    const product = {
      productId: productData.productId._id,
      quantity: 1
    };
    this.cartService.addProductToCart(this.authUserId, product.productId, product.quantity);
    this.removeProductFromWishlist(product.productId);
  }

  removeProductFromWishlist(productId): any {
    this.wishlistService.removeProductFromWishlist(this.authUserId, productId);
    this.wishlistService.getWishlistData(this.authUserId);
    this.wishlist = this.wishlistService.getWishlist();
  }

  ngOnInit(): void {
    this.authUserId = this.authService.getUserId();
    this.wishlistService.getWishlistData(this.authUserId);
    this.wishlistSubs = this.wishlistService.getWishlistDataUpdated()
      .subscribe(fetchedWishlist => {
        this.wishlist = fetchedWishlist;
      });
  }

  ngOnDestroy(): void {
    this.wishlistSubs.unsubscribe();
  }

}
