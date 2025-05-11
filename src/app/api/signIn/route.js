import { dbConnect } from "@/lib/dbConnect";
import userModels from "@/Modals/userModels";
import bcrypt from "bcrypt";

import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";

export async function POST(req, res) {
  try {
    const formData = await req.formData();

    const email = formData.get("email");
    const password = formData.get("password");

    console.log(email);
    console.log(password);

    if (!email || !password) {
      return NextResponse.json(
        { message: "email or password not available" },
        { status: 404 }
      );
    }

    console.log("Connecting TO Database");
    await dbConnect();
    console.log("Connected to Database");

    const user = await userModels.findOne({ email });
    if (!user || !user.password) {
      return NextResponse.json({ message: "User not found or password missing" }, { status: 404 });
    }
    console.log(user)
    
    if (!password) {
      return NextResponse.json({ message: "Password not provided in form" }, { status: 400 });
    }
    
    const isMatched = await bcrypt.compare(password, user.password);
    if(!isMatched){
        return NextResponse.json({ message: "Password not matched" }, { status: 400 });   
    }
    // set cookies in the brower
    console.log("Generating token ");
    const token = generateToken({ email: user.email, id: user._id });

    const response = NextResponse.json(
      { success: true, message: "Login successful" },
      { status: 200 }
    );

    response.cookies.set("userAuth", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      maxAge: 60 * 60 * 24 * 7,
      path: "/",
    });
    return response;
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}

function generateToken(user) {
  return jwt.sign(user, process.env.JWT_SECRET, { expiresIn: "1w" });
}
