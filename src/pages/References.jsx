import { references } from "../content/index.js";
import Hero from "../components/Hero.jsx";

// References: every source, grouped by type.
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
    </main>
  );
}

export default References;
