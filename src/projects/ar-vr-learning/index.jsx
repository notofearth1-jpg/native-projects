import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ARLayout from './layout';
import CourseHub from './course-hub';
import ARCamera from './camera';
import Progress from './progress';
import CreateStudio from './create';
import Team from './team';

const ARVRProject = () => {
    return (
        <Routes>
            <Route element={<ARLayout />}>
                <Route index element={<CourseHub />} />
                <Route path="camera" element={<ARCamera />} />
                <Route path="create" element={<CreateStudio />} />
                <Route path="progress" element={<Progress />} />
                <Route path="social" element={<Team />} />
            </Route>
        </Routes>
    );
};

export default ARVRProject;
