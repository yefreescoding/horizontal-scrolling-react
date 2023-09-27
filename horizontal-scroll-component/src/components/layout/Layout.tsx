import { ReactNode, CSSProperties } from "react";
import "./layout.css";

interface LayoutProps {
  children: ReactNode;
  contentMaxWidth?: string;
}

type CustomCSSproperties = CSSProperties & {
  "--space"?: string;
  "--space-md"?: string;
  "--content-max-width"?: string;
};

export default function Layout({ children, contentMaxWidth }: LayoutProps) {
  const customCSSProperties: CustomCSSproperties = {
    "--content-max-width": contentMaxWidth,
  };
  return (
    <div className="wrapper" aria-label="Web site content">
      <main
        className="content"
        aria-label="Principal content of the web page."
        style={customCSSProperties}
      >
        {children}
      </main>
    </div>
  );
}
