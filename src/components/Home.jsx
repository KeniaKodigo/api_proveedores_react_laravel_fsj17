import React from 'react'
import RegistrarProveedor from './RegistrarProveedor'
import Proveedores from './Proveedores'

export default function Home() {
    return (
        <div className="container">
          <h1 className="text-center text-primary my-5">CRUD DE PROVEEDORES</h1>
          <div className="row">
              <div className="col-md-4">
                <RegistrarProveedor />
              </div>
              <div className="col-md-8">
                <Proveedores />
              </div>
          </div>
      </div>
    )
}
