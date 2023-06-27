import React, { useEffect, useState } from 'react';
import { searchThreads } from '../apis/searchTheardsApis';
import { Link, useParams } from 'react-router-dom';
import ProfileImg from '../images/profile.png';

const Search = () => {
  const [searchText, setSearchText] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const params = useParams();
  const sText = params.sContent;
  console.log("sText", sText);

  useEffect(() => {
    setSearchText(sText);

    const handleSearch = async () => {
      setIsLoading(true);
      try {
        const response = await searchThreads(sText);
        setSearchResults(response);
      } catch (error) {
        console.error(error);
        // Handle error
      }
      setIsLoading(false);
    };

    handleSearch();
  }, [sText]);

  return (
    <>
      {isLoading ? (
        <div>Loading...</div>
      ) : searchResults.length > 0 ? (
        searchResults.map((thread) => (
          <div className="media">
            <div className="imge">
              <img style={{ width: "4rem" }} src={ProfileImg} alt="profile img" />
            </div>
            <div className="name media-row">
              <p>{thread.userEmail}</p>
            </div>
            <div className="cont">
              <div className="title media-row">
                <Link to={`/Thread/${thread._id}`}>
                  <p style={{ paddingLeft: "2rem" }}>{thread.threadTile}</p>
                </Link>
              </div>
              <div className="desc media-row">
                <p style={{ paddingLeft: "2rem" }}>
                  {thread.threadDesc.substring(0, 200)}
                </p>
              </div>
              <p>
                <hr />
              </p>
              <div className="dateTime media-row">
                <p style={{ paddingLeft: "2rem" }}>{thread.date}</p>
              </div>
            </div>
          </div>
        ))
      ) : (
        <div className="jumbotron">
          <div className="container">
            <p className="display">No Results Found</p>
            <p className="lead">
              Suggestions:
              <ul>
                <li>&#8680; Make sure that all words are spelled correctly.</li>
                <li>&#8680; Try different keywords.</li>
                <li>&#8680; Try more general keywords.</li>
              </ul>
            </p>
          </div>
        </div>
      )}

      <style>{`
        #ques {
          min-height: 43px;
          margin: 6rem;
          background-color: rgb(217, 212, 212);
        }

        .media {
          display: flex;
          flex-direction: column;
          margin: 6rem;
          max-width: 30rem;
          background: rgba(255, 255, 255, 0.41);
          box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.3);
        }

        .media-row {
          padding: 10px;
        }

        .jumbotron {
          display: flex;
          flex-direction: column;
          margin: 6rem;
          padding: 2rem;
          background-color: rgb(217, 212, 212);
          width: 36rem;
        }
      `}</style>
    </>
  );
};

export default Search;
