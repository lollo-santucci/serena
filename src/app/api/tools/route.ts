import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// GET - Recupera i tool con possibilità di filtrare per recipeId
export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const recipeId = searchParams.get('recipeId');

    // Creiamo un oggetto di filtro dinamico
    const where: any = {};

    if (recipeId) {
      where.recipeId = parseInt(recipeId);
    }

    // Recupera tutti i tool che corrispondono ai filtri
    const tools = await prisma.tool.findMany({
      where,
      include: {
        recipe: false,
      },
    });

    return NextResponse.json(tools, { status: 200 });
  } catch (error) {
    console.error('Errore durante il recupero dei tool:', error);
    return NextResponse.json(
      { error: 'Errore durante il recupero dei tool' },
      { status: 500 }
    );
  } finally {
    await prisma.$disconnect();
  }
}

// POST - Crea un nuovo tool
export async function POST(request: Request) {
  try {
    const body = await request.json();
    const newTool = await prisma.tool.create({
      data: {
        recipeId: body.recipeId,
        tool: body.tool,
      },
    });
    return NextResponse.json(newTool, { status: 201 });
  } catch (error) {
    console.error('Errore durante la creazione del tool:', error);
    return NextResponse.json(
      { error: 'Errore durante la creazione del tool' },
      { status: 500 }
    );
  } finally {
    await prisma.$disconnect();
  }
}

// PUT - Aggiorna un tool esistente
export async function PUT(request: Request) {
  try {
    const body = await request.json();
    const updatedTool = await prisma.tool.update({
      where: { id: body.id },
      data: {
        recipeId: body.recipeId,
        tool: body.tool,
      },
    });
    return NextResponse.json(updatedTool, { status: 200 });
  } catch (error) {
    console.error('Errore durante l\'aggiornamento del tool:', error);
    return NextResponse.json(
      { error: 'Errore durante l\'aggiornamento del tool' },
      { status: 500 }
    );
  } finally {
    await prisma.$disconnect();
  }
}

// DELETE - Elimina un tool
export async function DELETE(request: Request) {
  try {
    const { id } = await request.json();
    await prisma.tool.delete({
      where: { id },
    });
    return NextResponse.json({ message: 'Tool eliminato con successo' }, { status: 200 });
  } catch (error) {
    console.error('Errore durante l\'eliminazione del tool:', error);
    return NextResponse.json(
      { error: 'Errore durante l\'eliminazione del tool' },
      { status: 500 }
    );
  } finally {
    await prisma.$disconnect();
  }
}
