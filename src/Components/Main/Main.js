import "./Main.css";

import Catalog from "./Catalog/Catalog";
import "./Catalog/Catalog.css";

export default function Main(props) {
    return (
        <main className={props.darkMode ? "dark-mode" : ""}>
            <Catalog />
        </main>
    )
}