/* eslint-disable */

import Navbar from './Components/Navbar'
import './App.css'
import { Outlet } from 'react-router-dom'
import { useLocation , useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import SocialMedia from './Components/SocialMedia.jsx';
import Header from './Components/Header/Header.jsx';

function App() {

  const location = useLocation();
	const navigate = useNavigate();

	useEffect(() => {
		location.pathname === "/" && navigate("/home");
	}, []);

  return (
    <>
    <SocialMedia />
    <Navbar />
    <Outlet />
    </>
  )
}

export default App
