

import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  // Your contact form logic here
  return NextResponse.json({ message: 'Success' })
}