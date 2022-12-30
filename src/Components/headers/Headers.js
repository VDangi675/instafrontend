import React from 'react';
import "../headers/Headers.css"
import {  Link} from 'react-router-dom';

export default function Headers(){
    return <>
    <div className='Header'>
        <section className='insta'>
            <img className='img-1' src={require("../../images/header.png")} alt=''/>
        </section>
        <section className='camera'>
          <Link to="/CreatePost" ><img className='img-2' src={require("../../images/camera.png")} alt=''/></Link> 
        </section>
    </div>
    </>
}