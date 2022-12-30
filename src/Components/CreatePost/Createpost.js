import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Filebase64 from "react-file-base64";
import "../CreatePost/Createpost.css"

export default function Createpost(){
    const navigate  = useNavigate();

    const [Form,setForm] = useState({
        author:"",
        location:"",
        image:"",
        description:"",
        
    })

    const inputhandler=(id)=>{
      setForm({...Form,image:id})
    }

    const handlesubmit= (e)=>{

e.preventDefault();
axios({
    url:"instaclone-backend-36aa.vercel.app/postdata",
    method:"POST",
    headers:{},
    data:Form,
}).then((res)=>{
    console.log(res)

}).catch((err)=>{
console.log(err)
})
console.log(Form)

setForm({
    author:"",
    location:"",
    image:"",
    description:"",
    
})
navigate("/post")
    }


    return (
    <>
    <div className="post-box">
        <form className="form-Card" onSubmit={handlesubmit} >
           
        <div className="file-select">
        <Filebase64
              type="image"
              multiple={false}
              onDone={({ base64 }) => inputhandler(base64)}
              id="choose"
            />
        </div>
       
<div className="data">
    <input id="auth" type='text' placeholder="Author" onChange={(e)=>{setForm({...Form,  author:e.target.value})}} />
    <input id="loc" type='text' placeholder="Location"  onChange={(e)=>{setForm({...Form, location:e.target.value})}}/>
</div>
<input id="des" type="text" placeholder="Description" onChange={(e)=>{setForm({...Form, description:e.target.value})}} />
<button type="submit">{" "} Post</button>
</form>
  </div>

    </>
    )
}