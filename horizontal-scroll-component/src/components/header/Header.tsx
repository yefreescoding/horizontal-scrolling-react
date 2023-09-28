import { useEffect, useState } from "react";

export default function Header() {
  const [headerActive, setHeaderActive] = useState(false);

  useEffect(() => {
    const header = document.getElementById("page-header");
    const intercept = document.createElement("div");

    intercept.setAttribute("data-observer-intercept", "");

    if (header) {
      header.before(intercept);

      const observer = new IntersectionObserver(([entry]) => {
        setHeaderActive(!entry.isIntersecting);
      });

      observer.observe(intercept);

      return () => {
        observer.unobserve(intercept);
        intercept.remove();
      };
    }
  }, []);

  return (
    <header
      id="page-header"
      className={`header ${headerActive ? "active" : ""}`}
    >
      <div className="site-name">Scroll to see...</div>
      <nav>
        <ul className="menu" role="list">
          <li>
            <a href="#">Docs</a>
          </li>
          <li>
            <a href="#">Github</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Twitter</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
