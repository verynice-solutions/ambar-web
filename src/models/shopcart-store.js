import { observable, computed } from "mobx"

class Item{
  constructor(item){
    this.item = item
  }
}

class ShopcartStore {
    @observable items = []
    
    addItem (item){
      this.items.push(new Item(item))
    }

    @computed get allItems() {
      return this.items.filter(item => item)
    }
  }

let store = new ShopcartStore()
export default store