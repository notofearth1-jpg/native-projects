import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HealthLayout from './layout';
import Snapshot from './snapshot';
import Vitals from './vitals';
import Appointments from './appointments';
import Medications from './medications';
import Mental from './mental';

const HealthProject = () => {
    return (
        <Routes>
            <Route element={<HealthLayout />}>
                <Route index element={<Snapshot />} />
                <Route path="vitals" element={<Vitals />} />
                <Route path="appointments" element={<Appointments />} />
                <Route path="medications" element={<Medications />} />
                <Route path="mental" element={<Mental />} />
            </Route>
        </Routes>
    );
};

export default HealthProject;
