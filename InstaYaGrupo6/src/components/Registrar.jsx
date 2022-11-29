import { useState } from 'react';
import '../App.css'
import { NavbarLoginRegister } from './NavbarLoginRegister';
import Axios from 'axios';
import bcrypt from 'bcryptjs';
import { useNavigate } from "react-router-dom";

export function Registrar() {
    const navigate = useNavigate();
    const [userInfo,setInfo] = useState({
        nombre: "",
        email: "",
        emailConfirmation: "",
        password: "",
        passwordConfirmation: "",
        tipoIdentificacion: "",
        numeroIdentificacion: "",
    });

    function handleChange(evt){
        const { target } = evt;
        const { name, value } = target;
    
        const newValues = {
            ...userInfo,
            [name]: value, 
        };
    
        setInfo(newValues);
    }

    function handleSubmit(evt){
        const url = "http://localhost:9000/api/users";

        const config = {
            headers:{
                "Content-Type": "application/json",
                "Accept": "application/json",
            }
        };
        
        const salt = bcrypt.genSaltSync(6);
        const passwordHashed = bcrypt.hashSync(userInfo.password, salt);

        const data = {
            nombre:userInfo.nombre, 
            email:userInfo.email, 
            tipoIdentificacion:userInfo.tipoIdentificacion,
            numeroIdentificacion:userInfo.numeroIdentificacion,
            password:passwordHashed,
            salt:salt,
        };

        Axios.post(url,data,config)
        .then((res) =>{
            console.log(res)
            if (res.status === 200 && res.data.message === undefined) {
                alert("Usuario registrado con exito. Porfavor Inicie Sesión...")
                navigate("/login");
            }else{
                alert(res.data.message);
            }
        }).catch((err) =>{console.log(err)});
        evt.preventDefault();
    }

    function handleEmailConfirmation(evt){
        if (userInfo.email !== userInfo.emailConfirmation)
            return alert("Los correos electronicos no coinciden");
    }

    function handlePasswordConfirmation(evt){
        if (userInfo.password !== userInfo.passwordConfirmation)
            return alert("Las contraseñas no coinciden");
    }

    return (
    <>
        <NavbarLoginRegister/>
        <section className="bg-white rounded-bottom p-3">
            <div className="container px-5">
                <h2 className="text-blue-dark text-center fs-3">Registro de usuario</h2>
                <form className="px-5" method='POST' onSubmit={handleSubmit}>
                    <div className="mb-1">
                        <label htmlFor="exampleInputCorreoElectronico" className="form-label">Nombre del usuario:
                            <span className="color-span">*</span>
                        </label>
                        <input type="text" className="form-control" id="exampleInputValidator0" name='nombre' value={userInfo.nombre} onChange={handleChange} required />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputTipoIndenUsuario" className="form-label">Tipo de identificación del usuario:
                            <span className="color-span">*</span>
                        </label>
                        <select id="ctl00_ContentPlaceHolder1_dpexampleInputValidator1" name='tipoIdentificacion' className="form-control" value={userInfo.tipoIdentificacion} onChange={handleChange} required>
                            <option value="">Seleccione</option>
                            <option value="C">Cedula de ciudadania</option>
                            <option value="CD">Carnet diplomatico</option>
                            <option value="E">Cedula de extranjeria</option>
                            <option value="N">Nit</option>
                            <option value="P">Pasaporte</option>
                            <option value="PE">Permiso especial de permanencia</option>
                            <option value="PT">Permiso por proteccion temporal</option>                       
                        </select>
                    </div>
                    <div className="mb-1">
                        <label htmlFor="exampleInputNunIdenUsuario" className="form-label">Número Identificación del usuario:
                            <span className="color-span">*</span>
                        </label>
                        <input type="number" className="form-control" id="exampleInputValidator2" name='numeroIdentificacion' value={userInfo.numeroIdentificacion} onChange={handleChange} required />
                        <small>
                            <span className='text-secondary'>Sin puntos ni carácteres especiales</span>
                        </small>
                    </div>
                    <div className="mb-1">
                        <label htmlFor="exampleInputCorreoElectronico" className="form-label">Correo electrónico:
                            <span className="color-span">*</span>
                        </label>
                        <input type="email" className="form-control" id="exampleInputValidator3" name='email' value={userInfo.email} onChange={handleChange} required />
                    </div>
                    <div className="mb-1">
                        <label htmlFor="exampleConfirCorreoElect" className="form-label">Confirmación correo electrónico:
                            <span className="color-span">*</span>
                        </label>
                        <input type="email" className="form-control" id="exampleInputValidator4" name='emailConfirmation' value={userInfo.emailConfirmation} onChange={handleChange} onBlur={handleEmailConfirmation} required />
                    </div>
                    <div className="mb-1">                
                        <label htmlFor="exampleConfirCorreoElect" className="form-label">Clave:
                            <span className="color-span">*</span>
                        </label>
                        <span title="La clave debe tener mínimo 8 caracteres y contener al menos una letra mayúscula y un número" className='text-primary'> ?</span>
                        <input type="password" className="form-control" id="exampleInputValidator6" minLength="8" name='password' value={userInfo.password} onChange={handleChange} required />     
                    </div>
                    <div className="mb-3">
                        <div className="form-group has-error">    
                            <label htmlFor="exampleConfirCorreoElect" className="form-label">Confirmación clave:
                                <span className="color-span">*</span>
                            </label>
                            <input type="password" className="form-control" id="exampleInputValidator7" minLength="8" name='passwordConfirmation' value={userInfo.passwordConfirmation} onChange={handleChange} onBlur={handlePasswordConfirmation} required />
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <button type="submit" className="btn btn-primary w-50">Enviar</button>
                    </div>
                </form>
            </div>
        </section>
    </>
    );
}