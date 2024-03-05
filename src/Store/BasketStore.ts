import {action, makeAutoObservable, observable } from "mobx";
import { createContext } from "react";


class BasketStore {

    @observable cardsData = JSON.parse(localStorage.getItem("basketProduct") || '[]');
   
    
    constructor(){
        makeAutoObservable(this)
    }
    @action getCardsData(card:any){
        this.cardsData = card;
    }    
    @action deleteCard(id:string){
        console.log(id)    
        //  this.cardsData.splice(id, 1);
    }
    @action decrease(id:string, volume:number){

       let products = this.cardsData.map((product:any) => {
            return Number(product.volume)
    }).find((productVolume:number)=>{
       return productVolume === volume
    })
    
      
    }
    @action increase(volume:number){
     
    }
}

export default createContext(new BasketStore()) 