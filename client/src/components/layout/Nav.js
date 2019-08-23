import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import './Nav.css';

const Nav = () => {
    return (
        <nav
            className='navbar navbar-expand-sm navbar-light '
            data-toggle='affix'
            style={{ backgroundColor: '#fff' }}
        >
            <div className='mx-auto d-sm-flex d-block flex-sm-nowrap'>
                <button
                    className='navbar-toggler'
                    type='button'
                    data-toggle='collapse'
                    data-target='#navbarsExample11'
                    aria-expanded='false'
                    aria-label='Toggle navigation'
                >
                    <span className='navbar-toggler-icon' />
                </button>
                <div
                    className='collapse navbar-collapse text-center'
                    id='navbarsExample11'
                >
                    <ul className='navbar-nav'>
                        <li className='nav-item'>
                            <a
                                className='nav-link'
                                href='#!'
                                style={{ color: '#3498db' }}
                            >
                                About
                            </a>
                        </li>
                        <li className='nav-item'>
                            <a className='nav-link ' href='#!'>
                                Experience
                            </a>
                        </li>
                        <li className='nav-item'>
                            <a className='nav-link ' href='#!'>
                                Education
                            </a>
                        </li>
                        <li className='nav-item'>
                            <a className='nav-link ' href='#!'>
                                Projects
                            </a>
                        </li>
                        <li className='nav-item'>
                            <a className='nav-link ' href='#!'>
                                Skills
                            </a>
                        </li>
                        <li className='nav-item'>
                            <a className='nav-link ' href='#!'>
                                Blog
                            </a>
                        </li>
                        <li className='nav-item'>
                            <a className='nav-link ' href='#!'>
                                Contact
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Nav;
