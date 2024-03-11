// src/components/SignInForm.jsx
import React, {useState} from 'react';
import all from "../FireBaseConf/FireBaseConfig.jsx";
import { signInWithEmailAndPassword } from 'firebase/auth';
import {Link, useNavigate} from "react-router-dom";

const SignInForm = () => {
    const navigate = useNavigate()
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSignIn = async (e) => {
        e.preventDefault();
        try {
            const userCredential = await signInWithEmailAndPassword(all.auth, email, password);
            const user = userCredential.user;
            navigate(`/todos/${user.uid}`);
        } catch (error) {
            setError('Invalid email or password. Please try again.');
            console.error('Error signing in:', error);
        }
    };

    return (
        <form onSubmit={handleSignIn} className="bg-gray-100 text-black p-10">
            <h2 className="text-lg font-semibold mb-2">Sign In Here</h2>
            <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                className="block w-full px-4 py-2 mb-4 border rounded-md focus:outline-none focus:ring focus:border-orange-300"
            />
            <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                className="block w-full px-4 py-2 mb-4 border rounded-md focus:outline-none focus:ring focus:border-orange-300"
            />
            <Link to="/signup" className="text-grey hover:text-orange-600 mr-4 cursor-pointer block mb-2">
                Don't have account?
            </Link>
            <button type="submit" className="bg-orange-600 text-white font-semibold px-4 py-2 rounded-md">
                Sign In
            </button>
        </form>
    );
};

export default SignInForm;
