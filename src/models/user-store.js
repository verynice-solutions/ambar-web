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
      if(this.session()) {
        console.log(localUser)
        localUser&&(this.currentUser = new User(localUser))
      }
    }
    
    setUser (user){
      this.currentUser = new User(user)
    }

    removeUser() {
      localStorage.removeItem("sessionUser");
      this.currentUser = null
    } 

    session() {
      let localUser = JSON.parse(localStorage.getItem("sessionUser"))
      if(localUser) {
        return true
      }else {
        return false
      }
    }

    @computed get getCurrentUser() {
      return this.currentUser
    }
  }

let store = new UserStore()
export default store