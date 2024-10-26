import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import { CiMobile3, CiCamera, CiStopwatch, CiHeadphones, CiDesktop} from "react-icons/ci";
import { LuGamepad } from "react-icons/lu";

export default function Home3(){
    return(
        <div>
            {/* Third part Home section ka */}

      <div className="md:h-[352px] h-[624px] px-40 py-20 justify-between items-center">
        <div className="flex justify-between mb-8">
          <h4 className="font-medium text-2xl">Browse by Category</h4>

          {/* Icons ke liye flexbox */}
          <div className="flex space-x-4"> {/* space-x-4 icons ke darmiyan gap k liye */}
            <button><FaChevronLeft className="w-8 h-8" /></button> {/* w-8 h-8 for equal size */}
            <button><FaChevronRight className="w-8 h-8" /></button> {/* w-8 h-8 for equal size */}
          </div>

        </div>

        <div className="flex items-center justify-between">

          <div className="flex flex-col justify-center bg-[#EDEDED] rounded-2xl w-40 h-32 items-center text-center ">
          <CiMobile3 className="w-12 h-12"/>
            <p className="text-base font-medium">Phones</p>
          </div>
          <div className="flex flex-col justify-center bg-[#EDEDED] rounded-2xl w-40 h-32 items-center text-center ">
          <CiStopwatch className="w-12 h-12"/>
            <p className="text-base font-medium">Smart Watches</p>
          </div>
          <div className="flex flex-col justify-center bg-[#EDEDED] rounded-2xl w-40 h-32 items-center text-center ">
          <CiCamera  className="w-12 h-12"/>
            <p className="text-base font-medium">Cameras</p>
          </div>
          <div className="flex flex-col justify-center bg-[#EDEDED] rounded-2xl w-40 h-32 items-center text-center ">
          <CiHeadphones className="w-12 h-12"/>
            <p className="text-base font-medium">Headphones</p>
          </div>
          <div className="flex flex-col justify-center bg-[#EDEDED] rounded-2xl w-40 h-32 items-center text-center ">
          <CiDesktop className="w-12 h-12"/>
            <p className="text-base font-medium">Computers</p>
          </div>
          <div className="flex flex-col justify-center bg-[#EDEDED] rounded-2xl w-40 h-32 items-center text-center ">
          <LuGamepad className="w-12 h-12"/>
            <p className="text-base font-medium">Gaming</p>
          </div>

        </div>
      </div>

        </div>
    )
}