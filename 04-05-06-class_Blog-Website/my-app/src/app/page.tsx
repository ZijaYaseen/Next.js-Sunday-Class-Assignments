import Image, { StaticImageData } from "next/image";
import blog1 from "@/public/blog1.png";
import blog2 from "@/public/blog2.png";
import blog3 from "@/public/blog3.png";


export default function Home() {

  type IBlog = {
    pic:StaticImageData,
    title:string,
    description:string
    path:string
  }

  const blogs :IBlog[] = [
    {
      pic: blog1,
      title: "Understanding Machine Learning Impact and Future Potential",
      description:
        "Machine learning allows systems to analyze vast amounts of data, enabling businesses to make data-driven decisions and enhance customer experiences.",
      path: "/machine-learning-blog"
      },
    {
      pic: blog2,
      title: "AI in Healthcare",
      description:
        "The future of healthcare combines AI with medical expertise, predicting diseases early, personalizing treatments, and enhancing care through innovation and compassion. Welcome to a new era where technology meets compassion in healthcare.",
        path: "/ai-in-healthcare"
      },
    {
      pic: blog3,
      title: "Deep Learning Techniques in AI",
      description:
        "Deep learning, a powerful subset of artificial intelligence (AI), allows machines to learn from large datasets effortlessly. By using multi-layered neural networks, it uncovers intricate patterns, excelling in tasks like image and speech recognition.",
        path: "/deep-learning-blog"
    },
    {
      pic: blog1,
      title: "Deep Learning Techniques",
      description:
        "Discover advanced deep learning techniques used in modern AI systems.",
        path: "/machine-learning-blog"
    },
    {
      pic: blog1,
      title: "Deep Learning Techniques",
      description:
        "Discover advanced deep learning techniques used in modern AI systems.",
        path: "/machine-learning-blog"
    },
    {
      pic: blog1,
      title: "Deep Learning Techniques",
      description:
        "Discover advanced deep learning techniques used in modern AI systems.",
        path: "/machine-learning-blog"
    },
    // Add more blog objects as needed
  ];


  return (
    <div className="mt-14 w-full min-h-screen bg-gradient-to-t from-blue-50 to-blue-100">

       <main className="container mx-auto px-6 py-10">
        <section className="text-center mb-10">
          <h2 className="text-4xl font-bold text-blue-900">Explore The Latest AI Technology Trends And Insights</h2>
          <p className="mt-4 text-gray-600 md:px-20">Discover the latest insights, trends, and breakthroughs in AI technology right here on our website. Explore how these innovations are driving transformation in areas like healthcare, finance, and transportation, and stay updated on the evolving potential of AI to reshape our lives and work.</p>
        </section>
       
        <section className="flex flex-wrap gap-6 justify-center">
  {blogs.map((blog) => (
    <article
  key={blog.title} 
  className="flex flex-col md:w-[350px] md:h-[470px] bg-white p-3 rounded-3xl 
             hover:shadow-2xl hover:transform hover:-translate-y-2 hover:duration-500 ease-in-out
             hover:shadow-blue-400 hover:border-4 hover:border-blue-400 border-4 border-transparent"
>
  <div>
    <Image
      src={blog.pic} 
      alt={`Image for ${blog.title}`}
      className="w-full h-48 rounded-lg shadow-md transition-shadow shadow-gray-500"
      width={350} 
      height={192} 
    />
  </div>
  <h3 className="text-1xl font-bold text-gray-800 mt-5">{blog.title}</h3>
  <p className="mt-2 text-gray-600 flex-grow">{blog.description}</p>
  <div className="self-start"> 
    <a href={blog.path} 
       className="inline-block border-2 border-black rounded-2xl px-4 py-2 text-black mt-4
                  transition-all duration-300 ease-in-out hover:bg-blue-500 hover:text-white
                  hover:border-blue-500">
       Read more
    </a>
  </div>
</article>

  
  ))}
</section>


      </main>

    
    </div>
  );
}
