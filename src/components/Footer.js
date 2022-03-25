import React from 'react';
import logo from './imagens/spotifylogo.svg';
import {Link} from 'react-router-dom';

function Footer() {
    return (
        <section
            className='footer bg-dark navbar-fixed-bottom'
            style={{ marginBottom: 0, position: 'relative' }}
        >
            
            <div className='container'>
                <footer className='d-flex flex-wrap justify-content-between align-items-center py-3'>
                    <div className='col-md-4 d-flex align-items-center'>
                        <a 
                            className='mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1'
                        >
                            <Link to='/'>
                                <img src={logo} alt='Logo' height='24px' />
                            </Link>
                            
                        </a>
                        <span className='text-muted'>
                            &copy; 2022 Spotify, Inc
                        </span>
                    </div>

                    <ul className='nav col-md-4 justify-content-end list-unstyled d-flex'>
                        <li className='ms-3'>
                            <a className='text-muted' href='#'>
                                <img src='twitter.svg' alt='twitter' />
                            </a>
                        </li>
                        <li className='ms-3'>
                            <a className='text-muted' href='#'>
                                <img src='instagram.svg' alt='instagram' />
                            </a>
                        </li>
                        <li className='ms-3'>
                            <a className='text-muted' href='#'>
                                <img src='facebook.svg' alt='facebook' />
                            </a>
                        </li>
                    </ul>
                </footer>
            </div>
        </section>
    );
}

export default Footer;
