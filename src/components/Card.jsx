import Button from "./Button.jsx";

export function Card ({ name, season, imgURL, ticketURL }) {
    return (
        <div className="card">
            <img className="card-img" src={imgURL}/>
            <h3 className="card-title">{name}</h3>
            <p>{season}</p>
            <Button ticketURL={ticketURL}/>
        </div>
    )
};

export default Card;