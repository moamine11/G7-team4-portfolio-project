import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TeamGrid from "@/components/TeamGrid";
import Footer from "@/components/Footer";
import ParticleBackground from "@/components/ParticleBackground";

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative">
      <ParticleBackground />
      <Navbar />
      <Hero />
      <TeamGrid />
      <Footer />
    </div>
  );
};

export default Index;
