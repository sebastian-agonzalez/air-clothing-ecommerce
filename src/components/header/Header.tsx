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

                    <span role="button" className="navbar-burger burger"
                        aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                    </span>
                </div>

                <div id="navbarBasicExample" className="navbar-menu">
                    <div className="navbar-start">

                        <div className="navbar-item" style={{visibility: 'hidden', width: '20rem'}}>
                            <span className="navbar-link">
                                filler
                            </span>
                        </div>
         
                        <div className="navbar-item has-dropdown is-hoverable">
                            <span className="navbar-link is-arrowless">
                                MEN
                            </span>
                            <div className="navbar-dropdown is-right">
                                <span className="navbar-item">
                                    skirts
                            </span>
                                <span className="navbar-item">
                                    tops
                            </span>
                                <span className="navbar-item">
                                    trousers
                            </span>
                                <span className="navbar-item">
                                    dresses
                            </span>
                            </div>
                        </div>

                        <div className="navbar-item has-dropdown is-hoverable">
                            <span className="navbar-link is-arrowless">
                                WOMEN
                            </span>
                            <div className="navbar-dropdown">
                                <span className="navbar-item">
                                    skirts
                            </span>
                                <span className="navbar-item">
                                    tops
                            </span>
                                <span className="navbar-item">
                                    trousers
                            </span>
                                <span className="navbar-item">
                                    dresses
                            </span>
                            </div>
                        </div>

                    </div>

                    <div className="navbar-end">
                        <div className="navbar-item has-dropdown is-hoverable">
                            <span className="navbar-link is-arrowless">
                                <FontAwesomeIcon icon={faPlus} />
                            </span>

                            <div className="navbar-dropdown is-right">
                                <span className="navbar-item">
                                    About Air Clothing.®
                            </span>
                                <span className="navbar-item">
                                    Work with us!
                            </span>
                                <span className="navbar-item">
                                    Contact
                            </span>
                                <hr className="navbar-divider" />
                                <span className="navbar-item">
                                    FAQs
                            </span>
                            </div>
                        </div>
                        <div className="navbar-item">
                            <div className="buttons">
                                <span className="button is-blue-custom">
                                    <strong>Sign up</strong>
                                </span>
                                <span className="button is-light">
                                    Log in
                            </span>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}