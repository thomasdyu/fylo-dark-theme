import styled from 'styled-components';

import logo from '../images/logo.svg';
import location from '../images/icon-location.svg';
import phone from '../images/icon-phone.svg';
import email from '../images/icon-email.svg';
import facebook from '../images/facebook-logo.svg';
import instagram from '../images/instagram.svg';
import twitter from '../images/twitter.svg';

const Footer = () => {
    const Logo = styled.div`
        width: 100%;

        img {
            height: 2.4rem;
        }

        @media only screen and (max-width: 912px) {
            img {
                height: 3.5rem;
            }
        }
    `;

    const Wrapper = styled.div`
        display: flex;

        margin-top: 1.8rem;

        @media only screen and (max-width: 912px) {
            flex-direction: column;
            justify-content: flex-start;

            margin-top: 3rem;
        }
    `;

    const Location = styled.div`
        display: flex;
        align-items: flex-start;

        width: 30%;

        p {
            margin-left: 1rem;
        }

        @media only screen and (max-width: 912px) {
            width: 60%;
            margin-bottom: 2rem;
        }

        @media only screen and (max-width: 500px) {
            width: 100%;
        }
    `;

    const Contact = styled.div`
        display: flex;
        justify-content: center;

        width: 25%;
        margin: 0 auto;

        @media only screen and (max-width: 912px) {
            justify-content: flex-start;

            margin: 0 0 3rem 0;
            width: 100%;
        }
    `;

    const ContactWrapper = styled.div`
        display: flex;

        margin-bottom: 1.4rem;

        p {
            margin-left: 1rem;
        }
    `;

    const Menu = styled.div`
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        align-content: space-around;

        width: 25%;
        height: 80px;

        a {
            text-decoration: none;
            color: #ffffff;
            text-transform: capitalize;
        }

        @media only screen and (max-width: 912px) {
            align-content: flex-start;

            height: auto;
            width: 100%;
            margin-bottom: 4rem;

            a {
                margin-bottom: 1rem;

                &:nth-child(4) {
                    margin-bottom: 2rem;
                }
            }
        }
    `;

    const Social = styled.div`
        width: 15%;
        text-align: right;

        img {
            width: 1.4rem;
            margin: 0 0.5rem;
            cursor: pointer;
            transition: 0.3s ease;
        }

        img:hover {
            transform: scale(1.2);
        }

        @media only screen and (max-width: 912px) {
            width: 100%;
            text-align: center;
        }
    `;

    return (
        <footer>
            <div className='container'>
                <Logo>
                    <a href='#'>
                        <img src={logo} alt='logo' />
                    </a>
                </Logo>
                <Wrapper>
                    <Location>
                        <img src={location} alt='location icon' />

                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua
                        </p>
                    </Location>
                    <Contact>
                        <div>
                            <ContactWrapper>
                                <img src={phone} alt='phone icon' />
                                <p>+1-543-123-4567</p>
                            </ContactWrapper>

                            <ContactWrapper>
                                <img src={email} alt='email icon' />
                                <p>example@fylo.com</p>
                            </ContactWrapper>
                        </div>
                    </Contact>
                    <Menu>
                        <a href='#'>about us</a>
                        <a href='#'>jobs</a>
                        <a href='#'>press</a>
                        <a href='#'>blog</a>
                        <a href='#'>contact us</a>
                        <a href='#'>terms</a>
                        <a href='#'>privacy</a>
                    </Menu>
                    <Social>
                        <img src={facebook} alt='facebook icon' />
                        <img src={twitter} alt='twitter icon' />
                        <img src={instagram} alt='instagram icon' />
                    </Social>
                </Wrapper>
            </div>
        </footer>
    );
};

export default Footer;
