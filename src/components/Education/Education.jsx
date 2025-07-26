import { education } from "../../constants";

const Education = () => {
  return (
    <section
      id="education"
      className="py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[3vw] font-sans bg-skills-gradient clip-path-custom-3 mx-auto max-w-full xl2:max-w-[1430px]"
    >
      <div className="m-auto max-w-[550px] xl2:max-w-full">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white">EDUCATION</h2>
          <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
          <p className="text-gray-400 mt-4 text-lg font-semibold">
            My education has been a journey of learning and development. Here
            are the details of my academic background
          </p>
        </div>

        {/* Education Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-0 transform -translate-x-1/2 w-1 bg-white h-full xl2:left-1/2 xl2:translate-x-0"></div>

          {/* Education Entries */}
          {education.map((edu, index) => (
            <div
              key={edu.id}
              className={`flex flex-col items-center mb-16 ${
                index % 2 === 0
                  ? "xl2:flex-row xl2:justify-start"
                  : "xl2:flex-row xl2:justify-end"
              }`}
            >
              {/* Timeline Circle */}
              <div className="absolute left-0 xl2:left-1/2 transform -translate-x-1/2 bg-gray-400 border-4 border-[#8245ec] w-12 h-12 rounded-full flex justify-center items-center z-10">
                <img
                  src={edu.img2}
                  alt={edu.school}
                  className="w-full h-full object-cover rounded-full"
                />
              </div>

              {/* Content Section */}
              <div
                className={`w-full xl2:max-w-md p-4 xl2:p-8 rounded-2xl border border-white bg-gray-900 backdrop-blur-md shadow-[0_0_20px_1px_rgba(130,69,236,0.3)] ${
                  index % 2 === 0 ? "xl2:ml-0" : "xl2:mr-0"
                } xl2:ml-28 xl2:mr-28 ml-8 transform transition-transform duration-300 hover:scale-105`}
              >
                {/* Flex container for image and text */}
                <div className="flex items-center space-x-6">
                  {/* School Logo/Image */}
                  <div className="w-16 h-16 bg-white rounded-md overflow-hidden">
                    <img
                      src={edu.img}
                      alt={edu.school}
                      className="w-full h-full object-contain"
                    />
                  </div>

                  {/* Degree, School, and Date */}
                  <div className="flex flex-col justify-between">
                    <div>
                      <h3 className="text-xl2 font-semibold text-white">
                        {edu.degree}
                      </h3>
                      <h4 className="text-sm text-gray-300">{edu.school}</h4>
                    </div>
                    <p className="text-sm text-gray-500 mt-2">{edu.date}</p>
                  </div>
                </div>

                <p className="mt-4 text-gray-400">{edu.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
