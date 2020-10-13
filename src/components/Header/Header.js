import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Header extends Component {
    render() {
        return (
            <div>
                <div id="fh5co-offcanvass">
                    <a href="#" className="fh5co-offcanvass-close js-fh5co-offcanvass-close">Menu <i className="icon-cross" /> </a>
                    <h1 className="fh5co-logo"><a className="navbar-brand" href="/"><img src="../images/logo_ikorn.gif" alt="Logo IkronSolutions"></img></a></h1>
                    <ul>
                        {/* <li>
                            <Link to="/">Home</Link>
                        </li> */}
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                        <li>
                            <Link to="/pricing">Pricing</Link>
                        </li>
                        <li>
                            <Link to="/contact">Contact</Link>
                        </li>
                    </ul>
                    <h3 className="fh5co-lead">Connect with us</h3>
                    <p className="fh5co-social-icons">
                        <a href="/"><i className="icon-twitter" /></a>
                        <a href="/"><i className="icon-facebook" /></a>
                        <a href="/"><i className="icon-instagram" /></a>
                        <a href="/"><i className="icon-dribbble" /></a>
                        <a href="/"><i className="icon-youtube" /></a>
                    </p>
                </div>
                <header id="fh5co-header" role="banner">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <a href="#" className="fh5co-menu-btn js-fh5co-menu-btn">Menu <i className="icon-menu" /></a>
                                <a className="navbar-brand" href="/"><img src="../images/logo_ikorn.gif" alt="Logo IkronSolutions"></img></a>
                            </div>
                        </div>
                    </div>
                </header>
                {/* END .header */}
            </div>
        );
    }
}

export default Header;