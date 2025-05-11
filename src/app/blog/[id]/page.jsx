"use client";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";

const BlogPage = () => {
  const [blog, setBlog] = useState(null);
  const params = useParams();

  useEffect(() => {
    const fetchBlog = async () => {
      if (!params?.id) return;

      try {
        const response = await fetch(`/api/addBlog/${params.id}`);

        const data = await response.json();
        console.log(data);
        setBlog(data.data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchBlog();
  }, [params.id]);

  return (
    <div className="h-full bg-gray-100 text-black px-10 py-15">
      {blog ? (
        <>
          <Image
            src={blog.featuredImg}
            alt={blog.title}
            width={400}
            height={250}
            className="object-cover w-full h-[250px] border-b border-black"
          />
          <h2 className="text-2xl py-10 underline">{blog.title}</h2>
          <p>{blog.content}</p>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default BlogPage;
