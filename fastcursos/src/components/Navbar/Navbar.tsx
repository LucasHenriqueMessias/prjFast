/*
Autor: Lucas Henrique Messias Gonçalves
Data de Criação: 23/10/2024
Descrição: Este arquivo contém o componente Navbar, que é o responsável por renderizar a barra de navegação da aplicação.


Última Modificação: 
O que foi modificado: 
*/

import React, { useContext, useEffect, useState, useCallback } from 'react'
import { useNavigate } from 'react-router-dom';
import { getAccessToken, getDepartment, getUsername, removeAccessToken, removeUser, getNivel } from '../LocalStorage/LocalStorage';
import { IconButton, Link, useTheme, Menu, MenuItem } from '@mui/material';
import NotificationsIcon from '@mui/icons-material/Notifications';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import DeleteIcon from '@mui/icons-material/Delete';
import PersonIcon from '@mui/icons-material/Person';
import axios from 'axios';
import { ColorModeContext, tokens } from '../../theme';

interface Notification {
  id: number;
  notification: string;
    user: string;
    author: string;
    active: boolean;
}

const Navbar = () => {

    const navigate = useNavigate();
    const handleLogOut = () => {
      removeAccessToken();
      removeUser();

      alert('Você foi desconectado.');

      setAnchorElUser(null); // Close the user menu
      navigate('/login'); // Redirect to login page
    };
    const handleUserNotification = async () => {
      const user = getUsername();
      const token = getAccessToken();
      const response = await axios.get(`${process.env.REACT_APP_API_BASE_URL}/tab-notificacao/user/${user}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });

      const notifications: Notification[] = response.data;
      setNotifications(notifications);
    }

   const theme = useTheme();
   const colors = tokens(theme.palette.mode);
   const colorMode = useContext(ColorModeContext);

   const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
   const open = Boolean(anchorEl);
   const [notifications, setNotifications] = React.useState<Notification[]>([]);

   const handleNotificationClick = (event: React.MouseEvent<HTMLElement>) => {
     setAnchorEl(event.currentTarget);
     handleUserNotification();
   };

   const handleNotificationClose = () => {
     setAnchorEl(null);
   };

   const handleRemoveNotification = (id: number) => {

    const token = getAccessToken();
    axios.patch(`${process.env.REACT_APP_API_BASE_URL}/tab-notificacao/${id}`, {
      active: false
    }, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });

     setNotifications((prevNotifications) => prevNotifications.filter(notification => notification.id !== id));
   };

   const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);
   const openUserMenu = Boolean(anchorElUser);

   const handleUserClick = (event: React.MouseEvent<HTMLElement>) => {
     setAnchorElUser(event.currentTarget);
   };

   const handleUserClose = () => {
     setAnchorElUser(null);
   };

  const calculateLevel = (exp: number) => {
    return Math.floor(exp / 600);
  };

  const calculateNextLevelExp = useCallback((exp: number) => {
    const currentLevel = calculateLevel(exp);
    return (currentLevel + 1) * 600;
  }, []);

  const user = getUsername();
  const department = getDepartment();
  const level = Number(getNivel());
  const [calculatedLevel, setCalculatedLevel] = useState<number>(calculateLevel(level));
  const [nextLevelExp, setNextLevelExp] = useState<number>(calculateNextLevelExp(level));

  useEffect(() => {
    const updatedLevel = Number(getNivel());
    setCalculatedLevel(calculateLevel(updatedLevel));
    setNextLevelExp(calculateNextLevelExp(updatedLevel));
  }, [level, department, calculateNextLevelExp]);

  return (
    <nav 
      className="navbar navbar-expand-lg navbar-light" 
      style={{ backgroundColor: `${colors.navbar[900]}` }} // Add this line
    >
  <div className="container-fluid">
    <Link 
      className="navbar-brand" 
      href="/Home"
      sx={{
        fontFamily: 'monospace',
        fontWeight: 700,
        letterSpacing: '.3rem',
        color: 'inherit',
        textDecoration: 'none',
      }}
    >
      Fast Cursos
    </Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      {/* <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Financeiro
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a className="dropdown-item" href="/Roi">Roi</a></li>
            <li><a className="dropdown-item" href="/Indicacao">Indicação</a></li>
            <li><a className="dropdown-item" href="/Parceria">Parceria</a></li>
          </ul>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Comercial
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a className="dropdown-item" href="/prospeccao">Prospecção</a></li>
          </ul>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Analista
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a className="dropdown-item" href="/cadastrar-ferramentas">Cadastrar Ferramentas</a></li>
            <li><a className="dropdown-item" href="/sinal-amarelo">Sinal Amarelo</a></li>
          </ul>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link  dropdown-toggle" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Cliente
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a className="dropdown-item " href="/clientes">Clientes Fast</a></li>
            <li><a className="dropdown-item" href="/cadastro-cliente">Cadastrar Cliente</a></li>
            <li><a className="dropdown-item" href="/regime-tributario">Regime Tributário</a></li>
            <li><a className="dropdown-item" href="/dre">Dre</a></li>
            <li><a className="dropdown-item" href="/fotografia-cliente">Fotografia</a></li>
            <li><a className="dropdown-item" href="/dores-cliente">Dores</a></li>
            <li><a className="dropdown-item" href="/socios">Sócios</a></li>
            <li><a className="dropdown-item " href="/sucesso-cliente">Sucesso do Cliente</a></li>
            <li><a className="dropdown-item disabled" href="/">Dossiê</a></li>
          </ul>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Ferramentas Gerais
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a className="dropdown-item" href="/ferramentas">Ferramentas dos Analistas</a></li>
            <li><a className="dropdown-item" href="/reuniao">Reuniões</a></li>
            
            <li><a className="dropdown-item" href="/contrato">Contratos</a></li>
            <li><a className="dropdown-item" href="/biblioteca">Biblioteca</a></li>
            <li><a className="dropdown-item" href="/VideoAula">Video Aula</a></li>
          </ul>
        </li>
      </ul> */}
      <div className="d-flex align-items-center ms-auto">
        <IconButton onClick={colorMode.toggleColorMode}>
          {theme.palette.mode === 'dark' ? (
            <DarkModeIcon/>
          ):( 
            <LightModeIcon/>
          )
        
        }
          
        </IconButton>

        <div 
          style={{ 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center', 
            height: '100%', 
            cursor: 'pointer' 
          }} 
          onClick={handleNotificationClick}
        >
          <NotificationsIcon />
        </div>
        <Menu
          anchorEl={anchorEl}
          open={open}
          onClose={handleNotificationClose}
        >
          {notifications.map((notification) => (
            <MenuItem key={notification.id}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
                <span>{notification.notification}</span>
                <IconButton onClick={() => handleRemoveNotification(notification.id)}>
                  <DeleteIcon />
                </IconButton>
              </div>
            </MenuItem>
          ))}
        </Menu>
        <div 
          style={{ 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center', 
            height: '100%', 
            cursor: 'pointer',
            marginLeft: '10px'
          }}
          onClick={handleUserClick}
        >
          <PersonIcon />
        </div>
        <Menu
          anchorEl={anchorElUser}
          open={openUserMenu}
          onClose={handleUserClose}
        >
          <MenuItem>
          <PersonIcon/>
            <div style={{ fontWeight: 'bold' }}>{user}</div>
          </MenuItem>
          <MenuItem>
            <div style={{ color: 'gray' }}>{department}</div>
          </MenuItem>
          <MenuItem>
            <div style={{ color: 'blue' }}>exp total: {level } / {nextLevelExp}</div>
          </MenuItem>
          <MenuItem>
            <div style={{ color: 'green' }}>nível: {calculatedLevel}</div>
          </MenuItem>
          <MenuItem onClick={handleLogOut}>
            Sair
          </MenuItem>
        </Menu>
      </div>
    </div>
  </div>
</nav>
  )
}

export default Navbar