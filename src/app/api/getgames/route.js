import { NextResponse } from "next/server";
import { sql } from "@vercel/postgres";

export async function POST(request){
const body = await request.json();
  const { name, genre, releaseDate, platform } = body;

  let baseQuery = sql`SELECT title,genre,release_date,platform FROM Games WHERE 1=1`;
  const conditions = [];
  const params = [];

  // Add conditions and parameters dynamically
  if (name) {
    conditions.push(sql`AND title ILIKE ${`%${name}%`}`);
  }
  if (genre) {
    conditions.push(sql`AND genre ILIKE ${`%${genre}%`}`);
  }
  if (releaseDate) {
    conditions.push(sql`AND release_date = ${releaseDate}`);
  }
  if (platform) {
    conditions.push(sql`AND platform ILIKE ${`%${platform}%`}`);
  }

  // Combine base query and conditions
  const query = sql`${baseQuery} ${sql.join(conditions, sql` `)}`;
     
  console.log(query)
  try {
    const games = await sql`${sql.raw(query)}`;
    console.log(games)
    return NextResponse.json({ games: games.rows }, { status: 200 });
  } catch (error) {
    console.error('Error fetching games:', error);
    return NextResponse.json({ error: 'Error fetching games' }, 
                                { status: 500 });
  }
}
