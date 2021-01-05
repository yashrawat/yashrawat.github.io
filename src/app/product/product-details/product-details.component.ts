import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

import { AuthService } from 'src/app/utils/Services/auth.service';
import { WishlistService } from 'src/app/utils/Services/wishlist.service';
import { CartService } from '../../utils/Services/cart.service';
import { ProductService } from '../../utils/Services/product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit, OnDestroy {

  productData;
  productDataSubs: Subscription;
  productId;

  wishlist;
  wishlistSubs: Subscription;

  cart;
  cartSubs: Subscription;

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
    this.cartService.getCartByAuthId(this.authId);
    this.cart = this.cartService.getCart();
    return this.productData.isAddedToCart = !this.productData.isAddedToCart;
  }

  wishlistButtonClick(): any {
    if (this.productData.isWishlisted) {
      this.removeProductFromWishlist();
    } else {
      this.addProductToWishlist();
    }
    this.wishlistService.getWishlistData(this.authId);
    this.wishlist = this.wishlistService.getWishlist();
    return this.productData.isWishlisted = !this.productData.isWishlisted;
  }

  addProductToWishlist(): any {
    this.wishlistService.addProductToWishlist(this.authId, this.productId);
    this.wishlistService.getWishlistData(this.authId);
    this.wishlist = this.wishlistService.getWishlist();
  }

  removeProductFromWishlist(): any {
    this.wishlistService.removeProductFromWishlist(this.authId, this.productId);
    this.wishlistService.getWishlistData(this.authId);
    this.wishlist = this.wishlistService.getWishlist();
  }

  ngOnInit(): void {
    // getting productData
    this.authId = this.authService.getUserId();
    this.productId = this.route.snapshot.params.id;
    this.productData = this.productService.getProductById(this.productId);
    this.productDataSubs = this.productService.getProductDataUpdated()
      .subscribe(productStatus => {
        this.productData = productStatus.products;
      });

    // getting wishlist
    this.wishlistService.getWishlistData(this.authId);
    this.wishlist = this.wishlistService.getWishlist();
    this.wishlistSubs = this.wishlistService.getWishlistDataUpdated()
      .subscribe(fetchedWishlist => {
        this.wishlist = fetchedWishlist;

        // settting wishlisted products
        this.wishlist?.forEach(data => {
          if (data.productId._id === this.productId) {
            data.productId.isWishlisted = true;
            this.productData.isWishlisted = true;
          } else {
            data.productId._id = false;
          }
        });
      });

    // getting cart
    this.cartService.getCartByAuthId(this.authId);
    this.cart = this.cartService.getCart();
    this.cartSubs = this.cartService.getCartDataUpdated()
      .subscribe(fetchedCart => {
        this.cart = fetchedCart.products;

        // setting products that are added to cart
        this.cart?.forEach(data => {
          if (data.productId._id === this.productId) {
            data.productId.isAddedToCart = true;
            this.productData.isAddedToCart = true;
          } else {
            data.productId.isAddedToCart = false;
          }
        });
      });
  }

  ngOnDestroy(): void {
    this.productDataSubs.unsubscribe();
    this.wishlistSubs.unsubscribe();
    this.cartSubs.unsubscribe();
  }

}
