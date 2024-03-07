import React from "react";

export const AddForm = () =>{
    return   ( <form onSubmit={handleSubmit} className="mb-4">
      <input
        type="text"
        placeholder="Add a new todo..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
      />
      <button type="submit" className="mt-2 bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded-md">
        Add Todo
      </button>
    </form>)
}