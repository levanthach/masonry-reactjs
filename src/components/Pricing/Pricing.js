import React, { Component } from 'react';

class Pricing extends Component {
    render() {
        return (
            <div id="fh5co-main">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 col-md-offset-2">
                            <h2>Pricing</h2>
                            <div className="fh5co-spacer fh5co-spacer-sm" />
                            <div className="row">
                                <div className="col-md-4">
                                    <div className="fh5co-pricing-table">
                                        <h3>Starter</h3>
                                        <ul className="fh5co-list-check">
                                            <li className="fh5co-include">5 users</li>
                                            <li className="fh5co-include">10 projects</li>
                                            <li>10GB amount of space</li>
                                            <li>5 e-mail accounts</li>
                                        </ul>
                                        <a href="/" className="btn btn-block btn-sm btn-outline">Sign up</a>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="fh5co-pricing-table">
                                        <h3>Basic</h3>
                                        <ul className="fh5co-list-check">
                                            <li className="fh5co-include">5 users</li>
                                            <li className="fh5co-include">10 projects</li>
                                            <li className="fh5co-include">10GB amount of space</li>
                                            <li>5 e-mail accounts</li>
                                        </ul>
                                        <a href="/" className="btn btn-block btn-sm btn-primary">Sign up</a>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="fh5co-pricing-table">
                                        <h3>Pro</h3>
                                        <ul className="fh5co-list-check">
                                            <li className="fh5co-include">5 users</li>
                                            <li className="fh5co-include">10 projects</li>
                                            <li className="fh5co-include">10GB amount of space</li>
                                            <li className="fh5co-include">5 e-mail accounts</li>
                                        </ul>
                                        <a href="/" className="btn btn-block btn-sm btn-outline">Sign up</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Pricing;