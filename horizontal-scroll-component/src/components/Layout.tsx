import { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="wrapper" aria-label="Web site content">
      {children}
    </div>
  );
}
