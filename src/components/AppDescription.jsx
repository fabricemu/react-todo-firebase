import React from 'react';

const AppDescription = () => {
  return (

    <div className="bg-gray-100 p-6 rounded-lg shadow-md text-black">
      <h2 className="text-2xl font-semibold mb-4">Welcome to Your Todo App!</h2>
      <p className="text-lg mb-2">
        This app allows you to manage your todo list. You can add, update, and delete todo items.
      </p>
      <p className="text-lg">
        Please sign in to access your todo list.
      </p>
    </div>
  );
};

export default AppDescription;