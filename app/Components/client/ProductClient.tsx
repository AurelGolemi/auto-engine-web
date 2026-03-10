import { Header } from "../../Navigation/Header"
import { Footer } from "../../Navigation/Footer"
import Image from "next/image"
import Cars from "@/app/dealership/Cars";

export function ProductClient({ params }: { params: { id: string } }) {
  const carId = parseInt(params.id, 10);
  const car = Cars.find((c) => c.id === carId);

  if (!car) {
    return (
      <>
        <Header />
        <div className="container mx-auto px-4 py-16 text-center">
          <p className="text-xl text-gray-400">Car not found.</p>
        </div>
        <Footer />
      </>
    );
  }

  const [firstName, ...rest] = car.name.split(" ");

  return (
    <>
      <Header />
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="w-full md:w-1/2">
            <Image
              src={car.image}
              alt={car.name}
              width={700}
              height={700}
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className="w-full md:w-1/2">
            <h2 className="text-4xl font-bold font-exo2 mb-4">
              <span className="text-white">{firstName} </span>
              <span className="text-red-700">{rest.join(" ")}</span>
            </h2>
            <p className="text-gray-400 text-lg mb-6">{car.description}</p>
            <p className="text-2xl font-bold text-white mb-4">€{car.price.toLocaleString()}</p>
            <button className="px-6 py-3 bg-carbon-light text-white text-sm font-medium rounded border border-carbon-light hover:bg-race-red hover:border-race-red transition-all duration-300 cursor-pointer hover:bg-white hover:text-black">
              Contact Dealer
            </button>
            <button className="px-6 py-3 bg-carbon-light text-white text-sm font-medium rounded border border-red-700 hover:bg-race-red hover:border-race-red transition-all duration-300 ml-5 cursor-pointer hover:shadow-red-glow-lg hover:bg-red-700">
              Book a Test Drive
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}