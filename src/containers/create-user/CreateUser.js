import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { addUser, getUsersFetch } from "../../store/actions/thunks";


const CreateUser = () => {
	const usersApi = useSelector((state) => state.users.data);
	const [user, setUser] = useState("");
	const [pass, setPass] = useState("");

    const dispatch = useDispatch();
	const history = useHistory();
	useEffect(() => {		
		const tokenLogin = localStorage.getItem("token") ?? ""
		dispatch(getUsersFetch(tokenLogin));		
	}, []);

	const handleSubmit = (e)=>{
		e.preventDefault()
		const tokenLogin = localStorage.getItem("token") ?? ""
		dispatch(addUser({username:user,password:pass},tokenLogin))
		history.push("/dashboard")
	}

	return (
		<div>
			<h1>Crear Usuario</h1>
			<form onSubmit={(e)=>handleSubmit(e)}>
				<div className="p-1 row">
					<label className="col-4">Usuario</label>
					<input className="col-8" value={user} onChange={(e)=>setUser(e.target.value)} type="text" />
				</div>
				<div className="p-1 row">
					<label className="col-4">Contraseña</label>
					<input className="col-8" value={pass} onChange={(e)=>setPass(e.target.value)} type="password" />
				</div>
				<div className="row pt-1">
					<button
						type="submit"
						className="col-12 btn btn-primary btn-lg btn-block"
					>
						Crear
					</button>
				</div>
			</form>
		</div>
	);
};

export default CreateUser;
