import anime from "animejs";
import { useEffect, useRef } from "react";

export default function ColoreLocale({ start }) {
    useEffect(() => {
        if (start) {
            startAnimations();
        } else {
            removeStyle(coloreShadow, coloreTitle, coloreSubtitle);
        }
    }, [start]);

    const coloreShadow = useRef();
    const coloreTitle = useRef();
    const coloreSubtitle = useRef();

    function removeStyle(...args) {
        for (const element of args)
            element.current.style.removeProperty("opacity");
    }

    function startAnimations() {
        anime({
            targets: coloreShadow.current,
            opacity: [0, 1],
            easing: "easeInOutQuad",
            duration: 1000,
        });

        anime({
            targets: coloreTitle.current,
            opacity: [0, 1],
            translateX: [-20, 0],
            easing: "easeInOutQuad",
            duration: 1000,
        });

        anime({
            targets: coloreSubtitle.current,
            opacity: [0, 1],
            translateY: [20, 0],
            easing: "easeInOutQuad",
            duration: 1000,
            delay: 300,
        });
    }

    return (
        <div className="h-screen w-full relative grid place-content-center overflow-hidden custom-image background-colore">
            <div
                className={`absolute w-full h-full top-0 left-0 ${
                    start ? "" : "hidden"
                }`}>
                <div
                    className="opacity-0 absolute right-0 top-0 bg-gradient-to-l from-[#00000090] to-[#00000000] h-full w-2/3"
                    ref={coloreShadow}></div>

                <div className="absolute right-0 top-0 h-full w-1/2 grid gap-2 place-content-center pr-8">
                    <div
                        className="opacity-0 text-5xl font-bold uppercase text-white text-right drop-shadow-xl"
                        ref={coloreTitle}>
                        Colore locale
                    </div>
                    <div
                        className="opacity-0 text-2xl text-right text-white drop-shadow-lg"
                        ref={coloreSubtitle}>
                        I pittori impressionisti comprendono come non sia più
                        possibile imprigionare gli spazi della rappresentazione
                        pittorica nella visione del reticolo prospettico.
                        L'impressione che uno stimolo esterno suscita
                        nell'artista è ciò che conta di più in ogni
                        rappresentazione. Egli sintetizza, cercando di eliminare
                        ciò che non è necessario per cogliere la sostanza delle
                        cose e delle situazioni. Utilizzano il colore come
                        elemento principale del loro movimento, tendendo ad
                        abolire i contrasti chiaroscurali e a fondere il colore
                        locale in accostamenti di colori puri. Arriveranno a
                        teorizzare come il colore locale non esiste in quanto
                        ogni colore esiste solo in relazione agli altri colori
                        che ha vicino e intorno
                    </div>
                </div>
            </div>
        </div>
    );
}
