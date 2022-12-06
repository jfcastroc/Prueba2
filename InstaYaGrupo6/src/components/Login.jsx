import '../App.css'
import { NavbarLoginRegister } from './NavbarLoginRegister';
import { useState } from 'react';
import Axios from 'axios';
import { useNavigate } from "react-router-dom";

export function Login() {
    const navigate = useNavigate();
    const [loginInfo,setLoginInfo] = useState({
        email: "",
        password: ""
    });

    function handleChange(evt){
        const { target } = evt;
        const { name, value } = target;
    
        const newValues = {
            ...loginInfo,
            [name]: value, 
        };
    
        setLoginInfo(newValues);
    }

    function handleSubmit(evt){
        const url = "http://localhost:9000/api/users/login";

        const config = {
            headers:{
                "Content-Type": "application/json",
                "Accept": "application/json"
            }
        };
        
        const data = {
            email:loginInfo.email, 
            password:loginInfo.password,
        };

        Axios.post(url,data,config)
        .then((res) =>{
            if (res.status === 200 && res.data.mensaje === 'Autenticación correcta') {
                navigate("/listaOrdenes");
                localStorage.setItem("accessToken", res.data.token);
            }else{
                alert(res.data.Error);
            }
        }).catch((err) =>{
            debugger;
            if(err.response.status === 401){
                alert('El usuario o la contraseña son incorrectos');
            }else{
                console.log(err)
            }});
        evt.preventDefault();
    }

    return (
    <>
        <NavbarLoginRegister/>
        <section className="bg-white rounded-bottom p-3">
            <div className="container px-5">
                <h2 className="text-blue-dark text-center fs-3">Iniciar sesión</h2>
                <div className="text-center">
                    <i className="bi bi-person-circle fs-icon-login"></i>
                </div>
                <form className="px-5" method='POST' onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Correo electronico</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name='email' value={loginInfo.email} onChange={handleChange} required/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Contraseña</label>
                        <input type="password" className="form-control" id="exampleInputPassword1" name='password' value={loginInfo.password} onChange={handleChange} required/>
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