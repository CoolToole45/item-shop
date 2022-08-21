import "./Header.css";

import Coin from "../../Img/icon_1.png"

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
            <Navigation />
        </header>
    )
}