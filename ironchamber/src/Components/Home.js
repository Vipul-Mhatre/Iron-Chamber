import React from 'react'
import homeImg from '../assets/Home.png';
import Navbar from './Navbar';

const Home = () => {
    return (
        <>
            <Navbar class="home" />
            <div className='home-conatiner' style={{ margin: "100px 0" }}>
                <div className='head-container'>
                    <p className='txt-1'>
                        <b style={{ color: "#FF0000", fontSize: "60px", fontWeight: "800" }}>Unlock Your Multiverse:</b>
                        <br />
                        A Secure Journey Across Dimensions
                    </p>
                </div>
                <div className='text-container'>
                    <p className='txt-2'>
                        Embark on a secure and decentralized adventure through the Marvel multiverse with us.
                        Join Spider-Man and Doctor Strange in navigating dimensions, securing data, and connecting across diverse backgrounds.
                    </p>
                </div>
                <style>
                    {`
                *{
                    font-family: 'Montserrat', sans-serif;
                }
          body {
  background-image: url('${homeImg}');
  background-size: 100%;
  background-repeat: no-repeat;
  overflow:hidden;
}
.home-conatiner{
    display:flex;
    flex-direction:column;
    text-align:center;
    margin:0;
    padding:0;
}
.head-container{
    display:flex;
    justify-content:flex-end;
    align-items:center;
}
.txt-1{
    color:white;
    text-align:center;
    font-size:50px;
    font-weight:800px;
    margin:0 50px;
}
.text-container{
    display:flex;
    justify-content:flex-end;
    align-items:center;
    width:50%;
    margin: 30px 0 0 600px;
}
.txt-2{
    color:white;
    font-size:36px;
    font-weight:500;
    text-wrap:wrap;
    text-align:center;
}
          `}
                </style>
            </div>
        </>
    )
}

export default Home