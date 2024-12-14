import "../index.css"
export default function Jokes(props) {
    return (
        <>
           <h3>{ props.setup}</h3>
           <h3>{props.punch}</h3>
        </>
    )
}