export async function getAllTours() {
  const response = await fetch(
    `https://nextjs-pagerouter-default-rtdb.europe-west1.firebasedatabase.app/tours.json`
  );
  const data = await response.json();
  console.log("Raw data from Firebase:", data); // Add this line
  const tours = [];
  for (const key in data) {
    tours.push({
      id: key,
      ...data[key],
    });
  }
  return tours;
}

export async function getFeaturedTours() {
  const allTours = await getAllTours();
  return allTours.filter((tour) => tour.isFeatured);
}

export async function getFilteredTours(dateFilter) {
  const allTours = await getAllTours();
  const { year, month } = dateFilter;
  let filteredTours = allTours.filter((tour) => {
    const tourDate = new Date(tour.date);
    const tourYear = tourDate.getFullYear();
    const tourMonth = tourDate.getMonth();
    return tourYear === year && tourMonth === month - 1;
  });
  return filteredTours;
}

export async function getTourById(id) {
  const allTours = await getAllTours();

  return allTours.find((tour) => tour.id === id);
}
