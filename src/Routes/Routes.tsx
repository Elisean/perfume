import { HomePage } from "../Pages/Home-page";
// import { UserPage } from "../PagesApp/User-page/User-page";
// import { BasketPage } from "../PagesApp/Basket-page/Basket-page";
import { Route, Routes } from "react-router-dom";
import { useState, createContext } from "react";




export const FiltersContext = createContext<any>('');

export const AppRoutes: React.FC = () => {

    const [filtersOpen, setFiltersOpen] = useState(false);

    return (
        <FiltersContext.Provider value={{filtersOpen, setFiltersOpen}}>
        <Routes>
            <Route element={<HomePage/>}  path="/perfume" />
            {/* <Route element={<UserPage/>}  path="/user" />
            <Route element={<BasketPage/>} path="/Basket"/> */}
        </Routes>  
        </FiltersContext.Provider>
    );
}