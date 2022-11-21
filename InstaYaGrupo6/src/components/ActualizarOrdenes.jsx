import '../App.css'
export function ActualizarOrdenes() {
    return (
    <>
    <nav class="navbar navbar-expand-lg navbar-dark bg-blue-dark rounded-top pt-1 pb-0">
        <div class="container-fluid">
            <div class="row">
                <div class="col-3">
                    <div class="row">
                        <div class="col-12">
                            <img src="../Images/Logo.png" alt="Logo" class="w-100"/>
                        </div>
                        <div class="col-12 text-center">
                            <h5 class="text-blue fs-6">Gestión de paquetes</h5>
                        </div>
                    </div>
                </div>
                <div class="col-5"></div>
                <div class="col-4 ">
                    <ul class="navbar-nav me-auto navbar-text mt-2  justify-content-end ">
                        <li class="nav-item">
                          <a class="nav-link" href="#">Cerrar sesion</a>
                        </li>
                      </ul>
                </div>
            </div>
            
        </div>
    </nav>
    <section class="bg-white rounded-bottom p-5 h-auto">
        <div class="container-fluid">
            <h2 class="text-blue-dark text-center fs-3">Actualizar orden</h2>
            <form class="px-5">
                <div class="mb-3">
                    <div class="row">
                        <div class="col">
                            <label for="fecha" class="form-label">Fecha</label>
                            <input type="date" class="form-control" id="fecha"/>
                        </div>
                        <div class="col">
                            <label for="hora" class="form-label">Hora</label>
                            <input type="time" class="form-control" id="hora"/>
                        </div>   
                    </div> 
                </div>
                <div class="mb-3">
                    <label for="estado" class="form-label">Estado</label>
                    <select class="form-select" aria-label="Default select example">
                        <option selected>Open this select menu</option>
                        <option value="recogido">recogido</option>
                        <option value="Entransito" >En transito</option>
                        <option value="Entregado">Entregado</option>
                      </select>
                </div>
                <div class="mb-3">
                    <div class="row">
                        <div class="col">
                            <label for="ancho" class="form-label">Ancho</label>
                            <input type="text" class="form-control" id="ancho"/>
                        </div>
                        <div class="col">
                            <label for="largo" class="form-label">Largo</label>
                            <input type="text" class="form-control" id="largo"/>
                        </div>
                        <div class="col">
                            <label for="alto" class="form-label">Alto</label>
                            <input type="text" class="form-control" id="alto"/>
                        </div>
                        <div class="col">
                            <label for="peso" class="form-label">Peso</label>
                            <input type="text" class="form-control" id="peso"/>
                        </div>
                      </div>
                </div>
                <div class="mb-3">
                    <label for="direccionrecogida" class="form-label">Direccion recogida</label>
                    <input type="text" class="form-control" id="direccionrecogida"/>
                </div>
                <div class="mb-3">
                    <label for="ciudadrecogida" class="form-label">Ciudad recogida</label>
                    <input type="text" class="form-control" id="ciudadrecogida"/>
                </div>
                <div class="mb-3">
                    <label for="nombresdestinatario" class="form-label">Nombre destinatario</label>
                    <input type="text" class="form-control" id="nombresdestinatario"/>
                </div>
                <div class="mb-3">
                    <label for="nitdestinatario" class="form-label">Cedula/NIT destinatario</label>
                    <input type="text" class="form-control" id="nitdestinatario"/>
                </div>
                <div class="mb-3">
                    <label for="direccionentrega" class="form-label">Direccion entrega</label>
                    <input type="text" class="form-control" id="direccionentrega"/>
                </div>
                <div class="mb-3">
                    <label for="ciudadentrega" class="form-label">Ciudad entrega</label>
                    <input type="text" class="form-control" id="ciudadentrega"/>
                </div>
                <div class="row justify-content-center">
                    <button type="submit" class="btn btn-primary w-50 m-3">Actualizar orden</button>
                </div>
            </form>
        </div>
    </section>
    </>
    );
}