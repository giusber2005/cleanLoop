import { NextResponse } from 'next/server'
import { sql } from '@vercel/postgres'

export async function POST(request: Request): Promise<NextResponse> {
  const { photoUrl, reason, timestamp, location } = await request.json()

  if (!photoUrl || !reason || !timestamp || !location) {
    return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
  }

  try {
    await sql`
      INSERT INTO photos (photo_url, reason, timestamp, location)
      VALUES (${photoUrl}, ${reason}, ${timestamp}, ${location})
    `
    return NextResponse.json({ message: 'Photo metadata saved successfully' })
  } catch (error) {
    console.error('Error saving to Vercel Postgres:', error)
    return NextResponse.json({ error: 'Failed to save photo metadata' }, { status: 500 })
  }
}