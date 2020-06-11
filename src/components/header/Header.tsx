import * as React from 'react';
//routing link
import { Link } from 'react-router-dom';
//fontawesome imports
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


//function component that renders the app header
export const Header = () => {
    return (
        <>
            <nav className="first-nav py-0 my-0">
                <div id="navbarBasicExample" className="navbar-menu">
                    <div className="navbar-start">
                    </div>
                    <div className="navbar-end">
                        <span className='navbar-item'>Help</span>
                        <span className='navbar-item'>FAQs</span>
                    </div>
                </div>
            </nav>
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

                        <div className="navbar-item" style={{visibility: 'hidden', width: '20rem'}}>
                            <a className="navbar-link">
                                filler
                            </a>
                        </div>
         
                        <div className="navbar-item has-dropdown is-hoverable">
                            <a className="navbar-link is-arrowless">
                                MEN
                            </a>
                            <div className="navbar-dropdown is-right">
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
                            <a className="navbar-link is-arrowless">
                                <FontAwesomeIcon icon={faPlus} />
                            </a>

                            <div className="navbar-dropdown is-right">
                                <a className="navbar-item">
                                    About Air Clothing.®
                            </a>
                                <a className="navbar-item">
                                    Work with us!
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
                                <a className="button is-blue-custom">
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