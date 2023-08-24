import './Button.css'
export default function Button(props) {
    return (
        <button className="donut-btn">
            {props.text}
        </button>
    )
}