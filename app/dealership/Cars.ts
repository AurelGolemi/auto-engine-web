export interface Car {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
}

const cars: Cars = [
  {
    id: 1,
    name: "Mercedes-Benz C-Class",
    price: 46000,
    image: "/cars/mercedes-benz-c-class.jpg",
    description: "The Mercedes-Benz C-Class is a compact luxury sedan that offers a blend of performance, comfort, and advanced technology. With its sleek design and powerful engine options, the C-Class delivers an exhilarating driving experience. Inside, you'll find a luxurious interior with high-quality materials and cutting-edge features, making it a perfect choice for those seeking both style and substance in a car.",
  },
  {
    id: 2,
    name: "BMW M3 Series",
    price: 45000,
    image: "/cars/bmw-m3-series.jpg",
    description: "The BMW M3 Series is a high-performance compact sedan that combines sporty performance with luxury comfort. It features a responsive driving dynamics and a well-appointed interior with high-quality materials and advanced technology.",
  },
  {
    id: 3,
    name: "Porsche 718 Cayman",
    price: 127800,
    image: "/cars/porsche-718-cayman.jpg",
    description: "The Porsche 718 Cayman is a mid-engine sports car that offers exceptional handling and performance. With its sleek design and powerful engine options, the 718 Cayman delivers an exhilarating driving experience. Inside, you'll find a luxurious interior with high-quality materials and advanced features, making it a perfect choice for those seeking a thrilling and stylish sports car.",
  }
];

export type Cars = Car[];

export default cars;