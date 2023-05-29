// import NavBar from "../../components/NavBar";
// import BsFillTelephoneFill from 'react-icons/bs'
// import { AiFillPhone } from "react-icons/fa";

const Contact = () => {
  return (
    <>
      {/* <NavBar /> */}
      <div className="container-1">
        <div className="inner">
          <div className="inner-container">
            <div className="contacts">
              {/* <i class="fa-solid fa-phone-volume"></i> */}
              <div className="inner-cont">
                {/* <AiFillPhone /> */}
                <div className="cont">phone</div>
                <small className="cont">+92 3333 333 3333</small>
              </div>
            </div>
            <div className="contacts">
              <i class="fa-solid fa-envelope"></i>
              <div className="inner-cont">
                <div className="cont">email</div>
                <small className="cont">khan@com</small>
              </div>
            </div>
            <div className="contacts">
              <i class="fa-solid fa-location-pin"></i>
              <div className="inner-cont">
                <div className="cont">address</div>
                <small className="cont">Johar Town, Lahore</small>
              </div>
            </div>
          </div>
        </div>

        <div className="container-2">
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
        </div>
      </div>
    </>
  );
};

export default Contact;
