import CartStore from './models/shopcart-store';
import UserStore from './models/user-store';

export default class RootStore {
    constructor() {
      this.cartStore = CartStore
      this.userStore = UserStore
    }
}