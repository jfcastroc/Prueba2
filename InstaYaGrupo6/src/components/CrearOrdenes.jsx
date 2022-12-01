import { useState } from 'react';
import '../App.css'
import { NavbarOrdenes } from './NavbarOrdenes';
import Axios from 'axios';
import { useNavigate } from "react-router-dom";

export function CrearOrdenes() {
    const navigate = useNavigate();
    const [orderInfo,setInfo] = useState({
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
        estado: "Guardado",
    });
    function handleChange(evt){
        const { target } = evt;
        const { name, value } = target;
    
        const newValues = {
            ...orderInfo,
            [name]: value, 
        };
    
        setInfo(newValues);
    }

    function handleSubmit(evt){
        const url = "http://localhost:9000/api/orders"; 

        const config = {
            headers:{
                "Access-Control-Allow-Origin":"*",
                "Content-Type": "application/json",
                "Accept": "application/json",
            }
        };        

        const data = {
            fecha: orderInfo.fecha,
            hora: orderInfo.hora,
            ancho: orderInfo.ancho,
            largo: orderInfo.largo,
            alto: orderInfo.alto,
            peso: orderInfo.peso,
            direccionRecogida: orderInfo.direccionRecogida,
            ciudadRecogida: orderInfo.ciudadRecogida,
            nombreDestinatario: orderInfo.nombreDestinatario,
            numIdentificacionDestinatario: orderInfo.numIdentificacionDestinatario,
            direccionEntrega: orderInfo.direccionEntrega,
            ciudadEntrega: orderInfo.ciudadEntrega,
            estado:"Creado",
            
        };

        Axios.post(url,data,config)
        .then((res) =>{
            console.log(res)
            if (res.status === 200 && res.data.message === undefined) {
                alert("Orden creada con exito. ")
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
                <h2 className="text-blue-dark text-center fs-3">Crear orden</h2>
                <form className="px-5" method='POST' onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <div className="row">
                            <div className="col">
                                <label for="fecha" className="form-label">Fecha</label>
                                <input type="date" className="form-control" id="fecha" name='fecha' value={orderInfo.fecha} onChange={handleChange} required/>
                            </div>
                            <div className="col">
                                <label for="hora" className="form-label">Hora</label>
                                <input type="time" className="form-control" id="hora" name='hora' value={orderInfo.hora} onChange={handleChange} required/>
                            </div>   
                        </div> 
                    </div>
                    <div className="mb-3">
                        <div className="row">
                            <div className="col">
                                <label for="ancho" className="form-label">Ancho</label>
                                <input type="text" className="form-control" id="ancho" name='ancho' value={orderInfo.ancho} onChange={handleChange} required/>
                                
                       
                            </div>
                            <div className="col">
                                <label for="largo" className="form-label">Largo</label>
                                <input type="text" className="form-control" id="largo" name='largo' value={orderInfo.largo} onChange={handleChange} required/>
                            </div>
                            <div className="col">
                                <label for="alto" className="form-label">Alto</label>
                                <input type="text" className="form-control" id="alto" name='alto' value={orderInfo.alto} onChange={handleChange} required/>
                            </div>
                            <div className="col">
                                <label for="peso" className="form-label">Peso</label>
                                <input type="text" className="form-control" id="peso" name='peso' value={orderInfo.peso} onChange={handleChange} required/>
                            </div>
                        </div>
                    </div>
                    <div className="mb-3">
                        <label for="direccionrecogida" className="form-label">Direccion recogida</label>
                        <input type="text" className="form-control" id="direccionRecogida" name='direccionRecogida' value={orderInfo.direccionRecogida} onChange={handleChange} required/>
                    </div>
                    <div className="mb-3">
                        <label for="ciudadrecogida" className="form-label">Ciudad recogida</label>
                        <input type="text" className="form-control" id="ciudadRecogida" name='ciudadRecogida' value={orderInfo.ciudadRecogida} onChange={handleChange} required/>
                    </div>
                    <div className="mb-3">
                        <label for="nombresdestinatario" className="form-label">Nombre destinatario</label>
                        <input type="text" className="form-control" id="nombreDestinatario" name='nombreDestinatario' value={orderInfo.nombreDestinatario} onChange={handleChange} required/>
                    </div>
                    <div className="mb-3">
                        <label for="nitdestinatario" className="form-label">Cedula/NIT destinatario</label>
                        <input type="text" className="form-control" id="numIdentificacionDestinatario" name='numIdentificacionDestinatario' value={orderInfo.numIdentificacionDestinatario} onChange={handleChange} required/>
                    </div>
                    <div className="mb-3">
                        <label for="direccionentrega" className="form-label">Direccion entrega</label>
                        <input type="text" className="form-control" id="direccionEntrega" name='direccionEntrega' value={orderInfo.direccionEntrega} onChange={handleChange} required/>
                    </div>
                    <div className="mb-3">
                        <label for="ciudadentrega" className="form-label">Ciudad entrega</label>
                        <input type="text" className="form-control" id="ciudadEntrega" name='ciudadEntrega' value={orderInfo.ciudadEntrega} onChange={handleChange} required/>
                    </div>
                    <div className="row justify-content-center">
                        <button type="submit" className="btn btn-primary w-50 m-3">Crear orden</button>
                    </div>
                </form>
            </div>
        </section>
    </>
    );
}