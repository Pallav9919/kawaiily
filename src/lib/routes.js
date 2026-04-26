// Maps URL paths (/c/:slug) to categories + unique SEO meta.
// NOTE: for real SEO (Google sees unique titles), we'd need to prerender these
// at build time. Current implementation sets <title> via useEffect, which works
// for user-facing browsing but not for crawlers. Upgrade path: vite-plugin-ssg.

export const CATEGORY_ROUTES = {
  "valentine": {
    category: "valentines-week",
    title: "Valentine's Week Cards — Kawaiily",
    description:
      "Send a personalised Valentine's Week card — Rose Day, Propose Day, Chocolate Day, Teddy Day, Promise Day, Hug Day, Kiss Day and Valentine's Day. Free, share with a link.",
    h1: "Valentine's Week cards",
  },
  "birthday": {
    category: "birthday",
    title: "Birthday Cards — Kawaiily",
    description:
      "Send a free personalised birthday card with a shareable link. Multiple designs, Hindi & English options, no sign-up.",
    h1: "Birthday cards",
  },
  "love": {
    category: "love",
    title: "Love Cards — Kawaiily",
    description:
      "Share a heartfelt love note with a personalised card. Free to create, share with a link.",
    h1: "Love cards",
  },
  "friendship": {
    category: "friendship",
    title: "Friendship Cards — Kawaiily",
    description:
      "Celebrate your best friend with a free personalised card. Multiple designs, instant sharing.",
    h1: "Friendship cards",
  },
  "festival": {
    category: "festival",
    title: "Festival Cards — Kawaiily",
    description:
      "Send Diwali, Holi, Eid, Christmas, Raksha Bandhan, Ganesh Chaturthi and more festival wishes with beautiful personalised cards.",
    h1: "Festival cards",
  },
  "thank-you": {
    category: "thanks",
    title: "Thank You Cards — Kawaiily",
    description:
      "Say thank you with a heartfelt personalised card — free, instant share.",
    h1: "Thank you cards",
  },
  "miss-you": {
    category: "miss",
    title: "Miss You Cards — Kawaiily",
    description:
      "Tell someone you miss them with a warm, personalised card. Free, shareable link.",
    h1: "Miss you cards",
  },
  "sorry": {
    category: "sorry",
    title: "Sorry Cards — Kawaiily",
    description:
      "A soft way to say sorry. Create a personalised apology card and share with a link.",
    h1: "Sorry cards",
  },
  "everyday": {
    category: "everyday",
    title: "Everyday Cards — Kawaiily",
    description:
      "Good morning, good night, get well soon — simple everyday personalised cards, free to send.",
    h1: "Everyday cards",
  },
};

// Parse /c/:slug from pathname. Returns null if not a category route.
export const parseCategoryRoute = (pathname) => {
  const m = pathname.match(/^\/c\/([a-z-]+)\/?$/i);
  if (!m) return null;
  return CATEGORY_ROUTES[m[1]] || null;
};
