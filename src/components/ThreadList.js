import React,{useState} from 'react'
import ProfileImg from '../images/profile.png'
import {Link, useParams} from 'react-router-dom'

const ThreadList = () => {

    const params = useParams()
    console.log(params);
    //  const userId = localStorage.getItem('userId');
    const [question, setQuestion]=useState({threadTile:"",threadDesc:""}); 
    let name, value;
    const handleInputs=(e)=>{
    name=e.target.name;
    value=e.target.value;
    setQuestion({...question,[name]:value});
    } 

    const postDate=async (e)=>{
        e.preventDefault();
        
       const {threadTile,threadDesc}=question;

       const data = {
        threadTile,
        threadDesc,
        threadCatId: params.threadCatId, 
        userID: localStorage.getItem('_id'),
      };
    //    console.log("Email:"+email);
        const res = await fetch("/thread",{ 
           method:"POST",
           headers:{
            "content-type":"application/json"
           },
           
           body: JSON.stringify({...data})
        });
        const responce = await res.json();
        console.log(responce);
      
       
       }
  
   
    
  return (
    <>
      <div class="jumbotron">
    <h1>Welcome to React - Coding Forums</h1>      
    <p>React is a free and open-source front-end JavaScript library for building user interfaces based on components. It is maintained by Meta and a community of individual developers and companies.</p>
    <hr/>
    <p class="p"><details><summary><strong>Instraction</strong></summary> This is a peer to peer forum. No Spam / Advertising / Self-promote in the forums is not allowed. Do not post copyright-infringing material. Do not post “offensive” posts, links or images. Do not cross post questions. Remain respectful of other members at all times.</details></p>   
  
  </div>

  <div><form class="form"  action="" method="POST">
  <h1 class="heading">Start a Discussions</h1>
    <div class="input"> Problem Title: <input style={{height: "40px;"}} type="text" name="threadTile" onChange={handleInputs} value={question.threadTile} required/>
    <small>Keep your title short and crispy as posible</small></div>

    <div class="input">Elaborate your Question: <textarea type="text" name="threadDesc" onChange={handleInputs} value={question
    .threadDesc} rows="10" required></textarea></div>

    {/* <input  type="hidden" name="user_id" value="'.$_SESSION["userid"].'"> */}
 <input  type="hidden" name="threadCatId" value={params}/>
    <div class="input"> <input class="btn" type="submit" value="submit" onClick={postDate}/>
   </div>

  </form></div>

  {/* <center><div class="media" style={{color:"red" ,width: "50%" ,paddingtop: "15px",borderradius: "1.6rem"}}><p>You are not logged in. Please login to be able to post a Question!</p></div></center> */}

  <div  class="media">
 <div class="imge" >
     <img style={{width: "4rem"}} src={ProfileImg} alt="profile img" />
 </div>
 <div class="name" ><p >Khan@.com</p> </div>
 <div class="cont">
     <div class="title"><Link to="/thread"><p style= {{paddingleft:"2rem"}}>Programmatically navigate using React router</p> </Link></div>
 
     <div class="desc"><p style={{paddingleft:"2rem"}}>With react-router I can use the Link element to create links which are natively handled by react router.

I see internally it calls this.context.transitionTo(...).

I want to do a navigation. Not from a link, but from a dropdown selection (as an example). How can I do this in code? What is this.context?

I saw the Navigation mixin, but can I do this without mixins?</p></div>
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
    padding:10px;
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
