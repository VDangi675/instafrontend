import React, { useEffect, useState } from 'react';
//import Card from "../../Card"
import Card from "../Card/Card"
//import "../Card/Card.css"
import Headers from "../headers/Headers"
import axios from "axios"


const PostView = () => {
    const [posts, setPosts] = useState([])
    useEffect(() => {
        axios.get("instaclone-backend-36aa.vercel.app/data")     // need to change this https://my-instaclone-server.herokuapp.com/
            .then((res) => {
                setPosts(res.data.reverse())         // confusion
            })
    }, [])

    return (
<div>
    <Headers/>
        <div className="post-container">
            {posts.map((post,i) =>{
                return(
                    <Card post={post} key={i}/>
    //                <section className='card'>
    //                 <section className="Card-Header">
    //         <div >
    //             <div className="Card-Header__name">{post.author}</div>
    //             <div className="Card-Header__location">{post.location}</div>
    //         </div>
    //         <span id="spm-1">
    //     <img className="i-2" src={require("../../images/more.png")} alt=""/>
    //         </span>
    //     </section>
    //     <section className="card-image">
    //    <img id="imgg-1" src={require("" + post.image)} alt="place"/>
    //     </section>
    //                </section>
                )
            })}
        </div>
    
</div>
        )
}
export default PostView




// export default function PostView(){


//     const [Posts,setPosts] = useState([])

//  useEffect(()=>{
//     axios.get("http://localhost:3002/data").then((imagedata)=>{
//        // let data = imagedata.data.images.reverse();
//         let data = imagedata.data.reverse();
//         setPosts(data)
//     }).catch((err)=>{
//         if(err){
//             console.log(err)
//         }
//     })
//  },[])

// // const [Posts, setPosts] = useState([])
// //     useEffect(() => {
// //         axios.get("http://localhost:3002/data")     // need to change this https://my-instaclone-server.herokuapp.com/
// //             .then((res) => {
// //                 setPosts(res.data.reverse())         // confusion
// //             })
// //     }, [])
   


//     return (
//         <div className='post-container'>
//             <Headers/>
//             {Posts.map((post,i)=>{
//                 return(
//                     <Card post={post} key={i}/>
//                 )
//             })}
//         </div>
//     )
// }