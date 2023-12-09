import { HomePage } from "../Pages/Home-page";
import { UserPage } from "../Pages/User-page";
import { BasketPage } from "../Pages/Basket-page";
import { BonusesPage } from "../Pages/Bonuses-page";
import { AboutUsPage } from "../Pages/About-us-page";
import { DocumentationPage } from "../Pages/Documentation-page";
import { Route, Routes } from "react-router-dom";
import { useState, createContext } from "react";
import { NotFoundPage } from "../Pages/NotFoundPage";



export const FiltersContext = createContext<any>('');

export const AppRoutes: React.FC = () => {

    const [filtersOpen, setFiltersOpen] = useState(false);

    return (
             <FiltersContext.Provider value={{filtersOpen, setFiltersOpen}}>
            <Routes>
                <Route element={<HomePage/>}  path="/perfume" />
                <Route element={<UserPage/>}  path="/user" />
                <Route element={<BasketPage/>} path="/basket"/>
                <Route element={<BonusesPage/>} path="/bonuses"/>
                <Route element={<AboutUsPage/>} path="/aboutUs"/>
                <Route element={<DocumentationPage/>} path="/documentation"/>
                <Route element={<NotFoundPage/>} path="*"/>
            </Routes>  
            </FiltersContext.Provider>
    );
}