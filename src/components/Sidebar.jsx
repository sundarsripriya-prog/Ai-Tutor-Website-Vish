import { pages, pageSections } from "../content";

// The menu down the left side. It shows the four pages, and underneath
// whichever page is open, the sections inside that page.
// App tells it which page is open and gives it a function to change it.
function Sidebar(props) {
  return (
    <aside className="sidebar">
      <p className="sidebar-title">AI tutors and instructors</p>
      <p className="sidebar-subtitle">
        A computing innovation, and what the research says it does to students.
      </p>

      <nav>
        <ul className="sidebar-list">
          {pages.map(function (page) {
            const isOpen = page.id === props.currentPage;

            // The open page gets the pale orange background and bold text.
            let buttonClass = "sidebar-button";
            let currentPage = undefined;

            if (isOpen) {
              buttonClass = "sidebar-button sidebar-button-active";
              currentPage = "page";
            }

            function handleClick() {
              props.onPageChange(page.id);
            }

            // Only the open page shows its list of sections underneath.
            const sections = pageSections[page.id];

            return (
              <li className="sidebar-item" key={page.id}>
                <button
                  className={buttonClass}
                  aria-current={currentPage}
                  onClick={handleClick}
                >
                  {page.label}
                </button>

                {isOpen && (
                  <ul className="sidebar-sections">
                    {sections.map(function (section) {
                      return (
                        <li key={section.id}>
                          <a
                            className="sidebar-section-link"
                            href={"#" + section.anchor}
                          >
                            {section.label}
                          </a>
                        </li>
                      );
                    })}
                  </ul>
                )}
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;
