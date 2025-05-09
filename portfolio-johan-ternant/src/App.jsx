//Code éditer par Johan
//Contient la/les routes des pages "home", "sign in" et "user" (react router)
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/header";
import Footer from "./components/footer";
import Home from "./components/pages/home";
import Projects from "./components/pages/projects";
import Error404 from "./components/pages/error404";
import AboutWebsite from "./components/pages/about-website";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="*" element={<Error404 />} />
        <Route path="/about-website" element={<AboutWebsite />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
