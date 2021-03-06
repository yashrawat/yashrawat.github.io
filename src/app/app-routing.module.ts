import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from './auth/auth.guard';
import { ContactUsComponent } from './utils/Components/contact-us/contact-us.component';
import { FaqsComponent } from './utils/Components/faqs/faqs.component';
import { PagenotfoundComponent } from './utils/Components/pagenotfound/pagenotfound.component';

const routes: Routes = [
  { path: 'auth', loadChildren: () => import('./auth/auth.module').then(a => a.AuthModule), data: { preload: true } },
  { path: 'product', loadChildren: () => import('./product/product.module').then(p => p.ProductModule), canActivate: [AuthGuard] },
  { path: 'cart', loadChildren: () => import('./cart/cart.module').then(c => c.CartModule), canActivate: [AuthGuard] },
  { path: 'user', loadChildren: () => import('./user/user.module').then(u => u.UserModule), canActivate: [AuthGuard] },
  { path: 'contact-us', component: ContactUsComponent },
  { path: 'faqs', component: FaqsComponent },
  { path: '', redirectTo: '/auth/login', pathMatch: 'full' },
  { path: '**', component: PagenotfoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule { }
