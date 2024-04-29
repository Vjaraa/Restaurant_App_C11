import "./App.css";
import AboutMe from "./components/AboutMe/AboutMe";
import Contact from "./components/Contact/Contact";
import Container from "./components/Container/Container";
import Navbar from "./components/Navbar";
import Products from "./components/Products/Products";


function App() {
  return (
    <>
      <Navbar />
      <Container>
        <AboutMe />
        <Products />
        <Contact />
      </Container>
    </>
  );
}

export default App;
