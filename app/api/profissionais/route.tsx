import { NextResponse } from 'next/server'

export async function GET() {
  return NextResponse.json({ message: 'GET clientes endpoint OK' })
}

export async function POST() {
  return NextResponse.json({ message: 'POST clientes endpoint OK' })
}
