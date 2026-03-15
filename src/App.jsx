import { useState } from "react";
import { Download } from "./data";
import Hero from "./components/Hero";
import About from "./components/About";
import Project from "./components/ProjectCard";
import Contact from "./components/ContactForm";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  const [showConfirm, setShowConfirm] = useState(false);

  const handleDownloadCV = () => {
    const link = document.createElement("a");
    link.href = Download.CV;
    link.setAttribute("download", "CV-Hafidz-Shabhan-Fadhil.pdf");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setShowConfirm(false);
  };

  return (
    <>
      <div className="bg-brand-bg min-h-screen">
        <div className="max-w-6xl mx-auto px-6">

          <main className="flex flex-col gap-y-32 md:gap-y-48">
            <Hero onDownloadClick={() => setShowConfirm(true)} />
            <About />
            <Project />
            <Contact />
          </main>

        </div>

        {showConfirm && (
          <div className="bg-white p-8 rounded-2xl text-center max-w-sm w-full mx-4 border border-brand-border shadow-2xl">
            <h2 className="text-2xl font-bold mb-2 text-brand-main font-jakarta">Download CV?</h2>
            <p className="mb-8 text-brand-muted">Dapatkan salinan profil profesional saya dalam format PDF.</p>
            <div className="flex flex-col gap-3">
              <button
                onClick={handleDownloadCV}
                className="w-full py-3 rounded-xl bg-brand-accent text-white font-bold hover:bg-blue-700 transition-all"
              >
                Ya, Unduh Sekarang
              </button>
              <button
                onClick={() => setShowConfirm(false)}
                className="w-full py-3 text-brand-muted font-medium hover:text-brand-main transition-colors"
              >
                Mungkin Nanti
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default App;