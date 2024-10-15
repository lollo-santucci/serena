import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  // Seed Tastes
  const tastes = [
    { id: 1, taste: 'Dolce', description: 'Le molecole dolci, per esempio gli zuccheri, si legano ad un recettore specifico di membrana, attivandolo...', imagePath: 'img/tastes/dolce.webp' },
    { id: 2, taste: 'Salato', description: 'La molecola che funge da stimolo gustativo si lega a canali del Na+ regolati da ligando, aprendoli...', imagePath: 'img/tastes/salato.webp' },
    { id: 3, taste: 'Acido', description: 'La sensibilità gustativa all\'acido è data dalla presenza di ioni H+...', imagePath: 'img/tastes/acido.webp' },
    { id: 4, taste: 'Amaro', description: 'Le molecole che scatenano la sensibilità al gusto amaro sono quelle che attivano un maggior numero di possibili vie di trasduzione...', imagePath: 'img/tastes/amaro.webp' },
    { id: 5, taste: 'Umami', description: 'L\'umami viene percepito attraverso i recettori del glutammato mGluR4 e mGluR1...', imagePath: 'img/tastes/umami.webp' },
  ]

  for (const taste of tastes) {
    await prisma.taste.upsert({
      where: { id: taste.id },
      update: taste,
      create: taste,
    })
  }

  // Seed Recipe
  // Seed Recipe
  const sacher = await prisma.recipe.upsert({
    where: { id: 1 },
    update: {},
    create: {
      id: 1,
      name: 'Sacher',
      description: '', // La descrizione è vuota nel CSV
      prepTime: 40,
      cookTime: 40,
      serves: 2,
      tasteId: 1, // Dolce
      imagePath: '/imgs/recipes/sacher.webp',  // Aggiungi il campo imagePath
    },
  })

  // Seed Ingredients
  const ingredients = [
    { recipeId: 1, measure: 'g.', qt: 100, ingredient: 'Burro (anche seza lattosio)' },
    { recipeId: 1, measure: 'g.', qt: 100, ingredient: 'Zucchero a velo / Zefiro' },
    { recipeId: 1, measure: 'g.', qt: 100, ingredient: 'Farina di mandorle dolci' },
    { recipeId: 1, measure: 'g.', qt: 40, ingredient: 'Fecola di patate (anche senza glutine)' },
    { recipeId: 1, measure: 'g.', qt: 150, ingredient: 'Cioccolata fondente 70%' },
    { recipeId: 1, measure: null, qt: 0, ingredient: 'Semi di vaniglia la punta del coltello' },
    { recipeId: 1, measure: null, qt: 5, ingredient: 'Uova (4 tuorli, 3 albumi, 1 intero)' },
    { recipeId: 1, measure: null, qt: -1, ingredient: 'Marmellata di albicocche' },
    { recipeId: 1, measure: null, qt: 0, ingredient: 'Panna fresca' },
  ]

  for (const ingredient of ingredients) {
    await prisma.ingredient.create({
      data: ingredient,
    })
  }

  // Seed Steps
  const steps = [
    { recipeId: 1, step: 'Tagliuzzare il cioccolato e fonderlo a bagnomaria. Accendere il forno a 175/180 gradi. Imburrare e infarinare una tortiera di 22 cm di diametro.', specification: 'Cerca di non finire tutta la cioccolata prima di usarla per la torta' },
    { recipeId: 1, step: 'Unire farina di mandorle e i semi di vaniglia (o la bustina di vanillina) insieme con lo zucchero. Mettere il burro a pezzetti e un poco ammorbidito in una ciotola e lavorarlo a pomata. Unire a quest\'ultimo poco alla volta il composto di mandorle, zucchero e vaniglia, alternandolo con 4 tuorli e l\'uovo intero, incorporare poi poco alla volta il cioccolato fuso ma freddo e la fecola setacciata. Infine incorporare dal basso verso l\'alto con movimenti circolari gli albumi montati in neve ben ferma. Versare il composto nella tortiera, livellarlo, porlo nel ripiano centrale del forno e lasciar cuocere la torta per 30, 40 minuti. Attenzione! A seconda del forno possono bastare anche 25 minuti. Fare sempre la prova dello stecchino prima di estrarre la torta.', specification: null },
    { recipeId: 1, step: 'A cottura ultimata capovolgere delicatamente la torta su una gratella e lasciar freddare.  Tagliarla a metà e cospargerla con un velo di marmellata di albicocche. Ricomporla. Far sciogliere a bagnomaria il cioccolato e, ancora caldissimo, farlo colare sulla torta fino a coprirla interamente. Lasciar freddare prima di togliere la torta dalla gratella e adagiarla sul piatto da portata. Servire con panna leggermente montata.', specification: null },
  ]

  for (const step of steps) {
    await prisma.step.create({
      data: step,
    })
  }

  // Seed Tips
  await prisma.tip.create({
    data: {
      recipeId: 1,
      tip: 'E\' molto piacevole, ma è solo una mia preferenza, scaldare solo per pochi attimi (fino a che la glassa ridiventa lucida) la Sacher prima di mangiarla, per esempio nel forno caldo prima scaldato a 100 gradi e poi spento prima di introdurre la torta.',
    },
  })

  // Seed Tools
  await prisma.tool.create({
    data: {
      recipeId: 1,
      tool: 'tortiera di 22 cm di diametro',
    },
  })

  // Seed Images
  const images = [
    { stepId: 2, path: '/imgs/placeholder.webp' },
    { stepId: 2, path: '/imgs/placeholder.webp' },
  ]

  for (const image of images) {
    await prisma.image.create({
      data: image,
    })
  }

  console.log('Seeding completed successfully')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
