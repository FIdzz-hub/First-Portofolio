import { useState, useEffect } from "react";

const Navbar = () => {
    const [active, setActive] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 150) {
                setActive(true);
            } else {
                setActive(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll)
        }
    }, []);

    return (
        <nav className="navbar py-7 flex items-center justify-between top-0 z-100">
            <div className="logo">
                <h1 className="text-3xl font-bold tracking-tighter text-brand-main font-jakarta">Fidzz<span className="text-brand-accent">.</span></h1>
            </div>
            <ul className={`
                menu flex items-center gap-6 md:gap-10 
                fixed left-1/2 -translate-x-1/2 px-8 py-3 rounded-full 
                border border-brand-border bg-white/70 backdrop-blur-md shadow-soft
                transition-all duration-500 z-50
                md:static md:translate-x-0 md:bg-transparent md:border-none md:shadow-none md:p-0
                ${active ? "top-6 opacity-100" : "top-[-100px] opacity-0 md:opacity-100"}
            `}>
                <li>
                    <a href="#home" className="text-sm md:text-base font-medium text-brand-muted hover:text-brand-accent transition-colors">Home</a>
                </li>
                <li>
                    <a href="#about" className="text-sm md:text-base font-medium text-brand-muted hover:text-brand-accent transition-colors">About</a>
                </li>
                <li>
                    <a href="#project" className="text-sm md:text-base font-medium text-brand-muted hover:text-brand-accent transition-colors">Project</a>
                </li>
                <li>
                    <a href="#contact" className="text-sm md:text-base font-medium text-brand-muted hover:text-brand-accent transition-colors">Contact</a>
                </li>
            </ul>

            {/* CTA BUTTON (Desktop Only) */}
            <div className="hidden md:block">
                <a
                    href="#contact"
                    className="bg-brand-main text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-brand-accent transition-all duration-300"
                >
                    Let's Talk
                </a>
            </div>
        </nav>
    )
}

export default Navbar
