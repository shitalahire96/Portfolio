import React from 'react';
import profileImg from '../Assets/img/profile-img.jpg';

function About(props) {
    return (
        <div>
            <main class="main">
                {/* <!-- About Section --> */}
                <section id="about" class="about section">
                    <div class="container section-title" data-aos="fade-up">
                        <h2>About</h2>
                        <p>Front end development using React JS concepts</p>
                    </div>
                    <div class="container" data-aos="fade-up" data-aos-delay="100">
                        <div class="row gy-4 justify-content-center">
                            <div class="col-lg-4">
                                <img src={profileImg} className="img-fluid" alt=""/>
                            </div>
                            <div class="col-lg-8 content">
                                <h2>Front end developer & Web Developer.</h2>
                                <p class="fst-italic py-3">
                                    Shital Ahire.
                                </p>
                                <div class="row">
                                    <div class="col-lg-6">
                                        <ul>
                                        <li><i class="bi bi-chevron-right"></i> <strong>Birthday:</strong> <span>1 May 1995</span></li>
                                        <li><i class="bi bi-chevron-right"></i> <strong>Website:</strong> <span>www.example.com</span></li>
                                        <li><i class="bi bi-chevron-right"></i> <strong>Phone:</strong> <span>+91 9999999999</span></li>
                                        <li><i class="bi bi-chevron-right"></i> <strong>City:</strong> <span>Pune, India</span></li>
                                        </ul>
                                    </div>
                                    <div class="col-lg-6">
                                        <ul>
                                        <li><i class="bi bi-chevron-right"></i> <strong>Age:</strong> <span>30</span></li>
                                        <li><i class="bi bi-chevron-right"></i> <strong>Degree:</strong> <span>Master</span></li>
                                        <li><i class="bi bi-chevron-right"></i> <strong>Email:</strong> <span>email@example.com</span></li>
                                        <li><i class="bi bi-chevron-right"></i> <strong>Freelance:</strong> <span>Available</span></li>
                                        </ul>
                                    </div>
                                </div>
                                <p class="py-3">
                                   I am a Software Developer in company name pvt. ltd.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>{/*<!-- /About Section --> */}

                <section id="skills" class="skills section">
                    <div class="container section-title" data-aos="fade-up">
                        <h2>Skills</h2>
                        <p>Software Developement Technical Skills</p>
                    </div>

                    <div class="container" data-aos="fade-up" data-aos-delay="100">
                        <div class="row skills-content skills-animation">
                            <div class="col-lg-6">
                                <div class="progress">
                                    <span class="skill"><span>HTML</span> <i class="val">100%</i></span>
                                    <div class="progress-bar-wrap">
                                        <div class="progress-bar" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                </div>

                                <div class="progress">
                                    <span class="skill"><span>CSS</span> <i class="val">90%</i></span>
                                    <div class="progress-bar-wrap">
                                        <div class="progress-bar" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                </div>

                                <div class="progress">
                                    <span class="skill"><span>JavaScript</span> <i class="val">75%</i></span>
                                    <div class="progress-bar-wrap">
                                        <div class="progress-bar" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                </div>
                            </div>

                            <div class="col-lg-6">
                                <div class="progress">
                                    <span class="skill"><span>PHP</span> <i class="val">80%</i></span>
                                    <div class="progress-bar-wrap">
                                        <div class="progress-bar" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                </div>

                                <div class="progress">
                                    <span class="skill"><span>React JS</span> <i class="val">90%</i></span>
                                    <div class="progress-bar-wrap">
                                        <div class="progress-bar" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                </div>

                                <div class="progress">
                                    <span class="skill"><span>Bootstrap</span> <i class="val">55%</i></span>
                                    <div class="progress-bar-wrap">
                                        <div class="progress-bar" role="progressbar" aria-valuenow="55" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                </div>{/*<!-- End Skills Item --> */}
                            </div>

                        </div>
                    </div>
                </section>
                {/* <!-- /Skills Section --> */}
            </main>
            
        </div>
    );
}

export default About;