import React from 'react'
import { Link } from 'react-router-dom'
import { useHistory } from 'react-router'
const CloseSession = () => {

    const history = useHistory()

    const deleteToken = () => {
        localStorage.clear()
        history.replace("/")
    }
    return (
        <div>
            <Link to="/" onClick={deleteToken}>Cerrar sesión</Link>
        </div>
    )
}

export default CloseSession
