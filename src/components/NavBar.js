import { Container, Nav, Navbar } from 'react-bootstrap';
import Headroom from 'react-headroom';
import { Flip } from 'react-reveal';
const FIxedNavBar = () => {
    const scrollToSection = (e) => {
        document.querySelector(e.target.dataset.section).scrollIntoView({
            behavior: "smooth",
        });
    };
    return (
        <Headroom style={{ position: 'fixed', zIndex: 999 }}>
            <Navbar sticky="top" expand="lg" className="bg-body-tertiary">
                <Container>
                    <Flip top><Navbar.Brand onClick={scrollToSection} role="button" data-section='.Header'>ثانوية عزالدين بن الوزير</Navbar.Brand></Flip>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <div onClick={scrollToSection} role="button" className='nav-link' data-section='.Header'>الرئيسية</div>
                            <div onClick={scrollToSection} role="button" className='nav-link' data-section='.OurAchievements'>انجازاتنا</div>
                            <div onClick={scrollToSection} role="button" className='nav-link' data-section='.OurPlace'>موقعنا</div>
                            <div onClick={scrollToSection} role="button" className='nav-link' data-section='.ConnectWithUs'>تواصل معنا</div>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </Headroom>
    );
};
export default FIxedNavBar;