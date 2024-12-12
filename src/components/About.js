"use client";
import Image from "next/image";
import pic from "../../public/asssets/MAIN-IMAGE.avif";

function About() {
  return (
    <>
      <section id="about" className="bg-white py-24 ">
        <div className="w-full max-w-[1400px]  px-4 md:px-5 lg:px-5 mx-auto">
          <div className="w-full justify-start items-center  gap-8 flex flex-col md:flex-row-reverse ">
            <div className="w-full flex-col justify-start lg:items-start items-center gap-3 ">
              <div className="w-full flex-col justify-start lg:items-start items-center gap-4 flex">
                <h1 className="max-w-2xl  my-4 text-2xl font-extrabold   md:text-3xl xl:text-4xl dark:text-white">
                  Empowering Ideas into Success
                  <span className="text-[#ff5534]"> Web Apps! </span>
                </h1>
                <p className="max-w-2xl mb-6 text-gray-600 font-light  lg:mb-8  lg:text-lg text-justify ">
                  We specialize in creating responsive, scalable, and
                  interactive web solutions using the MERN stack and Next.js.
                  Our expertise spans front-end, back-end, and custom web app
                  development, delivering quality and innovation tailored to
                  your business needs. Let us turn your ideas into dynamic
                  digital experiences.
                </p>
              </div>

              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-2">
                  <span className="text-[#00dfbf] text-xl">✔</span>
                  <p className="text-md md:text-md font-semibold">
                    Front-end Development
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[#00dfbf] text-xl">✔</span>
                  <p className="text-md font-semibold">
                    Back-end Development
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[#00dfbf] text-xl">✔</span>
                  <p className="text-md font-semibold">
                    Full Stack Development
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[#00dfbf] text-xl">✔</span>
                  <p className="text-md font-semibold">
                   
                    Responsive Design Solutions
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[#00dfbf] text-xl">✔</span>
                  <p className="text-md font-semibold">
                    SEO & Responsive Optimization Solutions
                  </p>
                </div>
                <button
                  type="button"
                  className="px-5 py-2.5 mt-2 rounded-tl-xl   rounded-br-xl text-sm tracking-wider border border-current outline-none  bg-[#0057ff]  hover:bg-transparent w-fit font-semibold text-white hover:text-blue-700 transition-all duration-300"
                >
                  Order Now 
                </button>
              </div>
            </div>
            <Image
              width={600}
              height={400}
              className="lg:mx-0 mx-auto h-full rounded-3xl object-cover"
              src={pic}
              alt="about Us image"
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
