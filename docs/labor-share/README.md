# Foreign Labor Share — Visualization

A scroll-driven animated dashboard showing how Singapore's foreign workforce share evolved across GDP sectors from 1990 to 2025.

---

## Layout

The visualization is a single self-contained HTML file (`labor-share.html`) using a `position: sticky` scroll-sync pattern. As the user scrolls, the year advances from 1990 to 2025 and all charts update in lockstep.

### Panels

| Panel | Chart Type | What It Shows |
|-------|-----------|---------------|
| **Overview** | Stacked area | Economy-wide resident vs. non-resident employment over time |
| **Sector bars** | Horizontal stacked bar | Per-sector breakdown for the current scroll year |
| **KPI cards** | Numeric badges | Total employment, non-resident share %, and year-on-year deltas |
| **Timeline track** | Progress bar | Visual anchor showing the current year position within 1990–2025 |

### Comparison Mode

Clicking any sector bar opens a detail view with a bump chart (rank over time) and a focused area chart for that sector, alongside the economy-wide context.

## Visual Encoding

| Element | Encoding |
|---------|----------|
| Blue fill | Resident employment |
| Orange fill | Non-resident employment |
| Bar width | Sector total employment |
| Bar segment | Resident / non-resident split |
| KPI delta badge | Green (↑) / red (↓) year-on-year change |

## Data

Draws from MOM, SingStat, and DOS sources covering 12 SSIC 2020 sectors. Pre-2009 sector-level resident/non-resident splits are reconstructed from cumulative employment-change data.

## Related

- Source code: [`../../src/labor-share.html`](../../src/labor-share.html)
- Data: [`../../data/`](../../data/) (`d3_overview.json`, `d3_timeseries.json`, `d3_sectors.json`)
- Pipeline: [`../../pipeline/labor-share/`](../../pipeline/labor-share/)
- Pipeline: [`../../pipeline/labor-share/`](../../pipeline/labor-share/)
