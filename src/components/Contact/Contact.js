import React, { Component } from 'react';

class Contact extends Component {
    render() {
        return (
            <div id="fh5co-main">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 col-md-offset-2">
                            <h2>Contact</h2>
                            <div className="fh5co-spacer fh5co-spacer-sm" />
                            <form action="/">
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <input type="text" className="form-control" placeholder="First Name" />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <input type="text" className="form-control" placeholder="Last Name" />
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="form-group">
                                            <input type="email" className="form-control" placeholder="Email Address" />
                                        </div>
                                        <div className="form-group">
                                            <textarea name="message" id="message" cols={30} className="form-control" rows={10} defaultValue={""} />
                                        </div>
                                        <div className="form-group">
                                            <input type="submit" className="btn btn-primary" defaultValue="Send Message" />
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Contact;