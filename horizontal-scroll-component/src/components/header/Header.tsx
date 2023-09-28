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
      <nav className="nav">
        <div className="site-name">Scroll to see...</div>
        <ul className="menu" role="list">
          <li>
            <a
              target="_blank"
              href="https://github.com/yefreescoding/horizontal-scrolling-react/blob/main/README.md"
            >
              Docs
            </a>
          </li>
          <li>
            <a target="_blank" href="https://github.com/yefreescoding">
              Github
            </a>
          </li>
          <li>
            <a href="https://twitter.com/YefreeCodes" target="_blank">
              Twitter
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
