import React, { Component } from 'react';
import myData from '../Data/Data.json';
import Item from './Item';
class Home extends Component {
    render() {
        return (
            <div id="fh5co-main">
            <div className="container">
              <div className="row">
                <div id="fh5co-board" data-columns>
                {
                  myData.map((val, key) => {
                    return <Item key = {key} name= {val.name} pId = {val._id} image = {val.img} />
                  })
                }
                </div>
              </div>
            </div>
          </div>
        );
    }
}

export default Home;