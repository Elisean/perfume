import { HomePage } from "../Pages/Home-page";
import { RegistationPage } from "../Pages/Registration-page";
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
import { UserPage } from "../Pages/User-page";
import { UnisexCatalogPage } from "../Pages/UnisexCatalog-page";
import { ROUTES } from "../Utils/routes";
import { BonusesPanel } from "../Pages/Сontrol-panel/Bonuses-panel";
import { OrderPanel } from "../Pages/Сontrol-panel/Order-Panel";
import { DownloadsPanel } from "../Pages/Сontrol-panel/Downloads-panel";
import { LocationPanel } from "../Pages/Сontrol-panel/Location-panel";
import { UserPanel } from "../Pages/Сontrol-panel/User-panel";


export const FiltersContext = createContext<any>('');

export const App:React.FC = () => {
  const [filtersOpen, setFiltersOpen] = useState(false);
  
  

  return (
    <>
      <div className='app'>
            <FiltersContext.Provider value={{filtersOpen, setFiltersOpen}}>
              <Routes>
                  <Route element={<HomePage />}  path={ROUTES.HOME} />
                  <Route element={<RegistationPage/>}  path={ROUTES.REGISTRATION} />
                  <Route element={<BasketPage/>} path={ROUTES.BASKET}/>
                  <Route element={<BonusesPage/>} path={ROUTES.BONUSES}/>
                  <Route element={<AboutUsPage/>} path={ROUTES.ABOUTUS}/>
                  <Route element={<DocumentationPage/>} path={ROUTES.DOCUMENTATION}/>
                  <Route element={<ManCatalogPage />} path={ROUTES.MANCATALOGPAGE}/>
                  <Route element={<WomenCatalogPage />} path={ROUTES.WOMENCATALOGPAGE}/>
                  <Route element={<UnisexCatalogPage />} path={ROUTES.UNISEX}/>
                  <Route element={<UserPage/>} path={ROUTES.USERPAGE}/>
                  <Route element={<OrderPanel/>} path={ROUTES.ORDERPANEL}/>
                  <Route element={<BonusesPanel/>} path={ROUTES.BONUSESPANEL}/>
                  <Route element={<DownloadsPanel/>} path={ROUTES.DOWNLOADSPANEL}/>
                  <Route element={<LocationPanel/>} path={ROUTES.LOCATIONPANEL}/>
                  <Route element={<UserPanel/>} path={ROUTES.USERPANEL}/>
                  <Route element={<SingleProduct/>} path={ROUTES.HOME + ROUTES.SINGLEPRODUCT + ':id/'}/>
                  <Route element={<NotFoundPage/>} path={ROUTES.NOTFOUNDPAGE} />
              </Routes>  
            </FiltersContext.Provider>
      </div>
    </>

  );
}


