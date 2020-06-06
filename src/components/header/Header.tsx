import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom';



export const Header = () => {
    return (
        <>
            <nav className="navbar" role="navigation" aria-label="main navigation">

                <div className="navbar-brand">
                    <Link to='/'>
                        <img alt='logo' src="/airclothinglogo.png" width="300" height="auto" />
                    </Link>

                    <a role="button" className="navbar-burger burger"
                        aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                    </a>
                </div>

                <div id="navbarBasicExample" className="navbar-menu">
                    <div className="navbar-start">

                        <div className="navbar-item has-dropdown is-hoverable is-right is-arrowless">
                            <a className="navbar-link is-arrowless">
                                WOMEN
                            </a>
                            <div className="navbar-dropdown">
                                <a className="navbar-item">
                                    skirts
                            </a>
                                <a className="navbar-item">
                                    tops
                            </a>
                                <a className="navbar-item">
                                    trousers
                            </a>
                                <a className="navbar-item">
                                    dresses
                            </a>
                            </div>
                        </div>

                        <div className="navbar-item has-dropdown is-hoverable">
                            <a className="navbar-link is-arrowless">
                                WOMEN
                            </a>
                            <div className="navbar-dropdown">
                                <a className="navbar-item">
                                    skirts
                            </a>
                                <a className="navbar-item">
                                    tops
                            </a>
                                <a className="navbar-item">
                                    trousers
                            </a>
                                <a className="navbar-item">
                                    dresses
                            </a>
                            </div>
                        </div>

                    </div>

                    <div className="navbar-end">
                        <div className="navbar-item has-dropdown is-hoverable">
                            <a className="navbar-link">
                                {/* <FontAwesomeIcon icon="coffee" />  
                                <i className="fas fa-plus"></i>                          */}
                            </a>

                            <div className="navbar-dropdown">
                                <a className="navbar-item">
                                    About
                            </a>
                                <a className="navbar-item">
                                    Jobs
                            </a>
                                <a className="navbar-item">
                                    Contact
                            </a>
                                <hr className="navbar-divider" />
                                <a className="navbar-item">
                                    FAQs
                            </a>
                            </div>
                        </div>
                        <div className="navbar-item">
                            <div className="buttons">
                                <a className="button is-primary">
                                    <strong>Sign up</strong>
                                </a>
                                <a className="button is-light">
                                    Log in
                            </a>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}