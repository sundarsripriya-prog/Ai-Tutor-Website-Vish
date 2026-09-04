import { recommendation } from "../content/index.js";

// The bar chart on the Recommendation page. It is built only with CSS:
// each row is a label, a track, and a bar whose width comes from the data.
//
// Every bar is scaled against the largest value in the data (+127), so the
// widest bar fills its track and both panels share one scale.
const largestValue = 127;

function barWidth(value) {
  const size = Math.abs(value);
  const percent = (size / largestValue) * 100;
  return percent + "%";
}

// Negative results get the rust color, positive results get the forest color.
function barClass(value) {
  if (value < 0) {
    return "bar bar-negative";
  }
  return "bar bar-positive";
}

function Chart() {
  return (
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
  );
}

export default Chart;
