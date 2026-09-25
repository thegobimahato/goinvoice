import { NextRequest, NextResponse } from "next/server";

import UserModel from "@/models/user.model";

import { auth } from "@/lib/auth";
import { connectDb } from "@/lib/connectDB";

export async function PUT(request: NextRequest) {
  try {
    const session = await auth();

    if (!session?.user?.id) {
      return NextResponse.json(
        {
          message: "Unauthorized access",
        },
        {
          status: 401,
        },
      );
    }

    const { firstName, lastName, currency } = await request.json();

    await connectDb();

    const userDetails = await UserModel.findByIdAndUpdate(
      session.user.id,
      {
        $set: {
          firstName,
          lastName,
          currency,
        },
      },
      {
        new: true,
        runValidators: true,
      },
    );

    if (!userDetails) {
      return NextResponse.json(
        {
          message: "User not found",
        },
        {
          status: 404,
        },
      );
    }

    return NextResponse.json(
      {
        message: "User updated successfully",
        userDetails,
      },
      {
        status: 200,
      },
    );
  } catch (error: unknown) {
    console.error("Update user error:", error);

    return NextResponse.json(
      {
        message: error instanceof Error ? error.message : "Something went wrong",
      },
      {
        status: 500,
      },
    );
  }
}
