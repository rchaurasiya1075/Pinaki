import { Product } from "@/types";

export const PRODUCTS: Product[] = [
  {
    id: "ghee-01",
    name: "Pure A2 Desi Cow Ghee (Bilona Method)",
    category: "Ghee",
    price: 750,
    weight: "500ml",
    rating: 4.9,
    reviews: 142,
    image: "https://images.unsplash.com/photo-1589927986076-2d1f133d3ef4?auto=format&fit=crop&w=600&q=80",
    description: "Authentic Vedic Bilona method Ghee prepared from pure A2 milk of grass-fed desi cows.",
    ingredients: ["Pure A2 Cow Milk Fat"],
    tag: "Bestseller"
  },
  {
    id: "achar-01",
    name: "Homemade Mustard Mango Achar",
    category: "Achar",
    price: 260,
    weight: "500g",
    rating: 4.8,
    reviews: 98,
    image: "https://images.unsplash.com/photo-1599940824399-b87987ceb72a?auto=format&fit=crop&w=600&q=80",
    description: "Traditional sun-dried raw mango pickle aged in cold-pressed mustard oil and aromatic spices.",
    ingredients: ["Raw Mango", "Mustard Oil", "Fennel", "Nigella Seeds", "Rock Salt"]
  },
  {
    id: "oil-01",
    name: "Wood Pressed Yellow Mustard Oil",
    category: "Oil",
    price: 240,
    weight: "1 Litre",
    rating: 4.7,
    reviews: 76,
    image: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?auto=format&fit=crop&w=600&q=80",
    description: "100% pure Kachi Ghani mustard oil extracted using low-temperature wooden kolhu.",
    ingredients: ["Yellow Mustard Seeds"],
    tag: "Cold Pressed"
  },
  {
    id: "achar-02",
    name: "Stuffed Red Chilli Pickle (Bharwa Mirchi)",
    category: "Achar",
    price: 290,
    weight: "500g",
    rating: 4.9,
    reviews: 115,
    image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=600&q=80",
    description: "Thick Banarasi red chillies hand-stuffed with home-ground roasted spice blend.",
    ingredients: ["Red Chilli", "Amchur", "Mustard Oil", "Spices"]
  }
];
