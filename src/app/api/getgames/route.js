import { NextResponse } from "next/server";
import { sql } from "@vercel/postgres";

export async function GET(request){
        const games= await sql`SELECT * FROM Games`;
        return NextResponse.json({games},{status:200});
}