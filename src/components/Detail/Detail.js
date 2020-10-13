import React, { Component } from 'react';
import myData from '../Data/Data.json';
class Detail extends Component {
  render() {
    var pId = parseInt(this.props.match.params.id);
    return (
      <div id="fh5co-main">
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-md-offset-2">
              {
                myData.map((val, key) => {
                  if (val._id == pId) {
                    return (
                      <div key = {key}>
                        <h2>{val.name}</h2>
                        <div className="fh5co-spacer fh5co-spacer-sm" />
                        <p>
                          <img src={"../../images/" + val.img} alt={val.name} className="img-rounded img-responsive" style={{margin: 'auto'}}/>
                        </p>
                        <p style = {{textAlign: "justify"}}>{val.about}</p>
                      </div>
                    )
                  }
                })
              }
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Detail;