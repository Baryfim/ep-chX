// Styles
import classes from "./Header.module.css"
// Images
import Refrash from "../../media/icons/refrash.svg"

const Header = (props) => {
    const generateRandomNumber = () => {
        return Math.floor(Math.random()  
                * (29 - 1 + 1)) + 1; 
    }

    return (
        <header className={classes.HeaderBlock}>
            <div className={classes.LogotypeContent}>
                <h1>EpochX</h1>
            </div>
            <div className={classes.BlockBtn__RandomRenerate}>
                <button className={classes.BtnGenerate} onClick={() => props.callback(generateRandomNumber())}>
                    <img src={Refrash} alt="GenerateDate" />
                </button>
            </div>
        </header>
    )
}


export default Header;