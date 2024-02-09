import React, { useEffect, useState } from 'react';
import homeImg from '../assets/Home.png';
import Navbar from './Navbar';

const Home = () => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Simulate loading delay (remove in a real-world scenario)
        const loadingTimeout = setTimeout(() => {
            setIsLoading(false);
        }, 2000);

        // Cleanup function to clear the timeout in case the component unmounts
        return () => clearTimeout(loadingTimeout);
    }, []);

    return (
        <>
            <Navbar class="home" />
            {isLoading ? (
                <div
                    style={{
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        width: '100vw',
                        height: '100vh',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        background: 'url("https://jordanwardnextgen.files.wordpress.com/2016/11/pgif4.gif?w=640")',
                        backgroundSize: '30%', // Adjust the size as needed
                        backgroundPosition: 'center',
                        backgroundColor: 'black',
                        backgroundRepeat:"no-repeat"
                    }}
                />
            ) : (
                <div className='home-container' style={{ margin: "100px 0" }}>
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
                </div>
            )}
            <style>
                {`
                    * {
                        font-family: 'Montserrat', sans-serif;
                    }
                    body {
                        background-image: url('${homeImg}');
                        background-size: cover;
                        background-position: center;
                        background-repeat: no-repeat;
                        overflow: hidden;
                        margin: 0;
                    }
                    .home-container {
                        display: flex;
                        flex-direction: column;
                        text-align: center;
                        margin: 0;
                        padding: 0;
                    }
                    .head-container {
                        display: flex;
                        justify-content: flex-end;
                        align-items: center;
                    }
                    .txt-1 {
                        color: white;
                        text-align: center;
                        font-size: 50px;
                        font-weight: 800px;
                        margin: 0 50px;
                    }
                    .text-container {
                        display: flex;
                        justify-content: flex-end;
                        align-items: center;
                        width: 50%;
                        margin: 30px 0 0 600px;
                    }
                    .txt-2 {
                        color: white;
                        font-size: 36px;
                        font-weight: 500;
                        text-wrap: wrap;
                        text-align: center;
                    }
                `}
            </style>
        </>
    )
}

export default Home;
