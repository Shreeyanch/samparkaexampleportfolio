export default function Navbar({ pages, activePage, onPageChange }) {
  return (
    <nav className="navbar" aria-label="Portfolio sections">
      <ul className="navbar-list">
        {pages.map((page) => (
          <li className="navbar-item" key={page}>
            <button
              className={`navbar-link ${activePage === page ? "active" : ""}`}
              type="button"
              aria-current={activePage === page ? "page" : undefined}
              onClick={() => onPageChange(page)}
            >
              {page}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}
