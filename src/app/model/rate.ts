import { Customer } from "./customer";
import { Product } from "./product";

export class Rate {
    id!: number;
    description! : string;
    star!: number;
    status!: number;
    pro!: Product;
    cus!: Customer;
    created_at!: Date;
}