import bandeamir from "../assets/images/destinations/bandeamir.jpg";
import bamyan from "../assets/images/destinations/bamyan.jpg";
import herat from "../assets/images/destinations/herat.jpg";
import kabul from "../assets/images/destinations/kabul.jpg";
import panjshir from "../assets/images/destinations/panjshir.jpg";

export const destinations = [
  {
    id: 1,
    name: "Band-e-Amir National Park",
    province: "Bamyan",
    category: "Nature",
    image: bandeamir,
    description: "A series of deep blue lakes surrounded by dramatic cliffs.",
    bestTime: "May - September",
    duration: "2 Days",
    ai: true,
    rating: 4.9,
  },

  {
    id: 2,
    name: "Bamyan Valley",
    province: "Bamyan",
    category: "History",
    image: bamyan,
    description:
      "Home of the famous Buddha niches and breathtaking landscapes.",
    bestTime: "April - October",
    duration: "3 Days",
    ai: true,
    rating: 4.8,
  },

  {
    id: 3,
    name: "Herat Citadel",
    province: "Herat",
    category: "History",
    image: herat,
    description: "One of the oldest fortresses in Central Asia.",
    bestTime: "Spring",
    duration: "1 Day",
    ai: false,
    rating: 4.7,
  },

  {
    id: 4,
    name: "Panjshir Valley",
    province: "Panjshir",
    category: "Nature",
    image: panjshir,
    description: "Beautiful mountains, rivers and peaceful villages.",
    bestTime: "Summer",
    duration: "2 Days",
    ai: true,
    rating: 4.9,
  },

  {
    id: 5,
    name: "Kabul City",
    province: "Kabul",
    category: "Culture",
    image: kabul,
    description:
      "Experience Afghanistan's capital, museums and traditional bazaars.",
    bestTime: "All Year",
    duration: "2 Days",
    ai: false,
    rating: 4.5,
  },
];
