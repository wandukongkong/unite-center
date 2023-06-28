import React from 'react'
import {Route, Routes} from 'react-router-dom'

import Home from './Home/Home'
import RandomPick from './RandomPick/RandomPick'
import Header from '../components/Header/Header'


export default function Navi() {
    return (
        <div style={{display:'flex', flex:1}}>
            <Header></Header>
            <Routes>
                <Route path='/'
                    element={<Home/>}></Route>
                <Route path='/randomPick'
                    element={<RandomPick/>}></Route>
            </Routes>
        </div>
    )
}

