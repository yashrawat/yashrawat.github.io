import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Subject } from 'rxjs';
import { environment } from 'src/environments/environment';

const BACKEND_URL = `${environment.apiUrl}/orderHistory`;

@Injectable({
  providedIn: 'root'
})
export class OrderHistoryService {

  private orderHistory;
  private orderHistoryData = new Subject();

  constructor(private http: HttpClient, private snackbar: MatSnackBar) { }

  openSnackbar(message, action): any {
    this.snackbar.open(message, action, {
      duration: 2000,
    });
  }

  getOrderHistory(): any {
    return this.orderHistory;
  }

  getOrderHistoryDataUpdated(): any {
    return this.orderHistoryData.asObservable();
  }

  // add product to orderHistory
  addProductToOrderHistory(authId, productId, orderDate, paymentMethod): any {
    this.http.post<{ message: string; orderHistory; }>(`${BACKEND_URL}/addProductToOrderHistory`, {authId, productId, orderDate, paymentMethod})
      .subscribe(fetchedOrderHistory => {
        this.orderHistory = fetchedOrderHistory.orderHistory;
        this.orderHistoryData.next(this.orderHistory);
        this.openSnackbar('Added to orderHistory', 'Added');
      });
  }

  // get orderHistory by authId
  getOrderHistoryByAuthId(authId): any {
    this.http.get<{ message: string; orderHistory; }>(`${BACKEND_URL}/getOrderHistoryByAuthId/${authId}`)
      .subscribe(fetchedOrderHistory => {
        this.orderHistory = fetchedOrderHistory.orderHistory;
        this.orderHistoryData.next(this.orderHistory);
      });
  }

  // No use case as of now
  // remove Product From Wishlist
  // removeProductFromOrderHistory(): any {}

}
