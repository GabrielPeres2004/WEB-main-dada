import { Routes, Route, Navigate } from "react-router-dom";

import { Home } from "../pages/Home";
import { Preview } from '../pages/preview'

export function AppRoutes(){
    return(
        <Routes>
            <Route path="/" element={ <Home/> }  />
            <Route path="/preview" element={ <Preview/> }  />

        </Routes>

    )
}