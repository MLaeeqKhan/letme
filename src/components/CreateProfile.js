import React, { useContext } from "react";
import prolfileImg from "../images/laeeq.jpeg";
import { useState } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

const CreateProfile = () => {
  const navigator=useNavigate();
  const{UserID}=useContext(AuthContext);
  const [developer, setDeveloper] = useState({
    name: "",
    areaOfTech:"",
    experience: "",
    jobType: "",
    skills: "",
    languages: "",
    email: "",
    gitHub: "",
    linkedin: "",
    facebook: "",
    twitter: "",
    instagram: "",
    userID:""
  });
  let name, value;
  const handleInputs = (e) => {
    name = e.target.name;
    value = e.target.value;
    setDeveloper({ ...developer, [name]: value });
  };

  const postDate = async (e) => {
    e.preventDefault();

    const {
      name,
      areaOfTech,
      experience,
      jobType,
      skills,
      languages,
      email,
      gitHub,
      linkedin,
      facebook,
      twitter,
      instagram,
    }
     = developer;

    const res = await fetch("/createProfile", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        name:name,
        areaOfTech:areaOfTech,
        experience:experience,
        jobType:jobType,
        skills:skills,
        languages:languages,
        email:email,
        gitHub:gitHub,
        linkedin:linkedin,
        facebook:facebook,
        twitter:twitter,
        instagram:instagram,
        userID:UserID
      }),
    });
    const responce = await res.json();
    if(res.status===200 || responce){
window.alert("You Registered As a Developer Successfully!")
navigator('/Profile');
    }else{
      window.alert("You Not Registered As a Developer Successfully!")

    }
  };
  return (
    <>
      <div className="containerAboutMe">
        <form action="" method="POST">
          <div className="innerContainerAboutMe">
            <div className="colAboutme1 colAboutme">
              <img src={prolfileImg} alt="profileImg" />
            </div>
            <div className="colAboutme2 colAboutme">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                name="name"
                onChange={handleInputs}
                value={developer.name}
              />
              <label htmlFor="areaOfTech">AreaOfTech:</label>
              <input
                type="text"
                name="areaOfTech"
                onChange={handleInputs}
                value={developer.areaOfTech}
              />
              <label htmlFor="experience">Experience:</label>
              <input
                type="text"
                name="experience"
                onChange={handleInputs}
                value={developer.experience}
              />
              <div className="typeJobeContainer">
                <input
                  type="radio"
                  name="jobType"
                  className="jobType"
                  onChange={handleInputs}
                  value="Remote"
                />
                <label htmlFor="jobType">Remote</label>
                <input
                  type="radio"
                  name="jobType"
                  className="jobType"
                  onChange={handleInputs}
                  value="Hybrid"
                />
                <label htmlFor="jobType">Hybrid</label>

                <input
                  type="radio"
                  name="jobType"
                  className="jobType"
                  onChange={handleInputs}
                  value="On-Sight"
                />
                <label htmlFor="jobType">On-Sight</label>
              </div>
            </div>
            <div className="colAboutme3 colAboutme">
              <label for="Skills">
                <h2>Add Skills:</h2>{" "}
              </label>
              <input
                type="text"
                name="skills"
                value={developer.skills}
                onChange={handleInputs}
              />
              {/* <button className="addSkillsButton">Add</button> */}
              <label for="Languages">Languages:</label>
              <input
                type="text"
                name="languages"
                onChange={handleInputs}
                value={developer.languages}
              />
            </div>
            <div className="colAboutme4 colAboutme">
              <label for="WorkLinks">
                <h2>WorkLinks</h2>
              </label>
              <label for="Email">Email:</label>
              <input
                type="text"
                name="email"
                onChange={handleInputs}
                value={developer.email}
              />
              <label for="Github"> Github:</label>
              <input
                type="text"
                name="gitHub"
                onChange={handleInputs}
                value={developer.gitHub}
              />
              <label for=" Linkedin"> Linkedin:</label>

              <input
                type="text"
                name="linkedin"
                onChange={handleInputs}
                value={developer.linkedin}
              />
              <label for=" Facebook"> Facebook:</label>

              <input
                type="text"
                name="facebook"
                onChange={handleInputs}
                value={developer.facebook}
              />
              <label for="Twitter"> Twitter:</label>

              <input
                type="text"
                name="twitter"
                onChange={handleInputs}
                value={developer.twitter}
              />
              <label for="Instagram">Instagram:</label>
              <input
                type="text"
                name="instagram"
                onChange={handleInputs}
                value={developer.instagram}
              />
            </div>
          </div>
          <input type="submit" className="Create" value="Create" onClick={postDate}/>
        </form>
      </div>
    </>
  );
};

export default CreateProfile;
