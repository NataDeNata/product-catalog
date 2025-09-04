import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductPageComponent } from './product-page/product-page.component';
import { ViewDetailsComponent } from './view-details/view-details.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'product', component: ProductPageComponent },
  { path: 'view-details/:id', component: ViewDetailsComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }, // default route
  { path: '**', redirectTo: '/home' } // wildcard for unknown routes
];
