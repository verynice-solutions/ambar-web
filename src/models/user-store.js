import { observable, computed } from "mobx"
class User{
  constructor(user){
    this.token = user.token
    this.data = user.user.data
  }
}
class UserStore {
    @observable currentUser = {}

    constructor() {
      let localUser = JSON.parse(localStorage.getItem("sessionUser"))
      localUser&&(this.currentUser = new User(localUser))
    }
    
    setUser (user){
      this.currentUser = new User(user)
    }

    removeUser() {
      this.currentUser = null
    }

    @computed get getCurrentUser() {
      return this.currentUser
    }
  }

let store = new UserStore()
export default store