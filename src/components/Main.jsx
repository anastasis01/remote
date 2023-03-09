import React from "react";
import imageHero from "../assets/images/image-hero-desktop.png";
import databiz from "../assets/images/client-databiz.svg";
import audiophile from "../assets/images/client-audiophile.svg";
import meet from "../assets/images/client-meet.svg";
import maker from "../assets/images/client-maker.svg";
import "./Main.css";

const Main=()=>{
    return (
        <div className="website-main">
            <div className="website-main__content">
                <h1>Make remote work</h1>
                <p>Get your team in sync, no matter your location. Streamline processes, create team rituals, and watch productivity soar.</p>
                <button>Learn more</button>
                <div className="website-main__content-brands">
                     <img src={databiz} alt="databiz"/>
                     <img src={audiophile} alt="audiophile" />
                     <img src={meet} alt="meet" />
                     <img src={maker} alt="maker"/>
                </div>
            </div>
            <div className="website-main__image">
                <img src={imageHero} alt="hero" />
            </div>
        </div>
    );
}
export default Main;