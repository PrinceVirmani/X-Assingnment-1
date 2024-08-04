import React, { useState } from "react";

const PostPage = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState(null);
  const [postCreated, setPostCreated] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleImageUpload = (e) => {
    setImage(URL.createObjectURL(e.target.files[0]));
  };

  const handleCreatePost = () => {
    setPostCreated(true);
  };

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div
      className={`${
        isDarkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-black"
      } p-6 min-h-screen flex flex-col items-center`}
    >
      <h1 className="text-2xl font-bold mb-4">Create a Post</h1>
      <button
        onClick={toggleTheme}
        className="mb-4 bg-blue-500 text-white px-4 py-2 rounded"
      >
        {isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
      </button>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className={`w-full p-2 mb-4 border ${
          isDarkMode
            ? "border-gray-700 bg-gray-800 text-white"
            : "border-gray-300 bg-white text-black"
        } rounded`}
      />
      <textarea
        placeholder="Content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        className={`w-full p-2 mb-4 border ${
          isDarkMode
            ? "border-gray-700 bg-gray-800 text-white"
            : "border-gray-300 bg-white text-black"
        } rounded h-40`}
      />
      <input type="file" onChange={handleImageUpload} className="mb-4" />
      <button
        onClick={handleCreatePost}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Create Post
      </button>

      {postCreated && (
        <div
          className={`mt-8 p-4 ${
            isDarkMode
              ? "bg-gray-800 border-gray-700"
              : "bg-gray-50 border-gray-300"
          } rounded shadow-lg max-w-4xl border`}
        >
          <div
            className={`grid grid-cols-3 gap-4 ${
              isDarkMode ? "bg-gray-900" : "bg-white"
            } rounded-lg p-6 relative`}
          >
            <div className="col-span-2 pr-4 border-r border-gray-300">
              <h2 className="text-3xl font-bold mb-2">{title}</h2>
              <p className="text-lg">{content}</p>
            </div>
            <div className="flex justify-center items-center">
              {image && (
                <img
                  src={image}
                  alt="Post"
                  className="w-full h-auto object-cover rounded-lg border border-gray-300"
                />
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PostPage;
