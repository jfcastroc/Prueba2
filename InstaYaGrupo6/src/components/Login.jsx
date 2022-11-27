import '../App.css'
import { NavbarLoginRegister } from './NavbarLoginRegister';

export function Login() {
    return (
    <>
        <NavbarLoginRegister/>
        <section className="bg-white rounded-bottom p-3">
            <div className="container px-5">
                <h2 className="text-blue-dark text-center fs-3">Iniciar sesión</h2>
                <div className="text-center">
                    <i className="bi bi-person-circle fs-icon-login"></i>
                </div>
                <form className="px-5">
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Correo electronico</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                    </div>
                    <div className="mb-3">
                        <label for="exampleInputPassword1" className="form-label">Contraseña</label>
                        <input type="password" className="form-control" id="exampleInputPassword1"/>
                    </div>
                    <div className="row justify-content-center">
                        <button type="submit" className="btn btn-primary w-50">Ingresar</button>
                    </div>
                </form>
            </div>
        </section>
    </>
    );
}