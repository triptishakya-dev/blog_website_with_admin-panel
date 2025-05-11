import { dbConnect } from "@/lib/dbConnect";
import bcrypt from "bcrypt";
import userModels from "@/Modals/userModels";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const formData = await req.formData();

    const name = formData.get("name");
    const email = formData.get("email");
    const password = formData.get("password");

    if (!name || !email || !password) {
      return NextResponse.json(
        { message: "Missing required fields" },
        { status: 400 }
      );
    }
    console.log(name, email, password);

    const hashedPassword = await bcrypt.hash(password, 10);

    console.log(hashedPassword);

    console.log("connecting db");

    await dbConnect();
    console.log("connected db");

    const newUser = new userModels({ name, email, password:hashedPassword });

    console.log(newUser);

    const savedUser = await newUser.save();

    return NextResponse.json(
      { message: "User added successfully", data: savedUser },
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

export async function GET(req) {
  try {
    console.log("Connecting to DB...");
    await dbConnect();
    console.log("Connected to DB.");

    const allUsers = await userModels.find();

    return NextResponse.json(
      { message: "Users fetched successfully", data: allUsers },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error in GET handler:", error);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}
