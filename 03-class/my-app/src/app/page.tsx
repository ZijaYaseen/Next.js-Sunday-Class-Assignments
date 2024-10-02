import Image from "next/image";
import modelImage from "./assets/model.jpeg";

export default function Home() {
  return (
      <div className="bg-gray-800 text-gray-200 min-h-screen p-10 font-sans">

{/* Main container with flex for alignment (page) uper wala div body || or ye div conatainer...*/}
<div className="flex justify-between items-center">
  
  {/* Text container */}
  <div className="w-fit h-auto m-[40px] text-[40px] font-black">
    Hey,
    <br />
    I&#39;m <span className="text-cyan-500">Zija Yaseen</span>
    <br />I am a Next.js Developer
    
    <p className="mt-4 text-[20px] text-gray-200 font-light">
      I specialize in building modern web applications using Next.js and React, focusing on creating efficient and user-friendly experiences. My passion lies in writing clean, maintainable code while optimizing performance to ensure seamless interactions. I aim to deliver high-quality solutions that meet user needs and adhere to industry standards.
    </p>
  </div>

  {/* Image container */}
  <div className="m-[40px]">
    <Image 
      src={modelImage} 
      alt="Model Image" 
      width={700}  
      height={700} 
      className="rounded-full border-2 border-cyan-500 "
    
    />
  </div>
</div>
    </div>
    
    
  );
}
