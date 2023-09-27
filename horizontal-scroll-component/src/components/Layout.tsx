import { ReactNode, useState, CSSProperties } from "react";
import "./layout.css";

interface LayoutProps {
  children: ReactNode;
}

type CustomCSSproperties = CSSProperties & {
  "--space"?: string;
  "--space-md"?: string;
  "--content-max-width"?: string;
};

export default function Layout({ children }: LayoutProps) {
  const [maxWidth] = useState("65ch"); // Change the width of the content or create and handleFunction

  const customCSSProperties: CustomCSSproperties = {
    "--content-max-width": maxWidth,
  };
  return (
    <div className="wrapper" aria-label="Web site content">
      <main
        className="content"
        aria-label="Principal content of the web page."
        style={customCSSProperties} // Dynamically change the value
      >
        {children}
      </main>
    </div>
  );
}
