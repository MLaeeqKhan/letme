// import NavBar from "../../components/NavBar";
// import BsFillTelephoneFill from 'react-icons/bs'
// import { AiFillPhone } from "react-icons/fa";
import {
  FaLinkedin,
  FaInstagramSquare,
  FaFacebookSquare,
} from "react-icons/fa";
import { MdEmail } from 'react-icons/md';
import { FaMapMarkerAlt } from 'react-icons/fa';
import {Link} from'react-router-dom'

const Contact = () => {
  return (
    <>
      {/* <NavBar /> */}
      <div className="container-1">
        <div className="inner">
          
          <div className="inner-container">
          <Link to="https://www.linkedin.com/in/m-laeeq-khan-113335247/">
            <div className="contacts">
            <FaLinkedin className="FaLinkedin"/>
              <div className="inner-cont">
                <div className="cont">Linkdin</div>
                <small className="cont">https://www.linkedin.com/in/m-laeeq-khan-113335247/</small>
              </div>
            </div>
            </Link>

           <Link  to="mailto:lk7715714@gmail.com">
            <div className="contacts">
            <MdEmail className="MdEmail"/>
              <div className="inner-cont">
                <div className="cont">email</div>
                <small className="cont">lk7715714@gmail.com</small>
              </div>
            </div>
            </Link>
            <div className="contacts">
            <FaMapMarkerAlt className="FaMapMarkerAlt"/>
              <div className="inner-cont">
                <div className="cont">address</div>
                <small className="cont">Johar Town, Lahore</small>
              </div>
            </div>
          </div>
        </div>

        {/* <div className="container-2">
          <div className="form">
            <h1>Get In Touch</h1>
            <div className="input">
              <input
                className="contactInput"
                type="text"
                placeholder="Enter Your Name"
              />
              <input
                className="contactInput"
                type="text"
                placeholder="Enter Your Email"
              />
              <input
                className="contactInput"
                type="text"
                placeholder="Enter Your Phone Number"
              />
            </div>
            <div className="textarea">
              <textarea
                className="contactInput"
                name=""
                id=""
                cols="100"
                rows="6"
                placeholder="message..."
              ></textarea>
            </div>
            <div className="button">
              <button type="submit">Send Message</button>
            </div>
          </div>
        </div> */}
      </div>
    </>
  );
};

export default Contact;
