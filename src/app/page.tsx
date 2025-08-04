import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Samples from "@/components/Samples";

export default function Home() {
  return (
    <div className="w-full h-screen overflow-x-hidden">
      <Navbar />
      <Hero />
      <Samples />
      <div className="flex justify-end">
        <Footer />
      </div>
    </div>
  );
}
