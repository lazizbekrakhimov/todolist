import { useContext, useEffect, useState } from "react";
import { FiCheckSquare } from "react-icons/fi";
import { Context } from "../context/Context";

const HelloPart = () => {
    const [tilt, setTilt] = useState(0);
    const { userName, setUserName } = useContext(Context);

    useEffect(() => {
        let frame;
        const maxAmplitude = 3;
        const fadeInDuration = 5000;
        const delay = 3000;

        const startAnimation = () => {
            let startTime = null;

            const animate = (timestamp) => {
                if (!startTime) startTime = timestamp;
                const elapsed = timestamp - startTime;

                const amplitude = Math.min((elapsed / fadeInDuration) * maxAmplitude, maxAmplitude);

                const angle = Math.sin(Date.now() / 150) * amplitude;
                setTilt(angle);

                frame = requestAnimationFrame(animate);
            };

            frame = requestAnimationFrame(animate);
        };

        const timeout = setTimeout(startAnimation, delay);

        return () => {
            clearTimeout(timeout);
            cancelAnimationFrame(frame);
        };
    }, []);

    const handleEditName = () => {
        const newName = prompt("Enter your name:", userName);
        if (newName && newName.trim() !== "") {
            setUserName(newName.trim());
        }
    };

    return (
        <div className="page-enter-top mb-13 relative text-center">
            <div
                className="inline-block px-6 py-3 transition-transform duration-100 cursor-default"
                style={{
                    transform: `rotate(${tilt}deg)`,
                    textShadow: "10px 10px 18px rgba(255, 255, 255, 0.2)"
                }}
            >
                <h1 className="flex items-center justify-center gap-2 text-4xl sm:text-5xl font-semibold text-white/90 tracking-wider mb-3.5">
                    Welcome,
                    <span onDoubleClick={handleEditName} className="italic cursor-pointer select-none relative group">
                        {userName || "User"}
                        <span className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 px-2 py-1 text-xs text-white bg-black/30 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                            Double click to edit name
                        </span>
                    </span>                        
                    !
                </h1>

                <p className="flex items-center justify-center gap-2 mt-2 text-2xl sm:text-xl text-white/70">
                    <FiCheckSquare className="text-white/70" />
                    What are you planning to do today?
                </p>
            </div>

            <span className="absolute -top-4 -left-6 w-6 h-6 bg-white/10 rounded-full blur-2xl animate-pulse"></span>
            <span className="absolute -top-6 right-4 w-8 h-8 bg-white/5 rounded-full blur-3xl animate-pulse"></span>
            <span className="absolute bottom-0 left-1/2 w-4 h-4 bg-white/20 rounded-full blur-xl animate-pulse"></span>
        </div>
    );
};

export default HelloPart;
