import React, { useState } from 'react';
import Modal from 'react-modal';
import SignInForm from './SignInForm';
import SignUpForm from './SignUpForm';

const AuthModal = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState('signin');

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <Modal isOpen={isOpen} onRequestClose={onClose}>
      <div>
        <button onClick={() => handleTabChange('signin')}>Sign In</button>
        <button onClick={() => handleTabChange('signup')}>Sign Up</button>
      </div>
      {activeTab === 'signin' ? <SignInForm /> : <SignUpForm />}
    </Modal>
  );
};

export default AuthModal;
