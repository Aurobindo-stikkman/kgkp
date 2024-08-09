import HeroSection from "./_landing/hero/HeroSection";
import StatsSection from "./_landing/Stats/StatsSection";
import CoursesSection from "./_landing/courses/CoursesSection";
import TestimonialsSection from "./_landing/testimonials/TestimonialsSection";
import About_Us from "./_landing/aboutus/About_Us";

export default function Home() {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <TestimonialsSection />
      <CoursesSection />
      <About_Us />
    </>
  );
}
