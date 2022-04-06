import "./Card.css"

function Card(props) {
    const classes = 'card ' + props.className;
    // Because this is a custom class, you have to tell it that classes can be passed through to the "Card" component

    return <div className={classes}>{props.children}</div>
}

export default Card;