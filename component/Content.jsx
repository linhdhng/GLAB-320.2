import './Styles.css'
export default function Content(props) {
    return (
    <div className="Box">
    <p className="Box_content" style={{color: props.color}}>{props.text}</p>
    </div>
)}
  