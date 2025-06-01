import { dbConnect } from "@/lib/dbConnect";
import BlogModal from "@/Modals/BlogModal";
import { NextResponse } from "next/server";

export const DELETE = async (request, { params }) => {
    const { id } = await params;
    console.log(id)

    try {
        console.log("connecting databse")
        await dbConnect();
        console.log("connected databse")

        const blog = await BlogModal.findByIdAndDelete(id);``

        if (!blog) {
            return NextResponse.json({ msg: "Blog not found" }, { status: 404 });
        }

        return NextResponse.json({ msg: "Blog deleted successfully" }, { status: 200 });
    } catch (error) {
        console.error("Error deleting blog:", error);
        return NextResponse.json({ msg: "Error deleting blog" }, { status: 500 });
    }
};
