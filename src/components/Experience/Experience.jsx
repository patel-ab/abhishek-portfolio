import { experiences } from "../../constants"; // Import your data

const Experience = () => {
  return (
    <section
      id="experience"
      className="py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[3vw] font-sans bg-skills-gradient clip-path-custom-2 mx-auto max-w-full xl2:max-w-[1430px]"
    >
      <div className="m-auto max-w-[550px] xl2:max-w-full">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white">EXPERIENCE</h2>
          <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
          <p className="text-gray-400 mt-4 text-lg font-semibold">
            A collection of my work experience and the roles I have taken in
            various organizations.
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-0 transform -translate-x-1/2 w-1 bg-white h-full xl2:left-1/2 xl2:translate-x-0"></div>

          {/* Experience Entries */}
          {experiences.map((experience, index) => (
            <div
              key={experience.id}
              className={`flex flex-col items-center mb-16 ${
                index % 2 === 0
                  ? "xl2:flex-row xl2:justify-start"
                  : "xl2:flex-row xl2:justify-end"
              }`}
            >
              {/* Timeline Circle */}
              <div className="absolute left-0 xl2:left-1/2 transform -translate-x-1/2 bg-gray-400 border-4 border-[#8245ec] w-12 h-12 rounded-full flex justify-center items-center z-10">
                <img
                  src={experience.img2}
                  alt={experience.company}
                  className="w-full h-full object-cover rounded-full"
                />
              </div>

              {/* Content Section */}
              <div
                className={`w-full xl2:max-w-md p-4 xl2:p-8 rounded-2xl shadow-2xl border border-white bg-gray-900 backdrop-blur-md shadow-[0_0_20px_1px_rgba(130,69,236,0.3)]
               ${index % 2 === 0 ? "xl2:ml-0" : "xl2:mr-0"}
               xl2:ml-28 xl2:mr-28 ml-8 transform transition-transform duration-300 hover:scale-105`}
              >
                {/* Flex container for image and text */}
                <div className="flex items-center space-x-6">
                  {/* Company Logo/Image */}
                  <div className="w-16 h-16 bg-white rounded-md overflow-hidden">
                    <img
                      src={experience.img}
                      alt={experience.company}
                      className="w-full h-full object-contain"
                    />
                  </div>

                  {/* Role, Company Name, and Date */}
                  <div className="flex flex-col justify-between">
                    <div>
                      <h3 className="text-xl2 font-semibold text-white">
                        {experience.role}
                      </h3>
                      <h4 className="text-sm text-gray-300">
                        {experience.company}
                      </h4>
                    </div>
                    {/* Date at the bottom */}
                    <p className="text-sm text-gray-500 mt-2">
                      {experience.date}
                    </p>
                  </div>
                </div>

                <p className="mt-4 text-gray-400">{experience.desc}</p>
                <div className="mt-4">
                  <h5 className="font-medium text-white">Skills:</h5>
                  <ul className="flex flex-wrap mt-2">
                    {experience.skills.map((skill, index) => (
                      <li
                        key={index}
                        className="bg-[#8245ec] text-gray-300 px-4 py-1 text-sm rounded-lg mr-2 mb-2 border border-gray-400"
                      >
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
