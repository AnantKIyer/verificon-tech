import ArrowRight from "@/assets/arrow-right.svg";
import cogImage from "@/assets/cog.png";
import cylinderImage from "@/assets/cylinder.png";
import noodleImage from "@/assets/noodle.png";
import Image from "next/image";

export const Hero = () => {
  return (
    <section className="pt-8 pb-20 md:pb-10  bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#183EC2,#EAEEFE_100%)] overflow-x-clip">
      <div className="container">
        <div className="md:flex items-center">
        <div className="md:w-[478px]">
          <div className="tag">version 2.0 is here</div>
          <h1 className="heading">Ensuring Quality, One Test at a Time </h1>
          <p className="text-xl text-[#010D3E] tracking-tight mt-6">
          We help businesses deliver flawless software through comprehensive testing solutions. From automated testing to performance optimization, we ensure your applications meet the highest quality standards.
          </p>
          <div className="flex gap-1 items-center mt-[30px]">
            <button className="btn btn-primary">Get free Consultation</button>
            <button className="btn btn-text gap-1">
              <span>Learn More</span>
              <ArrowRight className="h-5 w-5" />
              </button>
          </div>
        </div>
        <div className="mt-20 md:mt-0 md:h-[648px] md:flex-1 relative">
          <Image src={cogImage} alt="cog Image" className="md:absolute md:h-full md:w-auto md:max-w-none md:-left-6 lg:left-0 "/>
          <Image src={cylinderImage} width={220} height={220} alt="Cylinder Image" className="hidden md:block -top-8 -left-32 md:absolute" />
          <Image src={noodleImage} width={220} alt="Noodle Image" className="hidden absolute lg:block  top-[524px] left-[448px] rotate-[30deg]" />
        </div>
        </div>
      </div>
    </section>
  );
};
