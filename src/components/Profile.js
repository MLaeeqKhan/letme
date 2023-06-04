import prolfileImg from "../images/laeeq.jpeg";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import {useEffect} from 'react'

const Profile = () => {


  

  return (
    <>
      
      <div className="containerAboutMe">
        <form action="" method="POST">
          <div className="innerContainerAboutMe">
            <div className="colAboutme1 colAboutme">
              <img src={prolfileImg} alt="profileImg" />
            </div>
            <div className="colAboutme2 colAboutme">
              <label htmlFor="name">M. LAEEQ KHAN</label>
              
              <label htmlFor="areaOfTech">WEB DEVELOPER:</label>
          
            
              <label htmlFor="experience">EXPERIENCE: 3</label>
             
              <div className="typeJobeContainer">
                
                <label htmlFor="jobType">Remote</label>
                
                
               
              </div>
            </div>
            <div className="colAboutme3 colAboutme">
            <h2> Skills: </h2>
              <label for="Skills">
              MERN STACK, REACRJS, NEXTJS{" "}
              </label>
              
              <h2>Languages:</h2>
            <label for="Languages">ENGLISH, URDU</label>
             
            </div>
            <div className="colAboutme4 colAboutme">
             
                <h2>WorkLinks</h2>
             
              <Link to='mailto:lk7715714@gmail.com'><label for="Email">Email</label></Link>
             
              <Link to='https://github.com/MLaeeqKhan'><label htmlFor="Github">Github</label></Link>
             
             <Link to='https://www.linkedin.com/in/m-laeeq-khan-113335247/'> <label for=" Linkedin"> Linkedin</label></Link>

             
             <Link to='https://www.facebook.com/mlaeeq.khan.5'> <label for=" Facebook">Facebook </label></Link>

              
             <Link to='https://twitter.com/MLuckyKhan1'> <label for="Twitter">Twitter</label></Link>

             
              <Link to='https://www.instagram.com/mlaeeqkhan'><label for="Instagram">Instagram</label></Link>
              
            </div>
          </div>
          {/* <input type="submit" className="Create" value="Create"/> */}
        </form>
      </div>
    
    </>
  );
};

export default Profile;
