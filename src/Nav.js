import { Component } from "react";
import './Nav.css'

class Nav extends Component {
    render() {
       return (
            <nav>
            <div className="left-nav">
                <ul className="nav-ul">
                    <li><img src="https://img.icons8.com/external-vitaliy-gorbachev-lineal-color-vitaly-gorbachev/60/000000/external-donut-fast-food-vitaliy-gorbachev-lineal-color-vitaly-gorbachev.png" alt="donut-logo"/></li>
                    <li>Made</li>
                    <li>By</li>
                    <li>Sarah</li>
                </ul>
            </div>
            <div className="right-nav">
                <ul className="nav-ul">
                    <li><img src="https://img.icons8.com/ios/50/000000/search--v1.png" className="mag-glass" alt="search icon"/></li>
                    <li>In React</li>
                </ul>
            </div>
        </nav>
        )
    }
}

export default Nav

/* <a href="https://icons8.com/icon/132/search">Search icon by Icons8</a> */
/* <a href="https://icons8.com/icon/8d4KbuUJX8pi/donut">Donut icon by Icons8</a>*/