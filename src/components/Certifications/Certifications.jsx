import { certifications } from "../../constants";

const Certifications = () => {
  return (
    <section
      id="certifications"
      className="py-24 px-4 sm:px-[8vw] md:px-[6vw] lg:px-[10vw] font-sans relative"
    >
      {/* Section Title */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-white">CERTIFICATIONS</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
      </div>

      {/* Certification Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-[2200px] mx-auto">
        {certifications.map((cert) => (
          <div
            key={cert.id}
            className="min-h-[400px] flex flex-col justify-between border border-white bg-gray-900 backdrop-blur-md rounded-2xl shadow-2xl overflow-hidden text-center p-6 hover:shadow-purple-500/50 hover:-translate-y-2 transition-transform duration-300"
          >
            {/* Title */}
            <h3 className="text-xl font-bold text-white mb-4 min-h-[3rem]">
              {cert.title}
            </h3>

            {/* Certificate Image */}
            <div className="mb-4 h-48">
              <img
                src={cert.image}
                alt={cert.title}
                className="w-full h-full object-contain rounded-md shadow-lg"
              />
            </div>

            {/* Show Certificate Button */}
            <a
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-gray-800 hover:bg-purple-800 text-gray-300 px-4 py-2 rounded-xl text-sm font-semibold mt-auto"
            >
              Show Badge
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certifications;
