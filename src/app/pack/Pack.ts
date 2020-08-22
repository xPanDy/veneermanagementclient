import {Item} from "../item/Item";
import {User} from "../user/user";
import {Machine} from "../machine/Machine";

export class Pack {

  id: number;
  created:string;
  quantity: number;
  volume:number;
  user:User;

  machine:Machine;
  // user_id:number;
  // item_id:number;
  // fs_p_machine_id:number;
  fs_p_is_active:boolean;
  item: Item;

  constructor() {
  }
}
