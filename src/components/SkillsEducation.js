import { FaCheck } from "react-icons/fa"; // For checkmarks
import Image from "next/image";

const SkillsEducation = () => {
  return (
    <section id="skills" className="py-12 bg-gray-100 px-12">
      <div className="container mx-auto">
        <h2 className="text-3xl font-extrabold text-center mb-12">
          <span className="text-[#ff5534]"> Skills </span> &
          <span className="text-[#ff5534]"> Education </span>
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Education Section (Left Side) */}
          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-6">
              Education
            </h3>
            <div className="space-y-6">
              <div>
                <h4 className="font-bold text-lg">
                  Intermediate | Punhal Khan Chandio | <span className="text-[#ff5534]"> 2020 </span>  
                </h4>
                <p className="text-gray-600">
                  Intermediate in Pre-Engineering with a strong
                  foundation in mathmatic physics chemistry poised to
                  leverage technical aspects and problem sovling skills
                </p>
              </div>

              <div>
                <h4 className="font-bold text-lg">
                  BE Software Engineering | Quest Nawabshah | <span className="text-[#ff5534]"> 2024 </span>  
                </h4>
                <p className="text-gray-600">
                  Bachelor of Software Engineering graduate with a strong
                  foundation in software development principles, poised to
                  leverage technical expertise for innovative solutions.
                </p>
              </div>

              <div>
                <h4 className="font-bold text-lg">
                  Online Courses From Coursera
                </h4>
                <p className="text-gray-600">
                  Leveling up with Meta's full-stack frontend and backend
                  courses to stay up-to-date with the latest technologies.
                </p>
              </div>
            </div>
          </div>

          {/* Skills Section (Right Side) */}
          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-6">
              My Technical Skills
            </h3>
            <div className="space-y-6">
              {/* Client Side */}
              <div className="flex items-center justify-between">
                <span className="text-lg">
                Front End ( Next & React Js, Tailwind Css , Shand Cn , HTML, CSS , JavaScript )
                </span>
                <span className="text-lg font-semibold">85%</span>
              </div>
              <div className="w-full bg-gray-300 rounded-full h-2">
                <div className="w-4/5 bg-[#00dfbf]  h-2 rounded-full"></div>
              </div>

              {/* Database */}
              <div className="flex items-center justify-between">
                <span className="text-lg">Database ( MongoDB )</span>
                <span className="text-lg font-semibold">80%</span>
              </div>
              <div className="w-full bg-gray-300 rounded-full h-2">
                <div className="w-4/5 bg-[#00dfbf]  h-2 rounded-full"></div>
              </div>

              {/* Server Side */}
              <div className="flex items-center justify-between">
                <span className="text-lg">Server Side ( Node & ExpressJs )</span>
                <span className="text-lg font-semibold">80%</span>
              </div>
              <div className="w-full bg-gray-300 rounded-full h-2">
                <div className="w-4/5 bg-[#00dfbf]  h-2 rounded-full"></div>
              </div>

              
              <div className="flex items-center justify-between">
                <span className="text-lg">
                Productivity Tools ( GitHub , Postman , Vercel , Railway | Clerk | Vs Code )
                </span>
                <span className="text-lg font-semibold">80%</span>
              </div>
              <div className="w-full bg-gray-300 rounded-full h-2">
                <div className="w-4/5 bg-[#00dfbf]  h-2 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsEducation;
