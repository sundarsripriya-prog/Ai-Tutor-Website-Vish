import { references } from "../content.js";
import Hero from "../components/Hero.jsx";

// References: every source, grouped by how much weight it carries, and one
// widely quoted statistic that should not be trusted.
function References() {
  return (
    <main>
      <Hero hero={references.hero} />

      <section className="section">
        <div className="container">
          {references.tiers.map(function (tier) {
            return (
              <div className="tier" key={tier.name}>
                <div className="tier-head">
                  <h2>{tier.name}</h2>
                  <span className="tag">{tier.items.length} sources</span>
                </div>
                <p className="tier-note">{tier.note}</p>

                <ul className="source-list">
                  {tier.items.map(function (source) {
                    return (
                      <li className="card" key={source.title}>
                        <h3>{source.title}</h3>
                        <p>{source.detail}</p>
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          })}
        </div>
      </section>

      {/* The contested two sigma statistic */}
      <section className="section band-paper">
        <div className="container">
          <span className="eyebrow">Contested</span>
          <h2 className="section-heading">{references.contested.heading}</h2>
          {references.contested.paragraphs.map(function (text) {
            return <p key={text}>{text}</p>;
          })}
        </div>
      </section>
    </main>
  );
}

export default References;
