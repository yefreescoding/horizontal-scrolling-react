import { ReactNode } from "react";

interface GalleryDivProps {
  children: ReactNode;
}

export default function GalleryDiv({ children }: GalleryDivProps) {
  return (
    <div className="gallery">
      <div className="floating_content">{children}</div>
    </div>
  );
}
