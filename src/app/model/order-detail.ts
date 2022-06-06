import { Order } from "./order";
import { Product } from "./product";

export class OrderDetail {
    id!: number;
    price!:number;
    quantity!:number;
    coupon!:string;
    ord!: Order;
    pro!: Product;
   
    
}