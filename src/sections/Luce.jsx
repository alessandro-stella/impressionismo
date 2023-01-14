import anime from "animejs";
import { useEffect, useRef } from "react";

export default function Luce({ start }) {
    useEffect(() => {
        if (start) {
            startAnimations();
        } else {
            removeStyle(luceShadow, luceTitle, luceSubtitle);
        }
    }, [start]);

    const luceShadow = useRef();
    const luceTitle = useRef();
    const luceSubtitle = useRef();

    function removeStyle(...args) {
        for (const element of args)
            element.current.style.removeProperty("opacity");
    }

    function startAnimations() {
        anime({
            targets: luceShadow.current,
            opacity: [0, 1],
            easing: "easeInOutQuad",
            duration: 1000,
        });

        anime({
            targets: luceTitle.current,
            opacity: [0, 1],
            translateX: [20, 0],
            easing: "easeInOutQuad",
            duration: 1000,
        });

        anime({
            targets: luceSubtitle.current,
            opacity: [0, 1],
            translateY: [20, 0],
            easing: "easeInOutQuad",
            duration: 1000,
            delay: 300,
        });
    }

    return (
        <div className=" h-screen w-full relative grid place-content-center overflow-hidden custom-image background-luce">
            <div
                className={`absolute w-full h-full top-0 left-0 ${
                    start ? "" : "hidden"
                }`}>
                <div
                    className="opacity-0 bg-gradient-to-r from-[#00000090] to-[#00000000] h-full w-2/3"
                    ref={luceShadow}></div>

                <div className="absolute left-0 top-0 h-full w-1/2 grid gap-2 place-content-center pl-8">
                    <div
                        className="opacity-0 text-5xl font-bold uppercase text-white drop-shadow-2xl"
                        ref={luceTitle}>
                        Luce
                    </div>
                    <div
                        className="opacity-0 text-2xl text-left text-white drop-shadow-lg"
                        ref={luceSubtitle}>
                        Gli Impressionisti sostenevano che per far emergere
                        tutte le potenzialità dei colori, essi dovevano essere
                        illuminati dalla luce del giorno, poiché solo questa è
                        in grado di restituire loro un senso di verità e
                        brillantezza. Per questi artisti, la realtà è in
                        costante evoluzione e non è uno stato definito, ma un
                        continuo cambiamento. Pertanto, cercavano di
                        rappresentare la mobilità delle cose nei loro dipinti.
                        Un esempio è il tema dell'acqua, che non si ferma mai,
                        permettendo agli artisti di esplorare le infinite
                        possibili sfumature di colore. Ciò avviene attraverso la
                        sovrapposizione di colori puri che, nonostante siano
                        distinti sulla tela, si fondono nella retina
                        dell'occhio, dando luogo a colori omogenei di intensità
                        e brillantezza maggiori rispetto a quelli preparati
                    </div>
                </div>
            </div>
        </div>
    );
}
