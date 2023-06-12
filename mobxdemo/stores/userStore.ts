import { makeAutoObservable } from "mobx";


export default class UserStore{
    isLogin: boolean = false

    constructor(){
        makeAutoObservable(this);
    }

    login = (islogged: boolean)=>{
        this.isLogin = islogged
    }

    get isLoggedIn() {
        return this.isLogin;
    }
}