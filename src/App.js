
import "./App.scss";
import MyNavbar from "./components/navbar";
import Home from "./components/home";
import About from "./components/about";

import Projects from "./components/Projects";

import Contact from "./components/contact";
import Footer from "./components/footer";




function App() {
  return (
    <div className="text-center">
      
      <MyNavbar />
      <Home />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
