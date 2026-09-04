import { footer } from "../content.js";

// One line about the project and a link to the References page.
function Footer({ onNavigate }) {
  return (
    <footer className="footer">
      <div className="container">
        <p>{footer.text}</p>
        <button onClick={() => onNavigate("references")}>View references</button>
      </div>
    </footer>
  );
}

export default Footer;
