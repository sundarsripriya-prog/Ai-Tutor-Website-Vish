import SourceLinks from "./SourceLinks";

// The economic and cultural tables both use this component, because they have
// the same columns. Each page passes in the rows it wants shown.
function ImpactTable(props) {
  return (
    <div className="wide-block">
      <table>
        <thead>
          <tr>
            <th>Stakeholder</th>
            <th className="valence-column">Positive or negative</th>
            <th>Impact</th>
            <th>Supporting evidence</th>
          </tr>
        </thead>

        <tbody>
          {props.rows.map(function (row) {
            // The word Positive or Negative is printed out, so the meaning never
            // depends on a reader being able to see the color.
            let valenceClass = "valence-negative";
            let valenceWord = "Negative";

            if (row.valence === "positive") {
              valenceClass = "valence-positive";
              valenceWord = "Positive";
            }

            return (
              <tr key={row.id}>
                <td data-label="Stakeholder">{row.stakeholder}</td>
                <td className="valence-column" data-label="Positive or negative">
                  <span className={valenceClass}>{valenceWord}</span>
                </td>
                <td data-label="Impact">{row.impact}</td>
                <td data-label="Supporting evidence">
                  <span>{row.evidence} </span>
                  <SourceLinks sources={row.sources} />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default ImpactTable;
