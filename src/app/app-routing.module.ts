import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authGuard } from './core/guard/auth.guard';

const routes: Routes = [
  {
    path: '',
    canActivate: [authGuard],
    loadComponent: () =>
      import('./layouts/blank-layout/blank-layout.component').then(
        (pram) => pram.BlankLayoutComponent
      ),

    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },

      {
        path: 'home',
        loadComponent: () =>
          import('./components/home/home.component').then(
            (pram) => pram.HomeComponent
          ),
        title: 'Home',
      },

      {
        path: 'cart',
        loadComponent: () =>
          import('./components/cart/cart.component').then(
            (pram) => pram.CartComponent
          ),
        title: 'Cart',
      },

      {
        path: 'products',
        loadComponent: () =>
          import('./components/products/products.component').then(
            (pram) => pram.ProductsComponent
          ),
        title: 'Products',
      },

      {
        path: 'details/:id',
        loadComponent: () =>
          import('./components/details/details.component').then(
            (pram) => pram.DetailsComponent
          ),
        title: 'Products',
      },

      {
        path: 'brands',
        loadComponent: () =>
          import('./components/brands/brands.component').then(
            (pram) => pram.BrandsComponent
          ),
        title: 'Brands',
      },

      {
        path: 'categories',
        loadComponent: () =>
          import('./components/categories/categories.component').then(
            (pram) => pram.CategoriesComponent
          ),
        title: 'Categories',
      },
      {
        path: 'wishlist',
        loadComponent: () =>
          import('./components/wish-list/wish-list.component').then(
            (pram) => pram.WishListComponent
          ),
        title: 'Wish List',
      },
      {
        path: 'forgotpass',
        loadComponent: () =>
          import('./components/forgotpass/forgotpass.component').then(
            (pram) => pram.ForgotpassComponent
          ),
        title: 'Forgot Password',
      },
    ],
  },

  {
    path: '',
    loadComponent: () =>
      import('./layouts/auth-layout/auth-layout.component').then(
        (pram) => pram.AuthLayoutComponent
      ),
    children: [
      { path: '', redirectTo: 'login', pathMatch: 'full' },

      {
        path: 'login',
        loadComponent: () =>
          import('./components/login/login.component').then(
            (pram) => pram.LoginComponent
          ),
        title: 'Login',
      },

      {
        path: 'register',
        loadComponent: () =>
          import('./components/register/register.component').then(
            (pram) => pram.RegisterComponent
          ),
        title: 'Register',
      },
    ],
  },

  {
    path: '**',
    loadComponent: () =>
      import('./components/notfound/notfound.component').then(
        (pram) => pram.NotfoundComponent
      ),
    title: 'Not found page ',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
