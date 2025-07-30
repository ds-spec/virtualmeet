import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Samples from "@/components/Samples";
import Footer from "@/components/Footer";

export default function Home() {
  return <div className=" h-screen overflow-x-hidden">
    <Navbar />
    <Hero />
    <Samples />
    <Footer />
  </div>;
}
