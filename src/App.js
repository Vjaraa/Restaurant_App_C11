import "./App.css";
import AboutMe from "./components/AboutMe/AboutMe";
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
      </Container>
    </>
  );
}

export default App;
