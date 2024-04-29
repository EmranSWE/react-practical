import prismadb from "@/lib/prismadb";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { Secret } from "jsonwebtoken";
import { NextApiResponse } from "next";
import { NextResponse } from "next/server";

export async function POST(req: Request, res: NextApiResponse) {
  try {
    // Parse request body
    const body = await req.json();
    const { phone, password } = body;
    // Validate required fields
    if (!phone || !password) {
      return new NextResponse(
        JSON.stringify({
          success: false,
          message: "Both Phone number and Password is required!",
        }),
        { status: 500 }
      );
    }

    // Find the user in the database by their phone number
    const user = await prismadb.user.findUnique({
      where: { phone },
    });

    if (!user) {
      return new NextResponse(
        JSON.stringify({ success: false, message: "User not found!" }),
        { status: 500 }
      );
    }

    // Compare the input password with the stored hashed password
    const isPasswordCorrect = await bcrypt.compare(password, user.password);

    if (!isPasswordCorrect) {
      return new NextResponse(
        JSON.stringify({ success: false, message: "Incorrect password!" }),
        { status: 500 }
      );
    }

    // Create access token
    const accessToken = jwt.sign(
      { phone: user.phone, role: user.role, id: user.id },
      process.env.JWT_SECRET as Secret,
      { expiresIn: process.env.JWT_EXPIRES_IN }
    );

    // Create refresh token
    const refreshToken = jwt.sign(
      { phone: user.phone, role: user.role, id: user.id },
      process.env.JWT_REFRESH_SECRET as Secret,
      { expiresIn: process.env.JWT_REFRESH_EXPIRES_IN }
    );


    // Return success response with only the access token
    return new NextResponse(
      JSON.stringify({
        success: true,
        message: "User logged in successfully",
        accessToken,
        refreshToken
      }),
      { status: 200 }
    );
  } catch (error) {
    // Return error response with a generic message
    return new NextResponse(
      JSON.stringify({
        success: false,
        message: "An error occurred while logging in",
      }),
      { status: 500 }
    );
  }
}
