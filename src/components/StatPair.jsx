// The two-number comparison on the home page.
// The left figure is green because it was a real gain. The right figure is red
// because it is what the same students lost on the exam taken without AI.
function StatPair(props) {
  return (
    <div className="wide-block">
      <div className="stat-pair">
        <div className="stat-half">
          <span className="stat-figure stat-figure-measured">
            {props.left.figure}
          </span>
          <span className="stat-label">{props.left.label}</span>
        </div>

        <div className="stat-half">
          <span className="stat-figure stat-figure-deficit">
            {props.right.figure}
          </span>
          <span className="stat-label">{props.right.label}</span>
        </div>
      </div>

      <p className="caption">
        <a href={props.captionUrl} target="_blank" rel="noreferrer">
          {props.caption}
        </a>
      </p>
    </div>
  );
}

export default StatPair;
