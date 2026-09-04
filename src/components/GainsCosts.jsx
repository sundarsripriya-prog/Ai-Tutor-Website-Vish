// Two cards side by side: what an impact gives, and what it takes away.
function GainsCosts({ gains, costs }) {
  return (
    <div className="pair">
      <div className="card pair-gains">
        <h3>Gains</h3>
        <ul>
          {gains.map(function (item) {
            return <li key={item}>{item}</li>;
          })}
        </ul>
      </div>

      <div className="card pair-costs">
        <h3>Costs</h3>
        <ul>
          {costs.map(function (item) {
            return <li key={item}>{item}</li>;
          })}
        </ul>
      </div>
    </div>
  );
}

export default GainsCosts;
