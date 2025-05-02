import { dbConnect } from "@/lib/dbConnect";
import uploadImage from "@/lib/uploadImage";
import BlogModal from "@/Modals/BlogModal";
import { NEXT_CACHE_TAG_MAX_LENGTH } from "next/dist/lib/constants";
import { Trykker } from "next/font/google";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const formData = await req.formData();

    const title = formData.get("title");
    const description = formData.get("description");
    const category = formData.get("category");
    const author = formData.get("author");
    const content = formData.get("content");
    const featuredImg = formData.get("featuredImg");

    if (
      !title ||
      !description ||
      !category ||
      !author ||
      !content ||
      !featuredImg
    ) {
      return NextResponse.json(
        { message: "Missing required fields" },
        { status: 400 }
      );
    }

    await dbConnect();

    // Assuming uploadImage takes a File and field name, returns a URL
    const imageURL = await uploadImage(featuredImg, "featuredImg");
    console.log(imageURL);
    if (!imageURL) {
      return NextResponse.json(
        { message: "Image upload failed" },
        { status: 500 }
      );
    }

    const newBlog = new BlogModal({
      title,
      description,
      category,
      author,
      content,
      featuredImg: imageURL.secure_url,
    });
    console.log(newBlog);

    const savedBlog = await newBlog.save();

    return NextResponse.json(
      { message: "Blog added successfully", data: savedBlog },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error in POST handler:", error);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}

export async function GET(req, res) {
  try {
    console.log("connecting to db");

    await dbConnect();
    console.log("connected to db");

    const allBlog = await BlogModal.find();

    if (!allBlog) {
      return NextResponse.json({ message: "not found" }, { status: 404 });
    }

    return NextResponse.json(
      { message: "blog fetched sucessfully", data: allBlog },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}
