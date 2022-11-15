// import s from "./App.module.css";
import About from "../About/About";
import Button from "../Button/Button";
// import Career from "../Career/Career";
import Container from "../Container/Container";
import Home from "../Home/Home";
import NavBar from "../NavBar/NavBar";
import ParticleBackground from "../ParticleBackground/ParticleBackground";

import Portfolio from "../Portfolio/Portfolio";
import SectionContainer from "../SectionContainer/SectionContainer";
import Skills from "../Skills/Skills";

function App() {
  return (
    <>
      <ParticleBackground />
      <Container>
        <NavBar />
        <SectionContainer>
          <Home />
        </SectionContainer>
        <SectionContainer>
          <Button />
        </SectionContainer>
        <SectionContainer>
          <Skills />
        </SectionContainer>
        <SectionContainer>
          <Portfolio />
        </SectionContainer>
        <SectionContainer>
          <About />
        </SectionContainer>
        {/* <Career /> */}
      </Container>
    </>
  );
}

export default App;
