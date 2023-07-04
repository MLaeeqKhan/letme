//YourQ.js file
import { useState,useEffect,useContext } from 'react';
import profileImg from '../images/profile.png';
import { Link,useNavigate } from 'react-router-dom';
import { updateThread } from '../apis/threadUpdateApis';
import {getThreads} from '../apis/threadApi';
import { AuthContext } from '../contexts/AuthContext';
import { deleteThread } from '../apis/threadDeleteApis';

const YourQ = () => {
  const [threads, setThreads] = useState([]);
  const { UserID } = useContext(AuthContext);
  const navigate = useNavigate();
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const resThreads = await getThreads();
    setThreads(resThreads.data.thread);
  };

  const handleDelete = async (threadId) => {
    try {
      await deleteThread(threadId);
      // Remove the deleted thread from the threads state
      setThreads((prevThreads) => prevThreads.filter((thread) => thread._id !== threadId));
      console.log('Thread deleted successfully');
    } catch (error) {
      console.error('Error deleting thread:', error);
    }
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
        <h1>Notice</h1>
        <hr/>
        <p className="p">
          This is a peer-to-peer forum. No Spam / Advertising / Self-promote in the forums is not allowed. Do not post
          copyright-infringing material. Do not post “offensive” posts, links, or images. Do not cross-post questions.
          Remain respectful of other members at all times.
        </p>
      </div>

      <div style={{ margin: '6rem' }}>
        <h1>Browse Questions</h1>
      </div>
    
      {threads && threads.length > 0 ? (
        threads.map((item) =>
          item.userID === UserID ? (
            <div className="media">
              <div className="imge">
                <img
                  style={{ width: "4rem" }}
                  src={profileImg}
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
              <div className='btnBox'>              <button className="btnUp" style={{ background: '#4CAF50' }} onClick={()=>navigate(`/ThreadUpdateForm/${item._id}`)}>
                Update
              </button>
              <button className="btnUp" style={{ background: 'red' }} onClick={()=>handleDelete(item._id)} >
                Delete
                </button>
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
            <p>You Have Not Posted Any Question Yet</p>
          </div>
        </center>
      )}

      {/* <div className="media">
        <div className="parent">
          <div className="imge">
            <img style={{ width: '4rem' }} src={profileImg} width={50} height={50} alt="profile img" />
          </div>
          <div className="name">
            <p>Laeeq@.com</p>
          </div>
          <div className="cont">
            <div className="title">
              <Link to="">
                <p>{threadTitle}</p>
              </Link>
            </div>
            <div className="desc">
              <p>{threadDesc}</p>
            </div>
            <div className="dateTime">
              <p>12-11-2023</p>
            </div>
            <div>
              <form>
                <input
                  type="text"
                  name="threadTitle"
                  value={threadTitle}
                  onChange={handleInputChange}
                />
                <input
                  type="text"
                  name="threadDesc"
                  value={threadDesc}
                  onChange={handleInputChange}
                />
              </form>
              <button className="btnUp" style={{ background: '#4CAF50' }} onClick={handleUpdate}>
                Update
              </button>
              <button className="btnUp" style={{ background: 'red' }} >
                Delete
              </button>
            </div>
          </div>
        </div>
      </div> */}

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
      background: rgba(255, 255, 255, 0.41);
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
      width: 10rem;
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
  );
};

export default YourQ;
