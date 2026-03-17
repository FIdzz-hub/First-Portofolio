import { DataImage } from "../data";

const Hero = ({ onDownloadClick }) => {
  return (
    <div className="hero grid md:grid-cols-2 grid-cols-1 items-center pt-10 xl:gap-0 gap-6">
      <div className="animate__animated animate__fadeInUp animate__delay-3s">
        <div className="bg-zinc-800 text-white flex items-center gap-3 mb-6 w-fit p-4 rounded-2xl">
          <img src={DataImage.Profil2Image || null} alt="Hero Image" className="w-15 rounded-md" loading="lazy" />
          <q>Success doesn't come from what you do occasionally, it comes from what you do consistently😎.</q>
        </div>
        <h1 className="text-6xl/tight font-bold mb-6">Hello World! I Am</h1>
        <p className="text-xl/loose mb-10 opacity-50">Hafidz Shabhan Fadhil, Seorang mahasiswa yang memiliki ketertarikan pada dunia pemrograman terutama pembuatan website dan Desain, bidang ini menjadi fokus saya untuk dikembangkan selama masa studi saya dengan gaya yang simple praktis dan mudah di gunakan</p>
        <div className="flex items-center sm:gap-4 gap-2">
          <button
            onClick={onDownloadClick}
            className="bg-indigo-700 p-4 rounded-2xl hover:bg-indigo-500"
          >
            Download CV <i className="ri-download-2-line ri-lg"></i>
          </button>
          <a href="#project" className="bg-zinc-500 p-4 rounded-2xl hover:bg-zinc-600">
            My Project <i className="ri-corner-right-down-line ri-lg"></i>
          </a>
        </div>
      </div>
      <img src={DataImage.ProfilImage || null} alt="Hero Image" className="w-87.5 md:ml-auto rounded-b-2xl animate__animated animate__fadeInUp animate__delay-4s" loading="lazy" />
    </div>
  );
};

export default Hero;