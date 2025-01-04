import logo from './logo.svg';
import React from 'react';
import './App.css';
import './Styles/Main.css';
import { Route, Routes, Link } from 'react-router-dom';
import Home from './Components/Home';
import Footer from './Components/Footer';
import Portfolio from './Components/Portfolio';
import About from './Components/About';
import Resume from './Components/Resume';
import Contact from './Components/Contact';


function App() {
  const menuClick = (menuName) =>{
    alert(menuName);

  }
  return (
    <>
      <html>
        <head>
          <title>Portfolio react App</title>
        </head>
        <body className="index-page">
          <header id="header" className="header d-flex align-items-center light-background sticky-top">
            <div className="container-fluid position-relative d-flex align-items-center justify-content-between">

              <a href="index.html" className="logo d-flex align-items-center me-auto me-xl-0">
                <img src="./Assets/img/logo.png" alt=""/>
                <h1 className="sitename">My Portfolio</h1>
              </a>

              <nav id="navmenu" className="navmenu">
                  <ul>
                    {/* <li><a href="index.html" class="active">Home</a></li> */}
                    <li><Link to={'/'} className='active'>Home</Link></li>
                    <li><Link to={'/about'} className='about'>About</Link></li>
                    <li><Link to={'/resume'} className='resume'>Resume</Link></li>
                    <li><Link to={'/portfolio'}>Documents</Link></li>
                    <li><Link to={'/contact'}>Contact</Link></li>
                  </ul>
                <i className="mobile-nav-toggle d-xl-none bi bi-list"></i>
              </nav>

              <div className="header-social-links">
                <a href="#" className="twitter"><i className="bi bi-twitter-x"></i></a>
                <a href="#" className="facebook"><i className="bi bi-facebook"></i></a>
                <a href="#" className="instagram"><i className="bi bi-instagram"></i></a>
                <a href="#" className="linkedin"><i className="bi bi-linkedin"></i></a>
              </div>

            </div>
          </header>
          {/* Add external Components */}
          <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/portfolio' element={<Portfolio/>}></Route>
            <Route path='/about' element={<About/>}></Route>
            <Route path='/resume' element={<Resume/>}></Route>
            <Route path='/contact' element={<Contact/>}></Route>
          </Routes>
          
          <Footer/>
            
        </body>
      </html>
    </>
  );
}

export default App;
