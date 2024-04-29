import { cn } from "@/lib/utils";
import { Asar } from "next/font/google";
const font = Asar({ weight: "400", subsets: ["devanagari"] });
const BrandingComponent = () => {
  return (
    <div className="text-center py-8 text-black">
      <h2 className={cn("text-5xl font-bold mb-4  ", font.className)}>
        Embrace seamless shopping with <br />
        <span className="text-transparent bg-clip-text bg-gradient-to-r  from-purple-400 to-pink-600">E-shop BD</span>
        <br /> – where innovation meets convenience in every click!
        <br />
      </h2>
      <div className="flex flex-col items-center lg:flex-row lg:justify-center my-2">
        <div className="w-full lg:w-1/3 px-4 mb-4 lg:mb-0">
          <div>
            <h3 className=" font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r text-8xl from-purple-400 to-pink-600">
            90<span className="text-2xl">%</span>
            </h3>
          </div>
          <p className="text-light">
          Ensuring 90% accuracy in on-time delivery rates, guaranteeing your shopping experience is consistently reliable.
          </p>
        </div>
        <div className="w-full mx-auto lg:w-1/3 px-4 mb-4 lg:mb-0">
        <h3 className="font-semibold mb-2 text-transparent bg-clip-text bg-gradient-to-r text-8xl from-purple-400 to-pink-600">
            80<span className="text-2xl">%</span>
          </h3>
          <p className="font-light">
            We prioritize customer satisfaction, and our 80% satisfaction rate
            reflects our commitment.
          </p>
        </div>
        <div className="w-full lg:w-1/3 px-4 mb-4 lg:mb-0">
          <h3 className="text-8xl font-semibold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
            5<span className="text-2xl">x</span>
          </h3>
          <p className="font-light">Faster then others e-commerce platform</p>
        </div>
      </div>
    </div>
  );
};

export default BrandingComponent;
