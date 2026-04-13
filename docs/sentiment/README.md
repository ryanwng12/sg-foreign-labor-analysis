# Sentiment Analysis — Visualization

Two complementary D3.js charts that reveal Singaporean online sentiment toward foreign workers, built from ~4,000 classified posts (2015–2025).

---

## Charts

### Diverging Bar Chart

Exposes the overall sentiment landscape by topic. Each bar extends left (concerned) or right (supportive) from a shared zero baseline, with bar length encoding post count.

Six topic categories: Policy & Government, Worker Welfare & Rights, Jobs & Employment, Identity & Culture, Economy & Wages, General.

### Word / Theme Clouds

Contrasts the specific language of each sentiment camp. Word size encodes theme frequency; colour matches the bar chart palette. Two clouds are rendered side by side — concerned themes on the left, supportive on the right.

## Visual Encoding

| Element | Encoding |
|---------|----------|
| Bar length | Post count per topic × stance |
| Bar colour | Red (#e15759) = concerned · Blue (#4e79a7) = supportive · Grey = neutral |
| Word size | Theme frequency within stance |
| Word colour | Same red / blue palette |

Palette follows Tableau's colourblind-safe defaults.

## Data

~4,063 posts scraped from Reddit (r/singapore, r/askSingapore, r/SingaporeRaw) and The Independent Singapore, classified by GPT-4o-mini into stance, topic, and themes.

## Limitations

- Reddit dominates at ~93% — findings are not representative of general public opinion
- 2015–2017 data is sparse
- LLM classification has an estimated 5–10% error rate

## Related

- Source code: [`../../src/sentiment/`](../../src/sentiment/)
- Data: [`../../data/raw/sentiment/`](../../data/raw/sentiment/)
- Pipeline details: [`../../pipeline/sentiment/`](../../pipeline/sentiment/)
