import Image from "next/image";
import boy from "../../public/asssets/profile.png";
const Hero = () => {
  return (
    <>
      <div
        id="home"
        className="grid max-w-7xl   px-4 md:px-0 py-24 mx-auto lg:gap-8 xl:gap-0 lg:py-28   lg:grid-cols-12"
      >
        <div className="mr-auto place-self-center lg:col-span-7 leading-8 ">
          <h1 className="max-w-2xl  my-4 text-2xl font-extrabold   md:text-3xl xl:text-4xl dark:text-white">
            I am Majid Ali
            <span className="text-[#ff5534]"> Full Stack </span> Developer
          </h1>
          <p className="max-w-2xl text-gray-700 mb-6   lg:mb-5 md:text-md  text-justify ">
            As a skilled Full Stack Mern Next Js Developer I wish to use my
            knowledge and experience in working with a reputed concern where my
            skills can be useful for the growth of your organization as well
            merge into talented team work. I am comfortable working with Next js
            React, Node.js, Express.js, MongoDB, in the use of these advanced
            technologies to create interactive and responsive web applications.
          </p>
          <button
            type="button"
            className="px-5 py-2.5   bg-[#0057ff] text-white rounded-3xl text-sm tracking-wider  border border-current outline-none  hover:bg-transparent font-semibold hover:text-[#1725e4]   transition-all duration-300"
          >
            Download Resume 
          </button>
        </div>
        <div className=" lg:ml-28  md:mt-0 lg:col-span-5 lg:flex">
          <Image src={boy} alt="profile" width={440} height={300} />
        </div>
      </div>
    </>
  );
};

export default Hero;
