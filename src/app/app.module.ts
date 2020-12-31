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
import { HomepageComponent } from './utils/Components/homepage/homepage.component';
import { HeaderComponent } from './utils/Components/header/header.component';
import { FooterComponent } from './utils/Components/footer/footer.component';
import { PagenotfoundComponent } from './utils/Components/pagenotfound/pagenotfound.component';
import { ContactUsComponent } from './utils/Components/contact-us/contact-us.component';
import { FaqsComponent } from './utils/Components/faqs/faqs.component';
import { ErrorComponent } from './utils/Components/error/error.component';
import { CartService } from './utils/Services/cart.service';
import { AuthService } from './utils/Services/auth.service';
import { ProductService } from './utils/Services/product.service';
import { WishlistService } from './utils/Services/wishlist.service';
import { OrderHistoryService } from './utils/Services/order-history.service';
import { AuthInterceptor } from './utils/Interceptors/auth.interceptor';
import { ErrorInterceptor } from './utils/Interceptors/error.interceptor';

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
