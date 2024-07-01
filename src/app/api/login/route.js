import { NextResponse } from "next/server";

export async function POST(req) {
    const body = await req.json();
    const { username, password } = body;

    console.log(username, password);

    return NextResponse.json({ message: "M-am logat" });
}