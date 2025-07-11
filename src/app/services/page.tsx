import CategoriesSection from "../../../components/services/categoriesSection";
import FlowSection from "../../../components/services/flowSection";
import TechSection from "../../../components/services/techSection";

export default function Services() {
  return (
    <div>
    <div className="min-h-screen bg-background pt-[15vw] pl-[10vw] bg-[url('/images/services/serviceBackground.png')] bg-cover bg-center">
      <div>
        <h2 className="text-header text-white font-semibold leading-[110%] w-[43.75vw] pb-[3vw]">Smart Digital Solutions. Custom-Built for Growth.</h2>
        <p className="text-regularText text-[#CACDD0] font-medium leading-[150%] text-justify w-[27.875vw]">
        From digital campaigns to full-stack development — explore the services designed to move your brand forward.
        </p>
      </div>
    </div>
      <CategoriesSection/>
      <TechSection/>
      <FlowSection/>
      </div>
  );
} 