import StatPair from "../components/StatPair";
import SourceLinks from "../components/SourceLinks";
import {
  heroHeading,
  heroThesis,
  heroComparison,
  whatItIsHeading,
  whatItIsDefinition,
  classificationIntro,
  classificationCategories,
  classificationDistinction,
  timelineHeading,
  timelineFraming,
  timelineEntries,
  applicationsHeading,
  applications,
} from "../content";

// The home page. It has four parts, in this order:
//   1. the opening claim and the two numbers that support it
//   2. what an AI tutor actually is
//   3. where AI tutors came from
//   4. which ones are being used now
function Home() {
  return (
    <main className="page">
      {/* 1. The opening claim */}
      <h1>{heroHeading}</h1>
      <div className="text-column">
        <p>{heroThesis}</p>
      </div>

      <StatPair
        left={heroComparison.left}
        right={heroComparison.right}
        caption={heroComparison.caption}
        captionUrl={heroComparison.captionUrl}
      />

      {/* 2. What an AI tutor is */}
      <h2 id="what-it-is">{whatItIsHeading}</h2>
      <div className="text-column">
        <p>{whatItIsDefinition}</p>
        <p>{classificationIntro}</p>

        <ul className="plain-list">
          {classificationCategories.map(function (category) {
            return (
              <li key={category.id}>
                <strong>{category.term}.</strong>
                <span> {category.description}</span>
              </li>
            );
          })}
        </ul>

        <h3>{classificationDistinction.label}</h3>
        <p>{classificationDistinction.text}</p>
      </div>

      {/* 3. Where AI tutors came from */}
      <h2 id="history">{timelineHeading}</h2>
      <div className="text-column">
        <p>{timelineFraming}</p>
      </div>

      <div className="wide-block">
        <table>
          <thead>
            <tr>
              <th>Era</th>
              <th>Development</th>
              <th>Why it matters</th>
            </tr>
          </thead>
          <tbody>
            {timelineEntries.map(function (entry) {
              return (
                <tr key={entry.id}>
                  <td data-label="Era">{entry.era}</td>
                  <td data-label="Development">{entry.development}</td>
                  <td data-label="Why it matters">{entry.whyItMatters}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* 4. Which AI tutors are in use now */}
      <h2 id="applications">{applicationsHeading}</h2>
      <div className="text-column">
        {applications.map(function (application) {
          return (
            <div key={application.id}>
              <h3>{application.name}</h3>
              <p>
                <span>{application.description} </span>
                <SourceLinks sources={application.sources} />
              </p>
            </div>
          );
        })}
      </div>
    </main>
  );
}

export default Home;
