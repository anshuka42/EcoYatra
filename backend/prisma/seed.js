const prisma = require("../lib/prisma");
const destinations = require("../data/destinations");

async function main() {
  console.log("Starting destination seed...");

  for (const destination of destinations) {
    await prisma.destination.upsert({
      where: {
        id: destination.id,
      },

      update: {
        name: destination.name,
        state: destination.state,
        description: destination.description,
        image: destination.img1,
        category: destination.category,
        bestTime: destination.bestSeason,
        duration: `${destination.days} days`,
        price: destination.budget,
        rating: destination.rating,
        ecoRating: destination.ecoScore,
        activities: destination.activities,
      },

      create: {
        id: destination.id,
        name: destination.name,
        state: destination.state,
        description: destination.description,
        image: destination.img1,
        category: destination.category,
        bestTime: destination.bestSeason,
        duration: `${destination.days} days`,
        price: destination.budget,
        rating: destination.rating,
        ecoRating: destination.ecoScore,
        activities: destination.activities,
      },
    });
  }
  await prisma.$executeRawUnsafe(`
  SELECT setval(
    pg_get_serial_sequence('"Destination"', 'id'),
    COALESCE((SELECT MAX(id) FROM "Destination"), 1),
    true
  );
`);

  console.log("Destination ID sequence synchronized!");
  console.log("Destination seed completed!");
}

main()
  .catch((error) => {
    console.error("Seed failed:", error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });