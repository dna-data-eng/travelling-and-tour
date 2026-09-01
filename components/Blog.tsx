import Image from "next/image";
import { blogPosts } from "@/lib/data";
import Reveal from "@/components/Reveal";

export default function Blog() {
  return (
    <section className="section">
      <div className="container">
        <Reveal>
          <div className="section-head">
            <span className="kicker">Stay Informed</span>
            <h2>Updates worth knowing before you file</h2>
          </div>
        </Reveal>

        <div className="blog-grid">
          {blogPosts.map((post, i) => (
            <article className="blog-card" key={i}>
              <div className="blog-photo">
                <Image
                  src={post.image}
                  alt={post.title}
                  width={700}
                  height={440}
                />
              </div>
              <div className="blog-body">
                <div className="blog-meta">
                  {post.category} · {post.date}
                </div>
                <h4>{post.title}</h4>
                <p>{post.excerpt}</p>
                <span className="blog-link">Read more</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
