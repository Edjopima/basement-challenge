import { Product } from "../product/types";

export interface ShoppingCartItem {
  product:Product;
  quantity: number;
  size:string
}

export interface ShoppingCartItemProps {
  item:ShoppingCartItem;
  changeQuantity: (type:String , product:ShoppingCartItem)=>void;
}