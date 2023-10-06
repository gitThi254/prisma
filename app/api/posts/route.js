import prisma from "@/libs/prismadb";
import { NextResponse } from "next/server";
export const POST = async (req) => {
  try {
    const body = await req.json();
    const { title, description } = body;
    const newPost = await prisma.post.create({
      data: {
        title,
        description,
      },
    });
    return NextResponse.json(newPost, { status: 201 });
  } catch (err) {
    return NextResponse.json({ message: "POST error" }, { status: 500 });
  }
};

export const GET = async () => {
  try {
    const posts = await prisma.post.findMany();

    return NextResponse.json(posts);
  } catch (err) {
    return NextResponse.json({ message: "GET Error", err }, { status: 500 });
  }
};
