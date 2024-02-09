import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import homeImg from '../assets/Messages.png';

const Messages = () => {
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
            <Navbar class="messages" />
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
                        backgroundRepeat: "no-repeat"
                    }}
                />
            ) : (
                <div className='home-container' style={{ margin: "100px 0" }}>
                    <div className='head-container'>
                        <p className='txt-1'>
                            <b style={{ color: "#FF0000", fontSize: "60px" }}>Connect across Dimensions:</b>
                            <br />
                            Secure messaging with Anonymity
                        </p>
                    </div>
                    <div className='text-container'>
                        <p className='txt-2'>
                            Send encrypted messages across dimensions with anonymity.
                            Utilize coordinates as identifiers for security.
                            Attach files and translate messages for seamless communication.
                        </p>
                        <button>Explore More</button>
                    </div>
                </div>
            )}
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
                .home-container{
                    display:flex;
                    flex-direction:column;
                    text-align:center;
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
                    font-weight:900;
                    margin:0 50px;
                }
                .text-container{
                    display:flex;
                    justify-content:center;
                    align-items:center;
                    flex-direction:column;
                    width:60%;
                    margin: 30px 0 0 600px;
                }
                .txt-2{
                    color:white;
                    font-size:36px;
                    font-weight:500;
                    text-wrap:wrap;
                    text-align:center;
                }
                .text-container button{
                    color:white;
                    background-color:red;
                    font-weight:100;
                    padding:20px;
                    border-radius: 10px;
                    border:none;
                    cursor:pointer;
                }
          `}
            </style>
        </>
    )
}

export default Messages;
