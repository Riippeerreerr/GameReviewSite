import { NextResponse } from "next/server";
import { sql } from "@vercel/postgres";

export async function POST(req) {
    const body = await req.json();
    const { username, password } = body;
    const resultat=await sql`SELECT * FROM Users WHERE username=${username} 
    AND passwordhash=${password}`
    
    if(resultat.rows.length===0){
        console.log("Authentification failed");
        return NextResponse.json({ error:"Invalid credentials" }, { status: 404 });
    }
    if(username==resultat.rows[0].username && 
        password==resultat.rows[0].passwordhash){
        console.log("Merge autentificarea")

        return NextResponse.json({ message: "Logged In" },{ status:200 });
        }
    return NextResponse.json({ error:"Invalid credentials" }, { status: 404 });
}






