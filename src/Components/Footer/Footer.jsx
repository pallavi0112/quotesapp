import React from 'react'
import './Footer.css';

function Footer() {
    return (
        <>
            <footer class="footer__area">
                <div class="footer-container">
                    <div className='top-container'>
                        <div>
                            <ul class="nav-link">
                                <ul>
                                    <li className='active'><a href="/">Home</a></li>
                                    <li><a href="/">Authors</a></li>
                                    <li><a href="/">Topics</a></li>
                                    <li><a href="/">Quote of the day</a></li>
                                </ul>
                            </ul>
                        </div>
                        <div class="log-in">
                            <p>Get the latest quotes of  your favorit author</p>
                            <form id="form" class="subscribe__form">
                                <div>
                                <input type="email" id="email" name="EMAIL" placeholder="E-mail Address" autocomplete="off" />
                                <button type="submit"><i class="fa fa-envelope"></i></button>
                                </div>
                            </form>
                        </div>
                        <div class="social__links">
                            <a href="/"><i class="fa fa-google-plus"></i></a>
                            <a href="/"><i class="fa fa-facebook-f"></i></a>
                            <a href="/"><i class="fa fa-instagram"></i></a>
                            <a href="/"><i class="fa fa-linkedin"></i></a>
                            <a href="/"><i class="fa fa-twitter"></i></a>
                        </div>
                    </div>
                    <div className='bottom-container'>
                        &copy; 2022 :  All Rights Reserved
                    </div>
                </div>
            </footer>
        </>
    )
}


export default Footer