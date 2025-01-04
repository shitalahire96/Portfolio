import React from 'react';
import heroImg from '../Assets/img/hero-bg.jpg';
import { Route, Routes, Link } from 'react-router-dom';
import About from './About';

function Home(props) {
    return (
        <div>
            <main class="main">

                {/* <!-- Section --> */}
                <section id="hero" class="hero section">

                    <img src={heroImg} alt="" data-aos="fade-in"/>

                    <div class="container text-center" data-aos="zoom-out" data-aos-delay="100">
                        <div class="row justify-content-center">
                        <div class="col-lg-8">
                            <h2>Shital Ahire</h2>
                            <p>I'm a Software Developer</p>
                            {/* <a href="about.html" class="btn-get-started">About Me</a> */}
                            <Link to={'/about'} className='about btn-get-started'>About</Link>
                        </div>
                        </div>
                    </div>
                {/* <!-- /Section --> */}
                </section>

            </main>
            <Routes>
                <Route path='/about' element={<About/>}></Route>
            </Routes>
        </div>
    );
}

export default Home;