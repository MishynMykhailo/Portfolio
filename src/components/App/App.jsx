// import s from "./App.module.css";
import About from "../About/About";
// import Career from "../Career/Career";
import Container from "../Container/Container";
import Home from "../Home/Home";
import NavBar from "../NavBar/NavBar";
import Portfolio from "../Portfolio/Portfolio";
import SectionContainer from "../SectionContainer/SectionContainer";
import Skills from "../Skills/Skills";

function App() {
  return (
    <>
      <Container>
        <NavBar />
        <Home />
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
