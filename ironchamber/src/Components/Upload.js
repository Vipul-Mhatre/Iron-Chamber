import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import uploadImg from '../assets/Pay.png'
import Navbar from './Navbar';

const Upload = () => {

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
            <Navbar class="files" />
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
                        backgroundRepeat: 'no-repeat'
                    }}
                />
            ) : (
                    <div className='upload-container'>
                    </div>
            )}
            <style>
                {`
                    *{
                    font-family: 'Montserrat', sans-serif;
                }
          body {
  background-image: url('${uploadImg}');
  background-size: 100%;
  background-repeat: no-repeat;
  overflow:hidden;
}
              `}
            </style>
        </>
    )
}

export default Upload