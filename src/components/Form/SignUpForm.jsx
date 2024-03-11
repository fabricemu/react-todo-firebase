import React, {useState, useEffect} from 'react';
import all from '../FireBaseConf/FireBaseConfig.jsx';
import {onSnapshot, collection} from "firebase/firestore"
import {createUserWithEmailAndPassword} from 'firebase/auth';

const SignUpForm = () => {
    useEffect(() => {
        onSnapshot(collection(all.db, "Todos"), (snapshot) => {
            console.log(snapshot)
        })
    })
    const [f_name, setF_name] = useState('');
    const [l_name, setL_name] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSignUp = async (e) => {
        e.preventDefault();
        try {
            const userCredential = await createUserWithEmailAndPassword(all.auth, email, password);
            const user = userCredential.user;
            console.log('User signed up:', user);
            // You can redirect the user or do other actions after sign-up
        } catch (error) {
            console.error('Error signing up:', error);
        }
    };

    return (
        <form onSubmit={handleSignUp} className="bg-gray-100 text-black p-10">
            <h2 className="text-lg font-semibold mb-2">Sign Up</h2>
            <input
                type="text"
                value={f_name}
                onChange={(e) => setF_name(e.target.value)}
                placeholder="First Name"
                className="block w-full px-4 py-2 mb-2 border rounded-md focus:outline-none  focus:border-blue-300"
            />
            <input
                type="text"
                value={l_name}
                onChange={(e) => setL_name(e.target.value)}
                placeholder="Last Name"
                className="block w-full px-4 py-2 mb-2 border rounded-md focus:outline-none focus:border-blue-300"
            />
            <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                className="block w-full px-4 py-2 mb-2 border rounded-md focus:outline-none  focus:border-blue-300"
            />
            <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                className="block w-full px-4 py-2 mb-4 border rounded-md focus:outline-none  focus:border-blue-300"
            />
            <button type="submit" className="bg-orange-600 text-white font-semibold px-4 py-2 rounded-md">
                Sign Up
            </button>
        </form>
    );
};

export default SignUpForm;
