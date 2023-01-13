import { useState } from "react";

import Impressionismo from "./sections/Impressionismo";
import VilleLumiere from "./sections/VilleLumiere";
import CaffeGuerbois from "./sections/CaffeGuerbois";
import ColoreLocale from "./sections/ColoreLocale";
import Luce from "./sections/Luce";
import NuoveFrontiere from "./sections/NuoveFrontiere";
import StampeGiapponesi from "./sections/StampeGiapponesi";
import PrimaMostra from "./sections/PrimaMostra";
import { useEffect } from "react";
import anime from "animejs";
import MoveButton from "./MoveButton";

function App() {
    const [currentIndex, setCurrentIndex] = useState(0);

    function handleChangeIndex(value) {
        if (currentIndex + value >= 0 && currentIndex + value <= 7)
            setCurrentIndex((currentIndex) => currentIndex + value);
    }

    useEffect(() => {
        if (currentIndex === 0) {
            anime({
                targets: ".fadeUp",
                opacity: 0,
                easing: "easeInOutQuad",
                duration: 500,
            });
        } else {
            anime({
                targets: ".fadeUp",
                opacity: 1,
                easing: "easeInOutQuad",
                duration: 500,
            });
        }

        if (currentIndex === 7) {
            anime({
                targets: ".fadeDown",
                opacity: 0,
                easing: "easeInOutQuad",
                duration: 500,
            });
        } else {
            anime({
                targets: ".fadeDown",
                opacity: 1,
                easing: "easeInOutQuad",
                duration: 500,
            });
        }

        anime({
            targets: ".anime-target",
            top: `${-100 * currentIndex}vh`,
            easing: "easeInOutQuad",
            duration: 1000,
        });
    }, [currentIndex]);

    return (
        <div className="bg-red-500 overflow-hidden mainContainer relative">
            <MoveButton
                position={"top"}
                value={-1}
                change={handleChangeIndex}
            />

            <div className="absolute w-full anime-target">
                <Impressionismo />
                <VilleLumiere />
                <CaffeGuerbois />
                <ColoreLocale />
                <Luce />
                <NuoveFrontiere />
                <StampeGiapponesi />
                <PrimaMostra />
            </div>

            <MoveButton
                position={"bottom"}
                value={+1}
                change={handleChangeIndex}
            />
        </div>
    );
}

export default App;
