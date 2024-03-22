import { observable, action, makeAutoObservable } from 'mobx';
import { createContext } from "react";


class SortingStore {
    
  @observable sortingProduct: any[] = [];
 
  constructor() {
    makeAutoObservable(this);
  }

  @action priceDescending = (sortMethod: any) => {
    // сортировка от того что придет в sortMethod
    switch (sortMethod) {

      case 'Цена по возрастанию':
        fetch(
          'https://64e6020b09e64530d17f6dd0.mockapi.io/Flavors?sortBy=price'
        )
          .then((res) => res.json())
          .then((data) => {
            this.sortingProduct = data;      
            
          });
        break;

      case 'Цена по убыванию':
        fetch(
          'https://64e6020b09e64530d17f6dd0.mockapi.io/Flavors?sortBy=price&order=desc'
        )
          .then((res) => res.json())
          .then((data) => {
            data.sort((a:any, b:any) => b.price - a.price); // сортируем данные в обратном порядке
            this.sortingProduct = data;      
          });
        break;

        case 'Сортировка от последнего':
        fetch(
          'https://64e6020b09e64530d17f6dd0.mockapi.io/Flavors?'
        )
          .then((res) => res.json())
          .then((data) => {
            data.sort((a:any, b:any) => b.id - a.id); // сортируем данные в обратном порядке
            this.sortingProduct = data;      
          });
        break;

        case 'По рейтингу':
            fetch(
              'https://64e6020b09e64530d17f6dd0.mockapi.io/Flavors?'
            )
              .then((res) => res.json())
              .then((data) => {
                this.sortingProduct = data;      
              });
        break;

        case 'По популярности':
            fetch(
                'https://64e6020b09e64530d17f6dd0.mockapi.io/Flavors?'
            )
            .then((res) => res.json())
            .then((data) => {
                this.sortingProduct = data;      
                });
        break;
    }
      // сортировка от того что придет в sortMethod
  };
}

export default createContext(new SortingStore()) 
