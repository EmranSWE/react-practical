
import bcrypt from 'bcrypt';
import { NextResponse } from 'next/server';
import prismadb from '@/lib/prismadb';
export async function POST(req: Request) {
  try {
    // Parse request body
    const body = await req.json();
    const { phone, password } = body;

    // Validate required fields
    if (!phone || !password) {
      throw new Error('Phone and password are required');
    }

    // Check if the phone number already exists
    const existingUser = await prismadb.user.findUnique({
      where: {
        phone,
      },
    });

    if (existingUser) {
      return new NextResponse(JSON.stringify({ success: false, message: "Phone number already exists" }), { status: 400 });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 12);

    // Create a new user with the hashed password
    const result = await prismadb.user.create({
      data: {
        phone,
        password: hashedPassword,
      },
    });
    // Return success response with the result
    return new NextResponse(JSON.stringify({ success: true, message: "User created successfully", data: result }), { status: 200 });
  } catch (error) {
    console.error("Error:", error);

    // Return error response with a generic message
    return new NextResponse(JSON.stringify({ success: false, message: "An error occurred while creating the user" }), { status: 500 });
  }
}