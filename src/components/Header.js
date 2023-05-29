// import Image from "next/image"
import gif from '../images/anime.gif'
const Slider = ({}) => {
  return (
    <>
    <header className="homeHeader">
      <div className="cat">
        <img className="catImage" alt="gif" src={gif} /> 
      </div>
      <div className="slider"></div>
      </header>
    </>
  )
}

export default Slider
