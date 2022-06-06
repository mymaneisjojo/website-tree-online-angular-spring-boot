import { Coupon } from "./coupon";
import { Customer } from "./customer";
export class Order {
    id!: number;
    name!:String;
    email!:String;
   phone!:String;
   address!:String;
    note!:String;
    cus!:Customer;
    cou!: Coupon
    status!: number;
    created_at!: Date;
}