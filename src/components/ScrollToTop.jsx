import React, { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";

const scrollStyles = `
    @keyframes bounce {
        0%, 100% { transform: translateY(0); }
        50%       { transform: translateY(-10px); }
    }

    @keyframes fadeInUp {
        from { opacity: 0; transform: translateY(20px); }
        to   { opacity: 1; transform: translateY(0); }
    }

    @keyframes fadeOutDown {
        from { opacity: 1; transform: translateY(0); }
        to   { opacity: 0; transform: translateY(20px); }
    }

    .scroll-ball {
        animation: bounce 1.2s ease-in-out infinite;
    }

    .scroll-ball:hover {
        animation: none;
        transform: scale(1.1);
    }

    .scroll-ball-enter {
        animation: fadeInUp 0.35s ease forwards;
    }

    .scroll-ball-exit {
        animation: fadeOutDown 0.35s ease forwards;
    }

    /* Shadow pulse below the ball */
    @keyframes shadowPulse {
        0%, 100% { transform: scaleX(1); opacity: 0.3; }
        50%       { transform: scaleX(0.6); opacity: 0.1; }
    }

    .scroll-shadow {
        animation: shadowPulse 1.2s ease-in-out infinite;
    }
`;

const ScrollToTop = () => {
    const [visible, setVisible] = useState(false);
    const [animClass, setAnimClass] = useState("scroll-ball-enter");

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 300) {
                setVisible(true);
                setAnimClass("scroll-ball-enter");
            } else {
                setAnimClass("scroll-ball-exit");
                setTimeout(() => setVisible(false), 320);
            }
        };

        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    if (!visible) return null;

    return (
        <>
            <style>{scrollStyles}</style>

            <div className={`fixed bottom-8 right-8 z-50 flex flex-col items-center gap-1 ${animClass}`}>

                {/* Ball */}
                <button
                    onClick={scrollToTop}
                    aria-label="Scroll to top"
                    className="scroll-ball w-13 h-13 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 text-white flex items-center justify-center shadow-lg shadow-purple-300/50 hover:shadow-xl hover:shadow-purple-400/60 cursor-pointer transition-shadow duration-300 outline-none border-2 border-white/30"
                    style={{ width: "52px", height: "52px" }}
                >
                    <ArrowUp size={20} strokeWidth={2.5} />
                </button>

                {/* Shadow beneath ball — synced with bounce */}
                <div
                    className="scroll-shadow w-8 h-2 rounded-full bg-purple-400/30 blur-sm"
                />

            </div>
        </>
    );
};

export default ScrollToTop;