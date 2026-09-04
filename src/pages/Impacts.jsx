import { impacts } from "../content.js";
import Hero from "../components/Hero.jsx";
import GainsCosts from "../components/GainsCosts.jsx";

// Impacts: economy, culture, and environment, each with full paragraphs
// followed by a gains and costs pair.
function Impacts({ onNavigate }) {
  return (
    <main>
      <Hero hero={impacts.hero} />

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
