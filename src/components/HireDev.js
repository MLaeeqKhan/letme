import React from 'react'
import profileImg from '../images/profile.png'

import {Link} from 'react-router-dom'
const HireDev = () => {
  return (
    <>
    
     <header className="header">
      <h1>letMe Developers</h1>
     </header>
     <section className="deveSection">
      <Link to="/Profile"><div className="DeveProfile">
        <img className="image" style={{width: "4rem"}} src={profileImg} width={50} height={50} alt="profile img"></img>
        <div className="DeveContent"><h4>M. Laeeq Khan</h4>
        <small>NERN Stack Developer</small>
        </div>
      </div></Link>
     <Link to="/Profile"> <div className="DeveProfile">
        <img className="image" style={{width: "4rem"}} src={profileImg} width={50} height={50} alt="profile img"></img>
        <div className="DeveContent"><h4>M. Sannan Abid</h4>
        <small>React Developer</small>
        </div>
      </div></Link>
     <Link to="/Profile"> <div className="DeveProfile">
        <img className="image" style={{width: "4rem"}} src={profileImg} width={50} height={50} alt="profile img"></img>
        <div className="DeveContent"><h4>Faisal Iqbal</h4>
        <small>Software Engineer</small>
        </div>
      </div></Link>
     <Link to="/Profile"> <div className="DeveProfile">
        <img className="image" style={{width: "4rem"}} src={profileImg}width={50} height={50} alt="profile img"></img>
        <div className="DeveContent"><h4>Amir Hamza</h4>
        <small>Android And Electron.js Dev... </small>
        </div>
      </div></Link>
    <Link to="/Profile"> <div className="DeveProfile">
        <img className="image" style={{width: "4rem"}} src={profileImg} width={50} height={50} alt="profile img"></img>
        <div className="DeveContent"><h4>Aaqib</h4>
        <small>Front-End Developer</small>
        </div>
      </div></Link> 
     </section>
    </>
  )
}

export default HireDev
