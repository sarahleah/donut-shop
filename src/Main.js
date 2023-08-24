import { Component } from "react";
import Button from './Button'
import './Main.css'

class Main extends Component {
    render() {
        return (
            <header>
                <div>
                    <img src="https://doodleipsum.com/700/outline?i=a28bcf0176524d4f74e60f83ece7b5d7" alt="donut truck" />
                </div>
                <div className="text">
                    <h1>Your Donut Dreams</h1>
                    <h2>Come True</h2>
                    <Button text="Gimme Donuts"/>
                </div>
            </header>
        )
    }
}

export default Main