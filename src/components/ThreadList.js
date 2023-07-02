import React, { useState, useEffect, useContext } from "react";
import ProfileImg from "../images/profile.png";
import { Link, useParams } from "react-router-dom";
import { getThreads } from "../apis/threadApi";
import { getCategories } from "../apis/categoryApi";
import { AuthContext } from "../contexts/AuthContext";

// import {useNavigate} from 'react-router-dom'

const ThreadList = () => {
  const params = useParams();
  const CatID = params.catID;
  const { UserID } = useContext(AuthContext);
  const { userEmail } = useContext(AuthContext);

  const { token, setUserToken } = useContext(AuthContext);
  const [categories, setCategories] = useState([]);
  const [threads, setThreads] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const resCategories = await getCategories();
    const resThreads = await getThreads();
    setCategories(resCategories.data.category);
    setThreads(resThreads.data.thread);
  };

  const [question, setQuestion] = useState({
    threadTile: "",
    threadDesc: "",
    threadCatId: "",
    userID: "",
  });
  let name, value;
  const handleInputs = (e) => {
    name = e.target.name;
    value = e.target.value;
    setQuestion({ ...question, [name]: value });
  };

  const postDate = async (e) => {
    e.preventDefault();

    const { threadTile, threadDesc } = question;
    try {
      const res = await fetch("/thread", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          threadTile: threadTile,
          threadDesc: threadDesc,
          threadCatId: CatID,
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
    } catch (error) {
      console.log("Error:", error);
    }
  };

  useEffect(() => {
    const data = localStorage.getItem("token");

    if (data) {
      console.log("data", data);
      setUserToken(data);
    }
  }, []);

  const resetFormFields = () => {
    setQuestion({
      threadTile: "",
      threadDesc: "",
    });
  };
  const formatDate = (dateString) => {
    const options = {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric',
      
    };
    return new Date(dateString).toLocaleString('en-US', options);
  };
  return (
    <>
      <div className="jumbotron">
        {categories.map((item) =>
          CatID === item._id ? (
            <div>
              <h1>Welcome to {item.categoryName} - Coding Forums</h1>
              <p>{item.categoryDesc}</p>
            </div>
          ) : (
            <p></p>
          )
        )}
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
      </div>

      {token ? (
        <div>
          <form className="form" action="" method="POST">
            <h1 className="heading">Start a Discussions</h1>
            <div className="input">
              {" "}
              Problem Title:{" "}
              <input
                style={{ height: "40px;" }}
                type="text"
                name="threadTile"
                onChange={handleInputs}
                value={question.threadTile}
                required
              />
              <small>Keep your title short and crispy as posible</small>
            </div>

            <div className="input">
              Elaborate your Question:{" "}
              <textarea
                type="text"
                name="threadDesc"
                onChange={handleInputs}
                value={question.threadDesc}
                rows="10"
                required
              ></textarea>
            </div>

            {/* <input  type="hidden" name="user_id" value="'.$_SESSION["userid"].'"> */}
            <input type="hidden" name="threadCatId" value={CatID} />
            <input type="hidden" name="userID" value={UserID} />
            <div className="input">
              {" "}
              <input
                className="btn"
                type="submit"
                value="submit"
                onClick={postDate}
              />
            </div>
          </form>
        </div>
      ) : (
        <center>
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
              You are not logged in. Please login to be able to post a Question!
            </p>
          </div>
        </center>
      )}

      {threads && threads.length > 0 ? (
        threads.map((item) =>
          item.threadCatId === CatID ? (
            <div className="media">
              <div className="imge">
                <img
                  style={{ width: "4rem" }}
                  src={ProfileImg}
                  alt="profile img"
                />
              </div>
              <div className="name media-row">
                <p>{item.userEmail}</p>
              </div>
              <div className="cont">
                <div className="title media-row">
                  <Link to={`/Thread/${item._id}`}>
                    <p style={{ paddingLeft: "2rem" }}>{item.threadTile}</p>
                  </Link>
                </div>
                <div className="desc media-row">
                  <p style={{ paddingLeft: "2rem" }}>
                    {item.threadDesc.substring(0, 200)}
                  </p>
                </div>
                <p>
                  <hr />
                </p>
                <div className="dateTime media-row">
                  <p style={{ paddingLeft: "2rem" }}>{formatDate(item.date)}</p>
                </div>
              </div>
            </div>
          ) : null
        )
      ) : (
        <center>
          <div
            className="media"
            style={{
              width: "30%",
              paddingTop: "1.6rem",
              borderRadius: "1.6rem",
            }}
          >
            <p>Be the first person to ask the question</p>
          </div>
        </center>
      )}

      <style>
        =
        {`
   html{
    font-size: 100%;
}
@media(max-width:320px){
    html{
        font-size: 45%;
    }
    .form{
        width:100vw;
}

}
@media(max-width:425px){
    html{
        font-size: 45%;
    }
    .form{
    /* width:100vw; */
}

}
#ques{
    min-height: 43px;
    margin: 6rem;
    background-color: rgb(217, 212, 212);

}
.media  {
   display: flex;
   flex-direction: column;
   margin: 6rem;
   max-width: 30rem;
   background: rgba(255, 255, 255, 0.41);
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    border: 1px solid rgba(255, 255, 255, 0.3);
}
.media-row{
  padding:10px;
}
.input{
    display: flex;
    flex-direction: column;
    margin: 2rem;
   
    
}
input,textarea{
    box-shadow: 0 1rem 1rem -0.7rem rgba(0, 0, 0, 0.4);
    border:none;
    padding:10px;
    border-radius: 7px;
    
}
.form{
    display: flex;
    flex-direction: column;
    margin: 6rem;
    width: 40rem;
    width: 80%;
    border-radius:7px;
    background-color: rgb(223, 238, 248);
    box-shadow: 0 1rem 1rem -0.7rem rgba(0, 0, 0, 0.4);
    
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
        margin-left:-2rem;
        cursor: pointer;
        background-color: #4CAF50;
       }
       .btn:hover{
        background-color: #75eb78;
        transition: 0.5s;
       }
.heading{
    padding:2rem;
}



.jumbotron{
    display: flex;
    text-align: center;
    flex-direction: column;
    margin: 6rem;
    padding: 2rem;
    border-radius:0.7rem;
    border-bottom-right-radius: 10rem;
    background-color: rgb(217, 212, 212);
    box-shadow: 0 1rem 1rem -0.7rem rgba(0, 0, 0, 0.4);

}
  `}
      </style>
    </>
  );
};

export default ThreadList;
