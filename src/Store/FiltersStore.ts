import { action, makeAutoObservable, observable } from "mobx";

import { createContext } from "react";


class FiltersStore {
    @observable searchProducts:any = []
    @observable isLoading:boolean = true
    @observable isFilters:boolean = false // предикат для смены состояния catalogLayout
    @observable brands:string = ''
    @observable price:string = ''
    @observable gender:string = ''
    @observable notes:string = ''

    constructor(){
        makeAutoObservable(this) 
    }
    @action setFilters = (filters:boolean) =>{
        this.isFilters = filters;
    }
   
    @action getPrice = (price:any) =>{
        this.price = price;
    }
    @action getGender = (gender:any) =>{
        this.gender = gender;
    }
    @action getNotes = (notes:any) =>{
        this.notes = notes;
    }
    @action getBrands = (brand:any) =>{
        this.brands = brand;
    }  

    @action filters = () => {
    if(this.isFilters === true){
        fetch(`https://64e6020b09e64530d17f6dd0.mockapi.io/Flavors?`)
            .then((res)=> res.json())
            .then((products) => this.searchProducts.push(products))
        }  
     
    }
   
}

export default createContext(new FiltersStore()) 

