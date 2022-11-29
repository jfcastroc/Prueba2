import '../App.css'
import { NavbarOrdenes } from './NavbarOrdenes';

export function ActualizarOrdenes() {
    return (
    <>
        <NavbarOrdenes/>
        <section className="bg-white rounded-bottom p-5 h-auto">
            <div className="container-fluid">
                <h2 className="text-blue-dark text-center fs-3">Actualizar orden</h2>
                <form className="px-5">
                    <div className="mb-3">
                        <div className="row">
                            <div className="col">
                                <label for="fecha" className="form-label">Fecha</label>
                                <input type="date" className="form-control" id="fecha"/>
                            </div>
                            <div className="col">
                                <label for="hora" className="form-label">Hora</label>
                                <input type="time" className="form-control" id="hora"/>
                            </div>   
                        </div> 
                    </div>
                    <div className="mb-3">
                        <label for="estado" className="form-label">Estado</label>
                        <select className="form-select" aria-label="Default select example">
                            <option selected>Open this select menu</option>
                            <option value="recogido">recogido</option>
                            <option value="Entransito" >En transito</option>
                            <option value="Entregado">Entregado</option>
                        </select>
                    </div>
                    <div className="mb-3">
                        <div className="row">
                            <div className="col">
                                <label for="ancho" className="form-label">Ancho</label>
                                <input type="text" className="form-control" id="ancho"/>
                            </div>
                            <div className="col">
                                <label for="largo" className="form-label">Largo</label>
                                <input type="text" className="form-control" id="largo"/>
                            </div>
                            <div className="col">
                                <label for="alto" className="form-label">Alto</label>
                                <input type="text" className="form-control" id="alto"/>
                            </div>
                            <div className="col">
                                <label for="peso" className="form-label">Peso</label>
                                <input type="text" className="form-control" id="peso"/>
                            </div>
                        </div>
                    </div>
                    <div className="mb-3">
                        <label for="direccionrecogida" className="form-label">Direccion recogida</label>
                        <input type="text" className="form-control" id="direccionrecogida"/>
                    </div>
                    <div className="mb-3">
                        <label for="ciudadrecogida" className="form-label">Ciudad recogida</label>
                        <input type="text" className="form-control" id="ciudadrecogida"/>
                    </div>
                    <div className="mb-3">
                        <label for="nombresdestinatario" className="form-label">Nombre destinatario</label>
                        <input type="text" className="form-control" id="nombresdestinatario"/>
                    </div>
                    <div className="mb-3">
                        <label for="nitdestinatario" className="form-label">Cedula/NIT destinatario</label>
                        <input type="text" className="form-control" id="nitdestinatario"/>
                    </div>
                    <div className="mb-3">
                        <label for="direccionentrega" className="form-label">Direccion entrega</label>
                        <input type="text" className="form-control" id="direccionentrega"/>
                    </div>
                    <div className="mb-3">
                        <label for="ciudadentrega" className="form-label">Ciudad entrega</label>
                        <input type="text" className="form-control" id="ciudadentrega"/>
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