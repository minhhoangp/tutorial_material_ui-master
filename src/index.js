import React from 'react';
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import App from './App';

import NotFound from './NotFound';
import Rooms from './Rooms';
import BookedRooms from './BookedRooms';
import ViewRoom from './ViewRoom';

import {Provider} from 'react-redux';
import store from './redux/store'

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<App />}>
                    <Route path='rooms' element ={<Rooms />}/>
                    <Route path='rooms/viewRoom' element = {<ViewRoom/>} />
                    <Route path='bookedRooms' element ={<BookedRooms />}/>        
                    <Route path="*" element={<NotFound />} />

                </Route>
            </Routes>
        </BrowserRouter>
        </Provider>
    </React.StrictMode>,
    
    document.getElementById('root')
);
