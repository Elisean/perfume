import { makeAutoObservable } from "mobx";

class GlobalStore{

    isActive = false;

    constructor(){
        makeAutoObservable(this); 
    }
    setActive = (state:boolean) =>{
        this.isActive = state;
    }
}

export default GlobalStore;