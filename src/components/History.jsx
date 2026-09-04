import { home } from "../content/index.js";

// The History section of the Home page. It has three parts:
// 1. three eras, each with a summary on the left and its events on the right
// 2. the whole story compressed into one chain of six steps
// 3. the four older technologies that AI tutors combined
function History() {
  const history = home.history;

  return (
    <section className="section">
      <div className="container">
        <span className="eyebrow">History</span>
        <h2 className="section-heading">{history.heading}</h2>
        <p className="intro">{history.intro}</p>

        {/* Part 1: the three eras */}
        {history.eras.map(function (era) {
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

        {/* Part 2: the chain of six steps */}
        <div className="arc">
          <h3>{history.arcHeading}</h3>
          <ol className="arc-chain">
            {history.arc.map(function (step) {
              return <li key={step}>{step}</li>;
            })}
          </ol>
        </div>

        {/* Part 3: the four predecessors */}
        <div className="predecessors">
          <h3>{history.predecessorsHeading}</h3>
          <p className="intro">{history.predecessorsIntro}</p>
          <ul className="predecessor-grid">
            {history.predecessors.map(function (item) {
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
  );
}

export default History;
