import { recommendation } from "../content/index.js";
import Hero from "../components/Hero.jsx";
import Chart from "../components/Chart.jsx";

// Recommendation: the ethical concern, the evidence behind it, the
// strongest objection, and three steps schools should take.
function Recommendation({ onNavigate }) {
  return (
    <main>
      <Hero hero={recommendation.hero} />

      {/* The evidence, with the only dark band on the site */}
      <section className="section band-forest">
        <div className="container">
          <span className="eyebrow">The evidence</span>
          <h2 className="section-heading">{recommendation.evidence.heading}</h2>
          <p className="intro">{recommendation.evidence.intro}</p>

          <Chart />
          <p className="chart-note">{recommendation.evidence.chartNote}</p>

          <div className="stat-after">
            {recommendation.evidence.after.map(function (text) {
              return <p key={text}>{text}</p>;
            })}
          </div>
        </div>
      </section>

      {/* The objection and the response */}
      <section className="section">
        <div className="container">
          <span className="eyebrow">Counterargument</span>
          <h2 className="section-heading">{recommendation.objection.heading}</h2>
          <p className="quote">{recommendation.objection.argument}</p>

          <h3>{recommendation.objection.responseHeading}</h3>
          <ul className="responses">
            {recommendation.objection.response.map(function (text) {
              return (
                <li key={text}>
                  <p>{text}</p>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      {/* The recommendation itself */}
      <section className="section band-paper">
        <div className="container">
          <span className="eyebrow">Recommendation</span>
          <h2 className="section-heading">{recommendation.plan.heading}</h2>
          <p className="intro">{recommendation.plan.intro}</p>

          <ol className="steps">
            {recommendation.plan.steps.map(function (step) {
              return (
                <li className="step" key={step.title}>
                  <div>
                    <h3>{step.title}</h3>
                    <p>{step.text}</p>
                  </div>
                </li>
              );
            })}
          </ol>
        </div>
      </section>

      {/* Closing pointer to the References page */}
      <section className="section">
        <div className="container callout">
          <p>{recommendation.closing.text}</p>
          <button className="button" onClick={() => onNavigate(recommendation.closing.linkTo)}>
            {recommendation.closing.linkLabel}
          </button>
        </div>
      </section>
    </main>
  );
}

export default Recommendation;
