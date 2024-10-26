import Image from "next/image";
import HomePhoneImg from "@/public/Iphone Image.png";
import MacBookPro14 from "@/public/MacBook Pro 14.png";
import PlayStation from "@/public/PlayStation.png";
import Airpods from "@/public/hero__gnfk5g59t0qe_xlarge_2x 1.png";
import AppleVision from "@/public/image 36.png";

export default function Home() {
  return (
    <main>
      {/* Home container 1st Part */}
<div className="flex flex-col md:flex-row justify-between bg-[#211C24] h-auto md:h-[632px] items-center text-white pt-[88px] px-4 md:p-32">
  <div className="text-center md:text-left mb-8 md:mb-0">
    <p className="font-semibold text-[#909090] text-2xl mb-4 md:mb-6">Pro.Beyond.</p>
    <h1 className="font-thin text-[#ffffff] text-6xl md:text-8xl mb-4 md:mb-6">
      IPhone 14 <span className="font-semibold">PRO</span>
    </h1>
    <p className="font-medium text-[#909090] text-base md:text-lg mb-8 md:mb-6">
      Created to change everything for better. For everyone.
    </p>
    <button className="font-medium text-base px-14 py-4 border-[1px] border-white rounded-lg">
      Shop Now
    </button>
  </div>
  <div>
    <Image src={HomePhoneImg} alt="Iphone Image" />
  </div>
</div>


      {/* 2nd Part */}
      <div className="flex flex-col lg:flex-row h-auto lg:h-[600px]">

        {/* 2nd Part 1st box */}
        <div className="grid w-full lg:w-[720px]">

          <div className="flex flex-col lg:flex-row justify-between items-center w-full h-auto lg:h-[328px]">
            {/* Image Section */}
            <div className="flex-shrink-0">
              <Image src={PlayStation} alt="PlayStation" className="max-w-full h-auto" />
            </div>

            {/* Text Section */}
            <div className="mr-12">
              <h1 className="font-medium text-3xl lg:text-5xl text-black mb-4">Playstation 5</h1>
              <p className="font-medium text-sm text-[#909090]">
                Incredibly powerful CPUs, GPUs, and an SSD with integrated I/O will redefine your PlayStation experience.
              </p>
            </div>
          </div>

          {/* 1st box A */}
          <div className="flex flex-col lg:flex-row">

            <div className="flex justify-between items-center w-full lg:w-[360px] h-auto bg-[#EDEDED] mb-4 lg:mb-0">
              <div>
                <Image src={Airpods} alt="Airpods" className="max-w-full h-auto" />
              </div>

              <div className="m-4">
                <h1 className="font-light text-2xl lg:text-3xl mb-2">Apple AirPods <span className="font-medium">Max</span></h1>
                <p className="text-[#909090] text-sm font-medium">Computational audio. Listen, it&apos; powerful</p>
              </div>
            </div>

            {/*  1st box B */}
            <div className="flex justify-center items-center w-full lg:w-[360px] h-auto bg-[#353535] mb-4 lg:mb-0">
              <div>
                <Image src={AppleVision} alt="Apple Vision Pro Image" className="max-w-full h-auto" />
              </div>
              <div className="m-4">
                <h1 className="font-light text-2xl lg:text-3xl text-white mb-2">Apple Vision <span className="font-medium">Pro</span></h1>
                <p className="text-[#909090] font-medium text-sm">An immersive way to experience entertainment</p>
              </div>
            </div>
          </div>
        </div> {/* 2nd Part 1st box closed */}

        {/* 2nd Part 2nd box start */}
        <div className="flex justify-center items-center w-full lg:w-[720px] h-auto lg:h-[600px] bg-[#EDEDED]">
          <div className="ml-5 lg:ml-14">
            <h1 className="font-thin text-4xl lg:text-[64px] leading-none mb-4">Macbook <span className="font-medium whitespace-nowrap">Air</span></h1>
            <p className="text-[#909090] font-medium text-sm mb-4">The new 15‑inch MacBook Air makes room for more of what you love with a spacious Liquid Retina display.</p>
            <button className="font-medium text-base px-14 py-4 border-2 border-black rounded-lg">Shop Now</button>
          </div>
          <div>
            <Image src={MacBookPro14} alt="Mac Book Pro 14 Image" className="max-w-full h-auto" />
          </div>
        </div>

      </div>
    </main>
  );
}
