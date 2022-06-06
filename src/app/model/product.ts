import { Category } from "./category";

export class Product {
    id!: number;
    name! : string;
    quantity!: number;
    cat!: Category;
    description!: string;
    price!: number;
    sale_price!: number;
    image!: string;
    status!: number;
    created_at!: Date;
}
