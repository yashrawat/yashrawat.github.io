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
  authId;

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
    this.cartService.addProductToCart(this.authId, product.productId, product.quantity);
    this.removeProductFromWishlist(product.productId);
    this.wishlistService.getWishlistData(this.authId);
    this.wishlist = this.wishlistService.getWishlist();
  }

  removeProductFromWishlist(productId): any {
    this.wishlistService.removeProductFromWishlist(this.authId, productId);
    this.wishlistService.getWishlistData(this.authId);
    this.wishlist = this.wishlistService.getWishlist();
  }

  ngOnInit(): void {
    this.authId = this.authService.getUserId();
    this.wishlistService.getWishlistData(this.authId);
    this.wishlist = this.wishlistService.getWishlist();
    this.wishlistSubs = this.wishlistService.getWishlistDataUpdated()
      .subscribe(fetchedWishlist => {
        this.wishlist = fetchedWishlist;
      });
  }

  ngOnDestroy(): void {
    this.wishlistSubs.unsubscribe();
  }

}
