import { HomePage } from "../Pages/Home-page";
// import { UserPage } from "../PagesApp/User-page/User-page";
// import { BasketPage } from "../PagesApp/Basket-page/Basket-page";
import { Route, Routes } from "react-router-dom";


export const AppRoutes: React.FC = () => {
    return (
        <Routes>
            <Route element={<HomePage/>}  path="/perfume" />
            {/* <Route element={<UserPage/>}  path="/user" />
            <Route element={<BasketPage/>} path="/Basket"/> */}
        </Routes>  
    );
}