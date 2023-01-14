import anime from "animejs";
import { useState } from "react";
import { useEffect, useRef } from "react";

export default function PrimaMostra({ start }) {
    useEffect(() => {
        if (start) {
            startAnimations();
        } else {
            removeStyle(mostraShadow, mostraTitle, mostraSubtitle);
        }
    }, [start]);

    const mostraShadow = useRef();
    const mostraTitle = useRef();
    const mostraSubtitle = useRef();

    function removeStyle(...args) {
        for (const element of args)
            element.current.style.removeProperty("opacity");
    }

    const indexes = [
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
    ];

    function generateNumber(min, max) {
        return Math.random() * (max - min) + min;
    }

    function startAnimations() {
        anime({
            targets: mostraShadow.current,
            opacity: [0, 1],
            easing: "easeInOutQuad",
            duration: 1000,
        });

        anime({
            targets: mostraTitle.current,
            opacity: [0, 1],
            translateX: [-20, 0],
            easing: "easeInOutQuad",
            duration: 1000,
        });

        anime({
            targets: mostraSubtitle.current,
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
                    generateNumber(-(i * 50), i * 50),
                ],
                translateY: [
                    generateNumber(-30, 30),
                    generateNumber(-(i * 50), i * 50),
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
                        key={index}
                        src={`/primaMostra${index}.jpg`}
                        className={`primaMostra${index} shadow-xl`}
                        style={{
                            width: "30%",
                            position: "absolute",
                            opacity: 0,
                        }}
                    />
                ))}

                <div
                    className="opacity-0 absolute right-0 top-0 bg-[#000000aa] h-full w-full"
                    ref={mostraShadow}></div>

                <div
                    className="opacity-0 text-5xl font-bold uppercase text-white drop-shadow-xl mb-4"
                    ref={mostraTitle}>
                    Prima mostra
                </div>

                <div
                    className="opacity-0 text-2xl w-[40%] text-center text-white drop-shadow-lg"
                    ref={mostraSubtitle}>
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
