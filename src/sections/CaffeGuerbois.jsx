import anime from "animejs";
import { useEffect, useRef } from "react";

export default function CaffeGuerbois({ start }) {
    useEffect(() => {
        if (start) {
            startAnimations();
        } else {
            removeStyle(caffeShadow, caffeTitle, caffeSubtitle);
        }
    }, [start]);

    const caffeShadow = useRef();
    const caffeTitle = useRef();
    const caffeSubtitle = useRef();

    function removeStyle(...args) {
        for (const element of args)
            element.current.style.removeProperty("opacity");
    }

    function startAnimations() {
        anime({
            targets: caffeShadow.current,
            opacity: [0, 1],
            easing: "easeInOutQuad",
            duration: 1000,
        });

        anime({
            targets: caffeTitle.current,
            opacity: [0, 1],
            translateX: [20, 0],
            easing: "easeInOutQuad",
            duration: 1000,
        });

        anime({
            targets: caffeSubtitle.current,
            opacity: [0, 1],
            translateY: [20, 0],
            easing: "easeInOutQuad",
            duration: 1000,
            delay: 300,
        });
    }

    return (
        <div className=" h-screen w-full relative grid place-content-center overflow-hidden custom-image background-caffe">
            <div
                className={`absolute w-full h-full top-0 left-0 ${
                    start ? "" : "hidden"
                }`}>
                <div
                    className="opacity-0 bg-gradient-to-r from-[#00000090] to-[#00000000] h-full w-2/3"
                    ref={caffeShadow}></div>

                <div className="absolute left-0 top-0 h-full w-1/2 grid gap-2 place-content-center pl-8">
                    <div
                        className="opacity-0 text-5xl font-bold uppercase text-white drop-shadow-2xl"
                        ref={caffeTitle}>
                        Caffè Guerbois
                    </div>
                    <div
                        className="opacity-0 text-2xl text-left text-white drop-shadow-lg"
                        ref={caffeSubtitle}>
                        L'Impressionismo è un movimento artistico diverso e
                        anomalo rispetto a quelli precedenti per diversi
                        aspetti. In primo luogo, non ha una base culturale
                        omogenea poiché gli artisti che vi aderiscono provengono
                        da esperienze artistiche e realtà sociali diverse. In
                        secondo luogo, non è organizzato e si è costituito per
                        aggregazione spontanea senza manifesti o teorie che ne
                        spieghino le tematiche o le finalità. I giovani artisti
                        si incontravano in un locale parigino chiamato Café
                        Guerbois per discutere e condividere le loro idee. Ciò
                        che inizialmente era un incontro casuale, divenne un
                        appuntamento settimanale e talvolta giornaliero. Claude
                        Monet, uno degli Impressionisti più famosi, ricorda che
                        questi incontri erano molto interessanti, ritenendoli
                        sempre vivi e pieni di entusiasmo
                    </div>
                </div>
            </div>
        </div>
    );
}
