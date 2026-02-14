import React from 'react';
import { Routes, Route } from 'react-router-dom';
import AILayout from './layout';
import Dashboard from './dashboard';
import ChatInterface from './chat';
import Schedule from './schedule';
import Devices from './devices';
import Profile from './profile';

const AIAssistantProject = () => {
    return (
        <Routes>
            <Route element={<AILayout />}>
                <Route index element={<Dashboard />} />
                <Route path="chat" element={<ChatInterface />} />
                <Route path="schedule" element={<Schedule />} />
                <Route path="devices" element={<Devices />} />
                <Route path="profile" element={<Profile />} />
            </Route>
        </Routes>
    );
};

export default AIAssistantProject;
