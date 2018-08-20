import CartStore from './models/shopcart-store';

export default class RootStore {
    constructor() {
      this.cartStore = new CartStore(this)
    }
}