import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export default function ActualizarProveedor() {
    const {id_proveedor} = useParams();
    console.log(id_proveedor);

    const [proveedor, setProveedor] = useState({});

    const obtenerProveedorById = () => {
        axios.get(`http://localhost:8000/api/proveedorById/${id_proveedor}`).then((response) => {
            //console.log(response.data);
            setProveedor(response.data);
        }).catch((error) => {
            console.log(error);
        })
    }

    const handleData = (e) => {
        setProveedor({...proveedor, [e.target.name]:e.target.value});
    }

    useEffect(() => {
        obtenerProveedorById();
    }, [])

    const actualizarProveedor = (id) => {
        axios.put(`http://localhost:8000/api/actualizar_proveedor/${id}`, proveedor).then((response) => {
            console.log(response.data);
        }).catch((error) => {
            console.log(error);
        })
    }

    console.log(proveedor);

    return (
        <div className='container'>
            <label htmlFor="">Nombre Completo</label>
            <input type="text" className='form-control' name='nombre' value={proveedor.nombre} onChange={handleData}/>

            <label htmlFor="">Direccion</label>
            <input type="text" className='form-control' name='direccion' value={proveedor.direccion} onChange={handleData}/>

            <label htmlFor="">Telefono</label>
            <input type="number" className='form-control' name='telefono' value={proveedor.telefono} onChange={handleData}/>

            <label htmlFor="">Correo</label>
            <input type="text" className='form-control' name='correo' value={proveedor.correo} onChange={handleData}/>

            <button className='btn btn-dark mt-4' onClick={() => actualizarProveedor(proveedor.id)}>Actualizar Proveedor</button>
        </div>
    )
}
