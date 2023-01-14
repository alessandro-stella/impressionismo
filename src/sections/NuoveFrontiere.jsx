import anime from "animejs";
import { useEffect, useRef } from "react";

export default function NuoveFrontiere({ start }) {
    useEffect(() => {
        if (start) {
            startAnimations();
        } else {
            removeStyle(frontiereShadow, frontiereTitle, frontiereSubtitle);
        }
    }, [start]);

    const frontiereShadow = useRef();
    const frontiereTitle = useRef();
    const frontiereSubtitle = useRef();

    function removeStyle(...args) {
        for (const element of args)
            element.current.style.removeProperty("opacity");
    }

    function startAnimations() {
        anime({
            targets: frontiereShadow.current,
            opacity: [0, 1],
            easing: "easeInOutQuad",
            duration: 1000,
        });

        anime({
            targets: frontiereTitle.current,
            opacity: [0, 1],
            translateY: [-20, 0],
            easing: "easeInOutQuad",
            duration: 1000,
        });

        anime({
            targets: frontiereSubtitle.current,
            opacity: [0, 1],
            translateY: [20, 0],
            easing: "easeInOutQuad",
            duration: 1000,
            delay: 300,
        });
    }

    return (
        <div className="h-screen w-full relative grid place-content-center overflow-hidden custom-image background-frontiere">
            <div
                className={`absolute w-full h-full top-0 left-0 flex flex-col items-center justify-center ${
                    start ? "" : "hidden"
                }`}>
                <div
                    className="opacity-0 absolute right-0 top-0 bg-[#00000030] h-full w-full"
                    ref={frontiereShadow}></div>

                <div
                    className="opacity-0 text-5xl font-bold uppercase text-white drop-shadow-xl"
                    ref={frontiereTitle}>
                    Nuove Frontiere
                </div>
                <div
                    className="opacity-0 text-2xl w-[40%] text-center text-white drop-shadow-lg"
                    ref={frontiereSubtitle}>
                    Il progresso scientifico e tecnologico ha avuto un ruolo
                    fondamentale nello sviluppo dell'impressionismo.
                    L'invenzione della fotografia e le prime ricerche sulla
                    cinematografia hanno costretto gli artisti a rivedere il
                    proprio ruolo nella rappresentazione della realtà. La
                    fotografia in particolare ha giocato un ruolo importante
                    nella maturazione dell'impressionismo, poiché gli
                    Impressionisti spesso utilizzavano materiali fotografici per
                    creare le loro opere. La loro pittura, non più obbligata a
                    riprodurre fedelmente la realtà, poteva quindi catturare
                    impressioni e stati d'animo che neanche il più perfetto
                    obiettivo fotografico avrebbe potuto percepire
                </div>
            </div>
        </div>
    );
}
