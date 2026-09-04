// The list of sources for one table row or one paragraph.
// props.sources is an array of objects that each have a label and a url.
function SourceLinks(props) {
  return (
    <span className="source-links">
      {props.sources.map(function (source, position) {
        // A comma goes between the links, but not in front of the first one.
        let separator = ", ";
        if (position === 0) {
          separator = "";
        }

        return (
          <span key={source.url}>
            {separator}
            <a href={source.url} target="_blank" rel="noreferrer">
              {source.label}
            </a>
          </span>
        );
      })}
    </span>
  );
}

export default SourceLinks;
