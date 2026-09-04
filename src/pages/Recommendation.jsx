import { recommendation } from "../content.js";
import Hero from "../components/Hero.jsx";

// The chart shows each group's result as a percentage of the control group.
// The widest bar in the data (+127) fills the full track, and every other
// bar is scaled against it so both panels share one scale.
const largestValue = 127;

function barWidth(value) {
  const size = Math.abs(value);
  const percent = (size / largestValue) * 100;
  return percent + "%";
}

function barClass(value) {
  if (value < 0) {
    return "bar bar-negative";
  }
  return "bar bar-positive";
}

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

          <div className="chart">
            {recommendation.evidence.chart.map(function (panel) {
              return (
                <div className="chart-panel" key={panel.id}>
                  <h3>{panel.title}</h3>
                  {panel.rows.map(function (row) {
                    return (
                      <div className="chart-row" key={row.id}>
                        <span className="chart-label">{row.label}</span>
                        <div className="chart-track">
                          <div className={barClass(row.value)} style={{ width: barWidth(row.value) }} />
                        </div>
                        <span className="chart-value">{row.display}</span>
                      </div>
                    );
                  })}
                </div>
              );
            })}
          </div>
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
