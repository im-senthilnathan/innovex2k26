import { ArrowUpRight, CalendarDays, Landmark, ArrowRight } from "lucide-react"

const Home = () => {
    return (
        <section className="relative w-full h-screen overflow-hidden">

            {/* Background Video */}
            <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute top-0 left-0 min-w-full min-h-full object-cover"
            >
                <source src="./heroBg.mp4" type="video/mp4" />
            </video>

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/50"></div>

            {/* Content */}
            <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">

                <h1 className="text-4xl md:text-9xl font-poppins tracking-wide font-semibold mb-6 bg-gradient-to-b from-white to-purple-500 bg-clip-text text-transparent uppercase">
                    Welcome to <br /> INNOVEX 2K26
                </h1>

                <div className="flex items-center gap-4 mb-4">
                    <img src="/fpc_logo.png" alt="FPC Logo" className="w-8 h-8 object-contain" />

                    <p className="text-lg md:text-4xl font-bold uppercase">
                        Face <span className="text-black">Prep</span> <span className="text-accent">Campus</span>
                    </p>
                </div>

                <p className="text-lg md:text-2xl max-w-4xl mb-4 capitalize">
                    bharathidasan college of arts and science (autonomous)
                </p>

                <div className="flex items-center gap-4 mb-8">
                    <p className="flex items-center gap-2 text-sm md:text-xl text-white/80 font-semibold capitalize tracking-wide">
                        <CalendarDays size={24} /> 3rd March 2026
                    </p>
                    <span>|</span>
                    <p className="flex items-center gap-2 text-sm md:text-xl text-white/80 font-semibold capitalize tracking-wide">
                        <Landmark size={24} /> Intra Campus Event
                    </p>
                </div>


                <a href="#events" className="flex items-center gap-2 cursor-pointer font-semibold rounded-full bg-white/20 backdrop-blur-xs border border-white/20 px-6 py-3 hover:bg-white/30">
                    Explore Events <ArrowRight size={18} />
                </a>

            </div>

        </section>
    )
}

export default Home