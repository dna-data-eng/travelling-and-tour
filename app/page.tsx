import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Destinations from "@/components/Destinations";
import Steps from "@/components/Steps";
import EligibilityQuiz from "@/components/EligibilityQuiz";
import Estimator from "@/components/Estimator";
import Gallery from "@/components/Gallery";
import Testimonials from "@/components/Testimonials";
import Blog from "@/components/Blog";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import FloatingWidgets from "@/components/FloatingWidgets";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Destinations />
        <Steps />
        <EligibilityQuiz />
        <Estimator />
        <Gallery />
        <Testimonials />
        <Blog />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <FloatingWidgets />
    </>
  );
}
