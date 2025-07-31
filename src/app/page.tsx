import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Samples from "@/components/Samples";

export default function Home() {
  return <div className="w-full h-screen overflow-hidden">
    <Navbar />
    <Hero />
    <Samples />
    <Footer />
  </div>;
}
