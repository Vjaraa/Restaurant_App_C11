import "./App.css";
import AboutMe from "./components/AboutMe/AboutMe";
import Contact from "./components/Contact/Contact";
import Container from "./components/Container/Container";
import Navbar from "./components/Navbar";
import Products from "./components/Products/Products";
import Footer from "./components/Footer/Footer";




function App() {
  return (
    <>
      <Navbar />
      <Container>
        <AboutMe />
        <Products />
        <Contact />
      </Container>
      <Footer />
    </>
  );
}

export default App;
