import Logo from "@/public/Logo (1).png";
import Image from "next/image";
import Link from "next/link";
import { FaTwitter, FaFacebook, FaTiktok } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";

export default function Footer() {
  return (
    <footer className="bg-black md:py-[104px] py-12 px-8 md:px-40">
      {/* Parent Flex Container */}
      <div className="flex flex-col md:flex-row justify-between text-[#CFCFCF] space-y-8 md:space-y-0 md:items-start items-center text-center md:text-left">
        
        {/* Logo and Description */}
        <div className="items-center md:items-start">
          <Image src={Logo} alt="Logo" className="mx-auto md:mx-0" /> {/* Logo center in mobile */}
          <p className="mt-6 font-normal text-sm">
            We are a residential interior design firm located in<br />Portland.
            Our boutique-studio offers more than design.
          </p>
        </div>

        {/* Services Section */}
        <div>
          <h3 className="font-semibold text-base text-white mb-2">Services</h3>
          <ul className="font-normal text-sm space-y-2">
            <li className="hover:text-white hover:underline">
              <Link href={"/"}>Bonus program</Link>
            </li>
            <li>Gift cards</li>
            <li>Credit and payment</li>
            <li>Service contracts</li>
            <li>Non-cash account</li>
            <li>Payment</li>
          </ul>
        </div>

        {/* Assistance Section */}
        <div>
          <h3 className="font-semibold text-base text-white mb-2">
            Assistance to the buyer
          </h3>
          <ul className="font-normal text-sm space-y-2">
            <li>Find an order</li>
            <li>Terms of delivery</li>
            <li>Exchange and return of goods</li>
            <li>Guarantee</li>
            <li>Frequently asked questions</li>
            <li>Terms of use of the site</li>
          </ul>
        </div>
      </div>

      {/* Social Media Icons */}
      <div className="flex gap-8 mt-8 justify-center md:justify-start">
        <FaTwitter size={24} color="white" />
        <FaFacebook size={24} color="white" />
        <FaTiktok size={24} color="white" />
        <AiFillInstagram size={28} color="white" />
      </div>
    </footer>
  );
}
