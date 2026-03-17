const Footer = () => {
    return (
        <div className="mt-32 py-4 flex md:flex-row flex-col gap-6 md:gap-0 justify-between items-center">
            <h1 className="text-2xl font-bold">Fidzz<span className="text-brand-accent">.</span></h1>
            <div className="flex gap-7">
                <a href="#">Home</a>
                <a href="#about">About</a>
                <a href="#project">Project</a>
            </div>
            <div className="flex items-center gap-3">
                <a href="#">
                    <i className="ri-github-fill ri-2x"></i>
                    <i className="ri-instagram-fill ri-2x"></i>
                    <i className="ri-reddit-fill ri-2x"></i>
                    <i className="ri-youtube-fill ri-2x"></i>
                </a>
            </div>
        </div>
    )
}

export default Footer