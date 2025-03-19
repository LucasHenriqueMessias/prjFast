/*
Autor: Lucas Henrique Messias Gonçalves
Data de Criação: 21/10/2024
Descrição: Este arquivo contém o componente principal da aplicação, que é responsável por renderizar a aplicação no navegador.
e os caminhos que a aplicação pode seguir.


Última Modificação: 23/10/2024
O que foi modificado: Adicionado o componente Navbar, removido o import de App
*/

import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Login from './components/Login/Login';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

import Navbar from './components/Navbar/Navbar';

import { ColorModeContext, useMode } from './theme';
import { CssBaseline, ThemeProvider } from '@mui/material';
import {Theme} from '@mui/material/styles'; 
import VideoAula from './components/VideoAula/VideoAula';
import IncluirVideoAula from './components/IncluirVideoAula/IncluirVideoAula';
import Questionario from './components/Questionario/Questionario';
import Grid from './components/Grid Seleção/Grid';

const AppWrapper = () => {
  const [theme, colorMode] = useMode() as [Theme, { toggleColorMode: () => "light" }];

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <React.StrictMode>
          <Router>
            <Navbar />
            <Routes>
              <Route path="/login" element={<Login />} />
              <Route path="/home" element={
                <PrivateRoute>
                  <VideoAula />
                </PrivateRoute>
              } />
              <Route path="*" element={<Navigate to="/login" />} />
              <Route path="/VideoAula" element={
                <PrivateRoute>
                  <VideoAula />
                </PrivateRoute>
              } />
              <Route path="/IncluirVideoAula" element={
              <PrivateRoute>
                <IncluirVideoAula />
              </PrivateRoute>
            } />
            <Route path="/Questionario" element={
              <PrivateRoute>
                <Questionario />
              </PrivateRoute>
            } />
            <Route path="/Grid" element={
              <PrivateRoute>
                <Grid />
              </PrivateRoute>
            } />
            </Routes>
          </Router>
        </React.StrictMode>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(<AppWrapper />);

reportWebVitals();