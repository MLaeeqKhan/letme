import {
  FaLinkedin,
  FaInstagramSquare,
  FaFacebookSquare,
} from "react-icons/fa";
const Footer = () => {
  return (
    <>
      <div className="footer-container">
        <div className="footer-container-inner">
          <div className="item item1">
            <h1>letMe</h1>
            <p>
              letMe is the IT Forum website where IT community members can share
              their problems related to IT. And they can build the good
              connection, Hire Developer and can use File Convertor.
            </p>
          </div>
          <div className="item item2">
            <h2>Our Services</h2>
            <p>Hire An Expert</p>
            <p>Website Development</p>
            <p>Modify Website</p>
            <p>
              Development in <span style={{ color: "blue" }}>React/PHP</span>{" "}
            </p>
          </div>
          <div className="item item3">
            <h2>Quick Link</h2>
            <p>Projects</p>
            <p>FAQ</p>
          </div>
          <div className="item item4">
            <h2>Contact Us</h2>
            <p>+923183676399</p>
            <p>khan@gmail.com</p>
            <p>Johar Town Lahore, pakistan</p>
          </div>
        </div>
        <div className="item item5">
        
            <div>
              <p>Copyright 2023 All rights reserved</p>
              <div className="icons">
                <div className="img">
                  <FaLinkedin className="footer-icons"/>
                </div>

                <div className="img">
                  <FaFacebookSquare className="footer-icons"/>
                </div>

                <div className="img">
                  <FaInstagramSquare className="footer-icons"/>
                </div>
              </div>
            </div>
         
        </div>
      </div>
    </>
  );
};

export default Footer;
