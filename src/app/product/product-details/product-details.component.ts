import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

import { AuthService } from 'src/app/utils/auth.service';
import { WishlistService } from 'src/app/utils/wishlist.service';
import { CartService } from '../../utils/cart.service';
import { ProductService } from '../../utils/product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit, OnDestroy {

  productData;
  productDataSubs: Subscription;
  productId;

  wishlistButton = false;
  wishlist;
  wishlistSubs: Subscription;

  authId;

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
    private cartService: CartService,
    private wishlistService: WishlistService,
    private authService: AuthService
  ) { }

  addToCart(productId): any {
    this.cartService.addProductToCart(this.authId, productId, 1);
  }

  wishlistButtonClick(): any {
    if (!this.wishlistButton) {
      this.addProductToWishlist();
    } else {
      this.removeProductFromWishlist();
    }
    return this.wishlistButton = !this.wishlistButton;
  }

  addProductToWishlist(): any {
    this.wishlistService.addProductToWishlist(this.authId, this.productId);
  }

  removeProductFromWishlist(): any {
    this.wishlistService.removeProductFromWishlist(this.authId, this.productId);
  }

  // wishlistButtonStatus(): any {
  //   // TODO: match this product's id with all wishlist productIds,
  //   // if id matches, set wishlistButton = true,
  //   // else, set wishlistButton = false
  //   this.wishlistService.getWishlistData(this.authId);
  //   this.wishlistSubs = this.wishlistService.getWishlistDataUpdated()
  //     .subscribe(fetchedWishlist => {
  //       this.wishlist = fetchedWishlist;
  //       // FIX: Since wishlist is not changing, so this is also not getting triggered
  //       this.wishlist.forEach(data => {
  //         if (data.productId._id === this.productId) {
  //           this.wishlistButton = true;
  //         } else {
  //           this.wishlistButton = false;
  //         }
  //       });
  //     })
  // }

  ngOnInit(): void {
    this.authId = this.authService.getUserId();
    this.productId = this.route.snapshot.params.id;
    this.productDataSubs = this.productService.getProductDataUpdated()
      .subscribe(productStatus => {
        this.productData = productStatus.products;
      });
    this.productData = this.productService.getProductById(this.productId);

    // TODO: match this product's id with all wishlist productIds,
    // if id matches, set wishlistButton = true,
    // else, set wishlistButton = false
    this.wishlistService.getWishlistData(this.authId);
    this.wishlistSubs = this.wishlistService.getWishlistDataUpdated()
      .subscribe(fetchedWishlist => {
        this.wishlist = fetchedWishlist;
        // console.log(this.wishlist);
        // FIX: Since wishlist is not changing, so this is also not getting triggered
        this.wishlist.forEach(data => {
          console.log(data.productId._id);
          if (data.productId._id === this.productId) {
            this.wishlistButton = true;
          } else {
            this.wishlistButton = false;
          }
        });
      })
  }

  ngOnDestroy(): void {
    this.productDataSubs.unsubscribe();
  }

}
