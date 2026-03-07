import { Header } from "./Navigation/Header";
import { Footer } from "./Navigation/Footer";
// import { Image } from "next/image";

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
      <Footer />
    </>
  );
}
