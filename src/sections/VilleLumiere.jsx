import anime from "animejs";
import { useEffect, useRef } from "react";
import villeImg from "/VilleLumiere.png";

export default function VilleLumiere({ start }) {
    useEffect(() => {
        if (start) {
            startAnimations();
        } else {
            removeStyle(villeShadow, villeTitle, villeSubtitle, villeImage);
        }
    }, [start]);

    function removeStyle(...args) {
        for (const element of args)
            element.current.style.removeProperty("opacity");
    }

    const villeShadow = useRef();
    const villeTitle = useRef();
    const villeSubtitle = useRef();
    const villeImage = useRef();

    function startAnimations() {
        anime({
            targets: villeShadow.current,
            opacity: [0, 1],
            easing: "easeInOutQuad",
            duration: 1000,
        });

        anime({
            targets: villeImage.current,
            opacity: [0, 1],
            translateY: [20, 0],
            easing: "easeInOutQuad",
            duration: 1000,
        });

        anime({
            targets: villeTitle.current,
            opacity: [0, 1],
            translateX: [-20, 0],
            easing: "easeInOutQuad",
            duration: 1000,
        });

        anime({
            targets: villeSubtitle.current,
            opacity: [0, 1],
            translateY: [20, 0],
            easing: "easeInOutQuad",
            duration: 1000,
            delay: 300,
        });
    }

    return (
        <div className="h-screen w-full relative grid place-content-center overflow-hidden custom-image background-parigi">
            <div
                className={`absolute w-full h-full top-0 left-0 ${
                    start ? "" : "hidden"
                }`}>
                <img
                    src={villeImg}
                    className="opacity-0 w-1/2 z-0"
                    ref={villeImage}
                />

                <div
                    className="opacity-0 absolute right-0 top-0 bg-gradient-to-l from-[#00000090] to-[#00000000] h-full w-2/3"
                    ref={villeShadow}></div>

                <div className="absolute right-0 top-0 h-full w-1/2 grid gap-2 place-content-center pr-8">
                    <div
                        className="opacity-0 text-5xl font-bold uppercase text-white text-right drop-shadow-xl"
                        ref={villeTitle}>
                        Ville Lumiere
                    </div>
                    <div
                        className="opacity-0 text-2xl text-right text-white drop-shadow-lg"
                        ref={villeSubtitle}>
                        Mentre la Terza Repubblica si consolidava, Parigi si
                        arricchiva di teatri, musei, ristoranti, sale da ballo,
                        casinò e caffè, diventando una città borghese e festosa.
                        I tavolini dei caffè invadono i marciapiedi degli ampi
                        viali cittadini, creando una lunga sala all'aperto
                        scintillante di luci e colori. Questa città è la culla
                        dell'Impressionismo, una nuova corrente artistica che
                        non sarebbe esistita senza di essa, ma che al contempo
                        la ha immortalata e ritratta nei suoi aspetti più vari e
                        fantasiosi, contribuendo a costruire il mito della Belle
                        époque
                    </div>
                </div>
            </div>
        </div>
    );
}
