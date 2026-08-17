import { Product } from "@/types";

export const PRODUCTS: Product[] = [
  {
    id: "ghee-01",
    name: "Pure A2 Desi Cow Ghee",
    category: "Ghee",
    price: 750,
    weight: "500ml",
    rating: 4.9,
    reviews: 128,
    image: "https://images.unsplash.com/photo-1589927986076-2d1f133d3ef4?auto=format&fit=crop&w=600&q=80",
    description: "Traditionally made Bilona method Ghee using pure A2 cow milk.",
    tag: "Bestseller"
  },
  {
    id: "achar-01",
    name: "Homemade Mustard Mango Achar",
    category: "Achar",
    price: 260,
    weight: "500g",
    rating: 4.8,
    reviews: 94,
    image: "https://images.unsplash.com/photo-1599940824399-b87987ceb72a?auto=format&fit=crop&w=600&q=80",
    description: "Sun-dried raw mangoes pickled in authentic spices and cold-pressed mustard oil."
  },
  {
    id: "oil-01",
    name: "Cold-Pressed Yellow Mustard Oil",
    category: "Oil",
    price: 240,
    weight: "1 Litre",
    rating: 4.7,
    reviews: 67,
    image: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?auto=format&fit=crop&w=600&q=80",
    description: "100% natural wood-pressed Kachi Ghani mustard oil loaded with nutrients.",
    tag: "Fresh Batch"
  }
];
