"use client";

import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import { MoonLoader } from "react-spinners";
import RelatedBlog from "@/Components/RelatedBlog";

const BlogPage = () => {
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const params = useParams();

  useEffect(() => {
    const fetchBlog = async () => {
      if (!params?.id) return;

      try {
        const response = await fetch(`/api/addBlog/${params.id}`);
        const data = await response.json();
        setBlog(data.data);
        setLoading(false);
      } catch (err) {
        console.error(err);
        setLoading(false);
      }
    };

    fetchBlog();
  }, [params.id]);

  return (
    <div className="bg-gray-200 py-5 px-5 md:px-12 lg:px-28 min-h-screen text-black w-full">
      <div>
        {loading ? (
          <div className="flex flex-col items-center justify-center h-96">
            <MoonLoader size={50} color="#4F46E5" />
            <p className="mt-4 text-sm text-gray-500">
              Loading blog content...
            </p>
          </div>
        ) : blog ? (
          <div className="mx-5 max-w-[800px] md:mx-auto">
            <Image
              className="border-4 border-white"
              src={blog.featuredImg}
              width={1280}
              height={720}
              alt=""
            />
            <div className="p-6 sm:p-10">
              <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6 underline underline-offset-4">
                {blog.title}
              </h1>
            </div>
            <div
              className="text-gray-700 leading-relaxed text-[17px] space-y-6 pt-4"
              dangerouslySetInnerHTML={{ __html: blog.content }}
            ></div>       
          </div>
        ) : (
          <p className="text-center text-gray-500">No blog found.</p>
        )}
      </div>
       <hr />
      <div>
        <RelatedBlog />
      </div>
    </div>
  );
};

export default BlogPage;
