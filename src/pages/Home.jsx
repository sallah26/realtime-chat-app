import React from 'react';
import { signOut } from 'firebase/auth';
import { auth } from "../config/firebase";

const Home = ({ setIsAuth }) => {
    const handleSignOut = () => {
        signOut(auth).then(() => {
            setIsAuth(false);
            localStorage.clear();
            window.location.reload();
        });
    };

    return (
        <section className='flex items-center justify-center min-h-screen'>
            <p className='text-4xl'>This is the home page <br />Now you are registered user</p>
            <button onClick={handleSignOut} className='bg-red-300 border-4'>Log out</button>
        </section>
    );
}

export default Home;
