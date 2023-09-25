import { ReactNode } from "react";
import "./layout.css";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="wrapper" aria-label="Web site content">
      <main className="content" aria-label="Principal content of the web page.">
        {children}
      </main>
    </div>
  );
}
