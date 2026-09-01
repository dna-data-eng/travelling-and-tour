import Image from "next/image";
import { galleryItems } from "@/lib/data";
import Reveal from "@/components/Reveal";

export default function Gallery() {
  return (
    <section className="section section--tight">
      <div className="container">
        <Reveal>
          <div className="section-head section-head--center">
            <span className="kicker" style={{ justifyContent: "center" }}>
              A Look Inside
            </span>
            <h2>Services in motion</h2>
          </div>
        </Reveal>
      </div>

      <div className="gallery-grid">
        {galleryItems.map((item, i) => (
          <div className="gallery-item" key={i}>
            <Image
              src={item.image}
              alt={item.label}
              width={700}
              height={525}
            />
            <div className="gallery-caption">{item.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
