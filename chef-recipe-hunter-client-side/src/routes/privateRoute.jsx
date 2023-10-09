import React, { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
    const {user, isLoading} = useContext(AuthContext);

    if(user) {
        return children
    }

    return (
        <Navigate  to='/login' replace></Navigate>
    );
};

export default PrivateRoute;