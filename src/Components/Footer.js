import React from 'react';

function Footer(props) {
    return (
        <div>
            <footer id="footer" class="footer light-background">
                <div class="container">
                <div class="copyright text-center ">
                    <p>© <span>Copyright</span> <strong class="px-1 sitename">my app</strong> <span>All Rights Reserved<br/></span></p>
                </div>
                <div class="social-links d-flex justify-content-center">
                    <a href=""><i class="bi bi-twitter-x"></i></a>
                    <a href=""><i class="bi bi-facebook"></i></a>
                    <a href=""><i class="bi bi-instagram"></i></a>
                    <a href=""><i class="bi bi-linkedin"></i></a>
                </div>
                <div class="credits">
                    Designed by <a href="">React App</a> Distributed by <a href="">Theme</a>
                </div>
                </div>
            </footer>
        </div>
    );
}

export default Footer;