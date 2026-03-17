import { listProyek } from "../data";

const Project = () => {
  return (
    <div className="project mt-32 py-10" id="project">
      <h1 className="text-center text-4xl font-bold mb-2" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">Project</h1>
      <p className="text-base/loose text-center opacity-50" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300" data-aos-once="true">Berikut Ini beberapa project yang saya buat.</p>
      <div className="project-box mt-14 grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
        {listProyek.map((project) => (
          <div key={project.id} className="p-4 bg-zinc-800 text-white rounded-md" data-aos="fade-up" data-aos-duration="1000" data-aos-delay={project.dad} data-aos-once="true">
            <img src={project.gambar} alt="project image" loading="lazy" />
            <div>
              <h1 className="text-2xl font-bold my-4">{project.nama}</h1>
              <p className="text-base/loose mb-4">{project.desk}</p>
              <div className="flex flex-wrap gap-2">
                {project.tools.map((tool, index) => (
                  <p className="py-1 px-3 border border-zinc-500 bg-zinc-600 rounded-md font-semibold" key={index}>{tool}</p>
                ))}
              </div>
              <div className="mt-8 text-center">
                <a href={project.link} target="_blank" className="bg-indigo-700 rounded-lg block border border-zinc-600 hover:bg-indigo-500 py-2">Lihat Website</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;