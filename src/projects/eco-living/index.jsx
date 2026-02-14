import React from 'react';
import { Routes, Route } from 'react-router-dom';
import EcoLayout from './layout';
import Dashboard from './dashboard';
import Tracker from './tracker';
import Community from './community';
import Market from './market';
import Reports from './reports';

const EcoProject = () => {
    return (
        <Routes>
            <Route element={<EcoLayout />}>
                <Route index element={<Dashboard />} />
                <Route path="tracker" element={<Tracker />} />
                <Route path="community" element={<Community />} />
                <Route path="market" element={<Market />} />
                <Route path="reports" element={<Reports />} />
            </Route>
        </Routes>
    );
};

export default EcoProject;
