import styled from 'styled-components';
import image from '../images/illustration-stay-productive.png';
import arrow from '../images/icon-arrow.svg';

const Content = () => {
    const Content = styled.div`
        background-color: hsl(218, 28%, 13%);
        padding: 6rem 2rem;

        @media only screen and (max-width: 520px) {
            margin: 0;
            padding: 0;
        }
    `;

    const ContentContainer = styled.div`
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;

        width: 90%;
        margin: 0 auto;

        img {
            width: 50%;
        }

        @media only screen and (max-width: 912px) {
            flex-direction: column;

            > img {
                width: 90%;
                margin-bottom: 4rem;
            }
        }
    `;

    const TextContainer = styled.div`
        padding-left: 3rem;
        width: 50%;

        h2 {
            width: 70%;
            font-family: 'Raleway', sans-serif;
            font-size: 2.5rem;
            margin-bottom: 1.4rem;
        }

        p {
            margin-bottom: 1.4rem;
        }

        a {
            color: hsl(176, 68%, 64%);
            text-decoration: none;
            padding-bottom: 0.3rem;
            margin-right: 0.6rem;
        }

        span img {
            width: 1rem;
        }

        @media only screen and (max-width: 1229px) {
            h2 {
                font-size: 1.5rem;
                width: 80%;
            }
        }

        @media only screen and (max-width: 912px) {
            width: 90%;
            padding: 0;
            h2 {
                width: 100%;
                margin-bottom: 1.8rem;
            }
            p {
                width: 100%;
            }
        }
    `;

    const LinkContainer = styled.div`
        display: flex;
        align-items: center;

        width: 154px;
        border-bottom: 1px solid hsl(176, 68%, 64%);

        &:hover {
            border-bottom: 1px solid #ffffff;
        }
        a:hover {
            color: #ffffff;
        }
    `;

    return (
        <Content className='container'>
            <ContentContainer>
                <img src={image} alt='illustration' />
                <TextContainer>
                    <h2>Stay productive, wherever you are</h2>
                    <p>
                        Never let location be an issue when accessing your
                        files. Fylo has you covered for all of your file storage
                        needs.
                    </p>
                    <p>
                        Securely share files and folders with friends, family
                        and collegues for live collaboration. No email
                        attachments required.
                    </p>
                    <LinkContainer>
                        <a href='#'> See how Fylo works</a>
                        <span>
                            <img src={arrow} alt='arrow icon' />
                        </span>
                    </LinkContainer>
                </TextContainer>
            </ContentContainer>
        </Content>
    );
};

export default Content;
