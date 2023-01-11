import TrackVisibility from 'react-on-screen';
import Typewriter from 'typewriter-effect';
import { Navbar, Container } from "react-bootstrap";

export const MainComponent = () => {
    return (
        <div>
            <Navbar expand="md">
                <Container>
                    <Navbar.Brand href="/">
                        <span className="myLogo">kajc.dev</span>
                    </Navbar.Brand>
                </Container>
            </Navbar>

            <section className="banner" id="home">
                <Container>
                    <TrackVisibility>
                        {({ isVisible }) =>
                            <div className={isVisible ? "animated-typing" : ""}>
                                <h1>{`Hello there! `} <span className="animation" >
                                    <Typewriter
                                        options={{
                                            strings: ['This page is under construction!', 'Check back soon!!'],
                                            autoStart: true,
                                            loop: true,
                                        }}
                                    />
                                </span>
                                </h1>
                            </div>}
                    </TrackVisibility>
                </Container>
            </section>
        </div>
    )
}