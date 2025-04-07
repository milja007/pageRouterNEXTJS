const FakeData = [
  {
    id: "t1",
    title: "Eiffel Tower",
    description:
      "The Eiffel Tower is an iconic iron tower located in Paris, France. It was built by Gustave Eiffel and his team between 1887 and 1889. The tower was initially designed as a temporary structure for the 1889 World's Fair, but was made permanent because it attracted great attention.",
    location: " Paris, France",
    date: "2024-05-12",
    image: "images/eiffel.jpg",
    isFeatured: true,
  },
  {
    id: "t2",
    title: "Coliseum",
    description:
      "The Colosseum was used as a center of entertainment for the Roman people, where gladiator fights, wild animal hunts, mock naval battles (naumachia) and other public spectacles were held. In the center of the structure was an arena where these events were held.",
    location: " Rome, Italy",
    date: "2023-06-12",
    image: "images/coliseum.jpg",
    isFeatured: false,
  },
  {
    id: "t3",
    title: "British Museum",
    description:
      "The British Museum, located in London, the capital of the United Kingdom, is one of the largest and most comprehensive museums in the world. It was founded in 1753 and opened to the public in 1759. The museum contains more than 8 million artifacts from human history.",
    location: " London, UK",
    date: "2022-07-12",
    image: "images/museum.jpg",
    isFeatured: true,
  },
];

export function getFeaturedTours() {
  return FakeData.filter((tour) => tour.isFeatured);
}

export function getAllTours() {
  return FakeData;
}

export function getFilteredTours(dateFilter) {
  const { year, month } = dateFilter;

  let filteredTours = FakeData.filter((tour) => {
    const tourDate = new Date(tour.date);
    return tourDate.getFullYear() === year && tourDate.getMonth() === month - 1;
  });

  return filteredTours;
}

export function getTourById(id) {
  return FakeData.find((tour) => tour.id === id);
}
