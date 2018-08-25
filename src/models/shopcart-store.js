import { observable, computed } from "mobx"

class Item{
  constructor(id, name, qty){
    this.id = id
    this.name = name
    this.quantity = qty
    this.price = 0.0
  }
}

class ShopcartStore {
    @observable items = []
    
    addItem (id, name, qty){
      this.items.push(new Item(id, name, qty))
    }

    @computed get allItems() {
      return this.items.filter(item => item)
    }
  }

let store = new ShopcartStore()
export default store