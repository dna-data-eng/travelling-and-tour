import Image from "next/image";
import Reveal from "@/components/Reveal";

export default function About() {
  return (
    <section className="section" id="about">
      <div className="container about-grid">
        <Reveal>
          <div className="about-photo">
            <Image
              src="https://images.unsplash.com/photo-1568992687947-868a62a9f521?auto=format&fit=crop&w=900&q=80"
              alt="Travel consultant reviewing a client's documents at a desk"
              width={700}
              height={560}
            />
          </div>
        </Reveal>
        <Reveal delay={0.12}>
          <div className="about-copy">
            <span className="kicker">Who We Are</span>
            <h2>A travel desk built around your paperwork, not just your ticket</h2>
            <p>
              Most travel plans don&apos;t fall apart at the airport — they fall
              apart weeks earlier, in a missing document or a missed deadline.
              Akwantufuo Travel Consult exists to close that gap: one desk that
              handles your flight, your visa file and your university
              admission together, so nothing slips between departments.
            </p>
            <p>
              Based opposite the MTN office in Agona Swedru, our consultants
              work face-to-face with clients across the Central Region, and
              remotely with clients further afield, from first enquiry through
              to the day you fly.
            </p>
            <a href="#contact" className="btn btn--ghost">
              Talk To A Consultant
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
