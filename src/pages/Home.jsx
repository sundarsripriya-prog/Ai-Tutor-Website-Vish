import { home } from "../content/index.js";
import Hero from "../components/Hero.jsx";
import History from "../components/History.jsx";
import ProductGallery from "../components/ProductGallery.jsx";

// Home page, top to bottom: hero, definition, classification, history,
// applications. The two longest sections live in their own files,
// components/History.jsx and components/ProductGallery.jsx.
function Home({ onNavigate }) {
  return (
    <main>
      <Hero hero={home.hero}>
        <button className="button button-filled" onClick={() => onNavigate("impacts")}>
          See the impacts
        </button>
        <button className="button" onClick={() => onNavigate("references")}>
          View references
        </button>
      </Hero>

      {/* Definition: what counts as an AI tutor */}
      <section className="section">
        <div className="container">
          <span className="eyebrow">Definition</span>
          <h2 className="section-heading">{home.whatItIs.heading}</h2>
          {home.whatItIs.paragraphs.map(function (text) {
            return <p key={text}>{text}</p>;
          })}
        </div>
      </section>

      {/* Classification: three cards */}
      <section className="section band-paper">
        <div className="container">
          <span className="eyebrow">Classification</span>
          <h2 className="section-heading">{home.classification.heading}</h2>
          <p className="intro">{home.classification.intro}</p>

          <div className="card-grid">
            {home.classification.items.map(function (item) {
              return (
                <div className="card card-sage" key={item.term}>
                  <h3>{item.term}</h3>
                  <p>{item.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <History />

      <ProductGallery />
    </main>
  );
}

export default Home;
