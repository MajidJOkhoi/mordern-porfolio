import { FaCode } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <footer className=" py-10 px-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Logo and Title */}
          <div className="flex items-center font-semibold text-2xl gap-3 mb-8 sm:mb-0">
            <FaCode size={30} className="text-orange-500" />
            <h1>Professor</h1>
          </div>

          {/* Services Section */}
          <div>
            <h4 className="text-[#ff5534] font-semibold text-lg mb-6">Services</h4>
            <ul className="space-y-4">
              <li className="text-[15px] hover:text-primary transition-colors">
                Web Development
              </li>
              <li className="text-[15px] hover:text-primary transition-colors">
                Software Development
              </li>
              <li className="text-[15px] hover:text-primary transition-colors">
                Full Stack Web Development
              </li>
            </ul>
          </div>

          {/* Contact Us Section */}
          <div>
            <h4 className="text-[#ff5534]  font-semibold text-lg mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="text-[15px] hover:text-primary transition-colors">
                <a href="mailto:majidalijkhio@gmail.com">majidalijkhio@gmail.com</a>
              </li>
              <li className="text-[15px] hover:text-primary transition-colors">
                <a href="tel:+923093108513">+923093108513</a>
              </li>
              <li className="text-[15px] hover:text-primary transition-colors">
                Karachi, Pakistan
              </li>
            </ul>
          </div>

          {/* Newsletter Section */}
          <div className="flex flex-col items-start space-y-4">
            <h4 className="text-[#ff5534] font-semibold text-lg mb-4">Subscribe</h4>
            <div className="flex items-center space-x-2 w-full max-w-xs">
              <input
                type="email"
                placeholder="Enter your email"
                className="py-2 px-4 w-full border-2 border-blue-400 hover:border-none rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <button
                type="button"
                className="px-6 py-2 bg-primary text-white rounded-lg text-sm hover:bg-transparent hover:text-primary border border-primary transition-all"
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <div className="border-t text-center border-[#6b5f5f] pt-8 mt-8">
          <p className="text-[15px]">© Professor. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
