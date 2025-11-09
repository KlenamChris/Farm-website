import Navbar from "@/components/navbar";
import { ArrowDown, ArrowRight } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen relative">
      <div className="absolute top-0 left-0 w-full h-screen">
        <Image
          src="/hero.jpg"
          alt="Hero Image"
          fill
          className="object-cover object-center brightness-65"
          priority
        />
        <div className="absolute top-8 left-0 w-full">
          <Navbar />
        </div>
      </div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 max-w-5xl mx-auto flex flex-col gap-4 items-center justify-center">
        <div className="bg-white/20 px-4 py-2 rounded-full text-sm mb-4">
          Explore our product and services
        </div>
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl text-white">1A Farms Poultry Marketplace</h1>
        <p className="text-xl text-center mb-8">We produce high-quality poultry products for the local market.</p>
        <div className="flex items-center justify-center gap-4">
          <button className="flex items-center bg-black group transition-all duration-300 text-white px-6 py-4 rounded-full">
            <span className="mr-2">Learn More</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-all duration-300" />
          </button>
          <button className="hover:bg-white/10 transition-all duration-300 text-white px-6 py-4 rounded-full">
            <span className="mr-2">Contact Us</span>
          </button>
        </div>
      </div>
      <div className="absolute bottom-8 left-0 w-full flex justify-center">
        <button className="flex items-center animate-bounce px-6 py-2 rounded-full text-white duration-300 hover:bg-white/10 transition-all">
          <span className="mr-2 uppercase">Scroll</span>
          <ArrowDown className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
