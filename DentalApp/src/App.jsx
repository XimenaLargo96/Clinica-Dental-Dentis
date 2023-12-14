/* eslint-disable */

import Navbar from './Components/Navbar'
import './App.css'
import { Outlet } from 'react-router-dom'
import { useLocation , useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import Footer from './Components/Footer';
import Header from './Components/Header/Header.jsx';

function App() {

  const location = useLocation();
	const navigate = useNavigate();

	useEffect(() => {
		location.pathname === "/" && navigate("/home");
	}, []);

  return (
    <>
    <Navbar />
    <Outlet />
    <Footer />
    </>
  )
}

export default App
