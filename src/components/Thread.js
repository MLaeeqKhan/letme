import React from 'react'
import profileImg from'../images/profile.png'

const Thread = () => {
  return (
    <>
     <div class="jumbotron">
    <h2>'.$title.'</h2>      
   <pre class="scroll"> '.$desc.'</pre>
    <hr/>
    <p class="p">This is a peer to peer forum. No Spam / Advertising / Self-promote in the forums is not allowed. Do not post copyright-infringing material. Do not post “offensive” posts, links or images. Do not cross post questions. Remain respectful of other members at all times.</p> 
    <p class="user"><h2>Posted by: 'Khan@.com'</h2></p>
  </div>

  <form class="form" action="" method="post">
     <h1>Post a Reply</h1>
   
    <div class="input">Type your Reply: <textarea name="reply" rows="10" required></textarea>
   
    </div>

    {/* <input  type="hidden" name="user_id" value="'.$_SESSION["userid"].'"/> */}

    <div class="input"> <input class="btn" type="submit" value="submit"/>
   </div>
  </form>

  <center><div class="media" style={{color:"red",width:"40rem",paddingtop: "0.8rem",borderradius: "1.6rem"}}><p>You are not logged in. Please login to be able to start a discussion!</p></div></center>
  
  <div class="parent">
 <div class="media">
 <div class="imge" >
     <img style={{width: "4rem"}} src={profileImg} alt="profile img" />
 </div>
 <div class="name" ><p >khan@.com</p> </div>
 <div class="cont">
     <div><pre>hjdhfj jdjf jsd ffdj jdsh  jhjshj hjs </pre></div>
     <p><hr/></p>
     <div class="dateTime"><p>11:00 pm</p></div>
 </div>
 </div>
 </div>
  <style>{`
     html{
        font-size: 100%;
    }
    @media(max-width:320px){
        html{
            font-size: 45%;
        }
    }
    @media(max-width:425px){
        html{
            font-size: 45%;
        }
    }
    #reply{
        min-height: 43px;
        margin: 2rem;
    }
    .media  {
        display:flex;
        flex-direction:column;
        max-width: 40rem;
       margin: 6rem;
       border-radius:7px;
        background: rgba(255, 255, 255, 0.41);
        box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
        border: 1px solid rgba(255, 255, 255, 0.3);

    }
    .parent{
        display: flex;
        flex-direction:column;
        align-items:start;
        
    }
    .cont pre{
       white-space:break-spaces;
    }
    .cont,.form,.input{
        display: flex;
        flex-direction: column;
        margin: 2rem;
      
    }
    .form{
        display: flex;
        flex-direction: column;
        margin: 6rem;
        padding:2rem;
        width: 80%;
        border-radius:7px;
        background-color: rgb(223, 238, 248);
        box-shadow: 0 1rem 1rem -0.7rem rgba(0, 0, 0, 0.4);
    }
        
        textarea{
        border: none;
        box-shadow: 0 1rem 1rem -0.7rem rgba(0, 0, 0, 0.4);
        border-radius: 7px;
        
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
            margin-left:-0rem;
            cursor: pointer;
            background-color: #4CAF50;
           }
           .btn:hover{
            background-color: #75eb78;
            transition: 0.5s;
           }
   

    .jumbotron{
        display: flex;
        text-align: center;
        flex-direction: column;
       
        margin: 6rem;
        padding: 2rem;
        border-radius:7px;
        border-bottom-right-radius: 12rem;
        background-color: rgb(217, 212, 212);
        box-shadow: 0 1rem 1rem -0.7rem rgba(0, 0, 0, 0.4);

    }
    .scroll{
        overflow: scroll;
        text-align: left;
        align-items:top;
        max-height: 20rem;
        padding:1rem;
        background-color:white;
    }
  `}</style>
    </>
  )
}

export default Thread
