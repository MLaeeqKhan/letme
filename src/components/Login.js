import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";
const Login = () => {
  const navigator = useNavigate();
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const {token, setUserToken} = useContext(AuthContext)


  const loginUser = async (e) => {
    e.preventDefault();
    const res = await fetch("/signin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, pass }),
    });
    console.log(res);
    const data = await res.json();
    console.log(data);

    if (res.status === 400 || !data) {
      window.alert("Invalid Credential");
    } else {
      setUserToken(data)
      
      // localStorage.setItem("token",JSON.stringify(data.token));
      window.alert("Login Successfull");
      navigator("/");
    }
  };
  return (
    <>
      <form action="" method="POST">
        <h2>Login To letMe</h2>
        <div className="inputBox">
          <input
            type="text"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <span>Email Address</span>
        </div>

        {/* <small style='color:red;'>Email or Password incorrect!*</small> */}

        <div className="inputBox">
          <input
            type="password"
            name="pass"
            value={pass}
            onChange={(e) => setPass(e.target.value)}
            required
          />
          <span>Password</span>
        </div>

        <div>
          <input
            className="login"
            type="submit"
            value="Log in"
            onClick={loginUser}
          />{" "}
        </div>
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
  .login{
      background-color: #00dfc4;
      border: none;
      width: 250px;
      padding: 10px;
      border-radius: 5px;
      color: #fff;
      font-size: 1em;
  }
  .login:hover{
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
  );
};

export default Login;
