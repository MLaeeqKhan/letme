import profileImg from '../images/profile.png'
import { Link } from 'react-router-dom'

const YourQ = () => {
  return (
    <>
    
    <div className="jumbotron">
    <h1>Notice</h1>      
   
    <hr/>
    <p className="p">This is a peer to peer forum. No Spam / Advertising / Self-promote in the forums is not allowed. Do not post copyright-infringing material. Do not post “offensive” posts, links or images. Do not cross post questions. Remain respectful of other members at all times.</p>  
  </div>

  <div style= {{margin: "6rem"}}>
        <h1>Browse Questions</h1>
    </div>

   

 



 <div className="media" >
    <div className="parent">
 <div className="imge" >
     <img style={{width: "4rem"}} src={profileImg} width={50} height={50} alt="profile img" />
 </div>
 <div className="name" ><p >Laeeq@.com</p> </div>
 <div className="cont">
     <div className="title"><a href=""><p>React Insatllation</p></a></div>
 
     <div className="desc"><p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis molestiae maiores nostrum voluptatem?</p></div>
     <div className="dateTime"><p>12-11-2023</p></div>

    <div>

     <Link href="" style= {{background: "#4CAF50"}} className="btnUp">Update</Link>

     <Link href="" style= {{background: "red"}} className="btnUp">Delete</Link>

     </div>

 </div>
</div>
 </div>
 {/* <center>
 <div className="media" style={{width: "40%" padding-top: "0.7rem" border-radius: "1.6rem"}}>
    <p> Still You have not posted any question</p>
  </div>
   </center> */}

<style jsx>
{`
html{
            font-size: 100%;
        }
        @media(max-width:320px){
            html{
                font-size: 45%;
            }
        }
        @media(max-width:425px){
            html{
                font-size: 45%;
            }
        }
    #ques {
        min-height: 43px;
        margin: 6rem;
        background-color: rgb(217, 212, 212);

    }

    .media {
        display: flex;
        flex-direction: column;
        margin: 6rem;
        width: 30rem;
        border-radius:0.6rem;
        background-color: rgb(217, 212, 212);
        box-shadow: 0 1rem 1rem -0.7rem rgba(0, 0, 0, 0.4);
       
    }
    .parent{
        /* max-height: 443px; */
    }
    .cont{
        margin-left:10px;
    }
    .heading {
        padding: 2rem;
    }

    .btnUp {
        border: none;
        color: white;
        width: 1orem;
        padding: 0.5rem 2rem;
        text-align: center;
        text-decoration: none;
        display: inline-block;
        font-size: 1.2rem;
        margin: 0.8rem 1.6rem;
        cursor: pointer;

    }
    .jumbotron {
        display: flex;
        text-align: center;
        flex-direction: column;
        margin: 6rem;
        padding: 2rem;
        border-radius:7px;
        background-color: rgb(217, 212, 212);
        box-shadow: 0 1rem 1rem -0.7rem rgba(0, 0, 0, 0.4);
    }
`}
</style>

    </>
  )
}

export default YourQ
