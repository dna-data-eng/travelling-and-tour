import { siteConfig } from "@/lib/site-config";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-col">
            <h4>{siteConfig.name}</h4>
            <p style={{ fontSize: "0.9rem", marginTop: 8 }}>
              Flight booking, visa support and study/work abroad placement
              from Agona Swedru, Central Region.
            </p>
            <div className="footer-social">
              <a href={siteConfig.facebookUrl} target="_blank" rel="noreferrer">
                Facebook
              </a>
              <a href={siteConfig.tiktokUrl} target="_blank" rel="noreferrer">
                TikTok
              </a>
              <a href={siteConfig.linkedinUrl} target="_blank" rel="noreferrer">
                LinkedIn
              </a>
            </div>
          </div>

          <div className="footer-col">
            <h4>Explore</h4>
            <ul>
              <li><a href="#services">Services</a></li>
              <li><a href="#destinations">Destinations</a></li>
              <li><a href="#process">How It Works</a></li>
              <li><a href="#about">About Us</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Support</h4>
            <ul>
              <li><a href="#faq">FAQ</a></li>
              <li><a href="#contact">Contact</a></li>
              <li>{siteConfig.phonePrimary}</li>
              <li>{siteConfig.email}</li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Office</h4>
            <ul>
              <li>{siteConfig.addressLine1}</li>
              <li>{siteConfig.addressLine2}</li>
              <li>GPS: {siteConfig.digitalGps}</li>
            </ul>
          </div>
        </div>

        <div className="hairline hairline--ink" />
        <div className="footer-bottom">
          © {new Date().getFullYear()} {siteConfig.name}. All rights
          reserved.
        </div>
      </div>
    </footer>
  );
}
