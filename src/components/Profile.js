// import prolfileImg from "../images/laeeq.jpeg";
import prolfileImg from "../images/profile.png";

import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { getDeveloper } from "../apis/developerAPIs";
import { AuthContext } from "../contexts/AuthContext";
// import { useNavigate } from "react-router-dom";

const Profile = () => {
  const navigator =useNavigate();
  const {UserID} = useContext(AuthContext);
  const [flag,setFlag] = useState(false);
  const [developer, setDeveloper] = useState([]);
  const fetchData = async () => {
    const isExist = await getDeveloper();
    setDeveloper(isExist.data.developer);
  };

  useEffect(() => {
    fetchData();
  }, []);
  
  const foundDeveloper = developer.find((item) => item.userID === UserID);
  console.log("Developer:"+foundDeveloper);
  return (
    <>
    

      <div className="containerAboutMe">
       {foundDeveloper?(<form action="" method="POST">
          <div className="innerContainerAboutMe">
            <div className="colAboutme1 colAboutme">
              <img src={prolfileImg} alt="profileImg" />
            </div>
            <div className="colAboutme2 colAboutme">
              <label htmlFor="name">{foundDeveloper.name}</label>

              <label htmlFor="areaOfTech">{foundDeveloper.areaOfTech}</label>

              <label htmlFor="experience">{foundDeveloper.experience}</label>

              <div className="typeJobeContainer">
                <label htmlFor="jobType">{foundDeveloper.jobType}</label>
              </div>
            </div>
            <div className="colAboutme3 colAboutme">
              <h2> Skills: </h2>
              <label for="Skills">{foundDeveloper.skills} </label>

              <h2>Languages:</h2>
              <label for="Languages">{foundDeveloper.languages}</label>
            </div>
            <div className="colAboutme4 colAboutme">
              <h2>WorkLinks</h2>

              <Link to={`mailto:${foundDeveloper.email}`}>
                <label for="Email">Email</label>
              </Link>

              <Link to={foundDeveloper.gitHub}>
                <label htmlFor="Github">Github</label>
              </Link>

              <Link to={foundDeveloper.linkedin}>
                {" "}
                <label for=" Linkedin"> Linkedin</label>
              </Link>

              <Link to={foundDeveloper.facebook}>
                {" "}
                <label for=" Facebook">Facebook </label>
              </Link>

              <Link to={foundDeveloper.twitter}>
                {" "}
                <label for="Twitter">Twitter</label>
              </Link>

              <Link to={foundDeveloper.instagram}>
                <label for="Instagram">Instagram</label>
              </Link>
            </div>
          </div>
          {/* <input type="submit" className="Create" value="Create"/> */}
        </form>):(navigator('/CreateProfile'))}
        
      </div>
    </>
  );
};

export default Profile;
