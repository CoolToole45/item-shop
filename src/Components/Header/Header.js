import "./Header.css";

import Coin from "../../Assets/icon_1.png"
import Sans01 from "../../Assets/15Sans.mp3";
import Sans02 from "../../Assets/15Sans.ogg";

import Navigation from "./Navigation/Navigation";
import "./Navigation/Navigation.css";

export default function Header(props) {
    return (
        <header className={props.darkMode ? "dark-mode" : ""}>
            <div className="header-title">
                <img 
                    src={Coin}
                    alt="coin"
                    className="header-coin"
                />
                <h1>Welcome To The Item Shop ©</h1>
                <img 
                    src={Coin}
                    alt="coin"
                    className="header-coin"
                />
            </div>
            <audio loop autoPlay>
                <source src={Sans01} type="audio/mpeg"/>
                <source src={Sans02} type="audio/ogg"/>
            </audio>
            <Navigation />
        </header>
    )
}