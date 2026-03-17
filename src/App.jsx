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
      <div className="bg-brand-bg min-h-screen selection:bg-brand-accent/20 selection:text-brand-accent">
        <div className="max-w-6xl mx-auto px-6">
          <Navbar />

          <main className="flex flex-col gap-y-32 md:gap-y-48">
            <Hero onDownloadClick={() => setShowConfirm(true)} />
            <About />
            <Project />
            <Contact />
          </main>

          <Footer />
        </div>

        {showConfirm && (
          <div className="fixed inset-0 z-999 flex items-center justify-center p-4">
            {/* Backdrop Blur */}
            <div
              className="absolute inset-0 bg-brand-main/40 backdrop-blur-md"
              onClick={() => setShowConfirm(false)}
            />

            {/* Modal Box */}
            <div className="relative bg-brand-card p-8 rounded-3xl text-center max-w-sm w-full border border-brand-border shadow-2xl animate-in fade-in zoom-in duration-300">
              <div className="w-16 h-16 bg-brand-accent/10 text-brand-accent rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="ri-file-download-line text-3xl"></i>
              </div>

              <h2 className="text-2xl font-bold mb-2 text-brand-main font-jakarta">Download CV?</h2>
              <p className="mb-8 text-brand-muted text-sm leading-relaxed">
                Dapatkan salinan profil profesional saya dalam format PDF untuk ditinjau lebih lanjut.
              </p>

              <div className="flex flex-col gap-3">
                <button
                  onClick={handleDownloadCV}
                  className="w-full py-3.5 rounded-xl bg-brand-accent text-white font-bold hover:bg-brand-hover hover:scale-[1.02] active:scale-[0.98] transition-all shadow-lg shadow-brand-accent/20 cursor-pointer"
                >
                  Ya, Unduh Sekarang
                </button>
                <button
                  onClick={() => setShowConfirm(false)}
                  className="w-full py-3 text-brand-muted font-medium hover:text-brand-main transition-colors cursor-pointer"
                >
                  Mungkin Nanti
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default App;