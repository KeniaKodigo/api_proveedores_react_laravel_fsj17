import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';

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

    const desactivarProveedor = (id) => {
        console.log(id);
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
                axios.put(`http://localhost:8000/api/desactivar_proveedor/${id}`).then((response) => {
                    console.log(response.data)
                }).catch((error) => {
                    console.log(error);
                })
                
                Swal.fire(
                    'Deleted!',
                    'Your file has been deleted.',
                    'success'
                )
            }
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
                                    <Link to={`/actualizarProveedor/${proveedor.id}`} className='btn btn-warning'>Editar</Link>
                                </td>
                                <td>
                                    <button className='btn btn-danger' onClick={() => desactivarProveedor(proveedor.id)}>Desactivar</button>
                                </td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    )
}
