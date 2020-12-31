import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductSearchResultComponent } from './product-search-result/product-search-result.component';
import { ProductsListComponent } from './products-list/products-list.component';

const routes: Routes = [
  { path: 'products-list', component: ProductsListComponent },
  { path: 'product-search-result', component: ProductSearchResultComponent },
  { path: 'product-details/:id', component: ProductDetailsComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
