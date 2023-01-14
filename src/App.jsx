import { useState } from "react";

import anime from "animejs";
import { useEffect } from "react";
import MoveButton from "./MoveButton";
import CaffeGuerbois from "./sections/CaffeGuerbois";
import ColoreLocale from "./sections/ColoreLocale";
import Impressionismo from "./sections/Impressionismo";
import Luce from "./sections/Luce";
import NuoveFrontiere from "./sections/NuoveFrontiere";
import PrimaMostra from "./sections/PrimaMostra";
import StampeGiapponesi from "./sections/StampeGiapponesi";
import VilleLumiere from "./sections/VilleLumiere";

function App() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [startAnimation, setStartAnimation] = useState(0);

    useEffect(() => {
        console.log({ startAnimation });
    }, [startAnimation]);

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
            duration: 1500,
            complete: () => setStartAnimation(currentIndex),
        });
    }, [currentIndex]);

    return (
        <div className="overflow-hidden mainContainer relative select-none">
            <MoveButton
                position={"top"}
                value={-1}
                change={handleChangeIndex}
            />

            <div className="absolute w-full anime-target">
                <Impressionismo start={startAnimation == 0} />
                <VilleLumiere start={startAnimation == 1} />
                <CaffeGuerbois start={startAnimation == 2} />
                <ColoreLocale start={startAnimation == 3} />
                <Luce start={startAnimation == 4} />
                <NuoveFrontiere start={startAnimation == 5} />
                <StampeGiapponesi start={startAnimation == 6} />
                <PrimaMostra start={startAnimation} />
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
