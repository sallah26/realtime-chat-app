import React, { useEffect, useState } from 'react';
import { signOut } from 'firebase/auth';
import { auth } from "../config/firebase";
import { useNavigate } from 'react-router-dom';

const Home = ({ setIsAuth }) => {
    const [hasProfile, setHasProfile] = useState(false)
    const [showDiv, setShowDiv] = useState(false);
    const navigate = useNavigate();

    // useEffect(() => {
    //   const timeout = setTimeout(() => {
    //     setShowDiv(true);
    //   }, 3000);
    //   return () => clearTimeout(timeout);
    // }, []);  



    const handleSignOut = () => {
        signOut(auth).then(() => {
            setIsAuth(false);
            localStorage.isAuth = false;
            window.location.reload();
            navigate('/')
        });
    };
    const handleProfile = () =>{
        navigate("/buildprofile")
    }
    return (
        <>
        {(!localStorage.hasProfile) && (<div className='absolute flex items-center justify-center min-h-screen min-w-full'>
            <div className='ease-in-out duration-[5s] w-1/2 h-60 bg-green-400 p-5 text-center'>
                <p className='text-3xl '>It seems like you didn't fulfill your profile right? Go and Build your profile!</p>
                <button onClick={handleProfile} className='w-1/2 p-2 bg-slate-500 text-lg m-4 text-white'>Build Profile</button>
            </div>
            </div>
        )}

        <section className='flex items-center justify-center min-h-screen'>
            <p className='text-4xl'>This is the home page <br />Now you are registered user</p>
            <button onClick={handleSignOut} className='bg-red-300 border-4'>Log out</button>
        </section>
        </>
    );
}

export default Home;
