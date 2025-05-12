"use client";

import React, { useEffect, useState } from "react";
import BlogCard from "./BlogCard"; // Make sure path is correct

const RelatedBlog = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchRelatedBlogs = async () => {
      try {
        const response = await fetch("/api/addBlog");
        const data = await response.json();
        setBlogs(data.data || []); // Make sure .data exists
      } catch (error) {
        console.error("Failed to fetch blogs", error);
      }
    };

    fetchRelatedBlogs();
  }, []);

  return (
    <div className="px-4 py-10 bg-gray-100">
      <h2 className="text-3xl font-bold text-center mb-8">Related Blogs</h2>
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
        {blogs.length > 0 ? (
          blogs.map((blog) => (
            <BlogCard
              key={blog._id}
              id={blog._id}
              title={blog.title}
              description={blog.description}
              category={blog.category}
              image={blog.featuredImg}
            />
          ))
        ) : (
          <p className="text-center text-gray-600 col-span-full">No blogs found</p>
        )}
      </div>
    </div>
  );
};

export default RelatedBlog;
