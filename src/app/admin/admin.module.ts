import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminComponent } from './admin.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ListProductComponent } from './components/product/list-product/list-product.component';
import { ListCategoryComponent } from './components/category/list-category/list-category.component';
import { AddCategoryComponent } from './components/category/add-category/add-category.component';
import { UpdateCategoryComponent } from './components/category/update-category/update-category.component';
import { AddProductComponent } from './components/product/add-product/add-product.component';
import { DetailProductComponent } from './components/product/detail-product/detail-product.component';
import { UpdateProductComponent } from './components/product/update-product/update-product.component';
import { CustomerComponent } from './components/customer/customer.component';
import { CommentComponent } from './components/comment/comment.component';
import { OrderComponent } from './components/order/order.component';
import { ListCouponComponent } from './components/coupon/list-coupon/list-coupon.component';
import { AddCouponComponent } from './components/coupon/add-coupon/add-coupon.component';
import { OrderDetailComponent } from './components/order/order-detail/order-detail.component';
import { UpdateCouponComponent } from './components/coupon/update-coupon/update-coupon.component';



@NgModule({
  declarations: [AdminComponent, 
    LoginComponent, 
    DashboardComponent, 
    ListProductComponent, 
    ListCategoryComponent, 
    AddCategoryComponent, 
    UpdateCategoryComponent, 
    AddProductComponent, 
    DetailProductComponent, 
    UpdateProductComponent, 
    CustomerComponent, 
    CommentComponent, 
    OrderComponent, 
    ListCouponComponent, 
    AddCouponComponent, 
    OrderDetailComponent, 
    UpdateCouponComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AdminComponent]
})
export class AdminModule { }
