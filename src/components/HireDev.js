import React, { useEffect, useState } from "react";
import profileImg from "../images/profile.png";
import { getDeveloper } from "../apis/developerAPIs";

import { Link } from "react-router-dom";
const HireDev = () => {
  const [developer, setDeveloper] = useState([]);
  const [imgPath,setImagPath] = useState('http://localhost:5000/public/assets/');
  const fetchData = async () => {
    const resDeveloper = await getDeveloper();
    setDeveloper(resDeveloper.data.developer);
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      <header className="header">
        <h1>letMe Developers</h1>
      </header>
      <section className="deveSection">
        {developer.map((items) => (
          <Link to={`/ShowDev/${items._id}`}>
            <div className="DeveProfile">
              <img
                className="image"
                style={{ width: "4rem" }}
                src={imgPath + items.profileImg}
                width={50}
                height={50}
                alt="profile img"
              ></img>
              <div className="DeveContent">
                <h4>{items.name}</h4>
                <small>{items.areaOfTech}</small>
              </div>
            </div>
          </Link>
        ))}
      </section>
    </>
  );
};

export default HireDev;
