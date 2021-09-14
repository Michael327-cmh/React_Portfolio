import React, { Component } from 'react';
export default class About extends Component {
  render() {
    let myNews = this.props.myNews;
    return (
      <section id="about">
         <div className="row">

            <div className="three columns">

               <img className="profile-pic"  src="images/profilepic.jpg" alt="" />

            </div>

            <div className="nine columns main-col">

               <h2>About Me</h2>
               <p>
               {
                 myNews.aboutme
               }
               </p>

               <div className="row">

                  <div className="columns contact-details">

                  <h2>Contact Information</h2>
                  <p className="address">
       						<span>{myNews.name}</span>
                     <br></br>
       						   <span>
                     {myNews.address}
                     </span>
                     <br></br>
                     <span>
                     {myNews.number}
                    </span>
                    <br></br>
                    <span>{myNews.website}</span>
       					   </p>
                  </div>
               </div>
            </div>
         </div>
      </section>
    );
  }
}