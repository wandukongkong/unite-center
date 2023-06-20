import React from 'react'
import {Route, Routes} from 'react-router-dom'
import Home from './Home'

export default function Navi() {
    return (
        <Routes>
            <Route path='/'
                element={<Home/>}></Route>
        </Routes>
    )
}

