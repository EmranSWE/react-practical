import { NextResponse } from "next/server";
import prismadb from "@/lib/prismadb";

// Export a named function for handling POST requests
export async function POST(req: Request) {
  try {
    const body = await req.json();
    // Extract data from the request body
    const { model, title, image, status, price, rating, keyFeature, spec } =
      body;
      const convertStatus = status === "true"; 
      const parsedPrice = parseInt(price); 
      const parsedRating = parseInt(rating); 
    // Create a new product with the provided data
    const result = await prismadb.product.create({
      data: {
        model,
        title,
        image,
        status: convertStatus,
        price:parsedPrice,
        rating:parsedRating,
      },
    });

    // Return success response with the result
    return new NextResponse(
      JSON.stringify({
        success: true,
        message: "Product created successfully",
        data: result,
      }),
      { status: 200 }
    );
  } catch (error) {
    console.error("Error:", error);

    // Return error response with a generic message
    return new NextResponse(
      JSON.stringify({
        success: false,
        message: "An error occurred while creating the product",
      }),
      { status: 500 }
    );
  }
}


// Getting All Product Api
export async function GET(req: Request) {
  try {
    const products = await prismadb.product.findMany();

    // Return success response with the product data
    return new NextResponse(
      JSON.stringify({
        success: true,
        data: products,
      }),
      { status: 200 }
    );
  } catch (error) {

    // Return error response with a generic message
    return new NextResponse(
      JSON.stringify({
        success: false,
        message: "An error occurred while fetching product data",
      }),
      { status: 500 }
    );
  }
}


