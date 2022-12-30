import React from "react";
import  image from "../../images/landing.png"
import "../LandingPage/LandingPage.css"
import {  Link} from 'react-router-dom';

export default function LandingPage(){
    return <>
    <div>
        <div className="LandingPage">
            <section className="img">
            <img className="landing_img" src={image} alt="" />
            </section>
            <section className="text">
            <div className="heading">
            <h1>10X Team 04</h1>
           </div>
          
                <div className="btn">
                <Link to="/post" className="btn"><button>Enter</button></Link>
                </div>
                </section>
           
        </div>
    </div>
    </>
}