export interface Product {
  id: string;
  name: string;
  category: "Ghee" | "Achar" | "Oil" | "Other";
  price: number;
  weight: string;
  rating: number;
  reviews: number;
  image: string;
  description: string;
  tag?: string;
}

export interface CartItem extends Product {
  quantity: number;
}
