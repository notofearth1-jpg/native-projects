import React from 'react';
import { Routes, Route } from 'react-router-dom';
import CityLayout from './layout';
import Dashboard from './dashboard';
import SmartHome from './home';
import Nav from './nav';
import Services from './services';
import Emergency from './emergency';

const CityProject = () => {
    return (
        <Routes>
            <Route element={<CityLayout />}>
                <Route index element={<Dashboard />} />
                <Route path="home" element={<SmartHome />} />
                <Route path="nav" element={<Nav />} />
                <Route path="services" element={<Services />} />
                <Route path="emergency" element={<Emergency />} />
            </Route>
        </Routes>
    );
};

export default CityProject;
