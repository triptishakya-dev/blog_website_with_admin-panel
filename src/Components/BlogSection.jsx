"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";
import BlogCard from "./BlogCard";

const BlogSection = () => {
  const [blog, setBlog] = useState([]);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const response = await axios.get("/api/addBlog");
        setBlog(response.data.data);
        console.log(response.data.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchBlog();
  }, []);

  return (
    <div className="flex w-full  gap-9 py-10 px-10 justify-around flex-col md:flex-row ">
      {blog.map((BlogItem, index) => {
        return (
          <div key={index} className="py-10">
            <BlogCard
            title={BlogItem.title}
            description={BlogItem.description}
            id={BlogItem._id}
            category={BlogItem.category}
            image={BlogItem.featuredImg}
          />
          
            </div>
        );
      })}
    </div>
  );
};

export default BlogSection;
