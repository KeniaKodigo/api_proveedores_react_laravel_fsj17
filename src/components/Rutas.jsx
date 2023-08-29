import React from 'react'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from './Home';
import ActualizarProveedor from './ActualizarProveedor';

export default function Rutas() {
    return (
        <BrowserRouter>
            <nav>
                <ul>
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                </ul>
            </nav>

            <Routes>
                <Route path='/' element={<Home />}/>
                <Route path='/actualizarProveedor/:id_proveedor' element={<ActualizarProveedor />}/>
            </Routes>
        </BrowserRouter>
        
    )
}
