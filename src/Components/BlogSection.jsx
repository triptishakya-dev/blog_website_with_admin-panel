"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";
import BlogCard from "./BlogCard";
import { MoonLoader } from "react-spinners";

const BlogSection = () => {
  const [blog, setBlog] = useState([]);
  const [loading, setLoading] = useState(true); // loading state

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const response = await axios.get("/api/addBlog");
        setBlog(response.data.data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false); // stop loader after fetch (success or error)
      }
    };
    fetchBlog();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-[50vh]">
        <MoonLoader size={50} color="#4f46e5" />
      </div>
    );
  }

  return (
    <div className="flex w-full gap-9 py-10 px-10 justify-around flex-col md:flex-row flex-wrap">
      {blog.length > 0 ? (
        blog.map((BlogItem) => (
          <div key={BlogItem._id} className="py-6">
            <BlogCard
              title={BlogItem.title}
              description={BlogItem.description}
              id={BlogItem._id}
              category={BlogItem.category}
              image={BlogItem.featuredImg}
            />
          </div>
        ))
      ) : (
        <p className="text-center w-full">No blogs found.</p>
      )}
    </div>
  );
};

export default BlogSection;
