import {
  FaLinkedin,
  FaInstagramSquare,
  FaFacebookSquare,
} from "react-icons/fa";
import { MdEmail } from 'react-icons/md';
import { FaMapMarkerAlt,FaPhone } from 'react-icons/fa';
import { Link } from "react-router-dom";
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
            
              <Link to="https://chatdigi.000webhostapp.com/index.php"><p>codeQuery </p> </Link>
           
            
          </div>
          <div className="item item4">
            <h2>Contact Us</h2>
            <p><FaPhone/>+92 317 4259279</p>
            <p> <MdEmail className=""/>lk7715714@gmail.com</p>
            <p> <FaMapMarkerAlt className=""/>Johar Town Lahore, pakistan</p>
          </div>
        </div>
        <div className="item item5">
        
            <div>
              <p>Copyright 2023 All rights reserved</p>
              <div className="icons">
                <div className="img">
                  <Link to="https://www.linkedin.com/in/m-laeeq-khan-113335247/">  <FaLinkedin className="footer-icons"/></Link>
                
                </div>

                <div className="img">
                  <Link to="https://www.facebook.com/mlaeeq.khan.5
">  <FaFacebookSquare className="footer-icons"/></Link>
                
                </div>

                <div className="img">
                  <Link to="https://www.instagram.com/mlaeeqkhan/"> <FaInstagramSquare className="footer-icons"/></Link>
                 
                </div>
              </div>
            </div>
         
        </div>
      </div>
    </>
  );
};

export default Footer;
