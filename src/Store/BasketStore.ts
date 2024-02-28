import {makeAutoObservable, observable } from "mobx";
import { createContext } from "react";


class BasketStore {

    @observable cardsData = JSON.parse(localStorage.getItem("basketProduct") || '[]');

    constructor(){
        makeAutoObservable(this)
    }

        getCardsData(card:any){
            this.cardsData = card;
         }
   
    
    
}

export default createContext(new BasketStore()) 