import React, { useState } from 'react';
import { auth, provider } from "../config/firebase";
import { signInWithPopup, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from 'react-router-dom';

const Login = ({ setIsAuth }) => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signInWithGoogle = () => {
        signInWithPopup(auth, provider).then((result) => {
            localStorage.setItem("isAuth", true);
            setIsAuth(true);
            navigate("/");
        });
    };

    const signInWithEmail = async (e) => {
        e.preventDefault();
        console.log(email);
        console.log(password);
        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            // localStorage.setItem("isAuth", true);
            // setIsAuth(true);
            // navigate('/')
            console.log(userCredential);
            console.log("user registerd")
            
        } catch (error) {
            console.error(error);
        }
        

            // .then((userCredential) => {
            //     // Signed in
            //     const user = userCredential.user;
            //     localStorage.setItem("isAuth", true);
                // setIsAuth(true);
                // navigate("/");
            // })
            // .catch((error) => {
            //     // Handle errors here (e.g., display error message)
            //     console.error(error.message);
            // });
            
        };

    return (
        <section className='flex items-center justify-center min-h-screen flex-col'>
            <p className='text-4xl'>This is Login page</p>
            <button onClick={signInWithGoogle} className='bg-slate-300 border-2'>Login with Google</button>

            {/* Email login form */}
            <p>Or log in with your email:</p>
            <form onSubmit={signInWithEmail} className="flex flex-col">
                <div>

                <label>
                    Email:
                    <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} />
                </label>
                </div>
                <div>

                <label>
                    Password:
                    <input type="password" required value={password} onChange={(e) => setPassword(e.target.value)} />
                </label>
                </div>
                <button type='submit' className='bg-blue-300 border-2'>Login with Email</button>
            </form>
        </section>
    );
};

export default Login;
