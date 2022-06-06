import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ShopComponent } from './shop/shop.component';
import { DetailComponent } from './detail/detail.component';
import { CartComponent } from './cart/cart.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OrderComponent } from './order/order.component';
import { SuccessComponent } from './success/success.component';
import { MyCustomerComponent } from './my-customer/my-customer.component';
import { OrderHistoryComponent } from './order-history/order-history.component';
import { CouponComponent } from './coupon/coupon.component';




@NgModule({
  declarations: [  
    DashboardComponent,
       ShopComponent,
       DetailComponent,
       CartComponent,
       LoginComponent,
       RegisterComponent,
       OrderComponent,
       SuccessComponent,
       MyCustomerComponent,
       OrderHistoryComponent,
       CouponComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class HomeModule { }
