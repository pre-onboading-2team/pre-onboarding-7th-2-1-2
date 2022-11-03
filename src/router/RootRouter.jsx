import React from "react";
import {ROUTER} from "./routes";
import CarList from "../pages/CarList";
import CarDetail from "../pages/CarDetail";
import {BrowserRouter, Route, Router, Routes} from "react-router-dom";
function RootRouter() {
    const ListRoutes = [
        {
            path: ROUTER.CAR_INFO,
            component: <CarList />,
        },
        {
            path: ROUTER.CAR_DETAIL,
            component: <CarDetail />,
        }
    ];

    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<CarList />} />
                {ListRoutes.map((page, index) => {
                    return (
                        <Route key={'route' + index} path={page.path} element={page.component}/>
                    );
                })}
            </Routes>
        </BrowserRouter>
    )
}

export default RootRouter;
