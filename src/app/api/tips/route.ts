import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// GET - Recupera i suggerimenti con possibilità di filtrare per recipeId
export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const recipeId = searchParams.get('recipeId');

    // Creiamo un oggetto di filtro dinamico
    const where: any = {};

    if (recipeId) {
      where.recipeId = parseInt(recipeId);
    }

    // Recupera tutti i suggerimenti che corrispondono ai filtri
    const tips = await prisma.tip.findMany({
      where,
      include: {
        recipe: false,
      },
    });

    return NextResponse.json(tips, { status: 200 });
  } catch (error) {
    console.error('Errore durante il recupero dei suggerimenti:', error);
    return NextResponse.json(
      { error: 'Errore durante il recupero dei suggerimenti' },
      { status: 500 }
    );
  } finally {
    await prisma.$disconnect();
  }
}

// POST - Crea un nuovo suggerimento
export async function POST(request: Request) {
  try {
    const body = await request.json();
    const newTip = await prisma.tip.create({
      data: {
        recipeId: body.recipeId,
        tip: body.tip,
      },
    });
    return NextResponse.json(newTip, { status: 201 });
  } catch (error) {
    console.error('Errore durante la creazione del suggerimento:', error);
    return NextResponse.json(
      { error: 'Errore durante la creazione del suggerimento' },
      { status: 500 }
    );
  } finally {
    await prisma.$disconnect();
  }
}

// PUT - Aggiorna un suggerimento esistente
export async function PUT(request: Request) {
  try {
    const body = await request.json();
    const updatedTip = await prisma.tip.update({
      where: { id: body.id },
      data: {
        recipeId: body.recipeId,
        tip: body.tip,
      },
    });
    return NextResponse.json(updatedTip, { status: 200 });
  } catch (error) {
    console.error('Errore durante l\'aggiornamento del suggerimento:', error);
    return NextResponse.json(
      { error: 'Errore durante l\'aggiornamento del suggerimento' },
      { status: 500 }
    );
  } finally {
    await prisma.$disconnect();
  }
}

// DELETE - Elimina un suggerimento
export async function DELETE(request: Request) {
  try {
    const { id } = await request.json();
    await prisma.tip.delete({
      where: { id },
    });
    return NextResponse.json({ message: 'Suggerimento eliminato con successo' }, { status: 200 });
  } catch (error) {
    console.error('Errore durante l\'eliminazione del suggerimento:', error);
    return NextResponse.json(
      { error: 'Errore durante l\'eliminazione del suggerimento' },
      { status: 500 }
    );
  } finally {
    await prisma.$disconnect();
  }
}
