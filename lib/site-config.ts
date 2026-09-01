// Central place for business details, sourced from environment variables.
//
// Copy .env.example to .env.local and fill in the real values — nothing
// here needs to be edited directly once that file is set up. Because the
// phone numbers, address and links are shown in the browser (not used for
// secrets), each variable is prefixed with NEXT_PUBLIC_ so Next.js exposes
// it to client components as well as the server.

function env(name: string, fallback: string) {
  const value = process.env[name];
  return value && value.length > 0 ? value : fallback;
}

export const siteConfig = {
  name: env("NEXT_PUBLIC_SITE_NAME", "Akwantufuo Travel Consult"),
  url: env("NEXT_PUBLIC_SITE_URL", "https://www.akwantufuo.com"),

  phonePrimary: env("NEXT_PUBLIC_PHONE_PRIMARY", "[Phone number 1]"),
  phoneSecondary: env("NEXT_PUBLIC_PHONE_SECONDARY", "[Phone number 2]"),
  whatsappNumber: env("NEXT_PUBLIC_WHATSAPP_NUMBER", "233000000000"),
  email: env("NEXT_PUBLIC_EMAIL", "[email address]"),

  addressLine1: env("NEXT_PUBLIC_ADDRESS_LINE1", "[Office address]"),
  addressLine2: env(
    "NEXT_PUBLIC_ADDRESS_LINE2",
    "Agona Swedru, Central Region, Ghana"
  ),
  digitalGps: env("NEXT_PUBLIC_DIGITAL_GPS", "[Digital GPS address]"),

  facebookUrl: env("NEXT_PUBLIC_FACEBOOK_URL", "https://facebook.com"),
  tiktokUrl: env("NEXT_PUBLIC_TIKTOK_URL", "https://tiktok.com"),
  linkedinUrl: env("NEXT_PUBLIC_LINKEDIN_URL", "https://linkedin.com"),

  mapEmbedUrl: env("NEXT_PUBLIC_MAP_EMBED_URL", ""),

  // Where the contact form submits to. Point this at a form-relay
  // service (e.g. a Formspree endpoint) when one is set up.
  contactFormEndpoint: env("NEXT_PUBLIC_CONTACT_FORM_ENDPOINT", ""),
};

export function whatsappLink(message: string) {
  return `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(
    message
  )}`;
}
