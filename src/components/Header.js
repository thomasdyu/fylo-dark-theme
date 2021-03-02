import styled from 'styled-components';
import Illustration from '../images/illustration-intro.png';

const Section = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    background: url('../images/bg-curvy-desktop.svg') no-repeat center bottom;
    background-color: hsl(217, 28%, 15%);
    text-align: center;
    margin: 0 auto;

    img {
        width: 70%;
    }
`;

const Heading = styled.h1`
    width: 70%;
    font-family: 'Raleway', sans-serif;
    font-size: 3rem;
    font-weight: 700;
    line-height: 1.6;
    margin: 3rem auto;

    @media only screen and (max-width: 912px) {
        font-size: 2.5rem;
    }

    @media only screen and (max-width: 520px) {
        font-size: 1.8rem;
        width: 85%;
    }
`;

const Para = styled.p`
    width: 45%;
    font-size: 1.2rem;
    line-height: 1.8;
    margin: 0 auto;

    @media only screen and (max-width: 912px) {
        font-size: 1rem;
        width: 80%;
    }

    @media only screen and (max-width: 520px) {
        width: 80%;
    }
`;

const Button = styled.button`
    padding: 1.2rem 2rem;
    color: #ffffff;
    background: linear-gradient(90deg, hsl(176, 68%, 64%), hsl(198, 60%, 50%));
    width: 18rem;
    margin: 2rem 0;
    font-size: 1rem;
    font-weight: 700;
    border: none;
    border-radius: 25px;
    cursor: pointer;

    &:hover {
        background: linear-gradient(
            90deg,
            hsl(176, 68%, 70%),
            hsl(198, 60%, 60%)
        );
    }
    &:focus {
        outline: none;
    }
`;

const Header = () => {
    return (
        <Section>
            <div className='container'>
                <img src={Illustration} alt='header illustration' />
                <Heading>
                    All your files in one secure location, accessible anywhere.
                </Heading>
                <Para>
                    Fylo stores all your most important fiels in one secure
                    location. Access them wherever you need, share and
                    collaborate with friends family, and co-workers.
                </Para>
                <Button>Get Started</Button>
            </div>
        </Section>
    );
};

export default Header;
