import { useState } from "react";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Impacts from "./pages/Impacts";
import Recommendation from "./pages/Recommendation";
import Sources from "./pages/Sources";
import "./styles.css";

// App is the only place that knows which page is open.
// openPage holds one of four strings: "home", "impacts", "recommendation",
// or "sources". Sidebar changes it. This function decides what to show.
function App() {
  const [openPage, setOpenPage] = useState("home");

  // Pick the page component that matches openPage.
  let currentPage = <Home />;

  if (openPage === "impacts") {
    currentPage = <Impacts />;
  }

  if (openPage === "recommendation") {
    currentPage = <Recommendation />;
  }

  if (openPage === "sources") {
    currentPage = <Sources />;
  }

  return (
    <div className="layout">
      <Sidebar currentPage={openPage} onPageChange={setOpenPage} />

      <div className="content">
        {currentPage}
        <Footer />
      </div>
    </div>
  );
}

export default App;
