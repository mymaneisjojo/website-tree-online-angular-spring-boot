import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ShopComponent } from './shop/shop.component';
import { DetailComponent } from './detail/detail.component';
import { CartComponent } from './cart/cart.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { OrderComponent } from './order/order.component';
import { AuthGuardService } from '../service/auth-guard.service';
import { MyCustomerComponent } from './my-customer/my-customer.component';
import { SuccessComponent } from './success/success.component';
import { OrderHistoryComponent } from './order-history/order-history.component';
import { CouponComponent } from './coupon/coupon.component';


const routes: Routes = [
    {path:'', component: HomeComponent, children: [
      {path: '', component: DashboardComponent},
      {path: 'shop', component: ShopComponent},
      {path: 'detail/:id', component: DetailComponent},
      {path: 'cart', component: CartComponent},
      {path: 'login', component: LoginComponent},
      {path: 'register', component: RegisterComponent},
      {path: 'cart', component: CartComponent},
      {path: 'my-customer/:id', component: MyCustomerComponent},
      {path: 'checkout', component: OrderComponent, canActivate:[AuthGuardService]},
      { path: 'logout', component: LoginComponent },
      {path: 'success', component: SuccessComponent},
      {path: 'order-history/:id', component: OrderHistoryComponent},
      {path: 'coupon', component: CouponComponent},
    ]}
  ];
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class HomeRoutingModule { }