import ImpactTable from "../components/ImpactTable";
import HypothesisTable from "../components/HypothesisTable";
import {
  economicHeading,
  economicFraming,
  economicImpacts,
  culturalHeading,
  culturalFraming,
  culturalImpacts,
  environmentalHeading,
  environmentalFraming,
  environmentalHypotheses,
  environmentalNote,
} from "../content";

// The impacts page. Three sections stacked in this order:
//   1. economic, who pays and who gets paid
//   2. cultural, what changes in a classroom
//   3. environmental, what the machines behind it consume
// The menu on the left jumps to each one.
function Impacts() {
  return (
    <main className="page">
      <h1>Impacts</h1>
      <p className="page-intro">
        AI tutors reach further than the classroom. Their effects show up in
        what families and districts pay, in who feels able to ask a question,
        and in the power and water the machines behind them consume.
      </p>

      {/* 1. Economic */}
      <h2 id="economic">{economicHeading}</h2>
      <div className="text-column">
        <p>{economicFraming}</p>
      </div>
      <ImpactTable rows={economicImpacts} />

      {/* 2. Cultural */}
      <h2 id="cultural">{culturalHeading}</h2>
      <div className="text-column">
        <p>{culturalFraming}</p>
      </div>
      <ImpactTable rows={culturalImpacts} />

      {/* 3. Environmental. This table has different columns from the other
          two, because it states hypotheses rather than observed impacts. */}
      <h2 id="environmental">{environmentalHeading}</h2>
      <div className="text-column">
        <p>{environmentalFraming}</p>
      </div>
      <HypothesisTable rows={environmentalHypotheses} />
      <div className="text-column">
        <p>{environmentalNote}</p>
      </div>
    </main>
  );
}

export default Impacts;
