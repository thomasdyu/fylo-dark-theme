import Nav from './components/Nav';
import Header from './components/Header';
import Cards from './components/Cards';
import Footer from './components/Footer';
import Content from './components/Content';
import Testimonials from './components/Testimonials';
import CtaWrapper from './components/CtaWrapper';
import './App.css';

function App() {
    return (
        <div>
            <Nav />
            <Header />
            <Cards />
            <Content />
            <Testimonials />
            <CtaWrapper />
            <Footer />
        </div>
    );
}

export default App;
