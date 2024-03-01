import logo from './logo.svg';
import './App.css';

// After starting the project
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./pages/Home.jsx"
import NoPage from './pages/NoPage.jsx';
import Login from './pages/Login.jsx';
import { useState } from 'react';
import Landing from './pages/Landing.jsx';



function App() {
  const [isAuth, setIsAuth] = useState(false); // State to check if user is logged in or not
  return (
    <Router>
    <Routes>
      {isAuth ? <Route path="/" element={<Home setIsAuth={setIsAuth}/>} /> : <Route path="/" element={<Landing />} />}
      
      <Route path="/login" element={<Login setIsAuth={setIsAuth}/>} />
      <Route path="*" element={<NoPage />} />    
    </Routes>
  </Router>
  );
}

export default App;
