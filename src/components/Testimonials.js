import styled from 'styled-components';
import Testimonial from '../components/Testimonial';
import Data from '../components/TestimonialData';
import quote from '../images/bg-quotes.png';

const Testimonials = () => {
    const TestimonialsSection = styled.section`
        max-width: 1200px;
        margin: 0 auto 12rem auto;
        padding: 8rem 2rem;
        z-index: 10;
    `;

    const TestimonialContainer = styled.div`
        display: flex;
        justify-content: space-evenly;
        align-items: center;

        position: relative;

        @media only screen and (max-width: 912px) {
            flex-direction: column;

            width: fit-content;
            margin: 0 auto;
        }

        > img {
            position: absolute;
            top: -35px;
            left: 5px;
            z-index: -10;

            @media only screen and (max-width: 912px) {
                width: 40px;
                top: -10px;
                left: -10px;
            }
        }
    `;

    //Create Testimony for each entry
    const createTestimonials = (testimonial) => {
        return (
            <Testimonial
                key={testimonial.id}
                testimony={testimonial.testimony}
                name={testimonial.name}
                title={testimonial.title}
                profile={testimonial.profile}
            />
        );
    };

    return (
        <TestimonialsSection>
            <TestimonialContainer>
                <img src={quote} alt='quote icon' />
                {Data.map(createTestimonials)}
            </TestimonialContainer>
        </TestimonialsSection>
    );
};

export default Testimonials;
