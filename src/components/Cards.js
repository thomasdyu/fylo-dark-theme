import styled from 'styled-components';
import Card from './Card';
import CardData from './CardData';

const SectionCards = styled.section`
    max-width: 1200px;
    margin: 0 auto;
`;

const CardContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;

    width: 80%;
    margin: 0 auto;
    padding-top: 4rem;
`;

const Cards = () => {
    const createCard = (card) => {
        return (
            <Card
                key={card.id}
                img={card.img}
                heading={card.heading}
                text={card.text}
            />
        );
    };
    return (
        <SectionCards>
            <CardContainer>{CardData.map(createCard)}</CardContainer>
        </SectionCards>
    );
};

export default Cards;
