// import s from "./App.module.css";
import About from "../About/About";
import Career from "../Career/Career";
import Container from "../Container/Container";
import Home from "../Home/Home";
import NavBar from "../NavBar/NavBar";
import Portfolio from "../Portfolio/Portfolio";
import Skills from "../Skills/Skills";

function App() {
  return (
    <>
      <Container>
        <NavBar />
        <Home />
        <Skills />
        <Portfolio />
        <About />
        {/* <Career /> */}
      </Container>
    </>
  );
}

export default App;
