import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { AdminComponent } from './admin.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ListProductComponent } from './components/product/list-product/list-product.component';
import { ListCategoryComponent } from './components/category/list-category/list-category.component';
import { AddCategoryComponent } from './components/category/add-category/add-category.component';
import { AddProductComponent } from './components/product/add-product/add-product.component';
import { UpdateCategoryComponent } from './components/category/update-category/update-category.component';
import { AuthGuardService } from '../service/auth-guard.service';
import { DetailProductComponent } from './components/product/detail-product/detail-product.component';
import { UpdateProductComponent } from './components/product/update-product/update-product.component';
import { CustomerComponent } from './components/customer/customer.component';
import { CommentComponent } from './components/comment/comment.component';
import { OrderComponent } from './components/order/order.component';
import { ListCouponComponent } from './components/coupon/list-coupon/list-coupon.component';
import { AddCouponComponent } from './components/coupon/add-coupon/add-coupon.component';
import { OrderDetailComponent } from './components/order/order-detail/order-detail.component';
import { UpdateCouponComponent } from './components/coupon/update-coupon/update-coupon.component';



const routes: Routes = [
  {path: 'login' ,component: LoginComponent },
  {path:'', component: AdminComponent, children: [
    {path:'', component: DashboardComponent},
    {path:'category-list', component: ListCategoryComponent},
    {path:'category-add', component: AddCategoryComponent},
    {path:'category-update/:id', component: UpdateCategoryComponent},
    {path:'category-delete/:id', component: ListCategoryComponent},
    {path:'product-list', component: ListProductComponent},
    {path:'product-add', component: AddProductComponent},
    {path:'product-detail/:id', component: DetailProductComponent},
    {path:'product-update/:id', component: UpdateProductComponent},
    {path:'product-delete/:id', component: ListProductComponent},
    {path:'customer-list', component: CustomerComponent},
    {path:'comment-list', component: CommentComponent},
    {path:'comment-update/:id', component: CommentComponent},
    {path:'order-list', component: OrderComponent},
    {path:'detail/:id', component: OrderDetailComponent},
    {path:'coupon-list', component: ListCouponComponent},
    {path:'coupon-add', component: AddCouponComponent},
    {path:'coupon-update/:id', component: UpdateCouponComponent},
  
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
