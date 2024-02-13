import {makeAutoObservable, observable } from "mobx";
import { createContext } from "react";


class Store {
    checked:boolean = false;
    @observable value:any = "";
    @observable brand:any = "";
    @observable notes: any = "";
    @observable prices: any = "";

    constructor(){
        makeAutoObservable(this) 
    }
    
    checkedChange(){
        this.checked = !this.checked
    }

    getValue(value:any){
        if(!this.checked){
            this.value = value;
        }else{
            this.value = '';
        }
    }
    getBrands(brand:any){
        this.brand = brand;
    }
    
}

export default createContext(new Store()) 

