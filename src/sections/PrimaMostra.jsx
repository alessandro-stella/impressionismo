import anime from "animejs";
import { useEffect } from "react";
export default function PrimaMostra({ start }) {
    useEffect(() => {
        if (start) {
            startAnimations();
        }
    }, [start]);

    const indexes = [
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
    ];

    function generateNumber(min, max) {
        return Math.random() * (max - min) + min;
    }

    function startAnimations() {
        anime({
            targets: ".ondaShadow",
            opacity: [0, 1],
            easing: "easeInOutQuad",
            duration: 1000,
        });

        anime({
            targets: ".ondaTitle",
            opacity: [0, 1],
            translateX: [-20, 0],
            easing: "easeInOutQuad",
            duration: 1000,
        });

        anime({
            targets: ".ondaSubtitle",
            opacity: [0, 1],
            translateY: [20, 0],
            easing: "easeInOutQuad",
            duration: 1000,
            delay: 300,
        });

        for (let i = 1; i <= 20; i++)
            anime({
                targets: `.primaMostra${i}`,
                opacity: [0, 1],
                translateX: [
                    generateNumber(-30, 30),
                    generateNumber(-(i * 150), i * 150),
                ],
                translateY: [
                    generateNumber(-30, 30),
                    generateNumber(-(i * 100), i * 100),
                ],
                easing: "easeInOutQuad",
                duration: 1000,
                delay: i * 1000,
            });
    }

    return (
        <div className="h-screen w-full relative grid place-content-center overflow-hidden custom-image bg-[#222222]">
            <div
                className={`absolute w-full h-full top-0 left-0 flex flex-col items-center justify-center ${
                    start ? "" : "hidden"
                }`}>
                {indexes.map((index) => (
                    <img
                        src={import(
                            `../assets/primaMostra/primaMostra${index}.jpg`
                        )}
                        className={`primaMostra${index} shadow-xl`}
                        style={{ width: "30%", position: "absolute" }}
                    />
                ))}

                <div className="text-5xl font-bold uppercase text-white drop-shadow-xl ondaTitle">
                    Prima mostra
                </div>
                <div className="ondaSubtitle text-2xl w-[40%] text-center text-white drop-shadow-lg">
                    La data precisa di inizio del movimento impressionista si
                    può considerare il 15 aprile 1874, quando alcuni artisti
                    giovani, tra cui Claude Monet, Edgar Degas, Paul Cézanne,
                    Camille Pissarro, Pierre-Auguste Renoir, Alfred Sisley e
                    Berthe Morisot, le cui opere erano state rifiutate dalle
                    principali esposizioni ufficiali, decisero di organizzare
                    una mostra alternativa dei loro lavori, presentandosi al
                    pubblico come "Società Anonima degli artisti, pittori,
                    scultori, incisori ecc."
                </div>
            </div>
        </div>
    );
}
