import { useState, useEffect } from "react";
import "../App.css";
import { NavbarOrdenes } from "./NavbarOrdenes";
import Axios from "axios";
import { useNavigate } from "react-router-dom";

export function ListaOrdenes() {
  const [listaOrdenes, setListaOrdenes] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const url = "http://prueba3-production.up.railway.app/api/orders";
    const headers = {
      "x-access-token": localStorage.getItem("accessToken"),
      "Content-Type": "application/json",
      Accept: "application/json",
    };
    Axios.get(url, { headers: headers }).then((res) => {
      debugger;
      if (res.status === 200) {
        setListaOrdenes(res.data);
      } else {
        alert("Ocurrio un error");
      }
    });
  }, [setListaOrdenes]);

  return (
    <>
      <NavbarOrdenes />
      <section className="bg-white rounded-bottom p-3">
        <div className="container">
          <h2 className="text-blue-dark text-center fs-2">
            Listado de órdenes
          </h2>
          <div className="row justify-content-start my-4">
            <button className="btn btn-outline-primary w-auto">
              {" "}
              <i className="bi bi-file-earmark-plus"></i> Ingresar nueva orden
            </button>
          </div>
          <div>
            <table className="table table-striped">
              <thead>
                <tr className="d-flex">
                  <th scope="col" className="col-2">
                    # Servicio
                  </th>
                  <th scope="col" className="col-2">
                    Fecha
                  </th>
                  <th scope="col" className="col-2">
                    Ciudad entrega
                  </th>
                  <th scope="col" className="col-2">
                    Dirección entrega
                  </th>
                  <th scope="col" className="col-2">
                    Estado
                  </th>
                  <th scope="col" className="col-2">
                    Editar
                  </th>
                </tr>
              </thead>
              <tbody>
                {listaOrdenes.map((orden) => (
                  <tr className="d-flex">
                    <th scope="row" className="text-break col-2">
                      {orden._id}
                    </th>
                    <td className="col-2">{orden.fecha.split("T")[0]}</td>
                    <td className="col-2">{orden.ciudadEntrega}</td>
                    <td className="col-2">{orden.direccionEntrega}</td>
                    <td className="col-2">{orden.estado}</td>
                    <td className="col-2">
                      <a
                        href={"./actualizarOrdenes?id=" + orden._id}
                        className="btn btn-secondary"
                      >
                        <i className="bi bi-pencil-square"></i> Editar
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </>
  );
}
