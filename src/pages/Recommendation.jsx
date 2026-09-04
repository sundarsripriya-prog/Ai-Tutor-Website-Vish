import {
  concernHeading,
  concernStatement,
  concernLens,
  concernStakeholders,
  counterArgumentHeading,
  counterArgument,
  counterArgumentAnswer,
  optionsHeading,
  solutionOptions,
  rankingNotes,
  recommendationHeading,
  recommendationLead,
  recommendationParts,
  recommendationSummary,
  whyHeading,
  whyThisRecommendation,
  evidenceHeading,
  studyDesign,
  studyGroups,
  thirdGroupNote,
  evidenceNotes,
  evidenceLimitation,
  evidenceSource,
  whoIsAffectedHeading,
  whoIsAffected,
} from "../content";

// The recommendation page. It runs in this order:
//   1. the concern
//   2. the strongest argument against it, and the answer
//   3. the eight options that were considered
//   4. the recommendation
//   5. why this one
//   6. the study it rests on, including what the study did not show
//   7. who it affects
function Recommendation() {
  return (
    <main className="page">
      {/* 1. The concern */}
      <h1 id="concern">{concernHeading}</h1>
      <div className="text-column">
        <p className="lead-statement">{concernStatement}</p>

        <h3>The lens</h3>
        <p>{concernLens}</p>

        <h3>Who this concerns</h3>
        <ul className="plain-list">
          {concernStakeholders.map(function (stakeholder) {
            return (
              <li key={stakeholder.id}>
                <strong>{stakeholder.name}.</strong>
                <span> {stakeholder.description}</span>
              </li>
            );
          })}
        </ul>
      </div>

      {/* 2. The counterargument */}
      <h2 id="counterargument">{counterArgumentHeading}</h2>
      <div className="text-column">
        <p>{counterArgument}</p>
        <h3>The answer</h3>
        <p>{counterArgumentAnswer}</p>
      </div>

      {/* 3. The eight options, in ranked order */}
      <h2 id="options">{optionsHeading}</h2>
      <div className="text-column">
        <ol className="numbered-list">
          {solutionOptions.map(function (option) {
            return (
              <li key={option.id}>
                <strong>{option.name}.</strong>
                <span> {option.description}</span>
              </li>
            );
          })}
        </ol>

        {rankingNotes.map(function (note) {
          return (
            <div key={note.id}>
              <h3>{note.label}</h3>
              <p>{note.text}</p>
            </div>
          );
        })}
      </div>

      {/* 4. The recommendation */}
      <h2 id="proposal">{recommendationHeading}</h2>
      <div className="text-column">
        <p className="lead-statement">{recommendationLead}</p>

        {recommendationParts.map(function (part) {
          return (
            <div key={part.id}>
              <h3>{part.label}</h3>
              <p>{part.text}</p>
            </div>
          );
        })}

        <p className="lead-statement">{recommendationSummary}</p>
      </div>

      {/* 5. Why this recommendation and not another */}
      <h2>{whyHeading}</h2>
      <div className="text-column">
        {whyThisRecommendation.map(function (reason) {
          return (
            <div key={reason.id}>
              <h3>{reason.label}</h3>
              <p>{reason.text}</p>
            </div>
          );
        })}
      </div>

      {/* 6. The study underneath all of it */}
      <h2 id="evidence">{evidenceHeading}</h2>
      <div className="text-column">
        <p>{studyDesign}</p>
      </div>

      <div className="wide-block">
        <table>
          <thead>
            <tr>
              <th>Group</th>
              <th>Result on the AI-free exam</th>
            </tr>
          </thead>
          <tbody>
            {studyGroups.map(function (studyGroup) {
              return (
                <tr key={studyGroup.id}>
                  <td data-label="Group">{studyGroup.group}</td>
                  <td data-label="Result on the AI-free exam">
                    {studyGroup.result}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <div className="text-column">
        <p>{thirdGroupNote}</p>

        {evidenceNotes.map(function (note) {
          return (
            <div key={note.id}>
              <h3>{note.label}</h3>
              <p>{note.text}</p>
            </div>
          );
        })}

        <h3>{evidenceLimitation.label}</h3>
        <p>{evidenceLimitation.text}</p>

        <p className="caption">
          <a href={evidenceSource.url} target="_blank" rel="noreferrer">
            {evidenceSource.label}
          </a>
        </p>
      </div>

      {/* 7. Who it affects */}
      <h2>{whoIsAffectedHeading}</h2>
      <div className="text-column">
        <p>{whoIsAffected}</p>
      </div>
    </main>
  );
}

export default Recommendation;
