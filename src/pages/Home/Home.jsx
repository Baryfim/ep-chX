import { useState } from "react"
import Calendar from "../../components/Calendar/Calendar"
import Continer from "../../components/Continer/Continer"
import Header from "../../components/Header/Header"

const Home = () => {
    const [randomNumber, setRandomNumber] = useState(0)

    return (
        <Continer>
            <Header callback={setRandomNumber} />
            <Calendar value={randomNumber} />
        </Continer>
    )
}

export default Home