import React from "react";
import { Link } from "react-router-dom";

const App = () => {
  return (
    <div className="min-h-screen bg-[url('https://images.pexels.com/photos/255379/pexels-photo-255379.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] bg-cover bg-center flex flex-col justify-center items-center text-white">
      <h1 className="text-7xl font-bold mb-10 text-black">
        MEDIAL SDE REMOTE ASSIGNEMENT
      </h1>
      <h1 className="text-5xl font-bold mb-4 text-black">
        Welcome to the Post OG Image Generator
      </h1>
      <Link to="/post" className="text-blue-800 underline text-2xl">
        Create a Post
      </Link>
    </div>
  );
};

export default App;
