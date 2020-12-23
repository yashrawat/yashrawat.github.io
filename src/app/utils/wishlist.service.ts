import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Subject } from 'rxjs';
import { environment } from 'src/environments/environment';

const BACKEND_URL = `${environment.apiUrl}/wishlist`;

@Injectable({
  providedIn: 'root'
})
export class WishlistService {

  private wishlist;
  private wishlistData = new Subject();

  constructor(private http: HttpClient, private snackbar: MatSnackBar) { }

  openSnackbar(message, action): any {
    this.snackbar.open(message, action, {
      duration: 2000,
    });
  }

  getWishlist(): any {
    return this.wishlist;
  }

  getWishlistDataUpdated(): any {
    return this.wishlistData.asObservable();
  }

  // Working
  // add product to wishlist
  addProductToWishlist(authId, productId): any {
    this.http.post<{ message: string; wishlist; }>(`${BACKEND_URL}/addProductToWishlist`, {authId, productId})
      .subscribe(fetchedWishlist => {
        this.wishlist = fetchedWishlist.wishlist;
        this.wishlistData.next(this.wishlist);
        this.openSnackbar('Added to wishlist', 'Added');
      });
  }

  // Working
  // get wishlist by authId
  getWishlistData(authId): any {
    this.http.get<{ message: string; wishlist; }>(`${BACKEND_URL}/getWishlistByAuthId/${authId}`)
      .subscribe(fetchedWishlist => {
        this.wishlist = fetchedWishlist.wishlist.products;
        this.wishlistData.next(this.wishlist);
      });
  }

  // Working
  // remove product from wishlist
  removeProductFromWishlist(authId, productId): any {
    this.http.put<{ message: string; wishlist; }>(`${BACKEND_URL}/removeProductFromWishlist`, {authId, productId})
      .subscribe(updatedWishlist => {
        this.wishlist = updatedWishlist;
        this.wishlistData.next(this.wishlist);
        this.openSnackbar('Deleted From Wishlist', 'Deleted');
      });
  }

}
