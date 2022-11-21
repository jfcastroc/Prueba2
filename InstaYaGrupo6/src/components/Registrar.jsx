import '../App.css'
export function Registar() {
    return (
    <>
    <nav class="navbar navbar-expand-lg navbar-dark bg-blue-dark rounded-top pt-1 pb-0">
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-3">
                            <div class="row">
                                <div class="col-12">
                                    <image src="../images/Logo.png" alt="Logo" class="w-100"/>
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
                                <a class="nav-link active" aria-current="page" href="#">Iniciar sesión</a>
                                </li>
                                <li class="nav-item">
                                <a class="nav-link" href={"./Registrar"}>Registrarse</a>
                                </li>
                            </ul>
                        </div>
                    </div>  
                </div>
            </nav>
            
    </>
    );
}