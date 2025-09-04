import { Routes } from '@angular/router';
import { ProductPageComponent } from './product-page/product-page.component';
import { AppComponent } from './app.component';


export const routes: Routes = [
    { path: 'home', component: AppComponent },
    { path: 'product', component: ProductPageComponent },
];
