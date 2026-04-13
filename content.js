/**
 * ═══════════════════════════════════════════════════════════════
 *  CONTENT.JS — All editable text lives here.
 *  Edit freely; you won't break any visualization code.
 *
 *  Rules:
 *    • Keep each value as a plain string (wrap in backticks `` for multi-line).
 *    • HTML tags are OK inside strings (e.g. <span>, <br>, <strong>).
 *    • Do NOT rename the keys (left side of the colon).
 * ═══════════════════════════════════════════════════════════════
 */
const CONTENT = {

  // ── HERO ──
  hero: {
    overline: "CS5346 Information Visualization",
    title: "Are Singaporeans Being Replaced by Foreign Labour?",
    subtitle: `A multi-dimensional visual explainer combining 35 years of sector-level
      employment data, global migration flows, and public sentiment analysis
      across 4,000+ online posts.`,
    scrollCue: "↓ Scroll to explore",
  },

  // ── VIZ 1: Stance Chart ──
  stance: {
    num: "Visualization 1",
    title: "The Overall Picture of Public Sentiment",
    desc: `Each of 4,063 online posts (Reddit + The Independent SG, 2015 – 2025) was
      classified as <span class="inline-anti">concerned</span>,
      <span class="inline-pro">supportive</span>, or neutral. This diverging bar chart
      shows sentiment by topic.`,
  },

  // ── VIZ 2: Word Clouds ──
  clouds: {
    num: "Visualization 2",
    title: "Two Different Worldviews",
    desc: `The same dataset, split by stance. Word size encodes how often a theme appears.
      Hover for exact counts.`,
    labelAnti: "Concerns",
    labelPro: "Support",
  },

  // ── VIZ 3: Globe ──
  globe: {
    num: "Visualization 3",
    title: "Where Do They Come From?",
    desc: `An interactive 3D globe tracking migrant stock flows from 15 origin countries
      into Singapore (1990 – 2020). Scroll to advance through time. Hover for
      sparklines; drag to rotate.`,
  },

  // ── VIZ 4: Labor Share ──
  laborShare: {
    num: "Visualization 4",
    title: "The Changing Face of Singapore's Workforce",
    desc: `Scroll through 36 years of employment data (1990 – 2025). The area chart shows
      aggregate resident vs. non-resident employment; the bar chart breaks it down across
      11 sectors. Scroll inside the panel to advance through time.`,
  },

  // ── FOOTER ──
  footer: "CS5346 Information Visualization · National University of Singapore",
};
