import { NextResponse } from "next/server";
import { sql } from "@vercel/postgres";

export async function POST(req) {
    const body = await req.json();
    const { username, password , email} = body;
    // generating a random number
    const id = Math.floor(Math.random() * 100000) + 1;  
    const roleid= 1;
    console.log(id,username, password, email);

    await sql`INSERT INTO Users (userid, username, passwordhash, 
    email, roleid) VALUES (${id},${username}, ${password},${email}, ${roleid});`;

    return NextResponse.json({ message: "M-am inregistrat" });
}






