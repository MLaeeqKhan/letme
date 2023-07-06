import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import { getDeveloper } from "../apis/developerAPIs";
import { updateDeveloper } from "../apis/updateDeveloperApis";

const UpdateFormProfile = () => {
  const navigator = useNavigate();
  const { UserID } = useContext(AuthContext);
  const [profileImg, setProfileImg] = useState(null);
  const [cv, setCV] = useState(null);
  const [name, setName] = useState("");
  const [areaOfTech, setAreaOfTech] = useState("");
  const [experience, setExperience] = useState("");
  const [jobType, setJobType] = useState("");
  const [skills, setSkills] = useState("");
  const [languages, setLanguages] = useState("");
  const [email, setEmail] = useState("");
  const [gitHub, setGitHub] = useState("");
  const [linkedin, setLinkedin] = useState("");
  const [facebook, setFacebook] = useState("");
  const [twitter, setTwitter] = useState("");
  const [instagram, setInstagram] = useState("");

  useEffect(() => {
    const fetchDeveloper = async () => {
      try {
        const response = await getDeveloper(UserID);
        if (response && response.data) {
          const selectedDev = response.data;
          setName(selectedDev.name || "");
          setAreaOfTech(selectedDev.areaOfTech || "");
          setExperience(selectedDev.experience || "");
          setJobType(selectedDev.jobType || "");
          setSkills(selectedDev.skills || "");
          setLanguages(selectedDev.languages || "");
          setEmail(selectedDev.email || "");
          setGitHub(selectedDev.gitHub || "");
          setLinkedin(selectedDev.linkedin || "");
          setFacebook(selectedDev.facebook || "");
          setTwitter(selectedDev.twitter || "");
          setInstagram(selectedDev.instagram || "");
        }
      } catch (error) {
        console.error(error);
      }
    };
    fetchDeveloper();
  }, [UserID]);

  const handleInputs = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "name":
        setName(value);
        break;
      case "areaOfTech":
        setAreaOfTech(value);
        break;
      case "experience":
        setExperience(value);
        break;
      case "jobType":
        setJobType(value);
        break;
      case "skills":
        setSkills(value);
        break;
      case "languages":
        setLanguages(value);
        break;
      case "email":
        setEmail(value);
        break;
      case "gitHub":
        setGitHub(value);
        break;
      case "linkedin":
        setLinkedin(value);
        break;
      case "facebook":
        setFacebook(value);
        break;
      case "twitter":
        setTwitter(value);
        break;
      case "instagram":
        setInstagram(value);
        break;
      default:
        break;
    }
  };

  const handleProfileImg = (e) => {
    setProfileImg(e.target.files[0]);
  };

  const handleCV = (e) => {
    setCV(e.target.files[0]);
  };

  const updateProfile = async (e) => {
    e.preventDefault();

    const updatedDeveloper = {
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
      userID: UserID,
    };

    const formData = new FormData();
    formData.append("developerData", JSON.stringify(updatedDeveloper));
    formData.append("profileImg", profileImg);
    formData.append("cv", cv);

    try {
      const response = await updateDeveloper(formData);
      if (response.status === 200) {
        window.alert("Developer profile updated successfully!");
        navigator("/Profile");
      } else {
        window.alert("Failed to update developer profile.");
      }
    } catch (error) {
      console.error(error);
      window.alert("Failed to update developer profile.");
    }
  };

  return (
    <>
      <div className="containerAboutMe">
        <form>
          <div className="innerContainerAboutMe">
            <div className="colAboutme1 colAboutme">
              <label htmlFor="profileImg">
                <input
                  type="file"
                  className="profileImg"
                  id="profileImg"
                  name="profileImg"
                  onChange={handleProfileImg}
                />
              </label>
            </div>
            <div className="colAboutme2 colAboutme">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                name="name"
                onChange={handleInputs}
                value={name}
              />
              <label htmlFor="areaOfTech">AreaOfTech:</label>
              <input
                type="text"
                name="areaOfTech"
                onChange={handleInputs}
                value={areaOfTech}
              />
              <label htmlFor="experience">Experience:</label>
              <input
                type="text"
                name="experience"
                onChange={handleInputs}
                value={experience}
              />
              <div className="typeJobeContainer">
                <input
                  type="radio"
                  name="jobType"
                  className="jobType"
                  onChange={handleInputs}
                  value="Remote"
                  checked={jobType === "Remote"}
                />
                <label htmlFor="jobType">Remote</label>
                <input
                  type="radio"
                  name="jobType"
                  className="jobType"
                  onChange={handleInputs}
                  value="Hybrid"
                  checked={jobType === "Hybrid"}
                />
                <label htmlFor="jobType">Hybrid</label>

                <input
                  type="radio"
                  name="jobType"
                  className="jobType"
                  onChange={handleInputs}
                  value="On-Sight"
                  checked={jobType === "On-Sight"}
                />
                <label htmlFor="jobType">On-Sight</label>
              </div>
              <div className="cv">
                <label htmlFor="cv">
                  <div className="selsectCV">
                    <input
                      type="file"
                      id="cv"
                      name="cv"
                      onChange={handleCV}
                    />
                  </div>
                </label>
              </div>
            </div>
            <div className="colAboutme3 colAboutme">
              <label htmlFor="Skills">
                <h2>Add Skills:</h2>{" "}
              </label>
              <input
                type="text"
                name="skills"
                value={skills}
                onChange={handleInputs}
              />
              <label htmlFor="Languages">Languages:</label>
              <input
                type="text"
                name="languages"
                onChange={handleInputs}
                value={languages}
              />
            </div>
            <div className="colAboutme4 colAboutme">
              <label htmlFor="WorkLinks">
                <h2>WorkLinks</h2>
              </label>
              <label htmlFor="Email">Email:</label>
              <input
                type="text"
                name="email"
                onChange={handleInputs}
                value={email}
              />
              <label htmlFor="Github"> Github:</label>
              <input
                type="text"
                name="gitHub"
                onChange={handleInputs}
                value={gitHub}
              />
              <label htmlFor=" Linkedin"> Linkedin:</label>

              <input
                type="text"
                name="linkedin"
                onChange={handleInputs}
                value={linkedin}
              />
              <label htmlFor=" Facebook"> Facebook:</label>

              <input
                type="text"
                name="facebook"
                onChange={handleInputs}
                value={facebook}
              />
              <label htmlFor="Twitter"> Twitter:</label>

              <input
                type="text"
                name="twitter"
                onChange={handleInputs}
                value={twitter}
              />
              <label htmlFor="Instagram">Instagram:</label>
              <input
                type="text"
                name="instagram"
                onChange={handleInputs}
                value={instagram}
              />
            </div>
          </div>
          <button onClick={updateProfile}>Update</button>
        </form>
      </div>
    </>
  );
};

export default UpdateFormProfile;
