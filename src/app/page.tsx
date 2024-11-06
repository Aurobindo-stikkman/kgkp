import HeroSection from "./_landing/hero/HeroSection";
import StatsSection from "./_landing/Stats/StatsSection";
import CoursesSection from "./_landing/courses/CoursesSection";
import TestimonialsSection from "./_landing/testimonials/TestimonialsSection";
import About_Us from "./_landing/aboutus/About_Us";
import FaqSection from "./_landing/faq/FaqSection";
import CallbackContainer from "./components/RequestCallback/CallbackContainer";

export default function Home() {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <TestimonialsSection />
      <CoursesSection />
      <div className="mb-[52px] xl:mb-20 ">
        <CallbackContainer />
      </div>
      <About_Us />
      <FaqSection />
    </>
  );
}
