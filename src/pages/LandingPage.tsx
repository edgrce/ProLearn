import Hero from "../components/Hero";
import Features from "../components/Features";
import Steps from "../components/Steps";
import Testimonial from "../components/Testimonial";
import Courses from "../components/Courses";
import CallToAction from "../components/CallToAction";
import Footer from "../components/Footer";

export default function LandingPage() {
  return (
    <>
      <main className="pt-0">
        <Hero /> {/* Navbar sudah di dalam Hero */}
        <Features />
        <Steps />
        <Testimonial />
        <Courses />
        <CallToAction />
      </main>
      <Footer />
    </>
  );
}
