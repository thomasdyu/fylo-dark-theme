import styled from 'styled-components';
import Cta from './Cta';

const CtaWrapper = () => {
    const CtaContainer = styled.div`
        width: 100%;
    `;

    const Wrapper = styled.div`
        display: flex;
        justify-content: center;

        width: 100%;
        margin: 0 auto;
        position: relative;

        @media only screen and (max-width: 912px) {
        }
    `;

    return (
        <CtaContainer>
            <Wrapper className='container'>
                <Cta />
            </Wrapper>
        </CtaContainer>
    );
};

export default CtaWrapper;
