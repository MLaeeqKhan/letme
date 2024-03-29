import React, { useState, useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineSearch } from "react-icons/ai";
import { FiChevronDown } from "react-icons/fi";
import { AuthContext } from "../contexts/AuthContext";
// import { search } from "../../backend/Router/auth";

const NavBar = () => {
  const { token, logoutUser, setUserToken } = useContext(AuthContext);
  const navigate = useNavigate();
  let [showNavBar, setNavBar] = useState("none");
  let [showServices, setServices] = useState("none");
  const [saerchContent,setSearchContent] = useState(); 
  const {UserID} = useContext(AuthContext);

  const handleNavBar = () => {
    if (showNavBar === "block") {
      setNavBar("none");
      logout();
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
  
    const hanleFocuss=()=>{
      navigate(`/search/${saerchContent}`);
    }
  

  return (
    <>
      <nav className="main-nav">
        <div className="logo">
         
       
          <Link to="/"><h2 >letMe</h2></Link>
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
                {/* to={token ? "/Profile" : "/login"} */}
             <div>
                  <div
                    className="dropDown-manu"
                    style={{ display: showServices }}
                  >
                    <li>
                      <Link to={token?"/HireDev":"/login"} onClick={hanldeDropDownManue}>
                        ConnectDevelopers
                      </Link>
                    </li>
                    <li>
                      <Link to={token?"/YourQ":"/login"} onClick={hanldeDropDownManue}>
                        YourQ
                      </Link>
                    </li>
                    <li>
                      <Link to={token?"/FileConv":"/login"} onClick={hanldeDropDownManue}>
                        FileConvertor
                      </Link>
                    </li>
                  </div>
                </div>
              </li>
              
                {token ? ( <div> <li><Link to="/Login" onClick={handleNavBar}>
                  Logout
                </Link>
              </li>
              </div>):(<div><li><Link to="/Login" onClick={handleNavBar}>
                  Login
                </Link>
              </li> 
              
              <li>
                <Link to="/Signup" onClick={handleNavBar} >
                
                  Signup
                </Link>
              </li>
              </div>
              )}
              <li>
                <Link to={token ? "/Profile" : "/login"} onClick={handleNavBar}>
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
                    <Link to={token?"/HireDev":"/login"} onClick={hanldeDropDownManue}>
                      ConnectDevelopers
                    </Link>
                  </li>
                  <li>
                    <Link to={token?"/YourQ":"/login"} onClick={hanldeDropDownManue}>
                      YourQ
                    </Link>
                  </li>
                  <li>
                    <Link to={token?"/FileConv":"/login"} onClick={hanldeDropDownManue}>
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
              <input type="text" value={saerchContent} onChange={e=>setSearchContent(e.target.value)} ></input>
              <Link to={`/search/${saerchContent}`}>
                {" "}
                <AiOutlineSearch className="search-icon" onClick={hanleFocuss}/>
              </Link>
            </li>
          </ul>
        </div>

        <div className="social-media">
          <ul className="social-media-desktop">
            <li>
              <Link to={token ? "/Profile" : "/login"}>
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
