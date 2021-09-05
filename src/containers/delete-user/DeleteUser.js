import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useHistory, useParams } from 'react-router'
import { removeUser } from '../../store/actions/thunks'

const DeleteUser = () => {
    const {id} = useParams()
    //const data = useSelector((state) => state.users.data);
    
    const dispatch = useDispatch()
    const history = useHistory()
    const returnMenu = () => {
        history.push("/dashboard")
    }
    const deleteUser = () => {
        const tokenLogin = localStorage.getItem("token") ?? "";
        dispatch(removeUser(id, tokenLogin))
        history.replace("/dashboard")
    }
    return (
        <div>
            <p>¿Está seguro de borrar este usuario?</p>
            <div>
                <button onClick={deleteUser}>Borrar</button>
                <button onClick={returnMenu}>Cancelar</button>
            </div>
        </div>
    )
}

export default DeleteUser
