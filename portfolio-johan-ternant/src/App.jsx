//Code éditer par Johan
//Contient les routes des pages : home, projects, about-website et error404
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/scroll-to-top";
import Header from "./components/header";
import Footer from "./components/footer";
import Home from "./components/pages/home";
import Projects from "./components/pages/projects";
import Error404 from "./components/pages/error404";
import AboutWebsite from "./components/pages/about-website";

const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTop /> {/* Fait défiler en haut à chaque changement de route */}
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about-website" element={<AboutWebsite />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
