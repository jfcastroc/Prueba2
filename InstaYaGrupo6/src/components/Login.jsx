import '../App.css'
export function Login() {
    return (
    <>
        <nav class="navbar navbar-expand-lg navbar-dark bg-blue-dark rounded-top pt-1 pb-0">
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-3">
                            <div class="row">
                                <div class="col-12">
                                    <image src="./images/Logo.png" alt="Logo" class="w-100"/>
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
                                <a class="nav-link" href="#">Registrarse</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    
                </div>
            </nav>
            <section class="bg-white rounded-bottom p-3">
                <div class="container px-5">
                    <h2 class="text-blue-dark text-center fs-3">Iniciar sesión</h2>
                    <div class="text-center">
                        <i class="bi bi-person-circle fs-icon-login"></i>
                    </div>
                    <form class="px-5">
                        <div class="mb-3">
                            <label htmlFor="exampleInputEmail1" class="form-label">Correo electronico</label>
                            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                        </div>
                        <div class="mb-3">
                            <label for="exampleInputPassword1" class="form-label">Contraseña</label>
                            <input type="password" class="form-control" id="exampleInputPassword1"/>
                        </div>
                        <div class="row justify-content-center">
                            <button type="submit" class="btn btn-primary w-50">Ingresar</button>
                        </div>
                    </form>
                </div>
            </section>
            </>
            );

}