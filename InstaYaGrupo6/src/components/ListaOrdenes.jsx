import '../App.css'
import logo from '../images/Logo.png'
import { NavbarOrdenes } from './NavbarOrdenes';

export function ListaOrdenes() {
    return (
    <>
      <NavbarOrdenes/>
      <section className="bg-white rounded-bottom p-3">
          <div className="container">
              <h2 className="text-blue-dark text-center fs-2">Listado de órdenes</h2>
              <div className="row justify-content-start my-4">
                  <button className="btn btn-outline-primary w-auto"> <i className="bi bi-file-earmark-plus"></i> Ingresar nueva orden</button>
              </div>
              <div>
                  <table className="table table-striped">
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
                          <td><a href={"./actualizarOrdenes"} className="btn btn-secondary"><i className="bi bi-pencil-square"></i> Editar</a></td>
                        </tr>
                        <tr>
                          <th scope="row">2</th>
                          <td>08/12/2022</td>
                          <td>Pereira</td>
                          <td>calle 18 # 51 - 36</td>
                          <td>Cancelado</td>
                          <td><a href={"./actualizarOrdenes"} className="btn btn-secondary"><i className="bi bi-pencil-square"></i> Editar</a></td>
                        </tr>
                        <tr>
                          <th scope="row">3</th>
                          <td>25/11/2022</td>
                          <td>Catagena</td>
                          <td>calle 15 # 36 - 2 sur</td>
                          <td>Cumplido</td>
                          <td><a href={"./actualizarOrdenes"} className="btn btn-secondary"><i className="bi bi-pencil-square"></i> Editar</a></td>
                        </tr>
                        <tr>
                          <th scope="row">4</th>
                          <td>05/09/2022</td>
                          <td>Medellín</td>
                          <td>carrera 1 este # 5 - 02</td>
                          <td>Guardado</td>
                          <td><a href={"./actualizarOrdenes"} className="btn btn-secondary"><i className="bi bi-pencil-square"></i> Editar</a></td>
                        </tr>
                        <tr>
                          <th scope="row">5</th>
                          <td>08/12/2022</td>
                          <td>Yopal</td>
                          <td>calle 1 este # 5 - 18</td>
                          <td>Cancelado</td>
                          <td><a href={"./actualizarOrdenes"} className="btn btn-secondary"><i className="bi bi-pencil-square"></i> Editar</a></td>
                        </tr>
                        <tr>
                          <th scope="row">6</th>
                          <td>25/11/2022</td>
                          <td>Pasto</td>
                          <td>carrera 1 este # 5 - 21</td>
                          <td>Cumplido</td>
                          <td><a href={"./actualizarOrdenes"} className="btn btn-secondary"><i className="bi bi-pencil-square"></i> Editar</a></td>
                        </tr>
                      </tbody>
                    </table>
              </div>
          </div>
      </section>
    </>
    );
}