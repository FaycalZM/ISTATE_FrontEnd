import Hero from "./pages/Hero";
import NavBar from "./components/shared/NavBar";
import About from "./pages/About";
import Team from "./pages/Team";
import Footer from "./components/shared/Footer";
import SubNewsletter from "./components/shared/SubNewsletter";


export default function App() {
  return (
    <div>
      <NavBar />
      <Hero />
      <About />
      <Team />
      <SubNewsletter />
      <Footer />
    </div>
  );
}
