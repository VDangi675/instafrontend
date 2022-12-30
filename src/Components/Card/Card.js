import React from "react";
import "../Card/Card.css"

export default function Card({post}){
    return(
        <>
       <section className="Card">
        <section className="Card-Header">
            <div >
                <div className="Card-Header__name">{post.author}</div>
                <div className="Card-Header__location">{post.location}</div>
            </div>
            <span id="spm-1">
        <img className="i-2" src={require("../../images/more.png")} alt=""/>
            </span>
        </section>
        <section className="card-image">
       <img id="imgg-1" src={post.image} alt="place"/>
        </section>
        <section className="foooter">
<section className="likes">
<img className="i-2" src={require("../../images/heart.png")} alt=""/>
<img className="i-2" src={require("../../images/send.png")} alt=""/>
<span id="spm">{post.date}</span>
</section>

        </section >

       <div className="lik"> {post.likes} Likes</div>
        <div className="des">{post.description}</div>
        </section>
     
        </>
    )
}