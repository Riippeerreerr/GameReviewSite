import pool from "../../../../lib/db";
import { NextResponse } from "next/server";

export default async function GET(req){
        try{
        let client= await pool.connect();
        console.log(client)
        const result = await client.query('SELECT * FROM GAMES');
        // res.status(200).json(r'esult.rows);
        console.log(result)
        return NextResponse.json(result.rows)}
        catch (error){
                return NextResponse.json({message:"nu merge"})
        }
}