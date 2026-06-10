import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import StickyDemoCTA from '../components/StickyDemoCTA';
import Traction from '../components/Traction';
import ProblemSolution from '../components/ProblemSolution';
import HowItWorks from '../components/HowItWorks';
import Products from '../components/Products';
import Enterprise from '../components/Enterprise';
import Team from '../components/Team';
import Vision from '../components/Vision';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <StickyDemoCTA />
      <Traction />
      <ProblemSolution />
      <Products />
      <HowItWorks />
      <Enterprise />
      <Team />
      <Vision />
      <ContactForm />
      <Footer />
    </>
  );
}
