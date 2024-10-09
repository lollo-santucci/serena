import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET() {
  try {
    // Recupera tutti i "tastes" dal database
    const tastes = await prisma.taste.findMany();
    return NextResponse.json(tastes, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: 'Errore durante il recupero dei tastes' }, { status: 500 });
  }
}
