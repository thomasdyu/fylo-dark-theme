import styled from 'styled-components';
import Testimonial from '../components/Testimonial';
import Data from '../components/TestimonialData';
import quote from '../images/bg-quotes.png';

const Testimonials = () => {
    const TestimonialsSection = styled.section`
        display: flex;
        justify-content: space-evenly;
        align-items: center;

        max-width: 1200px;
        margin: 0 auto;
        padding: 8rem 2rem;
        position: relative;
        z-index: 10;

        > img {
            position: absolute;
            top: 95px;
            left: 23px;
            z-index: -10;
        }

        @media only screen and (max-width: 912px) {
            flex-direction: column;

            width: 100%;
        } ;
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
            <img src={quote} alt='quote icon' />
            {Data.map(createTestimonials)}
        </TestimonialsSection>
    );
};

export default Testimonials;
