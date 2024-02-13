import { HomePage } from "../Pages/Home-page";
import { UserPage } from "../Pages/User-page";
import { BasketPage } from "../Pages/Basket-page";
import { BonusesPage } from "../Pages/Bonuses-page";
import { AboutUsPage } from "../Pages/About-us-page";
import { DocumentationPage } from "../Pages/Documentation-page";
import { Route, Routes } from "react-router-dom";
import { useState, createContext } from "react";
import { NotFoundPage } from "../Pages/NotFoundPage";
import { ManCatalogPage } from "../Pages/ManCatalog-page";
import { WomenCatalogPage } from "../Pages/WomenCatalog-page";
import { SingleProduct } from "../Pages/SingleProduct";
import { UnisexCatalogPage } from "../Pages/UnisexCatalog-page";
import { ROUTES } from "../Utils/routes";


export const FiltersContext = createContext<any>('');

export const App:React.FC = () => {
  const [filtersOpen, setFiltersOpen] = useState(false);
  
  

  return (
    <>
      <div className='app'>
            <FiltersContext.Provider value={{filtersOpen, setFiltersOpen}}>
              <Routes>
                  <Route element={<HomePage />}  path={ROUTES.HOME} />
                  <Route element={<UserPage/>}  path={ROUTES.USER} />
                  <Route element={<BasketPage/>} path={ROUTES.BASKET}/>
                  <Route element={<BonusesPage/>} path={ROUTES.BONUSES}/>
                  <Route element={<AboutUsPage/>} path={ROUTES.ABOUTUS}/>
                  <Route element={<DocumentationPage/>} path={ROUTES.DOCUMENTATION}/>
                  <Route element={<ManCatalogPage />} path={ROUTES.MANCATALOGPAGE}/>
                  <Route element={<WomenCatalogPage />} path={ROUTES.WOMENCATALOGPAGE}/>
                  <Route element={<UnisexCatalogPage />} path={ROUTES.UNISEX}/>
                  <Route element={<SingleProduct/>} path={ROUTES.HOME + ROUTES.SINGLEPRODUCT + ':id/'}/>
                  <Route element={<NotFoundPage/>} path="*"/>
              </Routes>  
            </FiltersContext.Provider>
      </div>
    </>

  );
}


