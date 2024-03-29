import React from "react";
import defaultProfileImg from "../images/profile.png";

import { Link, useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { getDeveloper } from "../apis/developerAPIs";
import { AuthContext } from "../contexts/AuthContext";
const ShowDev = () => {
  const params = useParams();
  const DevID = params.devID;
  // console.log("DevID:"+DevID);
  const navigator = useNavigate();
  // const {UserID} = useContext(AuthContext);
  // const [flag,setFlag] = useState(false);
  const [imgPath, setImagPath] = useState(
    "http://localhost:5000/public/assets/"
  );
  const [developer, setDeveloper] = useState([]);
  const fetchData = async () => {
    const isExist = await getDeveloper();
    // console.log("isExist",isExist);
    setDeveloper(isExist.data.developer);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const foundDeveloper = developer.find((item) => item._id === DevID);
  // console.log("Developer:"+foundDeveloper);
  const openPdf = (e) => {
    e.preventDefault();
    const pdfUrl = imgPath + foundDeveloper.cv;
    window.open(pdfUrl, "_blank"); 
  };

  return (
    <>
      <div className="containerAboutMe">
        {foundDeveloper ? (
          <form action="" method="POST">
            <div className="innerContainerAboutMe">
              <div className="colAboutme1 colAboutme">
                <img
                  src={imgPath + foundDeveloper.profileImg}
                  alt="ProfileImg"
                />
              </div>
              <div className="colAboutme2 colAboutme">
                <label htmlFor="name">{foundDeveloper.name}</label>

                <label htmlFor="areaOfTech">{foundDeveloper.areaOfTech}</label>

                <div className="typeJobeContainer">
                <label htmlFor="jobType">{foundDeveloper.jobType}</label>
              </div>

                <label htmlFor="experience"> Experience: {foundDeveloper.experience}</label>

                <div className="cvButtonout">
                  <label htmlFor="cvButton"></label>
                  <button className="cvButton" onClick={openPdf}> CV / Resume</button>
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
                <div className="outerShowDevContacts">
                  <div className="showDevContacts">
                    <Link to={`mailto:${foundDeveloper.email}`}>
                      <label for="Email" className="showDevLabel">
                        Email
                      </label>
                    </Link>
                  </div>

                  <div className="showDevContacts">
                    <Link to={foundDeveloper.gitHub}>
                      <label htmlFor="Github" className="showDevLabel">
                        Github
                      </label>
                    </Link>
                  </div>

                  <div className="showDevContacts">
                    {" "}
                    <Link to={foundDeveloper.linkedin}>
                      {" "}
                      <label for=" Linkedin" className="showDevLabel">
                        {" "}
                        Linkedin
                      </label>
                    </Link>
                  </div>

                  <div className="showDevContacts">
                    <Link to={foundDeveloper.facebook}>
                      {" "}
                      <label for=" Facebook" className="showDevLabel">
                        Facebook{" "}
                      </label>
                    </Link>
                  </div>

                  <div className="showDevContacts">
                    <Link to={foundDeveloper.twitter}>
                      {" "}
                      <label for="Twitter" className="showDevLabel">
                        Twitter
                      </label>
                    </Link>
                  </div>

                  <div className="showDevContacts">
                    {" "}
                    <Link to={foundDeveloper.instagram}>
                      <label for="Instagram" className="showDevLabel">
                        Instagram
                      </label>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            {/* <input type="submit" className="Create" value="Create"/> */}
          </form>
        ) : (
          navigator("/CreateProfile")
        )}
      </div>
    </>
  );
};

export default ShowDev;
