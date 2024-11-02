"use client";

import Image, { StaticImageData } from "next/image";
import { IconType } from "react-icons";
import HomePhoneImg from "@/public/Iphone Image.png";
import HomePhoneImg2 from "@/public/Iphone Image (2).png";
import MacBookPro14 from "@/public/MacBook Pro 14.png";
import MacBookPro142 from "@/public/MacBook Pro 14 (2).png";
import PlayStation from "@/public/PlayStation.png";
import PlayStation2 from "@/public/PlayStation (2).png";
import Airpods from "@/public/hero__gnfk5g59t0qe_xlarge_2x 1.png";
import Airpods2 from "@/public/hero__gnfk5g59t0qe_xlarge_2x 1 (2).png";
import AppleVision from "@/public/image 36.png";
import AppleVision2 from "@/public/image 36 (2).png";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import { CiMobile3, CiCamera, CiStopwatch, CiHeadphones, CiDesktop, CiHeart } from "react-icons/ci";
import { LuGamepad } from "react-icons/lu";
import Link from "next/link";
import EiPhone14 from "@/public/Iphone 14 pro 1.png";
import ECamera from "@/public/Iphone 14 pro 1 (1).png"
import EWatch from "@/public/Iphone 14 pro 1 (2).png"
import EHeadPhone from "@/public/Iphone 14 pro 1 (3).png"
import EWatch2 from "@/public/Iphone 14 pro 1 (4).png"
import EMobile from "@/public/Iphone 14 pro 1 (5).png";
import EAirPods from "@/public/Iphone 14 pro 1 (6).png";
import ETablet from "@/public/Iphone 14 pro 1 (7).png";
import GroupSmartwatch from "@/public/Group 1.png";
import GroupTablet from "@/public/image 64.png";
import GroupPhone from "@/public/image 41.png";
import GroupMacBook from "@/public/Macbook 1.png";
import { useState, useRef, useEffect } from 'react';
import iphone142 from "@/public/Iphone 14 pro 1 (8).png";
import iphone1423 from "@/public/Iphone 14 pro 1 (10).png";
import deskBanner from "@/public/banner.png";
// import deskBanner2 from "@/public/bannermbl.png";


// import Slider from "react-slick";


