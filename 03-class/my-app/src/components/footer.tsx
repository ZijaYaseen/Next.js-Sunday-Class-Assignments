import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faFacebook, faGithub, faLinkedin, faYoutube} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
    return (
      <footer className="bg-gray-900 text-gray-300 py-16">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 text-center md:text-left">
          
          {/* Logo and Description Section */}
          <div className="space-y-4 md:pr-24 ">
            <h4 className="text-2xl font-bold">Zija<span className="text-cyan-500">Yaseen</span></h4>
            <p className="text-gray-200 ">
            Thank you for exploring my portfolio! I am passionate about creating impactful web experiences and showcasing my skills in development. Connect with me on social media to stay updated on my latest projects and insights. Your support and feedback are greatly appreciated
            </p>
          </div>
  
          {/* Permalinks Section */}
          <div className="space-y-4">
            <h4 className="text-xl font-semibold">Permalinks</h4>
            <ul className="space-y-2">
              <li><a href="/" className="hover:text-cyan-500">Home</a></li>
              <li><a href="/about" className="hover:text-cyan-500">About</a></li>
              <li><a href="/services" className="hover:text-cyan-500">Services</a></li>
              <li><a href="/certificates" className="hover:text-cyan-500">Certificates</a></li>
              <li><a href="/portfolio" className="hover:text-cyan-500">Portfolio</a></li>
              <li><a href="/contact" className="hover:text-cyan-500">Contact</a></li>
            </ul>
          </div>
  
          {/* Privacy Section */}
          <div className="space-y-4">
            <h4 className="text-xl font-semibold">Privacy</h4>
            <ul className="space-y-2">
              <li><a href="/" className="hover:text-cyan-500">Privacy & Policy</a></li>
              <li><a href="/" className="hover:text-cyan-500">Terms & Conditions</a></li>
              <li><a href="/" className="hover:text-cyan-500">Refund Policy</a></li>
            </ul>
          </div>
  
          {/* Contact Information */}
          <div className="space-y-4">
            <h4 className="text-xl font-semibold" id="contact">Contact Me</h4>
            <p className="text-gray-400">+92 3160426977</p>
            <p className="text-gray-400">zijayaseen15@gmail.com</p>
            <div className="flex justify-center md:justify-start space-x-4 text-xl mt-4">

            <a href="https://www.linkedin.com/in/zija-yaseen-0154722b2?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" className="hover:text-cyan-500">
              <FontAwesomeIcon icon={faLinkedin} size="1x" />
              </a>

            <a href="https://github.com/ZijaYaseen" target="_blank" className="hover:text-cyan-500">
              <FontAwesomeIcon icon={faGithub} size="1x" />
              </a>

              <a href="https://www.facebook.com/profile.php?id=100077844125867&mibextid=ZbWKwL" target="_blank" className="hover:text-cyan-500">
              <FontAwesomeIcon icon={faFacebook} size="1x" />
              </a>

              <a href="https://www.instagram.com/zija_yaseen?igsh=YmVhMnJnc3Bvc3cy" target="_blank" className="hover:text-cyan-500">
              <FontAwesomeIcon icon={faInstagram} size="1x" />
              </a>

              <a href="#" target="_blank" className="hover:text-cyan-500">
              <FontAwesomeIcon icon={faYoutube} size="1x" />
              </a>
            </div>
          </div>
        </div>
  
        {/* Footer Bottom Section */}
        <div className="mt-12 border-t border-gray-700 pt-4 text-center text-lg text-gray-400">
          <small>&copy; 2024 Zija Yaseen. All rights reserved.</small>
        </div>
      </footer>
    );
  }
  