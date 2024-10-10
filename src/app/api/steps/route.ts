import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// GET - Recupera gli step con possibilità di filtrare per recipeId
export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const recipeId = searchParams.get('recipeId');

    // Creiamo un oggetto di filtro dinamico
    const where: any = {};

    if (recipeId) {
      where.recipeId = parseInt(recipeId);
    }

    // Recupera tutti gli step che corrispondono ai filtri
    const steps = await prisma.step.findMany({
      where,
      include: {
        recipe: false,
        images: false,
      },
    });

    return NextResponse.json(steps, { status: 200 });
  } catch (error) {
    console.error('Errore recupero step:', error);
    return NextResponse.json(
      { error: 'Errore recupero step' },
      { status: 500 }
    );
  } finally {
    await prisma.$disconnect();
  }
}

// POST - Crea un nuovo step
export async function POST(request: Request) {
  try {
    const body = await request.json();
    const newStep = await prisma.step.create({
      data: {
        recipeId: body.recipeId,
        step: body.step,
        specification: body.specification,
      },
    });
    return NextResponse.json(newStep, { status: 201 });
  } catch (error) {
    console.error('Errore creazione step:', error);
    return NextResponse.json(
      { error: 'Errore creazione step' },
      { status: 500 }
    );
  } finally {
    await prisma.$disconnect();
  }
}

// PUT - Aggiorna uno step esistente
export async function PUT(request: Request) {
  try {
    const body = await request.json();
    const updatedStep = await prisma.step.update({
      where: { id: body.id },
      data: {
        recipeId: body.recipeId,
        step: body.step,
        specification: body.specification,
      },
    });
    return NextResponse.json(updatedStep, { status: 200 });
  } catch (error) {
    console.error('Errore aggiornamento step:', error);
    return NextResponse.json(
      { error: 'Errore aggiornamento step' },
      { status: 500 }
    );
  } finally {
    await prisma.$disconnect();
  }
}

// DELETE - Elimina uno step
export async function DELETE(request: Request) {
  try {
    const { id } = await request.json();
    await prisma.step.delete({
      where: { id },
    });
    return NextResponse.json({ message: 'Step eliminato con successo' }, { status: 200 });
  } catch (error) {
    console.error('Errore eliminazione step:', error);
    return NextResponse.json(
      { error: 'Errore eliminazione step' },
      { status: 500 }
    );
  } finally {
    await prisma.$disconnect();
  }
}
