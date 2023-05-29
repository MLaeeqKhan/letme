import axios from "axios";
import { useState } from "react"
import {useNavigate} from 'react-router-dom'

const Signup = () => {
  const navigator=useNavigate();
  const [user, setUser]=useState({email:"",pass:"",cPass:""}); 
  let name, value;
  const handleInputs=(e)=>{
  name=e.target.name;
  value=e.target.value;
  setUser({...user,[name]:value});
  } 

  const postDate=async (e)=>{
   e.preventDefault();
  //  const res = await axios.post('/signup',{...user}) //axios is better according to me for apis instead of fetch, ye ... user kpo spread operator(...) kehty hain search ker lein
  //  console.log(res);
  //  console.log("Email:"+user);
  //  const data = await res.json();
  //  if(data.status===422 || !data){
  //   window.alert("Invalid Registraion");
  //   console.log("Invalid Registraion");
  //  }
  //  else{
  //   window.alert(" Registraion Successful");
  //   console.log("Registraion Successful");
  //   navigator("/Login");

  //  }

  const {email,pass,cPass}=user;
  console.log("Email:"+email);
   const res = await fetch("/signup",{ // ye /api/auth kahan hy?
      method:"POST",
      headers:{
        "content-type":"application/json"
      },
      
      body: JSON.stringify({email,pass,cPass})
   });
   const data = await res.json();
   console.log(data);
   if(res.status===422 || !data){
    window.alert("Invalid Registration");
    console.log("Invalid Registration");

   }
   else{
    window.alert("Valid... Registration");
    console.log("Valid Registration");
    console.log("Email in Else:"+email);
    // console.log("data:"+data);
    navigator("/Login");
   }
  }

  return (
    <>  
       <form action="" method="POST">
    {/* <small style='color:red;'>Please signup !*</small>"; */}
       
        <h2>Signup To letMe</h2>
        <div className="inputBox">
            <input type="text" name="email" onChange={handleInputs} value={user.email} required/>
            <span>Email Address</span> 
        </div>
       
         
         {/* <small style="color:red;">Email already in use!*</small>'; */}
      
      

        <div className="inputBox">
            <input type="password" name="pass" onChange={handleInputs} value={user.pass} required/>
            <span>Password</span>
        </div>

        <div className="inputBox">
            <input type="password" name="cPass" onChange={handleInputs} value={user.cPass} required/>
            <span>Confirm Password</span>
        </div>

       
      {/* <small style='color:red;'>Password do not match!*</small> */}
     
        <div><button className="signup" onClick={postDate} type="submit">Sign up</button></div>

    </form>
    <style>{` 
     form{
      display: flex;
      justify-content: center;
      align-items: center;
      min-height: 100vh;
      flex-direction: column;
      gap: 30px;
      background: #1d2b3a;
  }
  h2{
      color: #00dfc4;
  }
  .inputBox{
  position: relative;
  width: 250px;
  }
   button{
      background-color: #00dfc4;
      width: 250px;
      padding: 10px;
      border-radius: 5px;
      border: none;
      color: #fff;
      outline: none;
      text-decoration: none;
      font-size: 1em;
  }
  button{
    cursor: pointer;
  }
  .inputBox input{
      width: 100%;
      padding: 10px;
      border:1px solid rgb(255, 255, 255,0.25);
      background: #1d2b3a;
      border-radius: 5px;
      outline: none;
      color: #fff;
      font-size: 1em;
  
  }
  .inputBox span{
  position: absolute;
  left: 0;
  padding: 10px;
  pointer-events: none;
  font-size: 1em;
  color: rgb(255, 255, 255,0.25);
  text-transform: uppercase;
  transition: 0.5s;
  }
  .inputBox input:valid~span,.inputBox input:valid~span{
      color:#00dfc4;
      transform: translateX(10px) translateY(-7px);
      font-size: 0.65em;
      padding: 0 10px;
      background: #1d2b3a;
      border-left: 1px solid #00dfc4;
      border-right: 1px solid #00dfc4;
      letter-spacing: 0.2em;
  }
  
  .inputBox:nth-child(2) input:valid ~ span,
  .inputBox:nth-child(2) input:focus ~ span{
  background: #00dfc4;
  color: #1d2b3a;
  border-radius: 2px;
  }
  .inputBox input:valid,
  inputBox input:focus
  {
  border: 1px solid #00dfc4;
  }
    `}</style>
    </>
  )
}

export default Signup
