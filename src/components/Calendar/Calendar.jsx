import classes from "./Calendar.module.css";
import ArrowLeft from "../../media/icons/fi-rr-angle-left.svg";
import ArrowRight from "../../media/icons/fi-rr-angle-right.svg";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import YearsServices from "../../API/yearsService";
import CardsServices from "../../API/cardsService";

const Calendar = (props) => {
    const navigate = useNavigate()
    const [page, setPage] = useState(1);
    const [cards, setCards] = useState([]);
    const [years, setYears] = useState([1941]);
    const [seenCardIds, setSeenCardIds] = useState(new Set());

    useEffect(() => {
        let years = YearsServices.getAll();
        years
            .then((result) => {
                const datesArray = result;
                setYears(datesArray);
            })
            .catch((error) => {
                console.error(error);
            });
    }, []);

    useEffect(() => {
        let cardsFetch = CardsServices.getAll();
        cardsFetch
            .then((result) => {
                setCards(result);
            })
            .catch((error) => {
                console.error(error);
            });
    }, []);

    return (
        <div className={classes.CalendarBlock}>
            {
                props.value !== 0
                ? (navigate("/info/" + props.value))
                : ""
            }
            <div className={classes.CalendarLabelBlock}>
                <h1>{years[page - 1].year}</h1>
                <div className={classes.BtnsPaginations}>
                    <button className={classes.BtnsPagination} onClick={() => {
                        if (page > 1) {
                            setPage(page - 1);
                            setSeenCardIds(new Set()); // Reset seen card IDs when changing the page
                        }
                    }}>
                        <img src={ArrowLeft} alt="ArrowLeft" />
                    </button>
                    <button className={classes.BtnsPagination} onClick={() => {
                        if (page < years.length) {
                            setPage(page + 1);
                            setSeenCardIds(new Set()); // Reset seen card IDs when changing the page
                        }
                    }}>
                        <img src={ArrowRight} alt="ArrowRight" />
                    </button>
                </div>
            </div>
            <div className={classes.GridBoxBlock}>
                {cards
                    .filter((card) => card.year === years[page - 1].year)
                    .map((card) => {
                        if (!seenCardIds.has(card.id)) {
                            seenCardIds.add(card.id);
                            return (
                                <Link to={"/info/" + card.id} key={card.id}>
                                    <div className={classes.CardBlock}>
                                        <h3 className={classes.DateLabel}>{card.date}</h3>
                                        <p className={classes.NameLabel}>{card.name}</p>
                                        <h4 className={classes.LabelBlock}>Iнфармацыя</h4>
                                        <p className={classes.DescriptLabel}>{card.text.slice(0, 122)}...</p>
                                    </div>
                                </Link>
                            );
                        } else {
                            return null;
                        }
                    })
                }
            </div>
        </div>
    );
}

export default Calendar;
