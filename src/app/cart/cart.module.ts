import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartRoutingModule } from './cart-routing.module';
import { CartUIComponent } from './cart-ui/cart-ui.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { OrderConfirmartionComponent } from './order-confirmartion/order-confirmartion.component';


@NgModule({
  declarations: [
    CartUIComponent,
    CheckoutComponent,
    OrderConfirmartionComponent
  ],
  imports: [
    CommonModule,
    CartRoutingModule
  ]
})
export class CartModule { }
