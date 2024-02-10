import React, { useEffect, useState } from 'react';
import homeImg from '../assets/Home.png';
import Navbar from './Navbar';
import { useAuth } from '../store/auth';

const Home = () => {
    const { content } = useAuth();

    // Log content to console for troubleshooting
    console.log("Content:", content);

    const heading = content[0] ? content[0].heading : '';
    const title = content[0] ? content[0].title : '';
    const contentText = content[0] ? content[0].content : '';

    const [isLoading, setIsLoading] = useState(true);

    // Simulate loading delay (remove in a real-world scenario)
    useEffect(() => {
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
                        backgroundRepeat: 'no-repeat',
                    }}
                />
            ) : (
                    <div className='home-conatiner' style={{ margin: '100px 0' }}>
                    <div className='head-container'>
                        <p className='txt-1'>
                                <b style={{ color: '#FF0000', fontSize: '60px', fontWeight: '800' }}>{heading}:</b>
                            <br />
                                {title}
                        </p>
                    </div>
                    <div className='text-container'>
                            <p className='txt-2'>{contentText}</p>
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
    font-size:20px;
    font-weight:500;
    text-wrap:wrap;
    text-align:center;
}
          `}
            </style>
        </>
    );
};

export default Home;
