import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDialogModule } from '@angular/material/dialog';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './utils/homepage/homepage.component';
import { HeaderComponent } from './utils/header/header.component';
import { FooterComponent } from './utils/footer/footer.component';
import { PagenotfoundComponent } from './utils/pagenotfound/pagenotfound.component';
import { ContactUsComponent } from './utils/contact-us/contact-us.component';
import { FaqsComponent } from './utils/faqs/faqs.component';
import { ErrorComponent } from './utils/error/error.component';
import { CartService } from './utils/cart.service';
import { AuthService } from './utils/auth.service';
import { ProductService } from './utils/product.service';
import { AuthInterceptor } from './auth/auth.interceptor';
import { ErrorInterceptor } from './utils/error.interceptor';
import { WishlistService } from './utils/wishlist.service';
import { OrderHistoryService } from './utils/order-history.service';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    HeaderComponent,
    FooterComponent,
    PagenotfoundComponent,
    ContactUsComponent,
    FaqsComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    MatSnackBarModule,
    MatDialogModule
  ],
  providers: [
    ProductService,
    CartService,
    AuthService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorInterceptor,
      multi: true
    },
    WishlistService,
    OrderHistoryService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
