import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import axios from "axios";
import Spinner from "../spinner/Spinner";
const Form = () => {
	const [user, setUser] = useState("");
	const [pass, setPass] = useState("");
	const [token, setToken] = useState(localStorage.getItem("token"));
    const [errorLogin, setErrorLogin] = useState(false)

    const history = useHistory()

	const handleSubmit = async(e) => {
		e.preventDefault();
        try {            
            const {data} = await axios.post("http://localhost:4000/auth/login",{
                username:user,password:pass
            })
            const {jwt: tokenApi} = data
            localStorage.setItem("token",tokenApi)
            setToken(tokenApi)
            setErrorLogin(false)
        } catch (error) {
            setErrorLogin(true)
        }
	};
	useEffect(() => {
		if(token) {
            history.push("/dashboard")
		}
	}, [history,token]);

	return token ? (
		<Spinner />
	) : (
        <>
		<form className="col-4 mx-auto" onSubmit={(e) => handleSubmit(e)}>
			<h3 className="text-center">Ingrese sus credenciales</h3>
			<div className="p-1 row">
				<label className="col-4">Usuario</label>
				<input
					className="col-8"
					type="text"
					onChange={(e) => setUser(e.target.value)}
				/>
			</div>
			<div className="p-1 row">
				<label className="col-4">Contraseña</label>
				<input
					className="col-8"
					type="password"
					onChange={(e) => setPass(e.target.value)}
				/>
			</div>
			<div className="row pt-1">
				<button
					type="submit"
					className="col-12 btn btn-primary btn-lg btn-block"
				>
					Ingresar
				</button>
			</div>
        {
            errorLogin && <p className="text-danger">usuario o contraseña erróneos</p>
        }
		</form>
        
        </>
	);
};

export default Form;
