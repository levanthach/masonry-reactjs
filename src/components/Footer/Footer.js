import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return (
            <footer id="fh5co-footer">
                <div className="container">
                <div className="row row-padded">
                    <div className="col-md-12 text-center">
                    <p className="fh5co-social-icons">
                        <a href="/"><i className="icon-twitter" /></a>
                        <a href="/"><i className="icon-facebook" /></a>
                        <a href="/"><i className="icon-instagram" /></a>
                        <a href="/"><i className="icon-dribbble" /></a>
                        <a href="/"><i className="icon-youtube" /></a>
                    </p>
                    <p><small>© Hydrogen Free HTML5 Template. All Rights Reserved. <br />Designed by: <a href="http://freehtml5.co/" target="_blank" rel="noopener noreferrer">FREEHTML5.co</a> | Images by: <a href="http://pexels.com" target="_blank" rel="noopener noreferrer">Pexels</a> </small></p>
                    </div>
                </div>
                </div>
            </footer>
        );
    }
}

export default Footer;