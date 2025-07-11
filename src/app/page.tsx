import FAQ from "../../components/FAQ";
import BlogSection from "../../components/home/blogSection";
import HeroSection from "../../components/home/heroSection";
import HowWeWorkSection from "../../components/home/howWeWorkSection";
import TestimonialSection from "../../components/home/testimonialSection";
export default function Home() {
  return (
    <div className="text-foreground min-h-screen flex flex-col items-center w-full font-sans relative">
      <HeroSection />
      <HowWeWorkSection/>
      <TestimonialSection/>
      <FAQ/>
      <BlogSection/>
    </div>
  );
}
