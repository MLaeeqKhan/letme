import React, { useState, useEffect } from 'react';
import {useParams} from 'react-router-dom'
import axios from 'axios';

const Search = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const params =useParams();
  const searchContent= params.sContent;
  console.log('Search Content:'+searchContent);
 
  useEffect(() => {
    const search = async () => {
      const res = await axios.get(`/search?q=${query}`);
      setResults(res.data);
    };

    search();
  }, [query]);

  return (
    <div>
       <center><h2>Search Page</h2></center> 
      <input type="hidden"  name='hide' value={searchContent} onChange={e => setQuery(e.target.value)} />
      {results.map(result => (
        <div key={result._id}>{result.content}</div>
      ))}
    </div>
  );
};

export default Search;
