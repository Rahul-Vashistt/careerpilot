import { NextResponse } from "next/server";
import AppError from "./AppError";

export default function handleError(error: unknown, message: string = "Internal server error") {
  if (error instanceof AppError) {
    return NextResponse.json(
      { message: error.message },
      { status: error.statusCode },
    );
  }

  console.error(error);

  return NextResponse.json(
    { message },
    { status: 500 },
  );
}
