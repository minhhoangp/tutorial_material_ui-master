import React from 'react';
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import App from './App';

import NotFound from './NotFound';
import Rooms from './Rooms';
import BookedRooms from './BookedRooms';


ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<App />}>
                    <Route path='rooms' element ={<Rooms />} />
                    <Route path='bookedRooms' element ={<BookedRooms />} />
                    <Route path="*" element={<NotFound />} />
                </Route>
            </Routes>
        </BrowserRouter>
    </React.StrictMode>,
    
    document.getElementById('root')
);
