import React from 'react'
import ProfileImg from '../images/profile.png'
import {Link, useParams} from 'react-router-dom'

const ThreadList = () => {
    const params = useParams()
    console.log(params);
    
  return (
    <>
      <div class="jumbotron">
    <h1>Welcome to React - Coding Forums</h1>      
    <p>'.$desc.'</p>
    <hr/>
    <p class="p">This is a peer to peer forum. No Spam / Advertising / Self-promote in the forums is not allowed. Do not post copyright-infringing material. Do not post “offensive” posts, links or images. Do not cross post questions. Remain respectful of other members at all times.</p>   
  
  </div>

  <div><form class="form"  action="" method="post">
  <h1 class="heading">Start a Discussions</h1>
    <div class="input"> Problem Title: <input style={{height: "40px;"}} type="text" name="thread_title" required/>
    <small>Keep your title short and crispy as posible</small></div>

    <div class="input">Elaborate your Question: <textarea type="text" name="thread_desc" rows="10" required></textarea></div>

    {/* <input  type="hidden" name="user_id" value="'.$_SESSION["userid"].'"> */}

    <div class="input"> <input class="btn" type="submit" value="submit"/>
   </div>

  </form></div>

  <center><div class="media" style={{color:"red" ,width: "50%" ,paddingtop: "15px",borderradius: "1.6rem"}}><p>You are not logged in. Please login to be able to post a Question!</p></div></center>

  <div  class="media">
 <div class="imge" >
     <img style={{width: "4rem"}} src={ProfileImg} alt="profile img" />
 </div>
 <div class="name" ><p >Khan@.com</p> </div>
 <div class="cont">
     <div class="title"><Link to="/thread"><p style= {{paddingleft:"2rem"}}>React installation Issue</p> </Link></div>
 
     <div class="desc"><p style={{paddingleft:"2rem"}}>ReactReactReactReactReactReactReactReactReact</p></div>
     <p><hr/></p>
     <div class="dateTime"><p style={{ paddingleft:"2rem"}}>
      11:00 pm</p></div>
 </div>
 </div>

  <style>={`
   html{
    font-size: 100%;
}
@media(max-width:320px){
    html{
        font-size: 45%;
    }
    .form{
        width:100vw;
}

}
@media(max-width:425px){
    html{
        font-size: 45%;
    }
    .form{
    /* width:100vw; */
}

}
#ques{
    min-height: 43px;
    margin: 6rem;
    background-color: rgb(217, 212, 212);

}
.media  {
   display: flex;
   flex-direction: column;
   margin: 6rem;
   max-width: 30rem;
   background: rgba(255, 255, 255, 0.41);
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    border: 1px solid rgba(255, 255, 255, 0.3);
}
.input{
    display: flex;
    flex-direction: column;
    margin: 2rem;
   
    
}
input,textarea{
    box-shadow: 0 1rem 1rem -0.7rem rgba(0, 0, 0, 0.4);
    border:none;
    border-radius: 7px;
    
}
.form{
    display: flex;
    flex-direction: column;
    margin: 6rem;
    width: 40rem;
    width: 80%;
    border-radius:7px;
    background-color: rgb(223, 238, 248);
    box-shadow: 0 1rem 1rem -0.7rem rgba(0, 0, 0, 0.4);
    
}
.btn {
        border: none;
        color: white;
        width:10rem;
        border-radius:0.6rem;
        padding: 1rem 3rem;
        text-align: center;
        text-decoration: none;
        display: inline-block;
        font-size: 1.2rem;
        margin: 0.2rem 0.1rem;
        margin-left:-2rem;
        cursor: pointer;
        background-color: #4CAF50;
       }
       .btn:hover{
        background-color: #75eb78;
        transition: 0.5s;
       }
.heading{
    padding:2rem;
}



.jumbotron{
    display: flex;
    text-align: center;
    flex-direction: column;
    margin: 6rem;
    padding: 2rem;
    border-radius:0.7rem;
    border-bottom-right-radius: 10rem;
    background-color: rgb(217, 212, 212);
    box-shadow: 0 1rem 1rem -0.7rem rgba(0, 0, 0, 0.4);

}
  `}</style>
    </>
  )
}

export default ThreadList
