import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    width: 26rem;
    height: 20rem;
    padding: 2rem;
    text-align: center;
`;

const Img = styled.img`
    margin-bottom: 1.6rem;
`;

const Heading = styled.h3`
    font-family: 'Raleway', sans-serif;
    font-size: 1.4rem;
    margin-bottom: 0.8rem;
`;

const Card = (props) => {
    return (
        <Container>
            <Img src={props.img} alt='profile image' />
            <Heading>{props.heading}</Heading>
            <p>{props.text}</p>
        </Container>
    );
};

export default Card;
