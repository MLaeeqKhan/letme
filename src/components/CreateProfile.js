import React from 'react'
import prolfileImg from "../images/profile.png";
import {useState} from 'react'


const CreateProfile = () => {
    
  const [user, setUser]=useState({name:"",areaOfTech:"",workLinks:"",phone:"",skills:"",email:""}); 
  let name, value;
  const handleInputs=(e)=>{
    name=e.target.name;
    value=e.target.value;
    setUser({...user,[name]:value});
    } 

  return (
    <>
      <div className="containerAboutMe">
        <form action="" method="POST">
        CREATE PROFILE
          <div className="innerContainerAboutMe">
            <div className="row1">
              <div className="col profileImg">
                <img
                  className="profileImg"
                  src={prolfileImg}
                  width={50}
                  height={50}
                  alt="developerIcon"
                  srcSet=""
                />
              </div>
              <div className="col">
                <p><input type="text" placeholder='Enter name' /></p>
                <p><input type="text" placeholder='Your Feild Area' /></p>
                <p><button type='radio'></button></p>
                <p> RANKINGS: 9/10</p>
              </div>
              <div className="col buttonAboutMe">
                <button style={{ color: "blue" }}>Edit Profile</button>
              </div>
            </div>

            <div className="row1">
              <div className="col profileImg">
                WORK LINKS
                <ul>
                  <li><input type="text"/> </li>
                  <li><input type="text"/></li>
                  <li><input type="text"/></li>
                  <li><input type="text"/></li>
                </ul>
              </div>
              <div className="col buttonAboutMe">
                <button id="Aboutbutton" >
                  About
                </button>
                <button id="TimeLinebutton">
                  Timeline
                </button>
                <div className=" AboutContent" id="AboutContent">
                  <div className="list">
                    <ul>
                      {/* <li>User Id</li> */}
                      <li>Email</li>
                      <li>Phone</li>
                      <li>Skills</li>
                    </ul>
                    <ul style={{ color: "blue" }}>
                      {/* <li>3546345635</li> */}
                      {/* <li>Khan</li> */}
                      <li><input type="text"/></li>
                      <li><input type="text"/></li>
                      <li><input type="text"/> </li>
                    </ul>
                  </div>
                </div>

                <div className="content TimelineContent" id="TimelineContent">
                  <ul>
                    <li>hjdhfj</li>
                    <li>jdhfj</li>
                    <li>jsdhf</li>
                    <li>jdfh</li>
                    <li>dfh</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <button onClick={handleInputs}>Create</button>
        </form>
      </div> 
    </>
  )
}

export default CreateProfile
