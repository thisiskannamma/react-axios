import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Home'
import axios from 'axios';
import './Style.css'
import Edit from './Edit';


function App() {
    return (
        <>
            <div>
                <Router>
                    <Routes>
                        <Route exact path='/' element={<Home/>}></Route>
                        <Route exact path='/Edit/:id' element={<Edit/>}></Route>
                    </Routes>
                </Router>
            </div>
        </>
    )
}

export default App
