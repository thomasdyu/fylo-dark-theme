import styled from 'styled-components';

const Cta = () => {
    const CtaContainer = styled.div`
        width: 45rem;
        margin: 0 auto;
        padding: 3rem 4rem;
        background-color: rgb(28, 36, 49);
        text-align: center;
        border-radius: 3px;
        box-shadow: 3px 3px 5px 3px rgba(0, 0, 0, 0.2);
        position: absolute;
        top: -160px;
        z-index: 10;

        h2 {
            margin-bottom: 1.5rem;
            font-family: 'Raleway', sans-serif;
            font-size: 1.8rem;

            @media only screen and (max-width: 912px) {
                font-size: 1.3rem;
            }
        }
        p {
            margin-bottom: 1.5rem;
        }

        @media only screen and (max-width: 912px) {
            width: 95%;
            margin: 0 1rem;
            padding: 3rem 1rem;

            p {
                width: 60%;
                margin: 0 auto 2rem auto;
            }
        }

        @media only screen and (max-width: 550px) {
            p {
                width: 90%;
            }
        } ;
    `;

    const CtaInput = styled.input`
        margin-right: 1.5rem;
        padding-left: 2rem;
        height: 50px;
        width: 60%;
        border-radius: 25px;
        border: none;

        &:focus {
            outline: none;
        }

        &::placeholder {
            opacity: 0.5;
        }

        @media only screen and (max-width: 912px) {
            display: inline-block;
            width: 300px;
            margin: 0;
            padding-left: 2rem;
        }
    `;

    const CtaButton = styled.button`
        height: 50px;
        width: 30%;
        border-radius: 25px;
        border: none;
        background: linear-gradient(
            90deg,
            hsl(176, 68%, 64%),
            hsl(198, 60%, 50%)
        );
        color: #ffffff;
        font-weight: 700;

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

        @media only screen and (max-width: 912px) {
            display: block;
            margin: 1.5rem auto;
            width: 300px;
            font-size: 1rem;
        }
    `;

    return (
        <CtaContainer>
            <h2>Get early access today</h2>
            <p>
                It only takes a minute to sign up and our free starter tier is
                extreamly generous. If you have any questions, our support team
                would be happy to help you.
            </p>
            <div>
                <CtaInput type='text' placeholder='email@exampl.com' />
                <CtaButton>Get Started For Free</CtaButton>
            </div>
        </CtaContainer>
    );
};

export default Cta;
