import logo from '../images/Logo.png'

export function NavbarLoginRegister() {
    return (
    <>
        <nav className="navbar navbar-expand-lg navbar-dark bg-blue-dark rounded-top pt-1 pb-0">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-3">
                        <div className="row">
                            <div className="col-12">
                                <img src={logo} alt="Logo" className="w-100"/>
                            </div>
                            <div className="col-12 text-center">
                                <h5 className="text-blue fs-6">Gestión de paquetes</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-5"></div>
                    <div className="col-4">
                        <ul className="navbar-nav me-auto navbar-text mt-2">
                            <li className="nav-item mr-3">
                            <a className="nav-link active" aria-current="page" href={"./Login"}>Iniciar sesión</a>
                            </li>
                            <li className="nav-item">
                            <a className="nav-link" href={"./Registrar"}>Registrarse</a>
                            </li>
                        </ul>
                    </div>
                </div>
                
            </div>
        </nav>
    </>
    );
}