import '../App.css'
export function ListaOrdenes() {
    return (
    <>
    <nav class="navbar navbar-expand-lg navbar-dark bg-blue-dark rounded-top pt-1 pb-0">
        <div class="container-fluid">
            <div class="row">
                <div class="col-3">
                    <div class="row">
                        <div class="col-12">
                            <img src="../images/Logo.png" alt="Logo" class="w-100"/>
                        </div>
                        <div class="col-12 text-center">
                            <h5 class="text-blue fs-6">Gestión de paquetes</h5>
                        </div>
                    </div>
                </div>
                <div class="col-5"></div>
                <div class="col-4">
                    <ul class="navbar-nav me-auto navbar-text mt-2">
                        <li class="nav-item mr-3">
                          <a class="nav-link active" aria-current="page" href="#">Listado de órdenes</a>
                        </li>
                        <li class="nav-item">
                          <a class="nav-link" href="#">Crear orden</a>
                        </li>
                      </ul>
                </div>
            </div>
            
        </div>
    </nav>
    <section class="bg-white rounded-bottom p-3">
        <div class="container">
            <h2 class="text-blue-dark text-center fs-2">Listado de órdenes</h2>
            <div class="row justify-content-start my-4">
                <button class="btn btn-outline-primary w-auto"> <i class="bi bi-file-earmark-plus"></i> Ingresar nueva orden</button>
            </div>
            <div>
                <table class="table table-striped">
                    <thead>
                      <tr>
                        <th scope="col"># Servicio</th>
                        <th scope="col">Fecha</th>
                        <th scope="col">Ciudad entrega</th>
                        <th scope="col">Dirección entrega</th>
                        <th scope="col">Estado</th>
                        <th scope="col">Editar</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th scope="row">1</th>
                        <td>05/09/2022</td>
                        <td>Bogotá D.C.</td>
                        <td>carrera 1 este # 5 - 24</td>
                        <td>Guardado</td>
                        <td><button class="btn btn-secondary"><i class="bi bi-pencil-square"></i> Editar</button></td>
                      </tr>
                      <tr>
                        <th scope="row">2</th>
                        <td>08/12/2022</td>
                        <td>Pereira</td>
                        <td>calle 18 # 51 - 36</td>
                        <td>Cancelado</td>
                        <td><button class="btn btn-secondary"><i class="bi bi-pencil-square"></i> Editar</button></td>
                      </tr>
                      <tr>
                        <th scope="row">3</th>
                        <td>25/11/2022</td>
                        <td>Catagena</td>
                        <td>calle 15 # 36 - 2 sur</td>
                        <td>Cumplido</td>
                        <td><button class="btn btn-secondary"><i class="bi bi-pencil-square"></i> Editar</button></td>
                      </tr>
                      <tr>
                        <th scope="row">4</th>
                        <td>05/09/2022</td>
                        <td>Medellín</td>
                        <td>carrera 1 este # 5 - 02</td>
                        <td>Guardado</td>
                        <td><button class="btn btn-secondary"><i class="bi bi-pencil-square"></i> Editar</button></td>
                      </tr>
                      <tr>
                        <th scope="row">5</th>
                        <td>08/12/2022</td>
                        <td>Yopal</td>
                        <td>calle 1 este # 5 - 18</td>
                        <td>Cancelado</td>
                        <td><button class="btn btn-secondary"><i class="bi bi-pencil-square"></i> Editar</button></td>
                      </tr>
                      <tr>
                        <th scope="row">6</th>
                        <td>25/11/2022</td>
                        <td>Pasto</td>
                        <td>carrera 1 este # 5 - 21</td>
                        <td>Cumplido</td>
                        <td><button class="btn btn-secondary"><i class="bi bi-pencil-square"></i> Editar</button></td>
                      </tr>
                    </tbody>
                  </table>
            </div>
        </div>
    </section>
    </>
    );
}