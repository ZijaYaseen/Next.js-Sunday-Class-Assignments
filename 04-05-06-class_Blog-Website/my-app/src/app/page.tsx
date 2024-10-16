import Image from "next/image";
import blog1 from "@/public/blog1.jpg"


export default function Home() {

  type IBlog = {
    pic:string,
    title:string,
    description:string
  }

  const blogs :IBlog[] = [
    {
      pic: blog1.src,
      title: "Understanding Machine Learning",
      description:
        "Machine learning allows systems to analyze vast amounts of data, enabling businesses to make data-driven decisions and enhance customer experiences.",
    },
    {
      pic: blog1.src,
      title: "AI in Healthcare",
      description:
        "AI is revolutionizing healthcare by improving diagnostic accuracy and personalizing treatment plans. It streamlines processes, enhances patient care, and leads to better health outcomes.",
    },
    {
      pic: blog1.src,
      title: "Deep Learning Techniques",
      description:
        "Discover advanced deep learning techniques used in modern AI systems.",
    },
    {
      pic: blog1.src,
      title: "Deep Learning Techniques",
      description:
        "Discover advanced deep learning techniques used in modern AI systems.",
    },
    {
      pic: blog1.src,
      title: "Deep Learning Techniques",
      description:
        "Discover advanced deep learning techniques used in modern AI systems.",
    },
    {
      pic: blog1.src,
      title: "Deep Learning Techniques",
      description:
        "Discover advanced deep learning techniques used in modern AI systems.",
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
    <h3 className="text-2xl font-bold text-gray-800 mt-5 ">{blog.title}</h3>
    <p className="mt-2 text-gray-600 flex-grow">{blog.description}</p>
    <a href="/" className="text-blue-500 hover:underline mt-4  inline-block">
      Read more
    </a>
  </article>
  
  ))}
</section>


      </main>

    
    </div>
  );
}
