import { useEffect, useState } from "react";

import "./header.css";

import mouseSvg from "../../assets/mouse.svg";

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
        <div className="site-name">
          <p>Scroll to see...</p>
          <img src={mouseSvg} alt="icon" />
        </div>
        <ul className="menu" role="list">
          <li>
            <svg
              width="20px"
              height="20px"
              strokeWidth="1.8"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              color="currentColor"
            >
              <path
                d="M19 3L5 3C3.89543 3 3 3.89543 3 5L3 19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3Z"
                stroke="currentColor"
                strokeWidth="1.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
              <path
                d="M7 7L17 7"
                stroke="currentColor"
                strokeWidth="1.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
              <path
                d="M7 12L17 12"
                stroke="currentColor"
                strokeWidth="1.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
              <path
                d="M7 17L13 17"
                stroke="currentColor"
                strokeWidth="1.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </svg>
            <a
              target="_blank"
              href="https://github.com/yefreescoding/horizontal-scrolling-react/blob/main/README.md"
            >
              Docs
            </a>
          </li>
          <li>
            <svg
              width="20px"
              height="20px"
              strokeWidth="1.2"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              color="#000000"
            >
              <path
                d="M16 22.0268V19.1568C16.0375 18.68 15.9731 18.2006 15.811 17.7506C15.6489 17.3006 15.3929 16.8902 15.06 16.5468C18.2 16.1968 21.5 15.0068 21.5 9.54679C21.4997 8.15062 20.9627 6.80799 20 5.79679C20.4558 4.5753 20.4236 3.22514 19.91 2.02679C19.91 2.02679 18.73 1.67679 16 3.50679C13.708 2.88561 11.292 2.88561 8.99999 3.50679C6.26999 1.67679 5.08999 2.02679 5.08999 2.02679C4.57636 3.22514 4.54413 4.5753 4.99999 5.79679C4.03011 6.81549 3.49251 8.17026 3.49999 9.57679C3.49999 14.9968 6.79998 16.1868 9.93998 16.5768C9.61098 16.9168 9.35725 17.3222 9.19529 17.7667C9.03334 18.2112 8.96679 18.6849 8.99999 19.1568V22.0268"
                stroke="#000000"
                strokeWidth="1.2"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
              <path
                d="M9 20.0267C6 20.9999 3.5 20.0267 2 17.0267"
                stroke="#000000"
                strokeWidth="1.2"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
            </svg>
            <a target="_blank" href="https://github.com/yefreescoding">
              Github
            </a>
          </li>
          <li>
            <svg
              width="20px"
              height="20px"
              viewBox="0 0 24 24"
              strokeWidth="1.2"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              color="#000000"
            >
              <path
                d="M16.8198 20.7684L3.75317 3.96836C3.44664 3.57425 3.72749 3 4.22678 3H6.70655C6.8917 3 7.06649 3.08548 7.18016 3.23164L20.2468 20.0316C20.5534 20.4258 20.2725 21 19.7732 21H17.2935C17.1083 21 16.9335 20.9145 16.8198 20.7684Z"
                stroke="#000000"
                strokeWidth="1.2"
              ></path>
              <path
                d="M20 3L4 21"
                stroke="#000000"
                strokeWidth="1.2"
                stroke-linecap="round"
              ></path>
            </svg>
            <a href="https://twitter.com/YefreeCodes" target="_blank">
              Twitter
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
