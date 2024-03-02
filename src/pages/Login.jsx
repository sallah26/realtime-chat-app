import React, { useState } from 'react';
import { auth, provider } from "../config/firebase";
import { signInWithPopup, signInWithEmailAndPassword, createUserWithEmailAndPassword, sendEmailVerification } from "firebase/auth";
import { useNavigate } from 'react-router-dom';

const Login = ({ setIsAuth }) => {
    const [register, setRegister] = useState(false);
    const [err, setErr] = useState("");
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signInWithGoogle = () => {
        signInWithPopup(auth, provider).then((result) => {
            localStorage.setItem("isAuth", true);
            setIsAuth(true);
            navigate("/");
            console.log("user logged in with google");
        });
    };
    const signInWithEmail = async (e) => {
        e.preventDefault();
        console.log(email);
        console.log(password);
        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            localStorage.setItem("isAuth", true);
            console.log("user Logged in with email")
            setIsAuth(true);
            navigate('/')
            // console.log(userCredential);
            
        } catch (error) {
            switch (error.code) {
                case "auth/invalid-email":
                   setErr("Invalid Email Address.");
                    break;
                case "auth/invalid-credential":
                   setErr("Wrong Password.");
                    break;
                default:
                   setErr(error.message);

            }
            console.error(error);
        }
        };


    const signUpWithGoogle = () => {
        signInWithPopup(auth, provider).then((result) => {
            console.log("user registerd in with google");
            
            localStorage.setItem("isAuth", true);
            setIsAuth(true);
            navigate("/");
        });
    };


    const signUpWithEmail = async (e) => {
        e.preventDefault();
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            sendEmailVerification(auth.currentUser)
            .then(() => {
                alert("Verification email is sent to your account confirm your registration in your email! and");
                
                    window.location.reload()
              
            });
     
            console.log("user registerd with email")
            
        } catch (error) {
            switch (error.code) {
                case "auth/invalid-email":
                   setErr("This Email Address is Invalid!");
                    break;
                case "auth/email-already-in-use":
                   setErr("This Email Address is Already in Use!");
                    break;
                case "auth/weak-password":
                   setErr("Password Should be At least 6 Characters Long.");;
                    break;
                default:
                   setErr(error.message);

            }
            console.error(error);
        }
        };

        const handleLayoutChange = () =>{
            setRegister(true);
            setErr("")
        }

    return (
        <section className='flex items-center justify-center min-h-screen flex-col'>
            {err && <p className='text-red-500'>{err}</p>}
            {!register  && (<div className='login-component'>
                <p className='text-4xl'>This is login page</p>
                <button onClick={signInWithGoogle} className='bg-slate-300 border-2'>Sign-in with Google</button>

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
                    <button type='submit' className='bg-blue-300 border-2'>Sign-in with Email</button>
                </form>
                <button onClick={handleLayoutChange} className='text-blue-600'>Don't have an account? Register Here</button>
            </div>
            )}
            {register && (<div className="register-compone">
            <p className='text-4xl'>This is registration page</p>
                <button onClick={signUpWithGoogle} className='bg-slate-300 border-2'>Sign-up with Google</button>
                {/* Email login form */}
                <p>Or Sign-up with your email:</p>
                <form onSubmit={signUpWithEmail} className="flex flex-col">
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
                    <button type='submit' className='bg-blue-300 border-2'>Sign-up with Email</button>
                </form>
            </div>
            )}
        </section>
    );
};

export default Login;
