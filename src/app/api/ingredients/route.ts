import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// GET - Recupera gli ingredienti con possibilità di filtrare per recipeId
export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const recipeId = searchParams.get('recipeId');

    // Creiamo un oggetto di filtro dinamico
    const where: Record<string, unknown> = {};

    if (recipeId) {
      where.recipeId = parseInt(recipeId);
    }

    // Recupera tutti gli ingredienti che corrispondono ai filtri
    const ingredients = await prisma.ingredient.findMany({
      where,
      include: {
        recipe: false,
      },
    });

    return NextResponse.json(ingredients, { status: 200 });
  } catch (error) {
    console.error('Errore durante il recupero degli ingredienti:', error);
    return NextResponse.json(
      { error: 'Errore durante il recupero degli ingredienti' },
      { status: 500 }
    );
  } finally {
    await prisma.$disconnect();
  }
}

// POST - Crea un nuovo ingrediente
export async function POST(request: Request) {
  try {
    const body = await request.json();
    const newIngredient = await prisma.ingredient.create({
      data: {
        recipeId: body.recipeId,
        measure: body.measure,
        qt: body.qt,
        ingredient: body.ingredient,
      },
    });
    return NextResponse.json(newIngredient, { status: 201 });
  } catch (error) {
    console.error('Errore  creazione ingrediente:', error);
    return NextResponse.json(
      { error: 'Errore creazione ingrediente' },
      { status: 500 }
    );
  } finally {
    await prisma.$disconnect();
  }
}

// PUT - Aggiorna un ingrediente esistente
export async function PUT(request: Request) {
  try {
    const body = await request.json();
    const updatedIngredient = await prisma.ingredient.update({
      where: { id: body.id },
      data: {
        recipeId: body.recipeId,
        measure: body.measure,
        qt: body.qt,
        ingredient: body.ingredient,
      },
    });
    return NextResponse.json(updatedIngredient, { status: 200 });
  } catch (error) {
    console.error('Errore aggiornamento ingrediente:', error);
    return NextResponse.json(
      { error: 'Errore aggiornamento ingrediente' },
      { status: 500 }
    );
  } finally {
    await prisma.$disconnect();
  }
}

// DELETE - Elimina un ingrediente
export async function DELETE(request: Request) {
  try {
    const { id } = await request.json();
    await prisma.ingredient.delete({
      where: { id },
    });
    return NextResponse.json({ message: 'Ingrediente eliminato con successo' }, { status: 200 });
  } catch (error) {
    console.error('Errore eliminazione ingrediente:', error);
    return NextResponse.json(
      { error: 'Errore eliminazione ingrediente' },
      { status: 500 }
    );
  } finally {
    await prisma.$disconnect();
  }
}
