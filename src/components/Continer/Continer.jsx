import classes from "./Continer.module.css"

const Continer = (props) => {
    return (
        <div className={classes.Continer}>
            {props.children}
        </div>
    )
}

export default Continer