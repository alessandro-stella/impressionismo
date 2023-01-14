import anime from "animejs";
import { useEffect } from "react";

export default function Impressionismo({ start }) {
    useEffect(() => {
        if (start) {
            startAnimations();
        }
    }, [start]);

    function startAnimations() {
        anime({
            targets: ".impresShadow",
            opacity: [0, 1],
            easing: "easeInOutQuad",
            duration: 1000,
        });

        anime({
            targets: ".impressTitle",
            opacity: [0, 1],
            translateY: [-20, 0],
            easing: "easeInOutQuad",
            duration: 1000,
        });

        anime({
            targets: ".impressSubtitle",
            opacity: [0, 1],
            translateY: [-20, 0],
            easing: "easeInOutQuad",
            duration: 1000,
            delay: 300,
        });
    }

    return (
        <div className="bg-amber-100 h-screen w-full relative grid place-content-center overflow-hidden custom-image background-impressionismo">
            <div
                className={`absolute w-full h-full top-0 left-0 flex flex-col items-center justify-center ${
                    start ? "" : "hidden"
                }`}>
                <div className="absolute right-0 top-0 bg-[#00000030] h-full w-full impresShadow"></div>

                <div className="text-[8rem] font-bold uppercase h-fit text-white drop-shadow-xl impressTitle mb-8">
                    Impressionismo
                </div>
                <div className="impressSubtitle text-2xl text-white font-bold drop-shadow-sm mb-20">
                    La poesia della pittura: un nuovo modo di esprimere la
                    bellezza
                </div>
            </div>
        </div>
    );
}
