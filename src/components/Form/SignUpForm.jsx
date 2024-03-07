import React, { useState } from 'react';
import app from "../FireBaseConf/FireBaseConfig.jsx";

const SignUpForm = () => {
  const [f_name, setF_name] = useState('');
  const [l_name, setL_name] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      await app.auth().createUserWithEmailAndPassword(email, password);
    } catch (error) {
      console.error('Error signing up:', error.message);
    }
  };

  return (
    <form onSubmit={handleSignUp} className="mt-4">
      <h2 className="text-lg font-semibold mb-2">Sign Up</h2>
        <input
        type="text"
        value={f_name}
        onChange={(e) => setF_name(e.target.value)}
        placeholder="First Name"
        className="block w-full px-4 py-2 mb-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
      />
        <input
        type="email"
        value={l_name}
        onChange={(e) => setL_name(e.target.value)}
        placeholder="Last Name"
        className="block w-full px-4 py-2 mb-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
      />
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        className="block w-full px-4 py-2 mb-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
        className="block w-full px-4 py-2 mb-4 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
      />
      <button type="submit" className="bg-orange-600 text-white font-semibold px-4 py-2 rounded-md">
        Sign Up
      </button>
    </form>
  );
};

export default SignUpForm;
