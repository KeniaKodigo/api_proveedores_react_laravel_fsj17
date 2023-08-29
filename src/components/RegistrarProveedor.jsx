import axios from 'axios';
import React from 'react'
import { useForm } from 'react-hook-form'

export default function RegistrarProveedor() {
    const { register, handleSubmit, formState: { errors } } = useForm();

    /**
     * register: metodo que se encarga de capturar lo que la persona ingrese
     * handleSubmit: accion del formulario
     * formState: validar errores
     */
    const registrarProveedor = (data) => {
        console.log(data);
        //axios.post
        axios.post('http://localhost:8000/api/registrar_proveedor', data).then((response) => {
            console.log(response.data);
        }).catch((error) => {
            console.log(error);
        })
    }

    return (
        <div>
            <form action="" onSubmit={handleSubmit(registrarProveedor)}>
                <label htmlFor="">Nombre Completo</label>
                <input type="text" className='form-control' {...register('nombre')}/>

                <label htmlFor="">Direccion</label>
                <input type="text" className='form-control' {...register('direccion')}/>

                <label htmlFor="">Telefono</label>
                <input type="number" className='form-control' {...register('telefono')}/>

                <label htmlFor="">Correo</label>
                <input type="text" className='form-control' {...register('correo')}/>

                <input type="submit" className='btn btn-success mt-4' value='Registrar'/>
            </form>
        </div>
    )
}
