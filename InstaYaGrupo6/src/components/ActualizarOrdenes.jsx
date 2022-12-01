import { useState, useEffect } from 'react';
import '../App.css'
import Axios from 'axios';
import { NavbarOrdenes } from './NavbarOrdenes';
import {useSearchParams } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

export function ActualizarOrdenes() {
    const navigate = useNavigate();
    const [datosOrden, setDatosOrden] = useState({
        fecha: "",
        hora: "",
        ancho: "",
        largo: "",
        alto: "",
        peso: "",
        direccionRecogida: "",
        ciudadRecogida: "",
        nombreDestinatario: "",
        numIdentificacionDestinatario: "",
        direccionEntrega: "",
        ciudadEntrega: "",
        estado: "",
    });
    const [searchParams, setSearchParams] = useSearchParams();

    useEffect(()=>
    {
        const url = "http://localhost:9000/api/orders/id";
        const config = {
            "Content-Type": "application/json",
            "Accept": "application/json",
        };

        const data = {
            id:searchParams.get("id")
        }
        console.log(data)
        Axios.post(url,data,config)
        .then((res) =>{
            console.log(res);
            if (res.status === 200) {
                setDatosOrden(res.data);
            }
            else{
            alert("Ocurrio un error");
            }
            
        });
    },[setDatosOrden]);

    function handleChange(evt){
        const { target } = evt;
        const { name, value } = target;
    
        const newValues = {
            ...datosOrden,
            [name]: value, 
        };
    
        setDatosOrden(newValues);
    }

    function handleSubmit(evt){
        const url = "http://localhost:9000/api/orders/update"; 

        const config = {
            headers:{
                "Access-Control-Allow-Origin":"*",
                "Content-Type": "application/json",
                "Accept": "application/json",
            }
        };        

        const data = {
            fecha: datosOrden.fecha,
            hora: datosOrden.hora,
            ancho: datosOrden.ancho,
            largo: datosOrden.largo,
            alto: datosOrden.alto,
            peso: datosOrden.peso,
            direccionRecogida: datosOrden.direccionRecogida,
            ciudadRecogida: datosOrden.ciudadRecogida,
            nombreDestinatario: datosOrden.nombreDestinatario,
            numIdentificacionDestinatario: datosOrden.numIdentificacionDestinatario,
            direccionEntrega: datosOrden.direccionEntrega,
            ciudadEntrega: datosOrden.ciudadEntrega,
            estado:datosOrden.estado,
        };
        console.log(data)
        Axios.post(url,data,config)
        .then((res) =>{
            console.log(res)
            if (res.status === 200 && res.data.message === undefined) {
                alert("Orden actualizada con exito. ")
                navigate("/ListaOrdenes");
            }else{
                alert(res.data.message);
            }
        }).catch((err) =>{console.log(err)});
        evt.preventDefault();
    }


    return (
    <>
        <NavbarOrdenes/>
        <section className="bg-white rounded-bottom p-5 h-auto">
            <div className="container-fluid">
                <h2 className="text-blue-dark text-center fs-3">Actualizar orden</h2>
                <form className="px-5"  method='POST' onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <div className="row">
                            <div className="col">
                                <label htmlFor="fecha" className="form-label">Fecha</label>
                                <input type="date" className="form-control" id="fecha" name='fecha' value={datosOrden.fecha.split('T')[0] || ''} onChange={handleChange}/>
                            </div>
                            <div className="col">
                                <label htmlFor="hora" className="form-label">Hora</label>
                                <input type="time" className="form-control" id="hora" name='hora' value={datosOrden.hora || ''} onChange={handleChange}/>
                            </div>   
                        </div> 
                    </div>
                    <div className="mb-3">
                        <label htmlFor="estado" className="form-label">Estado</label>
                        <select className="form-select" aria-label="Default select example" name='estado' value={datosOrden.estado || ''} onChange={handleChange}>
                            <option>Seleccionar</option>
                            <option value="guardado">Guardado</option>
                            <option value="cancelado" >Cancelado</option>
                            <option value="cumplido">Cumplido</option>
                        </select>
                    </div>
                    <div className="mb-3">
                        <div className="row">
                            <div className="col">
                                <label htmlFor="ancho" className="form-label">Ancho</label>
                                <input type="text" className="form-control" id="ancho" name='ancho' value={datosOrden.ancho || ''} onChange={handleChange}/>
                            </div>
                            <div className="col">
                                <label htmlFor="largo" className="form-label">Largo</label>
                                <input type="text" className="form-control" id="largo" name='largo' value={datosOrden.largo || ''} onChange={handleChange}/>
                            </div>
                            <div className="col">
                                <label htmlFor="alto" className="form-label">Alto</label>
                                <input type="text" className="form-control" id="alto" name='alto' value={datosOrden.alto || ''} onChange={handleChange}/>
                            </div>
                            <div className="col">
                                <label htmlFor="peso" className="form-label">Peso</label>
                                <input type="text" className="form-control" id="peso" name='peso' value={datosOrden.peso || ''} onChange={handleChange}/>
                            </div>
                        </div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="direccionrecogida" className="form-label">Direccion recogida</label>
                        <input type="text" className="form-control" id="direccionrecogida" name='direccionRecogida' value={datosOrden.direccionRecogida || ''} onChange={handleChange}/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="ciudadrecogida" className="form-label">Ciudad recogida</label>
                        <input type="text" className="form-control" id="ciudadrecogida" name='ciudadRecogida' value={datosOrden.ciudadRecogida || ''} onChange={handleChange}/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="nombresdestinatario" className="form-label">Nombre destinatario</label>
                        <input type="text" className="form-control" id="nombresdestinatario" name='nombreDestinatario' value={datosOrden.nombreDestinatario || ''} onChange={handleChange}/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="nitdestinatario" className="form-label">Cedula/NIT destinatario</label>
                        <input type="text" className="form-control" id="nitdestinatario" name='numIdentificacionDestinatario' value={datosOrden.numIdentificacionDestinatario || ''} onChange={handleChange}/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="direccionentrega" className="form-label">Direccion entrega</label>
                        <input type="text" className="form-control" id="direccionentrega" name='direccionEntrega' value={datosOrden.direccionEntrega || ''} onChange={handleChange}/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="ciudadentrega" className="form-label">Ciudad entrega</label>
                        <input type="text" className="form-control" id="ciudadentrega" name='ciudadEntrega' value={datosOrden.ciudadEntrega || ''} onChange={handleChange}/>
                    </div>
                    <div className="row justify-content-center">
                        <button type="submit" className="btn btn-primary w-50 m-3">Actualizar orden</button>
                    </div>
                </form>
            </div>
        </section>
    </>
    );
}