import { Routes } from '@angular/router';
import { isAuthenticatedGuard } from './user/shared/guard/is-authenticated.guard';
import { AddNewProductComponent } from './product/add-new-product/add-new-product.component';
import { UpdateProductsSalesComponent } from './product-sales/update-products-sales/update-products-sales.component';
import { LoginComponent } from './user/login/login.component';
import { DisplayHeaderComponent } from './core/display-header/display-header.component';

export const routes: Routes = [

    {
        path: '',
        canActivate: [isAuthenticatedGuard],
        children: [
            {
                path: '',
                outlet: 'header',
                component: DisplayHeaderComponent,
            },
            {
                path: 'new-product',
                component: AddNewProductComponent
            },
            {
                path: 'sales',
                component: UpdateProductsSalesComponent
            }
        ]
    },
    { 
        path: 'login', 
        component: LoginComponent  
    },
    { 
        path: '**', 
        redirectTo: '/login',
    },

];
