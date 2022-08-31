import { Cart } from './Cart';
import { Address } from './Address';
export interface Order {
  Description : any;
    ReservationId : string;
}

export class Orders {
  id: string;
address : Address;
date: Date;
cart : Cart;
}