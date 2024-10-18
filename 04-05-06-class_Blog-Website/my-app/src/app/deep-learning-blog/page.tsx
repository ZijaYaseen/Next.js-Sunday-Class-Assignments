import Image from "next/image"
import blog3 from "@/public/blog3.png"

export default function Blog1(){
  return (
  <main className="container mx-auto px-3 py-10 mt-14 w-full min-h-screen">
    <section className="flex flex-col md:items-center mb-10">
      <h2 className="font-serif md:text-center md:text-4xl text-3xl font-bold text-black mb-6 md:px-52">
      Deep Learning Techniques in AI
      </h2>
      <Image 
        src={blog3} 
        alt="Blog Image"
        className="w-full max-w-3xl h-auto mb-6" 
      />
      <p className="md:text-[18px] mt-4 text-gray-800 md:px-52">
      Deep learning, a key aspect of artificial intelligence (AI), empowers systems to learn from vast amounts of data without requiring manual feature extraction. It primarily relies on neural networks, which consist of layers that process data and adjust weights during training. This automatic learning capability makes deep learning particularly effective for complex tasks such as image and speech recognition.
    </p>

    <h3 className="my-0 mt-8 md:text-3xl text-2xl font-bold text-black">Convolutional Neural Networks (CNNs)</h3>
    <p className="md:text-[18px] mt-3 text-gray-800 md:px-52">Convolutional Neural Networks (CNNs) are essential for image processing tasks. They automatically detect patterns and features in images, which is crucial in fields like medical imaging and autonomous vehicles. For example, CNNs can accurately identify tumors in medical scans, significantly aiding diagnosis.
    </p>

    <h3 className="my-0 mt-8 md:text-3xl text-2xl font-bold text-black">Recurrent Neural Networks (RNNs)</h3>
    <p className="md:text-[18px] mt-3 text-gray-800 md:px-52">Recurrent Neural Networks (RNNs) specialize in processing sequential data, making them suitable for applications such as natural language processing. RNNs maintain a memory of previous inputs, allowing them to understand context, which is vital for tasks like language translation.
    </p>

    <h3 className="my-0 mt-8 md:text-3xl text-2xl font-bold text-black">Long Short-Term Memory (LSTM)</h3>
    <p className="md:text-[18px] mt-3 text-gray-800 md:px-52">Long Short-Term Memory (LSTM) networks enhance RNNs by effectively remembering information over longer periods. This capability improves performance in applications such as speech recognition and chatbots, where context and continuity are important.
    </p>

    <h3 className="my-0 mt-8 md:text-3xl text-2xl font-bold text-black">Generative Adversarial Networks (GANs)</h3>
    <p className="md:text-[18px] mt-3 text-gray-800 md:px-52">Generative Adversarial Networks (GANs) consist of two neural networks—a generator and a discriminator—that work against each other to create realistic images and videos. GANs have transformative applications in creative fields, enabling new forms of content generation.
    </p>

    <h3 className="my-0 mt-8 md:text-3xl text-2xl font-bold text-black">Conclusion</h3>
    <p className="md:text-[18px] mt-3 text-gray-800 md:px-52">In summary, deep learning techniques are revolutionizing AI by enabling machines to learn complex tasks autonomously. This transformation fosters innovation across various sectors, enhancing how we interact with technology and improving overall efficiency.
    </p>
    </section>

  </main>

   
  )
}