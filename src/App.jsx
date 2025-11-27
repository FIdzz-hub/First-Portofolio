import { useState } from "react";
import DataImage, { Download } from "./data"
import { listTools, listProyek } from "./data"



function App() {
  const [showConfirm, setShowConfirm] = useState(false);

  const handleDownloadCV = () => {
    const link = document.createElement("a");
    link.href = Download.CV;
    link.download = "CV-Hafidz-Shabhan-Fadhil.pdf";
    link.click();
    setShowConfirm(false);
  };

  return (
    <>
      {/* Hero Section */}
      <div className="hero grid md:grid-cols-2 grid-cols-1 items-center pt-10 xl:gap-0 gap-6">
        <div className="animate__animated animate__fadeInUp animate__delay-3s">
          <div className="flex items-center gap-3 mb-6 bg-zinc-800 w-fit p-4 rounded-2xl">
            <img src={DataImage.Profil2Image || null} alt="Hero Image" className="w-15 rounded-md" loading="lazy" />
            <q>Success doesn't come from what you do occasionally, it comes from what you do consistently😎.</q>
          </div>
          <h1 className="text-6xl/tight font-bold mb-6">Hello World! I Am</h1>
          <p className="text-xl/loose mb-10 opacity-50">Hafidz Shabhan Fadhil, Seorang mahasiswa yang memiliki ketertarikan pada dunia pemrograman terutama pembuatan website dan Desain, bidang ini menjadi fokus saya untuk dikembangkan selama masa studi saya dengan gaya yang simple praktis dan mudah di gunakan</p>
          <div className="flex items-center sm:gap-4 gap-2">
            <button
              onClick={() => setShowConfirm(true)}
              className="bg-indigo-700 p-4 rounded-2xl hover:bg-indigo-500"
            >
              Download CV <i className="ri-download-2-line ri-lg"></i>
            </button>
            <a href="#project" className="bg-zinc-500 p-4 rounded-2xl hover:bg-zinc-600">
              My Project <i className="ri-corner-right-down-line ri-lg"></i>
            </a>
          </div>
        </div>
        <img src={DataImage.ProfilImage || null} alt="Hero Image" className="w-[350px] md:ml-auto rounded-b-2xl animate__animated animate__fadeInUp animate__delay-4s" loading="lazy" />
      </div>
      {/* Hero Section End */}

      {/* Modal Konfirmasi Download */}
      {showConfirm && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
          <div className="bg-zinc-900 p-6 rounded-xl text-center max-w-sm w-full mx-4">
            <h2 className="text-xl font-bold mb-4">Konfirmasi</h2>
            <p className="mb-6 text-sm opacity-80">
              Apakah kamu yakin ingin mengunduh CV ini?
            </p>
            <div className="flex justify-center gap-4">
              <button
                onClick={() => setShowConfirm(false)}
                className="px-4 py-2 rounded-lg bg-zinc-700 hover:bg-zinc-600"
              >
                Batal
              </button>
              <button
                onClick={handleDownloadCV}
                className="px-4 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-500"
              >
                Download
              </button>
            </div>
          </div>
        </div>
      )}
      {/* Modal Konfirmasi Download End */}

      {/* About Section */}
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
                <h1 className="text-4xl mb-1">
                  0<span className="text-indigo-500">+</span>
                </h1>
                <p>project completed</p>
              </div>
              <div>
                <h1 className="text-4xl mb-1">
                  1<span className="text-indigo-500">+</span>
                </h1>
                <p>years of experience</p>
              </div>
            </div>
          </div>
        </div>

        {/* Tools*/}
        <div className="tools mt-32">
          <h1 className="text-4xl/snug font-bold mb-4" data-aos="fade-up" data-aos-duration="1000">Tools used</h1>
          <p className="xl:w-2/5 lg:w-2/4 md:w-2/3 sm:w-3/4 w-full text-base/loose opacity-50" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300">Berikut ini beberapa tools yang biasa saya pakai</p>
          <div className="tools-box mt-14 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">

            {/* Mapping tools*/}
            {listTools.map((tool) => (
              <div className="flex items-center gap-2 p-3 border border-zinc-600 rounded-md hover:bg-zinc-800 group" key={tool.id} data-aos="fade-up" data-aos-duration="1000" data-aos-delay={tool.dad}>
                <img src={tool.gambar || null} alt="Tools Image" className="w-14 bg-zinc-800 p-1 group-hover:bg-zinc-900" loading="lazy" />
                <div>
                  <h4 className="font-bold">{tool.nama}</h4>
                  <p className="opacity-50">{tool.ket}</p>
                </div>
              </div>
            ))}
            {/* Mapping tools End*/}

          </div>
        </div>
        {/* Tools End*/}

      </div>
      {/* About Section End*/}

      {/* Project Section */}
      <div className="project mt-32 py-10" id="project">
        <h1 className="text-center text-4xl font-bold mb-2" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">Project</h1>
        <p className="text-base/loose text-center opacity-50" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300" data-aos-once="true">Berikut Ini beberapa project yang saya buat.</p>
        <div className="project-box mt-14 grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
          {listProyek.map((project) => (
            <div key={project.id} className="p-4 bg-zinc-800 rounded-md" data-aos="fade-up" data-aos-duration="1000" data-aos-delay={project.dad} data-aos-once="true">
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
                  <a href="" className="bg-indigo-700 rounded-lg block border border-zinc-600 hover:bg-indigo-500">Lihat Website</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Project Section End */}

      {/* Contact Section */}
      <div className="contact mt-32 sm:p-10 p-0" id="contact">
        <h1 className="text-4xl mb-2 font-bold text-center" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">Contact</h1>
        <p className="text-base/loose text-center mb-10 opacity-50" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300" data-aos-once="true">let's connect with me.</p>
        <form action="https://formsubmit.co/hafidzsfsmd@gmail.com" method="POST" className="bg-zinc-800 p-10 sm:w-fit w-full mx-auto rounded-md" autoComplete="off" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500" data-aos-once="true">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <label className="font-semibold">Nama lengkap</label>
              <input type="text" name="nama" placeholder="Masukkan Nama..." className="border border-zinc-500 p-2 rounded-md" required />
            </div>
            <div className="flex flex-col gap-2">
              <label className="font-semibold">Email</label>
              <input type="email" name="email" placeholder="Masukkan Email..." className="border border-zinc-500 p-2 rounded-md" required />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="pesan" className="font-semibold">Pesan</label>
              <textarea name="pesan" id="pesan" cols="45" rows="7" placeholder="Pesan..." className="border border-zinc-500 p-2 rounded-md" required></textarea>
            </div>
            <div className="text-center">
              <button type="submit" className="bg-indigo-700 p-3 rounded-lg w-full cursor-pointer border border-zinc-600 hover:bg-indigo-600">Kirim Pesan</button>
            </div>
          </div>
        </form>
      </div>
      {/* Contact Section End*/}
    </>
  )
}

export default App
