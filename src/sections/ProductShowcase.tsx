import productImage from "@/assets/product-image.png";
import pyramidImage from "@/assets/pyramid.png";
import tubeImage from "@/assets/tube.png";
import Image from "next/image";

export const ProductShowcase = () => {
  return (
    <section className="bg-gradient-to-b from-[#FFF] to-[#D2DCFF] py-24 overflow-x-clip">
      <div className="container">
        
        <div className="section-heading">
          <div className="flex justify-center">
            <div className="tag">Boost your Productivity</div>
          </div>
          <h2 className="heading text-center text-3xl md:text-[54px] md:leading-[60px] font-bold tracking-tighter">
            A more effective way to track progress
          </h2>
          <p className="text-center text-[22px] leading-[30px] tracking-tight text-[#010D3E] mt-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>

       <div className="relative">
         <Image src={productImage} alt="Product Image" className="mt-10" />
         <Image src={pyramidImage} alt="Pyramid Image" height={262} width={262} className="hidden md:block absolute -right-36 -top-32 " />
         <Image src={tubeImage} alt="Tube Image" height={248} className="hidden md:block absolute bottom-24 -left-36" />
       </div>

      </div>
    </section>
  );
};
