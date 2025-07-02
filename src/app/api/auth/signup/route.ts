import { NextRequest, NextResponse } from "next/server"
import { createUser } from "@/lib/auth"
import { signUpSchema } from "@/lib/validations"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    
    // Validate input
    const validatedData = signUpSchema.parse(body)
    
    // Create user
    const user = await createUser(validatedData)
    
    if (!user) {
      return NextResponse.json(
        { error: "Failed to create user" },
        { status: 400 }
      )
    }

    return NextResponse.json(
      { 
        message: "User created successfully",
        user: {
          id: user.id,
          email: user.email,
          name: user.name,
        }
      },
      { status: 201 }
    )
  } catch (error: any) {
    console.error("Signup error:", error)
    
    if (error.name === 'ZodError') {
      return NextResponse.json(
        { error: "Invalid input data", details: error.errors },
        { status: 400 }
      )
    }
    
    if (error.message === 'User already exists') {
      return NextResponse.json(
        { error: "User already exists" },
        { status: 409 }
      )
    }
    
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    )
  }
}