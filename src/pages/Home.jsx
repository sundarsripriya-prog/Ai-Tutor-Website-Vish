import { home, products } from "../content.js";
import Hero from "../components/Hero.jsx";

// Home: what an AI tutor is, how it is classified, its history, and the
// tools students use today.
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

      {/* What counts as an AI tutor */}
      <section className="section">
        <div className="container">
          <span className="eyebrow">Definition</span>
          <h2 className="section-heading">{home.whatItIs.heading}</h2>
          {home.whatItIs.paragraphs.map(function (text) {
            return <p key={text}>{text}</p>;
          })}
        </div>
      </section>

      {/* Classification */}
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

      {/* History */}
      <section className="section">
        <div className="container">
          <span className="eyebrow">History</span>
          <h2 className="section-heading">{home.history.heading}</h2>
          <p className="intro">{home.history.intro}</p>

          {/* Three eras. Each has a summary on the left and its events on the right. */}
          {home.history.eras.map(function (era) {
            return (
              <div className="era" key={era.id}>
                <div className="era-summary">
                  <span className="era-span">{era.span}</span>
                  <h3>{era.name}</h3>
                  <p>{era.summary}</p>
                </div>

                <ol className="timeline">
                  {era.events.map(function (event) {
                    return (
                      <li className="event" key={event.year + event.title}>
                        <span className="timeline-year">{event.year}</span>
                        <div>
                          <h4>{event.title}</h4>
                          <p>{event.text}</p>
                        </div>
                      </li>
                    );
                  })}
                </ol>
              </div>
            );
          })}

          {/* The whole history compressed into one chain */}
          <div className="arc">
            <h3>{home.history.arcHeading}</h3>
            <ol className="arc-chain">
              {home.history.arc.map(function (step) {
                return <li key={step}>{step}</li>;
              })}
            </ol>
          </div>

          {/* The four older technologies that were combined */}
          <div className="predecessors">
            <h3>{home.history.predecessorsHeading}</h3>
            <p className="intro">{home.history.predecessorsIntro}</p>
            <ul className="predecessor-grid">
              {home.history.predecessors.map(function (item) {
                return (
                  <li className="card predecessor" key={item.name}>
                    <span className="tag tag-sage">{item.role}</span>
                    <h4>{item.name}</h4>
                    <p>{item.text}</p>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </section>

      {/* Applications today: one card per product with its official image */}
      <section className="section band-paper">
        <div className="container">
          <span className="eyebrow">Applications</span>
          <h2 className="section-heading">{home.today.heading}</h2>
          <p className="intro">{home.today.intro}</p>

          <ul className="product-grid">
            {products.map(function (product) {
              return (
                <li className="product" key={product.id}>
                  <div className="product-frame" style={{ background: product.frame }}>
                    <img className="product-image" src={product.image} alt={product.name} />
                  </div>
                  <div className="product-body">
                    <span className="tag tag-sage">{product.type}</span>
                    <h3>
                      <a href={product.url} target="_blank" rel="noreferrer">
                        {product.name}
                      </a>
                    </h3>
                    <span className="product-maker">{product.maker}</span>
                    <p>{product.text}</p>
                  </div>
                </li>
              );
            })}
          </ul>

          <p className="closing-note">{home.today.closing}</p>
        </div>
      </section>
    </main>
  );
}

export default Home;
