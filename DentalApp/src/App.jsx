
import Navbar from './Components/Navbar'
import './App.css'
import { Outlet } from 'react-router-dom'
import { useLocation , useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

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
    </>
  )
}

export default App
