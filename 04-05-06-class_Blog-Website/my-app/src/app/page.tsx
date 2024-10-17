import Image, { StaticImageData } from "next/image";
import blog1 from "@/public/blog1.jpg";
import blog2 from "@/public/blog2.png";
import blog4 from "@/public/blog3.png";


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
      pic: blog4,
      title: "Deep Learning Techniques in AI",
      description:
        "Deep learning, a powerful subset of artificial intelligence (AI), allows machines to learn from large datasets effortlessly. By using multi-layered neural networks, it uncovers intricate patterns, excelling in tasks like image and speech recognition.",
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
    key={blog.title} // Use a unique identifier for the key
    className="md:w-[350px] md:h-[450px] bg-white p-3 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col"
  >
    <div>
      <Image
        src={blog.pic} // Use the blog's pic property
        alt={`Image for ${blog.title}`} // Dynamic alt text
        className="w-full h-48 rounded-lg"
        width={350} // Add a fixed width
        height={192} // Add a fixed height (you can adjust this value as needed)
      />
    </div>
    <h3 className="text-1xl font-bold text-gray-800 mt-5 ">{blog.title}</h3>
    <p className="mt-2 text-gray-600 flex-grow">{blog.description}</p>
    <a href={blog.path} className="text-blue-500 hover:underline mt-4  inline-block">
      Read more
    </a>
  </article>
  
  ))}
</section>


      </main>

    
    </div>
  );
}
