import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// GET - Recupera le ricette con possibilità di filtrare per tasteId
export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const tasteId = searchParams.get('tasteId');

    // Creiamo un oggetto di filtro dinamico
    const where: any = {};

    if (tasteId) {
      where.tasteId = parseInt(tasteId);
    }

    // Recupera tutte le ricette che corrispondono ai filtri
    const recipes = await prisma.recipe.findMany({
      where,
      include: {
        taste: false,
      },
    });

    return NextResponse.json(recipes, { status: 200 });
  } catch (error) {
    console.error('Errore durante il recupero delle ricette:', error);
    return NextResponse.json(
      { error: 'Errore durante il recupero delle ricette' },
      { status: 500 }
    );
  } finally {
    await prisma.$disconnect();
  }
}

// POST - Crea una nuova ricetta
export async function POST(request: Request) {
  try {
    const body = await request.json();
    const newRecipe = await prisma.recipe.create({
      data: {
        name: body.name,
        description: body.description,
        prepTime: body.prepTime,
        cookTime: body.cookTime,
        serves: body.serves,
        tasteId: body.tasteId,
      },
    });
    return NextResponse.json(newRecipe, { status: 201 });
  } catch (error) {
    console.error('Errore durante la creazione della ricetta:', error);
    return NextResponse.json(
      { error: 'Errore durante la creazione della ricetta' },
      { status: 500 }
    );
  } finally {
    await prisma.$disconnect();
  }
}

// PUT - Aggiorna una ricetta esistente
export async function PUT(request: Request) {
  try {
    const body = await request.json();
    const updatedRecipe = await prisma.recipe.update({
      where: { id: body.id },
      data: {
        name: body.name,
        description: body.description,
        prepTime: body.prepTime,
        cookTime: body.cookTime,
        serves: body.serves,
        tasteId: body.tasteId,
      },
    });
    return NextResponse.json(updatedRecipe, { status: 200 });
  } catch (error) {
    console.error('Errore aggiornamento ricetta:', error);
    return NextResponse.json(
      { error: 'Errore aggiornamento ricetta' },
      { status: 500 }
    );
  } finally {
    await prisma.$disconnect();
  }
}

// DELETE - Elimina una ricetta
export async function DELETE(request: Request) {
  try {
    const { id } = await request.json();
    await prisma.recipe.delete({
      where: { id },
    });
    return NextResponse.json({ message: 'Ricetta eliminata con successo' }, { status: 200 });
  } catch (error) {
    console.error('Errore eliminazione ricetta:', error);
    return NextResponse.json(
      { error: 'Errore eliminazione ricetta' },
      { status: 500 }
    );
  } finally {
    await prisma.$disconnect();
  }
}
