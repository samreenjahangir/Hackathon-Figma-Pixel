// details.ts
import { StaticImageData } from "next/image";
import best1 from "@/public/Best/b1.png";
import best2 from "@/public/Best/b2.png";
import best3 from "@/public/Best/b3.png";
export interface ProductDetail {
    id: number;
    name: string;
    description: string;
    price: string;
    imageUrl: StaticImageData;
  }
  
  export const products: ProductDetail[] = [
    {
        id: 1,
        name: "Nike Air Max Pulse",
        description: "Women's Shoe",
        price: "$13.99",
        imageUrl: best1,
      },{
        id: 2,
        name: "Nike Air Max Pulse",
        description: "Men's Shoe",
        price: "$13.99",
        imageUrl: best2,
      },{
        id: 3,
        name: "Nike Air 97 SE",
        description: "Men's Shoe",
        price: "$16.95",
        imageUrl: best3,
      },
    // Add more products as needed
  ];
  