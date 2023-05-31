import React, { useState, useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineSearch } from "react-icons/ai";
import { FiChevronDown } from "react-icons/fi";
import { AuthContext } from "../contexts/AuthContext";

const NavBar = () => {
  const { token, logoutUser, setUserToken } = useContext(AuthContext);
  const { UserID } = useContext(AuthContext);
  console.log("userID:",UserID);

  const navigate = useNavigate();
  let [showNavBar, setNavBar] = useState("none");
  let [showServices, setServices] = useState("none");

  const handleNavBar = () => {
    if (showNavBar === "block") {
      setNavBar("none");
    } else {
      setNavBar("block");
    }
  };



  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("data"))

    if (data) {
      console.log("data", data);
      setUserToken(data)
    }
  }, [])


  const hanldeDropDownManue = () => {
    if (showServices === "none") {
      setServices("block");
    } else {
      setServices("none");
      setNavBar("none");
    }
  };

  const logout = () => {
    logoutUser()
    navigate("/login");
  };

  return (
    <>
      <nav className="main-nav">
        <div className="logo">
          <h2>letMe</h2>
          {/* className={showMediaIcons? "manu-link mobile-manu-link": "manu-link"} */}
        </div>

        <div className="outer-mobile">
          <div className="mobile-manu-links" style={{ display: showNavBar }}>
            <ul>
              <li>
                <Link to="/" onClick={handleNavBar}>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/About" onClick={handleNavBar}>
                  About
                </Link>
              </li>
              <li>
                <Link to="/Contact" onClick={handleNavBar}>
                  Contact
                </Link>
              </li>
              <li>
                <Link onClick={hanldeDropDownManue}>
                  Services <FiChevronDown className="dropDown-icon" />{" "}
                </Link>
                <div>
                  <div
                    className="dropDown-manu"
                    style={{ display: showServices }}
                  >
                    <li>
                      <Link to="/HireDev" onClick={hanldeDropDownManue}>
                        HireDevelopers
                      </Link>
                    </li>
                    <li>
                      <Link to="/YourQ" onClick={hanldeDropDownManue}>
                        YourQ
                      </Link>
                    </li>
                    <li>
                      <Link to="/FileConv" onClick={hanldeDropDownManue}>
                        FileConvertor
                      </Link>
                    </li>
                  </div>
                </div>
              </li>
              <li>
                <Link to="/Login" onClick={handleNavBar}>
                  Login
                </Link>
              </li>
              <li>
                <Link to="/Signup" onClick={handleNavBar}>
                  Signup
                </Link>
              </li>
              <li>
                <Link to="/Profile" onClick={handleNavBar}>
                  {" "}
                  <FaUserCircle className="user-icon" />
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="manu-link">
          <ul>
            <li className="manu-link-desktop">
              <Link to="/">Home</Link>
            </li>
            <li className="manu-link-desktop">
              <Link to="/About">About</Link>
            </li>
            <li className="manu-link-desktop">
              <Link to="/Contact">Contact</Link>
            </li>
            <li className="manu-link-desktop">
              <Link onClick={hanldeDropDownManue}>
                Services <FiChevronDown className="dropDown-icon" />{" "}
              </Link>
              <div>
                <div
                  className="dropDown-manu"
                  style={{ display: showServices }}
                >
                  <li>
                    <Link to="/HireDev" onClick={hanldeDropDownManue}>
                      HireDevelopers
                    </Link>
                  </li>
                  <li>
                    <Link to="/YourQ" onClick={hanldeDropDownManue}>
                      YourQ
                    </Link>
                  </li>
                  <li>
                    <Link to="/FileConv" onClick={hanldeDropDownManue}>
                      FileConvertor
                    </Link>
                  </li>
                </div>
              </div>
            </li>
            <li className="manu-link-desktop">
              {token ? (
                <h3
                  style={{ color: "white", cursor: "pointer" }}
                  onClick={logout}
                >
                  Logout
                </h3>
              ) : (
                <Link to="/Login">Login</Link>
              )}
            </li>
            <li className="manu-link-desktop">
              <Link to="Signup">Signup</Link>
            </li>
            <li className="search">
              <input type="text"></input>
              <Link to="/Search">
                {" "}
                <AiOutlineSearch className="search-icon" />
              </Link>
            </li>
          </ul>
        </div>

        <div className="social-media">
          <ul className="social-media-desktop">
            <li>
              <Link to={token ? "/CreateProfile" : "/login"}>
                {" "}
                <FaUserCircle className="user-icon" />
              </Link>
            </li>
          </ul>

          <div className="hamburger-menu">
            <Link to="#" onClick={handleNavBar}>
              <GiHamburgerMenu className="hamburger-menu-icon" />
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
