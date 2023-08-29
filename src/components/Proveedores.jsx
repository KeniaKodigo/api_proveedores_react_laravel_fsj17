import axios from 'axios';
import React, { useState, useEffect } from 'react'

//componente para proveedores activos
export default function Proveedores() {
    const [proveedores, setProveedores] = useState([]);

    //obtener todos los proveedores de la api de laravel
    const obtenerProveedoresActivos = () => {
        axios.get("http://localhost:8000/api/proveedores_activos").then((response) => {
            console.log(response.data.detalle);
            //actualizamos el arreglo con la informacion de los proveedores
            setProveedores(response.data.detalle);
        }).catch((error) => {
            console.log(error);
        })
    }

    //ejecutando la funcion obtenerProveedoresActivos()
    useEffect(() => {
        obtenerProveedoresActivos();
    }, [])

    return (
        <table className='table table-dark table-hover'>
            <thead>
                <tr>
                    <th>Nombre</th>
                    <th>Direccion</th>
                    <th>Telefono</th>
                    <th>Correo</th>
                    <th colSpan='2'>Acciones</th>
                </tr>
            </thead>
            <tbody>
                {
                    proveedores.map((proveedor, indice) => {
                        return (
                            <tr key={indice}>
                                <td>{proveedor.nombre}</td>
                                <td>{proveedor.direccion}</td>
                                <td>{proveedor.telefono}</td>
                                <td>{proveedor.correo}</td>
                                <td>
                                    <button className='btn btn-warning'>Editar</button>
                                </td>
                                <td>
                                    <button className='btn btn-danger'>Desactivar</button>
                                </td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    )
}
