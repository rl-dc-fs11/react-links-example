import React from 'react';
import { Routes as RoutesDom, Route } from 'react-router-dom';
import ListUsers from './pages/users/ListUsers';
import PerfilUser from './pages/users/PerfilUser';
import LoginForm from './pages/LoginForm';
import { Home } from './pages/Home';

// import { Container } from './styles';

function Routes() {
    return <RoutesDom>
        <Route path="/home" element={<Home />} />
        <Route path="/users" element={<ListUsers />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/users/:id" element={<PerfilUser />} />

        <Route path="*" element={<>not found</>} />
    </RoutesDom>;
}

export default Routes;