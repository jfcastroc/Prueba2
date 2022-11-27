import '../App.css'
import { NavbarLoginRegister } from './NavbarLoginRegister';

export function Registrar() {
    return (
    <>
        <NavbarLoginRegister/>
        <section className="bg-white rounded-bottom p-3">
            <div className="container px-5">
                <h2 className="text-blue-dark text-center fs-3">Registro de usuario</h2>
            </div>
        </section>
    </>
    );
}