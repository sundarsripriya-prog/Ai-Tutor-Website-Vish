import SourceLinks from "./SourceLinks";

// The environmental table has different columns from the other two, because it
// states hypotheses about physical systems rather than impacts already observed.
function HypothesisTable(props) {
  return (
    <div className="wide-block">
      <table>
        <thead>
          <tr>
            <th>Hypothesis</th>
            <th>Environmental consequence</th>
            <th className="valence-column">Positive or negative</th>
            <th>Supporting evidence</th>
          </tr>
        </thead>

        <tbody>
          {props.rows.map(function (row) {
            return (
              <tr key={row.id}>
                <td data-label="Hypothesis">
                  <strong>{row.label}.</strong>
                  <span> {row.hypothesis}</span>
                </td>
                <td data-label="Environmental consequence">{row.consequence}</td>
                <td className="valence-column" data-label="Positive or negative">
                  <span className="valence-negative">Negative</span>
                </td>
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

export default HypothesisTable;
