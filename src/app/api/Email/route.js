import { dbConnect } from "@/lib/dbConnect";
import EmailModal from "@/Modals/EmailModal";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const formData = await req.formData();

    const email = formData.get("email");

    if (!email) {
      return NextResponse.json(
        { message: "Missing required fields" },
        { status: 400 }
      );
    }

    await dbConnect();

    const newEmail = new EmailModal({
      email,
    });
    console.log(newEmail);
    const savedEmail = await newEmail.save();
    return NextResponse.json(
      { message: "Email added successfully", data: savedEmail },
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

    const allEmail = await EmailModal.find();

    if (!allEmail) {
      return NextResponse.json({ message: "not found" }, { status: 404 });
    }

    return NextResponse.json(
      { message: "Email fetched sucessfully", data: allEmail },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}
