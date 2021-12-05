import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import Inicio from './routes/Inicio';
import Formulario from './routes/Formulario';
import Quien from './routes/Quien';
import Noencontrada from './routes/Noencontrada'


ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element ={<App/>}>
        <Route index element={<Inicio/>}></Route>
        <Route path='formulario' element={<Formulario/>}></Route>
        <Route path='quien' element={<Quien/>}></Route>
        <Route path='*' element={<Noencontrada/>}></Route>
      </Route>
    </Routes>
    
  </BrowserRouter>,
  document.getElementById('root')

);


