import { pages } from "../content.js";

// The top bar. It shows one button per page and highlights the current one.
// Clicking a button tells App which page to show.
function Nav({ currentPage, onNavigate }) {
  return (
    <header className="nav">
      <div className="container nav-inner">
        <span className="wordmark">The Infinite Tutor</span>

        <nav className="nav-links" aria-label="Pages">
          {pages.map(function (page) {
            const isActive = page.id === currentPage;
            let className = "nav-link";
            if (isActive) {
              className = "nav-link is-active";
            }

            return (
              <button
                key={page.id}
                className={className}
                aria-current={isActive ? "page" : undefined}
                onClick={() => onNavigate(page.id)}
              >
                {page.label}
              </button>
            );
          })}
        </nav>
      </div>
    </header>
  );
}

export default Nav;