export default function Home() {

  type IProduct = {
    heart: IconType
    image: StaticImageData
    name: string
    price: string
    button: string
  }

  const products: IProduct[] = [
    {
      heart: CiHeart,
      image: EiPhone14,
      name: "Apple iPhone 14 Pro Max 12GB Deep Purple",
      price: "$900",
      button: "Buy Now"
    },
    {
      heart: CiHeart,
      image: ECamera,
      name: "Blackmagic Pocket Cinema Camera 6k",
      price: "$2535",
      button: "Buy Now"

    },
    {
      heart: CiHeart,
      image: EWatch,
      name: "Apple Watch Series 9 GPS 41mm Starlight Aluminium ",
      price: "$399",
      button: "Buy Now"

    },
    {
      heart: CiHeart,
      image: EHeadPhone,
      name: "AirPods Max Silver Starlight Aluminium ",
      price: "$549",
      button: "Buy Now"

    },
    {
      heart: CiHeart,
      image: EWatch2,
      name: "Samsung Galaxy Watch6 Classic 47mm Black",
      price: "$369",
      button: "Buy Now"

    },
    {
      heart: CiHeart,
      image: EMobile,
      name: "Galaxy Z Fold5 Unlocked | 256GB | Phantom Black",
      price: "$1799",
      button: "Buy Now"

    },
    {
      heart: CiHeart,
      image: EAirPods,
      name: "Galaxy Buds FE Graphite",
      price: "$99.99",
      button: "Buy Now"

    },
    {
      heart: CiHeart,
      image: ETablet,
      name: "Apple iPad 9 10.2 64GB Wi-Fi Silver (MK2L3) 2021",
      price: "$398",
      button: "Buy Now"

    },
  ];
 const products2 :IProduct[] = [
  {
    heart: CiHeart,
    image: iphone142,
    name: "Apple iPhone 14 Pro 512GB Gold (MQ233)",
    price: "$1437",
    button: "Buy Now"

  },
  {
    heart: CiHeart,
    image: EHeadPhone,
    name: "AirPods Max Silver Starlight Aluminium ",
    price: "$549",
    button: "Buy Now"

  },
  {
    heart: CiHeart,
    image: EWatch,
    name: "Apple Watch Series 9 GPS 41mm Starlight Aluminium",
    price: "$2535",
    button: "Buy Now"

  },
  {
    heart: CiHeart,
    image: iphone1423,
    name: "Apple iPhone 14 Pro 1TB Gold (MQ2V3)",
    price: "$1499",
    button: "Buy Now"

  },
 ]

  const productsHorizontalScrollBar = [
    {
        title: 'Popular Products',
        description: 'iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use.',
        image: GroupSmartwatch,
        bgColor: 'bg-white',
        textColor: 'text-black',
    },
    {
        title: 'IPad Pro',
        description: 'iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use.',
        image: GroupTablet,
        bgColor: 'bg-[#F9F9F9]',
        textColor: 'text-black',
    },
    {
        title: 'Samsung Galaxy',
        description: 'iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use.',
        image: GroupPhone,
        bgColor: 'bg-[#EAEAEA]',
        textColor: 'text-black',
    },
    {
        title: 'Macbook Pro',
        description: 'iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use.',
        image:GroupMacBook ,
        bgColor: 'bg-[#2C2C2C]',
        textColor: 'text-white',
    },
];

const [activeIndex, setActiveIndex] = useState(0);
const scrollContainerRef = useRef<HTMLDivElement>(null);

useEffect(() => {
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setActiveIndex(Number(entry.target.getAttribute('data-index')));
                }
            });
        },
        { threshold: 0.5 }
    );

    const items = scrollContainerRef.current?.children;
    if (items) {
        Array.from(items).forEach((item) => observer.observe(item as Element));
    }

    return () => observer.disconnect();
}, []);


  return (
    <main>
      {/* Home container 1st Part */}
      <div className="flex flex-col md:flex-row justify-between bg-[#211C24] h-[769px] md:h-[632px] items-center text-white pt-[88px] px-4 md:p-32">
        <div className="text-center md:text-left mb-8 md:mb-0">
          <p className="font-semibold text-[#909090] text-2xl mb-4 md:mb-6">Pro.Beyond.</p>
          <h1 className="font-thin text-[#ffffff] text-7xl md:text-8xl mb-4 md:mb-6">
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
          {/* Mobile Image: hidden on large screens (desktop:md) */}
          <div className="block md:hidden">
            <Image src={HomePhoneImg2} alt="IPhone 14 Pro Image" />
          </div>

          {/* Desktop Image: hidden on small screens (mobile) */}
          <div className="hidden md:block">
            <Image src={HomePhoneImg} alt="IPhone 14 Pro Image" />
          </div>
        </div>
      </div>

      {/* -------------------------------*************------------------------------------- */}

      {/* 2nd Part---------------------------------------------------------- */}
      <div className="flex flex-col md:flex-row">

        {/* 2nd Part 1st box */}
        <div className="flex flex-col">

          <div className="flex flex-col md:flex-row justify-between items-center md:w-[720px] md:h-[328px] h-[424px] py-10 px-4 md:p-0">
            {/* Image Section */}
            <div className="flex justify-center mb-4 md:mb-0">
              <div className="block md:hidden"> {/* Image for mobile */}
                <Image src={PlayStation2} alt="PlayStation" />
              </div>
              <div className="hidden md:block"> {/* Image for desktop */}
                <Image src={PlayStation} alt="PlayStation" width={800} height={800} />
              </div>
            </div>

            {/* Text Section */}
            <div className="text-center md:text-left mr-0 md:mr-12">
              <h1 className="font-thin text-4xl md:text-5xl text-black mb-4">PlayStation <span className="font-medium">5</span></h1>
              <p className="font-medium text-sm text-[#909090]">
                Incredibly powerful CPUs, GPUs, and an SSD with integrated I/O will redefine your PlayStation experience.
              </p>
            </div>
          </div>


          {/* 1st box A */}
          <div className="flex flex-col md:flex-row">
            <div className="flex flex-col md:flex-row justify-between items-center md:w-[360px] md:h-[272px] h-[376px] bg-[#EDEDED] py-10 md:p-0">

              {/* Image Section */}
              <div>
                <div className="block md:hidden"> {/* Image for mobile */}
                  <Image src={Airpods2} alt="Airpods" width={170} height={170}></Image>
                </div>
                <div className="hidden md:block"> {/* Image for desktop */}
                  <Image src={Airpods} alt="Airpods"></Image>
                </div>
              </div>

              {/* Text Section */}
              <div className="m-12">
                <h1 className="font-light text-3xl mb-2">Apple AirPods <span className="font-medium">Max</span></h1>
                <p className="text-[#909090] text-sm font-medium">Computational audio. Listen, it&apos;s powerful</p>
              </div>

            </div>

            {/*  1st box B */}
            <div className="flex flex-col text-center md:flex-row justify-center items-center md:w-[360px] md:h-[272px] h-[376px] bg-[#353535] py-10 px-4 md:p-0">
              {/* Image Section */}
              <div className="flex items-center justify-center">
                <div className="block md:hidden"> {/* Image for mobile */}
                  <Image src={AppleVision2} alt="Airpods" ></Image>
                </div>
                <div className="hidden md:block"> {/* Image for desktop */}
                  <Image src={AppleVision} alt="Airpods" width={300} height={190} className="object-contain"></Image>
                </div>
              </div>

              {/* Text Section */}
              <div className="m-6 md:m-12">
                <h1 className="font-light text-3xl text-white mb-2">Apple Vision <span className="font-medium">Pro</span></h1>
                <p className="text-[#909090] font-medium text-sm">An immersive way to experience entertainment</p>
              </div>
            </div>
          </div>


        </div> {/* 2nd Part 1st box closed */}

        {/* 2nd Part 2nd box start */}
        <div className="flex flex-col md:flex-row text-center justify-center items-center md:w-[720px] md:h-[600px] h-[508px] bg-[#EDEDED] py-[42px] px-4 md:p-0">
          <div className="block md:hidden"> {/* Image for mobile */}
            <Image src={MacBookPro142} alt="Airpods" ></Image>
          </div>
          <div className="md:ml-14">
            <h1 className="font-thin text-4xl md:text-[64px] leading-none mb-4">Macbook <span className="font-medium whitespace-nowrap">Air</span></h1>
            <p className="text-[#909090] font-medium text-base md:text-sm mb-4">The new 15‑inch MacBook Air makes room for more of what you love with a spacious Liquid Retina display.</p>
            <button className="font-medium text-base px-14 py-4 border-[1px] border-black rounded-lg">Shop Now</button>
          </div>

          {/* Image Section */}

          <div className="hidden md:block"> {/* Image for desktop */}
            <Image src={MacBookPro14} alt="Airpods" width={600} height={690} className="object-contain"></Image>
          </div>
        </div>
      </div>

      {/* -------------------------------*************------------------------------------- */}

      {/* 3rd Part home section ka */}
      <div className="bg-[#FAFAFA] px-4 md:px-40 py-10 md:py-20">
        <div className="flex justify-between items-center mb-8 w-full">
          <h4 className="font-medium text-lg md:text-2xl">Browse by Category</h4>

          {/* Icons ke liye flexbox */}
          <div className="flex space-x-2 md:space-x-4"> {/* space-x-4 icons ke darmiyan gap k liye */}
            <button><FaChevronLeft className="w-6 h-6 md:w-8 md:h-8" /></button> {/* Responsive sizing */}
            <button><FaChevronRight className="w-6 h-6 md:w-8 md:h-8" /></button> {/* Responsive sizing */}
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-center md:justify-between gap-4 md:gap-0">
          <div className="flex flex-col justify-center bg-[#EDEDED] rounded-2xl w-[45%] md:w-40 h-32 items-center text-center">
            <CiMobile3 className="w-10 h-10 md:w-12 md:h-12" />
            <p className="text-sm md:text-base font-medium">Phones</p>
          </div>
          <div className="flex flex-col justify-center bg-[#EDEDED] rounded-2xl w-[45%] md:w-40 h-32 items-center text-center">
            <CiStopwatch className="w-10 h-10 md:w-12 md:h-12" />
            <p className="text-sm md:text-base font-medium">Smart Watches</p>
          </div>
          <div className="flex flex-col justify-center bg-[#EDEDED] rounded-2xl w-[45%] md:w-40 h-32 items-center text-center">
            <CiCamera className="w-10 h-10 md:w-12 md:h-12" />
            <p className="text-sm md:text-base font-medium">Cameras</p>
          </div>
          <div className="flex flex-col justify-center bg-[#EDEDED] rounded-2xl w-[45%] md:w-40 h-32 items-center text-center">
            <CiHeadphones className="w-10 h-10 md:w-12 md:h-12" />
            <p className="text-sm md:text-base font-medium">Headphones</p>
          </div>
          <div className="flex flex-col justify-center bg-[#EDEDED] rounded-2xl w-[45%] md:w-40 h-32 items-center text-center">
            <CiDesktop className="w-10 h-10 md:w-12 md:h-12" />
            <p className="text-sm md:text-base font-medium">Computers</p>
          </div>
          <div className="flex flex-col justify-center bg-[#EDEDED] rounded-2xl w-[45%] md:w-40 h-32 items-center text-center">
            <LuGamepad className="w-10 h-10 md:w-12 md:h-12" />
            <p className="text-sm md:text-base font-medium">Gaming</p>
          </div>
        </div>
      </div>


      {/* -------------------------------*************------------------------------------- */}

      {/* 4th section start Home ka. */}

      <div className="bg-[#FFFFFF] md:px-40 px-4 py-14">
        <div>
          <ul className="flex gap-8 font-medium md:text-lg text-xs text-[#8B8B8B] border-b-2 border-transparent mb-8">
            <li className="hover:text-black hover:border-b-2 hover:border-black">
              <Link href="/">New Arrival</Link>
            </li>
            <li className="hover:text-black hover:border-b-2 hover:border-black">
              <Link href="/">Best Seller</Link>
            </li>
            <li className="hover:text-black hover:border-b-2 hover:border-black">
              <Link href="/">Featured Products</Link>
            </li>
          </ul>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {products.map((product) => (
            <div
              key={product.name}
              className="md:w-[247px] w-[163px] md:h-[432px] h-[352px] bg-[#F6F6F6] rounded-[9px] py-6 px-4 flex flex-col items-center text-center relative justify-between"
            >
              <product.heart size={32} className="text-[#a7a7a7] absolute top-6 right-4" />
              <Image src={product.image} alt={product.name} className="mt-10" />
              <h2 className="px-4 font-medium md:text-base text-xs">{product.name}</h2>
              <h2 className="font-semibold text-2xl">{product.price}</h2>
              <button className="mt-2 bg-black text-white py-3 md:px-16 px-8 rounded-lg text-sm font-medium">
                {product.button}
              </button>
            </div>
          ))}
        </div>
      </div>

   {/* -------------------------------*************------------------------------------- */}

      {/* 5th section start Home ka. */}

      <div className="relative">
            {/* Scrollable Section */}
            <section
                ref={scrollContainerRef}
                className="flex items-center md:items-start overflow-x-scroll md:overflow-x-hidden"
            >
                {productsHorizontalScrollBar.map((product, index) => (
                    <div
                        key={index}
                        className={`flex-shrink-0 w-[340px] px-8 h-[640px] ${product.bgColor} snap-start`}
                        data-index={index}
                    >
                        <Image src={product.image} alt={product.title} className="w-full h-[366px] object-cover" />
                        <h1 className={`font-light text-4xl mb-4 ${product.textColor}`}>{product.title}</h1>
                        <p className={`mb-4 text-sm font-medium text-[#909090]`}>{product.description}</p>
                        <button
                            className={`font-medium text-base px-14 py-4 border-[1px] rounded-lg ${product.textColor} 
                            ${product.textColor === 'text-white' ? 'border-white' : 'border-black'}`}
                        >
                            Shop Now
                        </button>
                    </div>
                ))}
            </section>

            {/* Dots Indicator */}
            <div className="md:hidden flex  justify-center space-x-2 mt-4">
                {productsHorizontalScrollBar.map((_, index) => (
                    <div
                        key={index}
                        className={`w-2 h-2 rounded-full mb-2 ${
                            index === activeIndex ? 'bg-black' : 'bg-gray-400'
                        }`}
                    ></div>
                ))}
            </div>
        </div>



{/* -------------------------------*************------------------------------------- */}

      {/* 6th section start Home ka. */}

      <div 
  style={{
    // backgroundImage: `url(${deskBanner2.src})`,
    backgroundImage: `url(${deskBanner.src})` // Next.js 15 me `.src` ke saath imported image ka path lagayein
    
  }}
  className="h-[448px] bg-cover grid place-items-center text-white text-center md:bg-[url('/public/banner.png')]"
>
  <div>
    <h1 className="font-thin md:text-7xl text-5xl">Big Summer <span className="font-medium">Sale</span></h1>
    <p className="font-normal text-base mb-10">Commodo fames vitae vitae leo mauris in. Eu consequat.</p>
    <button className="font-medium text-base px-14 py-4 border-[1px] border-white rounded-lg">
      Shop Now
    </button>
  </div>
</div>

{/* -------------------------------*************------------------------------------- */}

{/* Last section start Home ka. */}

    <div className="py-14 md:py-20 md:px-40 px-4 bg-[#FFFFFF]">
      <div className="mb-8">
        <h2 className="font-medium text-2xl">Discounts up to -50%</h2>
      </div>
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {products2.map((product) => (
            <div
              key={product.name}
              className="bg-[#F6F6F6] rounded-[9px] py-6 px-4 flex flex-col items-center text-center relative justify-between"
            >
              <product.heart size={32} className="text-[#a7a7a7] absolute top-6 right-4" />
              <Image src={product.image} alt={product.name} className="mt-10" />
              <h2 className="px-4 font-medium md:text-base text-xs">{product.name}</h2>
              <h2 className=" font-semibold text-2xl">{product.price}</h2>
              <button className="mt-2 bg-black text-white py-3 md:px-16 px-8 rounded-lg text-sm font-medium">
                {product.button}
              </button>
            </div>
          ))}
        </div>
      </div>
     
{/* -------------------------------*************------------------------------------- */}

   

    </main>
  );
}
