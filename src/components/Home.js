import React, { useEffect, useState } from 'react'
import NavBar from '../components/NavBar';
import Header from '../components/Header';
import Cards from '../components/Cards';
import Footer from '../components/Footer';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const [token, setToken] = useState()
  useEffect(() => {
    const token = localStorage.getItem("token")
    if (token) {
      setToken(token)
    }
  }, [])
  
  return (
    <>
       
      <Header token={token}/>
      <Cards/>
      <Footer/>
    </>
  )
}

export default Home
