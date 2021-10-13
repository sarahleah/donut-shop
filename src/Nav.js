import { Component } from "react";
import './Nav.css'

class Nav extends Component {
    render() {
       return (
            <nav>
            <div className="left-nav">
                <ul className="nav-ul">
                    <li><img src="https://img.icons8.com/ios-filled/50/000000/visible--v2.png" alt=""/></li>
                    <li>Market</li>
                    <li>Features</li>
                    <li>Community</li>
                </ul>
            </div>
            <div className="right-nav">
                <ul className="nav-ul">
                    <li><img src="https://img.icons8.com/external-kiranshastry-lineal-color-kiranshastry/64/000000/external-magnifying-glass-interface-kiranshastry-lineal-color-kiranshastry.png" className="mag-glass" alt="search icon"/></li>
                    <li>Sign up</li>
                </ul>
            </div>
        </nav>
        )
    }
}

export default Nav

/* <a href="https://icons8.com/icon/qjWZ5EzRYcb8/magnifying-glass">Magnifying Glass icon by Icons8</a>
<a href="https://icons8.com/icon/N3ft0cEVp9ui/eye">Eye icon by Icons8</a> */