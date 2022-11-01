// import s from "./App.module.css";
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
      </Container>
    </>
  );
}

export default App;
