import{ DataImage, listTools } from "../data";

const About = () => {
  return (
    <div className="about mt-32 py-10" id="about">
      <div className="xl:w-2/3 lg:w-3/4 w-full mx-auto p-7 bg-zinc-800 rounded-lg" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">
        <img src={DataImage.Profil2Image || null} alt="Image" className="w-12 rounded-md mb-10 sm:hidden" loading="lazy" />
        <p className="text-base/loose mb-10">
          Hello World!, Saya Hafidz Shabhan Fadhil, seorang Full Stack Web Developer dan Designer. Saya senang menggabungkan desain yang menarik dengan fungsionalitas yang solid. Bagi saya, web yang bagus bukan hanya soal tampilan, tapi juga pengalaman pengguna yang simpel, nyaman, dan mudah digunakan.
        </p>
        <div className="flex items-center justify-between">
          <img src={DataImage.ProfilImage || null} alt="image" className="w-12 rounded-md sm:block hidden" />
          <div className="flex items-center gap-6">
            <div>
              <h1 className="text-4xl mb-1">3<span className="text-indigo-500">+</span></h1>
              <p>project completed</p>
            </div>
            <div>
              <h1 className="text-4xl mb-1">1<span className="text-indigo-500">+</span></h1>
              <p>years of experience</p>
            </div>
          </div>
        </div>
      </div>

      <div className="tools mt-32">
        <h1 className="text-4xl/snug font-bold mb-4" data-aos="fade-up" data-aos-duration="1000">Tools used</h1>
        <p className="xl:w-2/5 lg:w-2/4 md:w-2/3 sm:w-3/4 w-full text-base/loose opacity-50" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300">Berikut ini beberapa tools yang biasa saya pakai</p>
        <div className="tools-box mt-14 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
          {listTools.map((tool) => (
            <div className="flex items-center gap-2 p-3 border border-zinc-600 rounded-md hover:bg-zinc-800 group" key={tool.id} data-aos="fade-up" data-aos-duration="1000" data-aos-delay={tool.dad}>
              <img src={tool.gambar || null} alt="Tools Image" className="w-14 bg-zinc-800 p-1 group-hover:bg-zinc-900" loading="lazy" />
              <div>
                <h4 className="font-bold">{tool.nama}</h4>
                <p className="opacity-50">{tool.ket}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;