import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Events from "./pages/Events";
import Boardgames from "./pages/Boardgames";
import Contactus from "./pages/Contactus";
import Giftcards from "./pages/Giftcards";
import HowItWorks from "./pages/HowItWorks";
import Reservations from "./pages/Reservations";
import Trivia from "./pages/trivia";
import Videogames from "./pages/videogames";
import Nopage from "./pages/Nopage";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <div className="container">
          <Routes>
            <Route index element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/events" element={<Events />} />
            <Route path="/contactus" element={<Contactus />} />
            <Route path="/giftcards" element={<Giftcards />} />
            <Route path="/howitworks" element={<HowItWorks />} />
            <Route path="/reservations" element={<Reservations />} />
            <Route path="/trivia" element={<Trivia />} />
            <Route path="/boardgames" element={<Boardgames />} />
            <Route path="/videogames" element={<Videogames />} />
            <Route path="*" element={<Nopage />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
