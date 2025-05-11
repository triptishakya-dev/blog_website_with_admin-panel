// import React from "react";
// import arrow from "../../public/Assets/arrow.png";
// import Link from "next/link";
// import Image from "next/image";

// const BlogCard = ({ title, description, category, image, id }) => {
//   return (
//     <div className="max-w-[330px] sm:max-w-[300px] bg-white border border-black hover:shadow-[-7px_7px_0px_#000000] cursor-pointer">
//       <Link href={`/blogs/${id}`}>
//         <Image
//           src={image}
//           alt={title}
//           width={400}
//           height={400}
//           className="border-b border-black"
//         />

//         <p className="ml-5 mt-5 px-1 inline-block bg-red-500 text-white text-sm">
//           {category}
//         </p>

//         <div className="p-5">
//           <h5 className="mb-2 text-lg font-medium tracking-tight text-gray-900">
//             {title}
//           </h5>
//           <p className="mb-3 text-sm tracking-tight text-gray-700">
//             {description}
//           </p>
//           <div className="inline-flex items-center py-2 font-semibold text-center text-black hover:underline">
//             Read more
//             <Image
//               src={arrow}
//               alt="arrow"
//               width={12}
//               height={12}
//               className="ml-2"
//             />
//           </div>
//         </div>
//       </Link>
//     </div>
//   );
// };

// export default BlogCard;


import React from "react";
import arrow from "../../public/Assets/arrow.png";
import Link from "next/link";
import Image from "next/image";

const BlogCard = ({ title, description, category, image, id }) => {
  return (
    <div className="max-w-sm bg-white border border-black rounded-md shadow-md hover:shadow-[-7px_7px_0px_#000000] transition-all cursor-pointer overflow-hidden">
      <Link href={`/blog/${id}`}>
        <div>
          <Image
            src={image}
            alt={title}
            width={400}
            height={250}
            className="object-cover w-full h-[250px] border-b border-black"
          />

          <p className="mt-4 ml-4 inline-block bg-red-500 text-white text-xs px-2 py-1 rounded">
            {category}
          </p>

          <div className="p-4">
            <h5 className="text-lg font-semibold text-gray-900 mb-2">
              {title}
            </h5>
            <p className="text-sm text-gray-600 line-clamp-3 mb-4">
              {description}
            </p>
            <div className="inline-flex items-center text-black font-medium hover:underline">
              Read more
              <Image
                src={arrow}
                alt="arrow"
                width={12}
                height={12}
                className="ml-2"
              />
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default BlogCard;
