import anime from "animejs";
import { useEffect, useRef } from "react";

export default function StampeGiapponesi({ start }) {
    useEffect(() => {
        if (start) {
            startAnimations();
        } else {
            removeStyle(ondaShadow, ondaTitle, ondaSubtitle);
        }
    }, [start]);

    const ondaShadow = useRef();
    const ondaTitle = useRef();
    const ondaSubtitle = useRef();

    function removeStyle(...args) {
        for (const element of args)
            element.current.style.removeProperty("opacity");
    }

    function startAnimations() {
        anime({
            targets: ondaShadow.current,
            opacity: [0, 1],
            easing: "easeInOutQuad",
            duration: 1000,
        });

        anime({
            targets: ondaTitle.current,
            opacity: [0, 1],
            translateX: [-20, 0],
            easing: "easeInOutQuad",
            duration: 1000,
        });

        anime({
            targets: ondaSubtitle.current,
            opacity: [0, 1],
            translateY: [20, 0],
            easing: "easeInOutQuad",
            duration: 1000,
            delay: 300,
        });
    }

    return (
        <div className="h-screen w-full relative grid place-content-center overflow-hidden custom-image background-onda">
            <div
                className={`absolute w-full h-full top-0 left-0 ${
                    start ? "" : "hidden"
                }`}>
                <div
                    className="opacity-0 absolute right-0 top-0 bg-gradient-to-l from-[#000000aa] to-[#00000000] h-full w-full"
                    ref={ondaShadow}></div>

                <div className="absolute right-0 top-0 h-full w-1/2 grid gap-2 place-content-center pr-8">
                    <div
                        className="opacity-0 text-5xl font-bold uppercase text-white text-right drop-shadow-xl"
                        ref={ondaTitle}>
                        Stampe giapponesi
                    </div>
                    <div
                        className="opacity-0 text-2xl text-right text-white drop-shadow-lg"
                        ref={ondaSubtitle}>
                        L'affermarsi dell'impressionismo è stato influenzato
                        anche dalla diffusione delle stampe giapponesi a più
                        colori con matrici in legno nella seconda metà
                        dell'Ottocento. Queste stampe, che erano state importate
                        in Europa in grande quantità a causa dell'aumento del
                        commercio con l'Estremo Oriente, si basavano sulla
                        tradizione pittorica giapponese che aveva sempre dato
                        importanza all'armonia dei colori e all'accordo delle
                        forme piuttosto che alla definizione dei volumi. Gli
                        Impressionisti, e Monet in particolare, erano
                        appassionati collezionisti di queste stampe e spesso vi
                        si ispiravano a esse per la composizione rigorosa e la
                        nitidezza delle giustapposizioni di colore
                    </div>
                </div>
            </div>
        </div>
    );
}
