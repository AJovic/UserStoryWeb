import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { UserStoryMap } from '../../userStoryMap';

function MyRoute() {

    return (
        <Routes>
            <Route path='/' element={<UserStoryMap />} />
        </Routes>
    );
}

export default MyRoute