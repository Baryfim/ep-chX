import classes from "./Info.module.css";
import { useEffect, useState } from "react";
import CardsServices from "../../API/cardsService";
import Continer from "../../components/Continer/Continer";
import { Link, useNavigate } from "react-router-dom";

const Info = () => {
    const navigate = useNavigate()
    const [cards, setCards] = useState([]);
    const HrefItems = window.location.href.split("/");
    const id = HrefItems[HrefItems.length - 1];

    useEffect(() => {
        let cardsFetch = CardsServices.getAll();
        cardsFetch
            .then(result => {
                const cardsArray = result;
                setCards(cardsArray);
            });
    }, []);

    return (
        <Continer>
            <h1 className={classes.InfoBlockTitle}>
                Каляндар вайны
            </h1>
            {cards.map((card) => (
                String(card.id) === id ? (
                    <div className={classes.InfoBlocks} key={card.id}>
                        <div className={classes.InfoTextBlock}>
                            <h1 className={classes.DateLabel}>{card.date}.{card.year}</h1>
                            <h2 className={classes.NameBlockLabel}>{card.name}</h2>
                            <p className={classes.InfoText__data}>
                                {card.text}
                            </p>
                            <div className={classes.BtnsBlocks}>
                                <button className={classes.MainBtn} onClick={() => navigate("/")}>
                                    Галоўная
                                </button>
                                <Link to={card.Link} className={classes.LinkBlock}>
                                    Больш інфармацыі
                                </Link>
                            </div>
                        </div>
                        <div className={classes.InfoImagesBlock}>
                            <div className={classes.LeftImages}>
                                {card.leftImages.map((image, index) => (
                                    <img src={image} key={index} width={256} height={200} alt={image} />
                                ))}
                            </div>
                            <div className={classes.RightImages}>
                                {card.rightImages.map((image, index) => (
                                    <img src={image} key={index} width={256} alt={image} />
                                ))}
                            </div>
                        </div>
                    </div>
                ) : null
            ))}
        </Continer>
    );
};

export default Info;
