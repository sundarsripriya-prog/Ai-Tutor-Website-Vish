import { sourceTiers, sources, knownWeaknesses } from "../content";

// The Sources page. Everything on it comes from content.js, so to add or
// change a source, edit that file rather than this one.
function Sources() {
  return (
    <main className="page">
      <h1>Sources</h1>
      <p className="page-intro">
        Sources are grouped by how much weight they carry, not alphabetically.
        Where a source has a limitation, that limitation is stated with it.
      </p>

      <h2 id="source-list">Full source list</h2>

      <div className="wide-block">
        {sourceTiers.map(function (tier) {
          // Only the sources belonging to this tier go under this heading.
          const sourcesInTier = sources.filter(function (source) {
            return source.tier === tier.id;
          });

          return (
            <div className="tier-block" key={tier.id}>
              <h3>{tier.name}</h3>
              <p>{tier.description}</p>

              {sourcesInTier.map(function (source) {
                return (
                  <p className="source-entry" key={source.id}>
                    <span className="source-number">{source.number}. </span>
                    <a href={source.url} target="_blank" rel="noreferrer">
                      {source.name}
                    </a>
                    <span>. {source.supports}. </span>
                    <span className="source-note">{source.note}</span>
                  </p>
                );
              })}
            </div>
          );
        })}
      </div>

      <h2 id="weaknesses">Known weaknesses in this evidence</h2>
      <div className="text-column">
        <p>
          These are stated rather than hidden. They are what makes the rest of
          the argument worth trusting.
        </p>

        <ul className="plain-list">
          {knownWeaknesses.map(function (weakness) {
            return <li key={weakness.id}>{weakness.text}</li>;
          })}
        </ul>
      </div>
    </main>
  );
}

export default Sources;
