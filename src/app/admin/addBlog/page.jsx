"use client";
import axios from "axios";
import React, { useState } from "react";

const page = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [author, setAuthor] = useState("");
  const [content, setContent] = useState("");
  const [featuredImg, setFeaturedImg] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("category", category);
    formData.append("author", author);
    formData.append("content", content);
    formData.append("featuredImg", featuredImg);

    try {
      const response = await axios.post("/api/addBlog", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      console.log(response);
      if(response.status === 200){
        setTitle('')
        setDescription('')
        setContent('')
        setCategory('')
        setAuthor('')
        setFeaturedImg('')
      }
    } catch (error) {
      console.error("Error submitting data to the API:", error);
    }
  };

  const categories = [
    "Technology",
    "Travel",
    "Food",
    "Lifestyle",
    "Health",
    "Business",
    "Education",
    "Entertainment",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 to-blue-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-purple-600 to-blue-500 py-6 px-8">
            <h1 className="text-3xl font-bold text-white">
              Create New Blog Post
            </h1>
            <p className="text-purple-100 mt-2">
              Fill out the form below to create your amazing new content
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="py-8 px-8 space-y-6 ">
            {/* Title */}
            <div>
              <label
                htmlFor="title"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Post Title
              </label>
              <input
                type="text"
                id="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition text-black"
                placeholder="Enter an attention-grabbing title"
                required
              />
            </div>

            {/* Author & Category Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
              {/* Author */}
              <div>
                <label
                  htmlFor="author"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Author
                </label>
                <input
                  type="text"
                  id="author"
                  value={author}
                  onChange={(e) => setAuthor(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition text-black"
                  placeholder="Your name"
                  required
                />
              </div>

              {/* Category */}
              <div>
                <label
                  htmlFor="category"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Category
                </label>
                <select
                  id="category"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition bg-white text-black"
                  required
                >
                  <option value="" disabled>
                    Select a category
                  </option>
                  {categories.map((cat) => (
                    <option key={cat} value={cat}>
                      {cat}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Description */}
            <div>
              <label
                htmlFor="description"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Short Description
              </label>
              <input
                type="text"
                id="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition text-black"
                placeholder="Brief summary of your post (will appear in previews)"
                required
              />
            </div>

            {/* Featured Image */}
            <div>
              <label
                htmlFor="featuredImg"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Featured Image URL
              </label>
              <input
                type="file"
                id="featuredImg"
                onChange={(e) => setFeaturedImg(e.target.files[0])} 
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition text-black"
              />
            </div>

            {/* Content */}
            <div>
              <label
                htmlFor="content"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Post Content
              </label>
              <textarea
                id="content"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                rows={6}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition text-black"
                placeholder="Write your post content here..."
                required
              />
            </div>

            {/* Submit Button */}
            <div className="pt-4">
              <button
                type="submit"
                className="w-full py-3 px-6 rounded-lg text-white font-medium transition bg-amber-500 "
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default page;
