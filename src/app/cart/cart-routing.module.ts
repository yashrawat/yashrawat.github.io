import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CartUIComponent } from './cart-ui/cart-ui.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { OrderConfirmartionComponent } from './order-confirmartion/order-confirmartion.component';

const routes: Routes = [
  { path: 'cart-ui', component: CartUIComponent },
  { path: 'checkout', component: CheckoutComponent },
  { path: 'order-confirmation', component: OrderConfirmartionComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CartRoutingModule { }
