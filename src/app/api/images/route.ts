import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// GET - Recupera le immagini con possibilità di filtrare per recipeId o stepId
export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const recipeId = searchParams.get('recipeId');
    const stepId = searchParams.get('stepId');

    // Creiamo un oggetto di filtro dinamico
    const where: any = {};

    if (recipeId) {
      where.recipeId = parseInt(recipeId);
    }

    if (stepId) {
      where.stepId = parseInt(stepId);
    }

    // Recupera tutte le immagini che corrispondono ai filtri
    const images = await prisma.image.findMany({
      where,
      include: {
        recipe: false,
        step: false,
      },
    });

    return NextResponse.json(images, { status: 200 });
  } catch (error) {
    console.error('Errore durante il recupero delle immagini:', error);
    return NextResponse.json(
      { error: 'Errore durante il recupero delle immagini' },
      { status: 500 }
    );
  } finally {
    await prisma.$disconnect();
  }
}

// POST - Crea una nuova immagine
export async function POST(request: Request) {
  try {
    const body = await request.json();
    const newImage = await prisma.image.create({
      data: {
        recipeId: body.recipeId,
        stepId: body.stepId,
        path: body.path,
      },
    });
    return NextResponse.json(newImage, { status: 201 });
  } catch (error) {
    console.error('Errore durante la creazione dell\'immagine:', error);
    return NextResponse.json(
      { error: 'Errore durante la creazione dell\'immagine' },
      { status: 500 }
    );
  } finally {
    await prisma.$disconnect();
  }
}

// PUT - Aggiorna un'immagine esistente
export async function PUT(request: Request) {
  try {
    const body = await request.json();
    const updatedImage = await prisma.image.update({
      where: { id: body.id },
      data: {
        recipeId: body.recipeId,
        stepId: body.stepId,
        path: body.path,
      },
    });
    return NextResponse.json(updatedImage, { status: 200 });
  } catch (error) {
    console.error('Errore durante l\'aggiornamento dell\'immagine:', error);
    return NextResponse.json(
      { error: 'Errore durante l\'aggiornamento dell\'immagine' },
      { status: 500 }
    );
  } finally {
    await prisma.$disconnect();
  }
}

// DELETE - Elimina un'immagine
export async function DELETE(request: Request) {
  try {
    const { id } = await request.json();
    await prisma.image.delete({
      where: { id },
    });
    return NextResponse.json({ message: 'Immagine eliminata con successo' }, { status: 200 });
  } catch (error) {
    console.error('Errore durante l\'eliminazione dell\'immagine:', error);
    return NextResponse.json(
      { error: 'Errore durante l\'eliminazione dell\'immagine' },
      { status: 500 }
    );
  } finally {
    await prisma.$disconnect();
  }
}
