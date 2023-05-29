import prolfileImg from "../images/profile.png";
import { useNavigate } from "react-router-dom";
import {useEffect} from 'react'

const Profile = () => {
// const Navigator =useNavigate();
// const callProfilePage=async()=>{
//   try {
//     const res= await fetch('/profile',{
//       method:"GET",
//       headers:{
//         Accept:"application/json",
//         "Content-Type":"application/json"
//       },
//       credentials:"include"
//     })
//     const data = await res.json();
//     console.log(data);
//     if(!res.status===401){
// const error = new Error(res.error);
// throw error;
//     }
//   } catch (error) {
//     console.log(error);
//     Navigator("/Login");
//   }
// }

// useEffect(()=>{
//   callProfilePage();
// },[])


  function toggleAbout() {
    document.getElementById("TimelineContent").style.display = "none";
    document.getElementById("AboutContent").style.display = "block";
    document.getElementById("Aboutbutton").style.textDecoration = "underline";
    document.getElementById("Aboutbutton").style.backgroundColor = "skyblue";
    document.getElementById("TimeLinebutton").style.backgroundColor = "";
    document.getElementById("Aboutbutton").style.transform = "scale(1.03)";
    document.getElementById("TimeLinebutton").style.textDecoration = "none";
  }
  function toggleTimelineContent() {
    document.getElementById("AboutContent").style.display = "none";
    document.getElementById("TimelineContent").style.display = "block";
    document.getElementById("TimeLinebutton").style.textDecoration ="underline";
    document.getElementById("TimeLinebutton").style.backgroundColor = "skyblue";
    document.getElementById("Aboutbutton").style.backgroundColor = "";
    document.getElementById("TimeLinebutton").style.transform = "scale(1.03)";
    document.getElementById("Aboutbutton").style.textDecoration = "none";
  }

  return (
    <>
      <div className="containerAboutMe">
        <form action="" method="GET">
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
                <p> M. Laeeq Khan</p>
                <p> web Developer</p>
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
                  <li>LinkedIn</li>
                  <li>Instagram</li>
                  <li>FaceBook</li>
                  <li>Twitter</li>
                </ul>
              </div>
              <div className="col buttonAboutMe">
                <button id="Aboutbutton" onClick={toggleAbout}>
                  About
                </button>
                <button id="TimeLinebutton" onClick={toggleTimelineContent}>
                  Timeline
                </button>
                <div className="content AboutContent" id="AboutContent">
                  <div className="list">
                    <ul>
                      <li>User Id</li>
                      <li>Name</li>
                      <li>Email</li>
                      <li>Phone</li>
                      <li>Profession</li>
                    </ul>
                    <ul style={{ color: "blue" }}>
                      <li>3546345635</li>
                      <li>Khan</li>
                      <li>khan@gmail.com</li>
                      <li>033333333333</li>
                      <li>Web Developer </li>
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
        </form>
      </div>
    </>
  );
};

export default Profile;
