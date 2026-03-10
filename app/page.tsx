import { Header } from "./Navigation/Header";
import { Footer } from "./Navigation/Footer";
import Cars from "./dealership/Cars";
import Image from "next/image";
import Link from "next/link";


export default function Home() {
  return (
    <>
      <Header />
      
      {/* Hero Section */}
      <div className="relative min-h-[80vh] flex flex-col items-center justify-center">
        {/* Background Image with Overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/background/mercedes-benz-bg-2.jpg')",
          }}
        />
        {/* Dark Gradient Overlay */}
        <div className="absolute inset-0 dark-overlay" />
        
        {/* Hero Content */}
        <div className="relative z-10 text-center px-4">
          <h2 className="text-5xl md:text-7xl font-bold font-exo2 mb-4 tracking-wider uppercase">
            <span className="text-white">Auto </span>
            <span className="text-red-700">Engine</span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 font-montserrat">
            Find your dream car at the best prices.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <button className="race-red-gradient px-8 py-3 text-lg font-bold text-white rounded race-red-glow hover:shadow-red-glow-lg transition-all duration-300 font-montserrat tracking-wide uppercase">
              Explore Cars
            </button>
            <button className="border-2 border-white px-8 py-3 text-lg font-bold text-white rounded hover:bg-white hover:text-black transition-all duration-300 font-montserrat tracking-wide uppercase">
              Book a Test Drive
            </button>
          </div>
        </div>
        
        {/* Decorative Red Line */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-race-red" />
      </div>
      
      {/* Cars Section */}
      <div className="carbon-fiber py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold font-exo2 mb-4">
              <span className="text-white">Our </span>
              <span className="text-red-700">Premium Cars</span>
            </h2>
            <div className="w-24 h-1 bg-race-red mx-auto" />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Cars.map((car) => (
              <div 
                key={car.id} 
                className="bg-carbon-dark rounded-lg overflow-hidden border border-carbon-light hover:border-race-red transition-all duration-300 group hover:shadow-red-glow"
              >
                {/* Image Container */}
                <div className="relative h-64 overflow-hidden">
                  <Image 
                    src={car.image} 
                    alt={car.name} 
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/80 to-transparent" />
                  {/* Red Badge */}
                  <div className="absolute top-4 right-4 race-red-gradient px-3 py-1 text-xs font-bold text-white rounded uppercase tracking-wide">
                    Available
                  </div>
                </div>
                
                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold font-exo2 mb-2 text-white group-hover:text-race-red transition-colors duration-300">
                    {car.name}
                  </h3>
                  <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                    {car.description}
                  </p>
                  
                  {/* Price and Button */}
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-race-red font-bold text-2xl font-exo2">
                        €{car.price.toLocaleString()}
                      </span>
                    </div>
                    <Link href={`/Cars/${car.id}`} className="px-4 py-2 bg-carbon-light text-white text-sm font-medium rounded border border-carbon-light hover:bg-red-700 hover:border-red-700 transition-all duration-300 cursor-pointer">
                      View Details
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Features Section */}
      <div className="carbon-fiber py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="text-center p-6 border border-carbon-light rounded-lg hover:border-red-700 transition-all duration-300">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-carbon flex items-center justify-center">
                <svg className="w-8 h-8 text-red-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold font-exo2 text-white mb-2">Performance</h3>
              <p className="text-gray-400">High-performance vehicles engineered for speed and precision.</p>
            </div>
            
            {/* Feature 2 */}
            <div className="text-center p-6 border border-carbon-light rounded-lg hover:border-red-700 transition-all duration-300">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-carbon flex items-center justify-center">
                <svg className="w-8 h-8 text-red-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold font-exo2 text-white mb-2">Quality</h3>
              <p className="text-gray-400">Every vehicle undergoes rigorous quality inspections.</p>
            </div>
            
            {/* Feature 3 */}
            <div className="text-center p-6 border border-carbon-light rounded-lg hover:border-red-700 transition-all duration-300">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-carbon flex items-center justify-center">
                <svg className="w-8 h-8 text-red-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold font-exo2 text-white mb-2">Delivery</h3>
              <p className="text-gray-400">Fast and secure delivery to your doorstep anywhere.</p>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </>
  );
}
