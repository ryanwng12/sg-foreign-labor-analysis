# Migration Globe — Visualization

A scrollytelling 3D globe showing where Singapore's migrants come from, animated across 7 UN DESA snapshots (1990–2020).

---

## What It Shows

As the user scrolls, the year advances from 1990 to 2020. Animated plane icons fly along great-circle arcs from 15 origin countries to Singapore, with plane count proportional to the rate of migration change. Origin countries are tinted by migrant stock on a sqrt colour scale.

## Interaction

| Action | Effect |
|--------|--------|
| **Scroll** | Advances the year from 1990 → 2020 |
| **Hover** country | Highlights that arc, shows tooltip with country name, stock, and sparkline |
| **Click** country | Pins the selection (click again to dismiss) |
| **Drag** globe | Rotates to see countries on the far side |
| **Filters** (top right) | Globe ↔ Equal Earth projection, per-country toggles, direction filter |

## Visual Encoding

| Element | Encoding |
|---------|----------|
| Plane count per arc | Rate of migration change (log scale, capped at 20/arc) |
| Plane direction | Cyan = inbound (stock growing) · Rose = outbound (stock shrinking) |
| Country fill | Migrant stock on a sqrt colour ramp (stable across all years) |
| Arc opacity | 0.35 ambient · 1.0 hovered/selected · 0.10 dimmed |

## Data

15 origin countries from the UN DESA International Migrant Stock 2020 release: Malaysia, China, Indonesia, India, Pakistan, Bangladesh, Hong Kong SAR, Philippines, Sri Lanka, Thailand, Macao SAR, United States, Australia, Canada, New Zealand.

"Migrant" = foreign-born residents at mid-year (workers, students, dependents, PRs).

## Related

- Source code: [`../../src/globe/`](../../src/globe/)
- Data: [`../../data/raw/migration/`](../../data/raw/migration/)
- Pipeline: [`../../pipeline/globe/`](../../pipeline/globe/)
