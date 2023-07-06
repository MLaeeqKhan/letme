import React, { useEffect, useState } from "react";
import { getDeveloper } from "../apis/developerAPIs";
import { Link } from "react-router-dom";

const HireDev = () => {
  const [developer, setDeveloper] = useState([]);
  const [filteredDeveloper, setFilteredDeveloper] = useState([]);
  const [imgPath, setImagPath] = useState('http://localhost:5000/public/assets/');
  const [filterText, setFilterText] = useState('');

  const fetchData = async () => {
    const resDeveloper = await getDeveloper();
    setDeveloper(resDeveloper.data.developer);
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    // Filter the developer list based on the filterText
    const filtered = developer.filter(item => item.areaOfTech.toLowerCase().includes(filterText.toLowerCase()));
    setFilteredDeveloper(filtered);
  }, [developer, filterText]);

  const handleFilterChange = (event) => {
    setFilterText(event.target.value);
  };

  return (
    <>
      <header className="header">
        <h1>letMe Developers</h1>
      </header>
      <section className="deveSection">
        <div className="filter">
          <input type="text"  value={filterText} onChange={handleFilterChange} placeholder="Filter" />
        </div>
        {filteredDeveloper.map((items) => (
          <Link to={`/ShowDev/${items._id}`} key={items._id}>
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
