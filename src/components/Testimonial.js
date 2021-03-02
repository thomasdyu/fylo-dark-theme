import styled from 'styled-components';

const Testimonial = (props) => {
    const Container = styled.div`
        max-width: 350px;
        background-color: hsl(219, 30%, 18%);
        padding: 2rem;
        border-radius: 3px;
        margin: 0 1rem;

        p {
            font-size: 0.8rem;
            margin-bottom: 1rem;
        }

        @media only screen and (max-width: 912px) {
            margin: 1rem 0;
            max-width: 400px;
        }
    `;

    const ProfileContainer = styled.div`
        display: flex;
        justify-content: flex-start;
        align-items: center;

        img {
            border-radius: 50%;
            width: 30px;
            height: 30px;
            margin-right: 1rem;
        }
    `;

    return (
        <Container>
            <p>{props.testimony}</p>
            <ProfileContainer>
                <img src={props.profile} alt='profile image' />
                <div>
                    <h4>{props.name}</h4>
                    <small>{props.title}</small>
                </div>
            </ProfileContainer>
        </Container>
    );
};

export default Testimonial;
