import { StyledCard } from "./styles/Card.styled"

interface CardProps {
    item: {
        title: string,
        body: string,
        image: string,
        id: number,

    },
    layout: React.FC
}

const Card: React.FC<CardProps> = ({ item }) => {
    const { id, title, body, image, } = item;
    return (
        <StyledCard layout={id % 2 == 0 ? 'row-reverse' : undefined}>
            <div>
                <h2>{title}</h2>
                <p>{body}</p>
            </div>
            <div>
                <img src={`./images/${image}`} alt="" />
            </div>
        </StyledCard>
    )
}

export default Card