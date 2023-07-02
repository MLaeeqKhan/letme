
import {React,useState,useEffect} from 'react';
import { getThreads } from '../apis/threadApi';
import {updateThread} from '../apis/threadUpdateApis';
import { useParams,useNavigate } from 'react-router-dom';

const ThreadUpdateForm = () => {
    const params=useParams();
    const id = params.id;
    console.log('ID',id);
    const navigate = useNavigate();
     const [threadTitle, setThreadTitle] = useState('');
  const [threadDesc, setThreadDesc] = useState('');
   const handleUpdate = () => {
    updateThread(id, threadTitle, threadDesc)
      .then(response => {
        // Handle the response if needed
        console.log(response);
        
        
      })
      .catch(error => {
        // Handle the error if needed
        console.error(error);
      });
      navigate('/YourQ');
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === 'threadTitle') {
      setThreadTitle(value);
    } else if (name === 'threadDesc') {
      setThreadDesc(value);
    }
  }; 

    const [threads, setThreads] = useState([]);
    useEffect(() => {
        fetchData();
      }, []);
      const fetchData = async () => {
        const resThreads = await getThreads();
        console.log('Thread',resThreads);
        setThreads(resThreads.data.thread);
      };

      useEffect(() => {
        if (threads && threads.length > 0) {
          const selectedThread = threads.find(item => item._id === id);
          if (selectedThread) {
            setThreadTitle(selectedThread.threadTile);
            setThreadDesc(selectedThread.threadDesc);
          }
        }
      }, [threads, id]);
  return (
    <>
    <h2>ThreadUpdateForm</h2>
        {threads && threads.length > 0 ? (
        threads.map((item) =>
          item._id === id ? (
            <form className="form" action="" method="POST">
            <h1 className="heading">Start a Discussions</h1>
            <div className="input">
              {" "}
              Problem Title:
              <input
                style={{ height: "40px;" }}
                type="text"
                name="threadTitle"
                onChange={handleInputChange}
                value={threadTitle}
                required
              />
              <small>Keep your title short and crispy as posible</small>
            </div>

            <div className="input">
              Elaborate your Question:
              <textarea
                type="text"
                name="threadDesc"
                onChange={handleInputChange}
                value={threadDesc}
                rows="10"
                required
              ></textarea>
            </div>
            
            <div className="input">
              {" "}
              <button
                className="btn"
                type="submit"
                value="submit"
                onClick={handleUpdate}
              >Update</button>
            </div>
          </form>
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
  `}
      </style>
    </>
  )
}

export default ThreadUpdateForm
