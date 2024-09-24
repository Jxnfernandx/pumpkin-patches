import Card from "./Card.jsx";

export function CardList({ patches }) {
    const items = patches.map(item => (
        <Card key={item.id} {...item} />
    ));

    return (
        <div className="cardList">
            {items}
        </div>
    );
}

export default CardList;