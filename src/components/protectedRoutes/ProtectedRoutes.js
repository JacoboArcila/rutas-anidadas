import React from 'react'
import {Outlet, Navigate} from 'react-router-dom';

const ProtectedRoutes = ({isLogged}) => {
    if(isLogged) {
        return <Outlet />
    } else {
        return <Navigate to="/registe/signIn" />
    }
}

export default ProtectedRoutes