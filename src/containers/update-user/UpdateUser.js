import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router';
import { updateUser } from '../../store/actions/thunks';

const UpdateUser = () => {
    const usersApi = useSelector((state) => state.users.data);
    const [user, setUser] = useState("");
	const [pass, setPass] = useState("");
    const history = useHistory()
    const {id} = useParams()
    const dispatch = useDispatch()

    useEffect(() => {
        const {username,password} = usersApi.filter((user) => user.id === +id)[0]
        setUser(username)
        setPass(password)
    }, [])

    const handleSubmit = (e)=> {
        e.preventDefault()
        const tokenLogin = localStorage.getItem("token") ?? "";
        dispatch(updateUser({id: +id,username: user,password:pass},tokenLogin))
        history.push("/dashboard")
    }

    return (
        <form onSubmit={(e)=>handleSubmit(e)}>
            <div className="p-1 row">
				<label className="col-4">Usuario</label>
				<input
					className="col-8"
					type="text"
                    value={user}
					onChange={(e) => setUser(e.target.value)}
				/>
			</div>
			<div className="p-1 row">
				<label className="col-4">Contraseña</label>
				<input
					className="col-8"
					type="password"
                    value={pass}
					onChange={(e) => setPass(e.target.value)}
				/>
			</div>
			<div className="row pt-1">
				<button
					type="submit"
					className="col-12 btn btn-primary btn-lg btn-block"
				>
					Actualizar
				</button>
			</div>
        </form>
    )
}

export default UpdateUser
