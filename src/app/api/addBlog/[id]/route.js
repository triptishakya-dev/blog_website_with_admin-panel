import { dbConnect } from "@/lib/dbConnect";
import BlogModal from "@/Modals/BlogModal";
import { NextResponse } from "next/server";

// GET /api/blog/[id]
export async function GET(req, { params }) {
  try {
    const { id } = await  params;
    console.log("[API] Received request to fetch blog with ID:", id);

    await dbConnect();
    console.log("[API] Connected to database");

    const blog = await BlogModal.findById(id);
    console.log("[API] Blog found:", blog);

    if (!blog) {
      console.warn("[API] No blog found with ID:", id);
      return NextResponse.json({ message: "Blog not found" }, { status: 404 });
    }

    return NextResponse.json(
      { message: "Blog fetched successfully", data: blog },
      { status: 200 }
    );
  } catch (error) {
    console.error("[API] Error fetching blog:", error);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}
