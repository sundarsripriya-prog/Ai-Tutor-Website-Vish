import { home } from "../content.js";
import Hero from "../components/Hero.jsx";

// Home: what an AI tutor is, how it is classified, its history, and how
// people use it today.
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

          <div className="definitions">
            {home.whatItIs.forms.map(function (form) {
              return (
                <div className="definition" key={form.name}>
                  <div>
                    <span className="definition-name">{form.name}</span>
                    <span className="definition-example">{form.example}</span>
                  </div>
                  <p>{form.text}</p>
                </div>
              );
            })}
          </div>
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

          <ol className="timeline">
            {home.history.timeline.map(function (event) {
              return (
                <li key={event.year + event.text}>
                  <span className="timeline-year">{event.year}</span>
                  <p>{event.text}</p>
                </li>
              );
            })}
          </ol>

          <div className="predecessors">
            <h3>{home.history.predecessorsHeading}</h3>
            <ul>
              {home.history.predecessors.map(function (item) {
                return (
                  <li className="predecessor" key={item.name}>
                    <span>{item.name}</span>
                    <span>{item.role}</span>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </section>

      {/* Applications today */}
      <section className="section band-paper">
        <div className="container">
          <span className="eyebrow">Applications</span>
          <h2 className="section-heading">{home.today.heading}</h2>
          {home.today.paragraphs.map(function (text) {
            return <p key={text}>{text}</p>;
          })}
        </div>
      </section>
    </main>
  );
}

export default Home;
