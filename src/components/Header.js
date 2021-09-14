import React, { Component } from 'react';
export default class Header extends Component {
  render() {
    let myNews = this.props.myNews;
    return (

      
      <header id="home">
         <nav id="nav-wrap">
            <ul id="nav" className="nav">
               <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
               <li><a className="smoothscroll" href="#about">About</a></li>
             <li><a className="smoothscroll" href="#resume">Resume</a></li>
               <li><a className="smoothscroll" href="#portfolio">Works</a></li>
               <li><a className="smoothscroll" href="#contact">Contact</a></li>
            </ul>
         </nav>

         <div className="row banner">
            <div className="banner-text">
               <h1 className="responsive-headline">I am {myNews.name}.</h1>
               <h3 style={{color:'#fff', fontFamily:'sans-serif '}}>I am a {myNews.role}.{myNews.Current_Role}
               </h3>
               <hr/>
               <ul className="social">
                  {
                    myNews.socialsites && myNews.socialsites.map((item) => {
                      return(
                              <li>{item.name} {item.url}
                              </li>
                            )
                          }
                    )
                  }
               </ul>
            </div>
         </div>

         <p className="scrolldown">
            <a className="smoothscroll" href="#about"><i className="icon-down-circle"></i></a>
         </p>

      </header>

    );
  }
}