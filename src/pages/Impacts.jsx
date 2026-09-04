import { impacts } from "../content.js";
import Hero from "../components/Hero.jsx";
import GainsCosts from "../components/GainsCosts.jsx";

// Impacts: the measured trial results, then economy, culture, and
// environment, each with full paragraphs and a gains and costs pair.
function Impacts({ onNavigate }) {
  return (
    <main>
      <Hero hero={impacts.hero} />

      {/* The two trials, as a row of three figures */}
      <section className="section band-paper">
        <div className="container">
          <span className="eyebrow">Evidence</span>
          <h2 className="section-heading">{impacts.measured.heading}</h2>
          <p className="intro">{impacts.measured.intro}</p>

          <div className="figure-grid">
            {impacts.measured.stats.map(function (stat) {
              return (
                <div className="figure card card-sage" key={stat.id}>
                  <span className="figure-label">{stat.label}</span>
                  <span className="figure-value">{stat.value}</span>
                  <p>{stat.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          {impacts.sections.map(function (block) {
            return (
              <div className="impact-block" key={block.id}>
                <span className="eyebrow">Impact</span>
                <h2 className="section-heading">{block.heading}</h2>
                {block.paragraphs.map(function (text) {
                  return <p key={text}>{text}</p>;
                })}
                <GainsCosts gains={block.gains} costs={block.costs} />
              </div>
            );
          })}
        </div>
      </section>

      {/* Pointer to the Recommendation page */}
      <section className="section band-paper">
        <div className="container callout">
          <p>{impacts.callout.text}</p>
          <button className="button button-filled" onClick={() => onNavigate(impacts.callout.linkTo)}>
            {impacts.callout.linkLabel}
          </button>
        </div>
      </section>
    </main>
  );
}

export default Impacts;
