// import s from "./App.module.css";
import { Suspense, lazy } from 'react';
import Loader from '../Loader/Loader';
import ParticleBackground from '../ParticleBackground/ParticleBackground';
import Container from '../Container/Container';
import SectionContainer from '../SectionContainer/SectionContainer';
import NavBar from '../NavBar/NavBar';
import Home from '../Home/Home';
import Button from '../Button/Button';
import Skills from '../Skills/Skills';
// const Portfolio = lazy(() => import("../Portfolio/Portfolio"));
import Portfolio from '../Portfolio/Portfolio';
import Certification from 'components/Certification/Certification';
const About = lazy(() => import('../About/About'));
const Footer = lazy(() => import('../Footer/Footer'));

function App() {
  return (
    <>
      <Suspense fallback={<Loader />}>
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
            <Certification />
          </SectionContainer>
          <SectionContainer>
            <Portfolio />
          </SectionContainer>
          <SectionContainer>
            <About />
          </SectionContainer>
          {/* <Career /> */}
          <Footer />
        </Container>
      </Suspense>
    </>
  );
}

export default App;
