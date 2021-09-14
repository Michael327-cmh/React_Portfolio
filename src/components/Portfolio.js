import React, { Component } from 'react';
export default class portfolio extends Component {
  render() {
    let myNews = this.props.myNews;
    return (
      <section id="portfolio">
      <div className="row">
        <div className="twelve columns collapsed">
          <h1>View Below!</h1>
          
          {
            myNews.Portfolio && myNews.Portfolio.map((item)=>{
              return(
                <div className="columns portfolio-item">
                  <div className="item-wrap">
                      <div className="overlay">
                        <div className="portfolio-item-meta">
                          <h5>{item.name}</h5>
                          <p>{item.description}</p>
                 
                          <p>{item.Webpage}</p>
                        </div>
                      </div>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
  </section>
        );
  }
}