import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import Spinner from "../../components/spinner/Spinner";
import { getUsersFetch } from "../../store/actions/thunks";

const Dashboard = () => {
	const usersApi = useSelector((state) => state.users.data);
	const isLogin = useSelector((state) => state.users.isLogin);
	const dispatch = useDispatch();
	const history = useHistory();

	useEffect(() => {
		const tokenLogin = localStorage.getItem("token") ?? ""
		dispatch(getUsersFetch(tokenLogin));   
	}, []);

	return !isLogin ? (
		<Spinner />
	) : (

			<div>
				<h1>Dashboard</h1>
				<button className="btn-success"><Link className="text-white" to="/dashboard/create">Crear usuario</Link></button>
				<div>
					{usersApi.map((d) => (
                        <div key={d.id}>
                            <span>{d.id}</span>
                            <span>{d.username}</span>
                            <button className="btn btn-warning"><Link className="text-dark" to={`/dashboard/update/${d.id}`}>Editar</Link></button>
                            <button className="btn btn-danger"><Link className="text-white" to={`/dashboard/delete/${d.id}`}>Borrar</Link></button>
                        </div>
					))}
				</div>
			</div>
		
	);
};

export default Dashboard;
