import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET() {
  try {
    // Recupera tutti i "tastes" dal database
    const tastes = await prisma.taste.findMany();
    return NextResponse.json(tastes, { status: 200 });
  } catch (error) {
    console.error('Errore durante il recupero dei tastes:', error);
    return NextResponse.json(
      { error: 'Errore durante il recupero dei tastes' },
      { status: 500 }
    );
  } finally {
    // Chiude il client Prisma per evitare perdita di memoria
    await prisma.$disconnect();
  }
}
