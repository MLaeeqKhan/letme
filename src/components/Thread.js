import React, { useState, useEffect, useContext } from "react";
import { FaCheck, FaRegCheckSquare } from "react-icons/fa";
import profileImg from "../images/profile.png";
import { useParams } from "react-router-dom";
import { getThreads } from "../apis/threadApi";
import { AuthContext } from "../contexts/AuthContext";
import { getReplies } from "../apis/replyApis";
import {updateReply} from "../apis/replyUpdateStatusApis";

const Thread = () => {
  const params = useParams();
  const threadID = params.threadID;
  const { token,UserID } = useContext(AuthContext);
  const { userEmail } = useContext(AuthContext);
  // console.log("userID:"+ UserID);
  const [threads, setThreads] = useState([]);
  const [replies, setreplies] = useState([]);
  const[threadUserID,setThreadUserID]=useState([]);
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const resThreads = await getThreads();
    const resReplies = await getReplies();
    // console.log(resThreads);
    setThreads(resThreads.data.thread);
    setreplies(resReplies.data.reply);
  };
  const [reply, setReply] = useState({ replyContent: "" });
  let name, value;
  const handleInputs = (e) => {
    name = e.target.name;
    value = e.target.value;
    setReply({ ...reply, [name]: value });
  };

  const postDate = async (e) => {
    e.preventDefault();

    const { replyContent } = reply;
    const res = await fetch("/reply", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },

      body: JSON.stringify({
        replyContent: replyContent,
        status:0,
        threadID: threadID,
        threadUserID:threadUserID,
        userID: UserID,
        userEmail: userEmail,
      }),
    });
    const response = await res.json();
    if (res.status === 200 || response) {
      window.alert("Data save");
      resetFormFields();
      fetchData();
    } else {
      window.alert("Please fill the data");
    }
  };

  const resetFormFields = () => {
    setReply({
      replyContent: "",
    });
  };

  
    const handleUpdateStatus = async (id) => {
      try {
        await updateReply(id, '1');
        // Handle success
      } catch (error) {
        // Handle error
      }
    };
    useEffect(() => {
      const thread = threads.find((item) => threadID === item._id);
      if (thread) {
        setThreadUserID(thread.userID);
      } else {
        setThreadUserID('');
      }
    }, [threadID, threads]);
    
  
    
  return (
    <>
      {threads.map((item) =>
       
        threadID === item._id ? (
         
        
          <div className="jumbotron">
            <h2>{item.threadTile}</h2>
            <pre className="scroll">{item.threadDesc}</pre>

            <hr />
            <p className="p">
            <details>
            <summary>
              <strong>Instraction</strong>
            </summary>{" "}
            This is a peer to peer forum. No Spam / Advertising / Self-promote
            in the forums is not allowed. Do not post copyright-infringing
            material. Do not post “offensive” posts, links or images. Do not
            cross post questions. Remain respectful of other members at all
            times.
          </details>
            </p>
            <p className="user">
              <h2>Posted by: {item.userEmail}</h2>
            </p>
          </div>
        ) : (
          <p></p>
        )
        
      )}

      {token?(<form className="form" action="" method="POST">
        <h1>Post a Reply</h1>

        <div className="input">
          Type your Reply:{" "}
          <textarea
            name="replyContent"
            rows="10"
            onChange={handleInputs}
            value={reply.replyContent}
            required
          ></textarea>
        </div>

       

        <div className="input">
          {" "}
          <input
            className="btn"
            onClick={postDate}
            type="submit"
            value="submit"
          />
        </div>
      </form>):(  <center>
          <div
            className="media"
            style={{
              color: "red",
              width: "50%",
              paddingtop: "15px",
              borderradius: "1.6rem",
            }}
          >
            <p>
              You are not logged in. Please login to be able to post a Reply!
            </p>
          </div>
        </center>)}

      

      <div className="parent">
  {replies
    .filter((item) => item.threadID === threadID)
    .sort((a, b) => (a.status === '1' ? -1 : 1))
    .map((item) => (
      <div className="media" key={item._id}>
        <div className="imge">
          <img
            style={{ width: "4rem" }}
            src={profileImg}
            alt="profile img"
          />
        </div>
        <div className="check"> 

         {item.threadUserID===UserID && token? (item.status === "0" ? (
            <FaRegCheckSquare
              className="FaRegCheckSquare"
              onClick={() => handleUpdateStatus(item._id)}
            />
          ) : (
            <FaRegCheckSquare className="Checked" />
          )):(item.status==='1'?(  <FaRegCheckSquare className="Checked" />):(null))}
        </div>
        <div className="name">
          <p>{item.userEmail}</p>
        </div>
        <div className="cont"> 
          <div>
            <pre>{item.replyContent}</pre>
          </div>
          <p>
            <hr />
          </p>
          <div className="dateTime">
            <p>{item.date}</p>
          </div>
        </div>
      </div>
    ))}
</div>

      <style>{`
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
    #reply{
        min-height: 43px;
        margin: 2rem;
    }
    .media  {
        display:flex;
        flex-direction:column;
        max-width: 40rem;
       margin: 6rem;
       border-radius:7px;
        background: rgba(255, 255, 255, 0.41);
        box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
        border: 1px solid rgba(255, 255, 255, 0.3);

    }
    .check {
      margin-left: auto;
    }
    .Checked{
      width: 50px;
      height: 50px;
      color:green;
    }
    .FaRegCheckSquare{
      width: 50px;
      height: 50px;
      color:#b3aeae;

    }
    .parent{
        display: flex;
        flex-direction:column;
        align-items:start;
        
    }
    
    .cont pre{
       white-space:break-spaces;
    }
    .cont,.form,.input{
        display: flex;
        flex-direction: column;
        margin: 2rem;
      
    }
    .form{
        display: flex;
        flex-direction: column;
        margin: 6rem;
        padding:2rem;
        width: 80%;
        border-radius:7px;
        background-color: rgb(223, 238, 248);
        box-shadow: 0 1rem 1rem -0.7rem rgba(0, 0, 0, 0.4);
    }
        
        textarea{
        border: none;
        padding:10px;
        box-shadow: 0 1rem 1rem -0.7rem rgba(0, 0, 0, 0.4);
        border-radius: 7px;
        
    }

    .btn {
            border: none;
            color: white;
            width:10rem;
            border-radius:0.6rem;
            padding: 1rem 3rem;
            text-align: center;
            text-decoration: none;
            display: inline-block;
            font-size: 1.2rem;
            margin: 0.2rem 0.1rem;
            margin-left:-0rem;
            cursor: pointer;
            background-color: #4CAF50;
           }
           .btn:hover{
            background-color: #75eb78;
            transition: 0.5s;
           }
   

    .jumbotron{
        display: flex;
        text-align: center;
        flex-direction: column;
       
        margin: 6rem;
        padding: 2rem;
        border-radius:7px;
        border-bottom-right-radius: 12rem;
        background-color: rgb(217, 212, 212);
        box-shadow: 0 1rem 1rem -0.7rem rgba(0, 0, 0, 0.4);

    }
    .scroll{
        overflow: scroll;
        text-align: left;
        align-items:top;
        max-height: 20rem;
        padding:1rem;
        background-color:white;
    }
  `}</style>
    </>
  );
};

export default Thread;
