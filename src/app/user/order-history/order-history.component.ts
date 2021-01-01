import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { AuthService } from 'src/app/utils/Services/auth.service';
import { OrderHistoryService } from 'src/app/utils/Services/order-history.service';

@Component({
  selector: 'app-order-history',
  templateUrl: './order-history.component.html',
  styleUrls: ['./order-history.component.css']
})
export class OrderHistoryComponent implements OnInit, OnDestroy {

  orderHistory;
  orderHistorySubs: Subscription;
  authUserId;
  address;

  constructor(
    private authService: AuthService,
    private orderHistoryService: OrderHistoryService
  ) { }

  ngOnInit(): void {
    this.authUserId = this.authService.getUserId();
    this.orderHistory = this.orderHistoryService.getOrderHistoryByAuthId(this.authUserId);
    this.orderHistorySubs = this.orderHistoryService.getOrderHistoryDataUpdated()
      .subscribe(fetchedOrderHistory => {
        this.orderHistory = fetchedOrderHistory.products
          //sort by orderDate
          .sort((a, b) => Date.parse(b.orderDate) - Date.parse(a.orderDate));
        this.address = fetchedOrderHistory.authId.address;
      });
  }

  ngOnDestroy(): void {
    this.orderHistorySubs.unsubscribe();
  }

}
