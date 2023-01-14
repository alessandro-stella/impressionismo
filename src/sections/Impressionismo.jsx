import anime from "animejs";
import { useEffect, useRef } from "react";

export default function Impressionismo({ start }) {
    useEffect(() => {
        if (start) {
            startAnimations();
        } else {
            removeStyle(impressShadow, impressTitle, impressSubtitle);
        }
    }, [start]);

    const impressShadow = useRef();
    const impressTitle = useRef();
    const impressSubtitle = useRef();

    function removeStyle(...args) {
        for (const element of args)
            element.current.style.removeProperty("opacity");
    }

    function startAnimations() {
        anime({
            targets: impressShadow.current,
            opacity: [0, 1],
            easing: "easeInOutQuad",
            duration: 1000,
        });

        anime({
            targets: impressTitle.current,
            opacity: [0, 1],
            translateY: [-20, 0],
            easing: "easeInOutQuad",
            duration: 1000,
        });

        anime({
            targets: impressSubtitle.current,
            opacity: [0, 1],
            translateY: [-20, 0],
            easing: "easeInOutQuad",
            duration: 1000,
            delay: 300,
        });
    }

    return (
        <div className="relative grid w-full h-screen overflow-hidden bg-amber-100 place-content-center custom-image background-impressionismo">
            <div
                className={`absolute w-full h-full top-0 left-0 flex flex-col items-center justify-center ${
                    start ? "" : "hidden"
                }`}>
                <div
                    className="opacity-0 absolute right-0 top-0 bg-[#00000030] h-full w-full"
                    ref={impressShadow}></div>

                <div
                    className="opacity-0 text-[8rem] font-bold uppercase h-fit text-white drop-shadow-xl mb-8"
                    ref={impressTitle}>
                    Impressionismo
                </div>
                <div
                    className="opacity-0 mb-20 text-2xl font-bold text-white drop-shadow-sm"
                    ref={impressSubtitle}>
                    La poesia della pittura: un nuovo modo di esprimere la
                    bellezza
                </div>
            </div>
        </div>
    );
}
