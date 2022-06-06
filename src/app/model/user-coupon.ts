import { Coupon } from "./coupon";
import { Customer } from "./customer";

export class UserCoupon {
    id!: number;
    cus!:Customer;
    cou!: Coupon;
    status!: number;
    created_at!: Date;
}