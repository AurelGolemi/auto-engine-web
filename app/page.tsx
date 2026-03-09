import { Header } from "./Navigation/Header";
import { Footer } from "./Navigation/Footer";
import Cars from "./dealership/Cars";
import Image from "next/image";


export default function Home() {
  return (
    <>
      <Header />
      <div style={{
        backgroundImage: "url('/background/mercedes-benz-bg-2.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        opacity: "0.7",
      }} className="bg-cover bg-center min-h-screen flex flex-col items-center justify-center text-white">
        <h2 className="text-3xl font-bold mb-4">Welcome to Auto Engine</h2>
        <p className="text-lg">Find your dream car at the best prices.</p>
      </div>
      <div className="container mx-auto py-12">
        <h2 className="text-2xl font-bold mb-6">Our Cars</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Cars.map((car) => (
            <div key={car.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <Image src={car.image} alt={car.name} width={400} height={400} className="object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-bold mb-2 text-gray-900">{car.name}</h3>
                <p className="text-gray-900 mb-4">{car.description}</p>
                <p className="text-lg font-semibold text-gray-900">€{car.price.toLocaleString()}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}
