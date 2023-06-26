//Search.js
import React, { useState } from 'react';
import { searchThreads } from '../apis/searchTheardsApis';
import { useParams } from 'react-router-dom';

const Search = () => {
  const [searchText, setSearchText] = useState('');
  const [searchResults, setSearchResults] = useState([]);
const params =useParams();
const sText= params.sContent;
console.log("sText",sText);
  const handleSearch = async () => {
    try {
      const response = await searchThreads(searchText);
      setSearchResults(response);
    } catch (error) {
      console.error(error);
      // Handle error
    }
  };

  return (
    <>
      <input
        type="text"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>

      {searchResults.length > 0 ? (
        searchResults.map((thread) => (
          <div key={thread._id}>
            <h3>Title: {thread.threadTile}</h3>
            <p><h1>Description</h1>: {thread.threadDesc}</p>
          </div>
        ))
      ) : (
        <p>No search results found</p>
      )}
    </>
  );
};

export default Search;
