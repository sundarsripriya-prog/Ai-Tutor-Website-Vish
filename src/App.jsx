import { useState } from "react";
import Nav from "./components/Nav.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./pages/Home.jsx";
import Impacts from "./pages/Impacts.jsx";
import Recommendation from "./pages/Recommendation.jsx";
import References from "./pages/References.jsx";

// The root of the site. One piece of state remembers which page is open.
// There is no router: changing the state swaps the page component.
function App() {
  const [currentPage, setCurrentPage] = useState("home");

  function goToPage(pageId) {
    setCurrentPage(pageId);
    window.scrollTo(0, 0);
  }

  let page = <Home onNavigate={goToPage} />;
  if (currentPage === "impacts") {
    page = <Impacts onNavigate={goToPage} />;
  }
  if (currentPage === "recommendation") {
    page = <Recommendation onNavigate={goToPage} />;
  }
  if (currentPage === "references") {
    page = <References />;
  }

  return (
    <>
      <Nav currentPage={currentPage} onNavigate={goToPage} />
      {page}
      <Footer onNavigate={goToPage} />
    </>
  );
}

export default App;
