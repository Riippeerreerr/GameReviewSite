import { NextResponse } from "next/server";
import { sql } from "@vercel/postgres";

export async function POST(req) {
    const body = await req.json();
    const { username, password } = body;
    const resultat=await sql`SELECT * FROM Users WHERE username=${username} 
    AND passwordhash=${password}`

    console.log(username, password);
    console.log(resultat);
    
    if(resultat.rows=[]){
        console.log("nu merge autentificarea");
        return NextResponse.json({ error:"muie postgres" }, { status: 404 });
    }
    else if(username==resultat.rows[0].username && 
        password==resultat.rows[0].passwordhash)
        console.log("Merge autentificarea")

    return NextResponse.json({ message: "M-am logat" });
}






