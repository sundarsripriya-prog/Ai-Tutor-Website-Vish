# Design System: The Infinite Tutor

One design file for building this project's React site. It merges two reverse-engineered references, Ditto (trustditto.com) and Mode (mode.com), with the clean minimal structure of Cal.com, into a single system with one answer for every design question. Follow this file exactly. Where the two references disagreed, this file has already made the choice.

## Direction in one paragraph

A botanical editorial SaaS look. The page canvas is pale sage, not white. Headlines are a large serif with tight letter spacing that reads like a magazine cover. Body and UI text are a clean sans-serif. One bright chartreuse accent punctuates the page. Depth comes from stacking flat colors (sage, paper white, deep forest, chartreuse), never from shadows. The mood is confident, warm, and intellectual: a site about learning that looks like it was designed by someone with taste, not generated from a template.

## Hard rules

1. No animations, no transitions, no keyframes, no scroll effects, no motion of any kind. Hover states may only swap a color. A color swap is allowed because it is not motion.
2. No box shadows anywhere. Hierarchy comes from the color stack.
3. No em dashes in any copy. Use commas, colons, periods, or parentheses.
4. The build must stay explainable: one CSS file with all tokens at the top, state-based navigation (useState), no router library, no UI libraries, comments on every component.
5. All content comes from research.md. No invented facts and no invented numbers.

## Color tokens

| Name | Value | Role |
|---|---|---|
| Sage Canvas | `#eef2e3` | Page background. Never use pure white as the page background. |
| Paper White | `#fcfcfc` | Elevated cards, nav bar, footer. The only near-white surface. |
| Deep Forest | `#043f2e` | Primary text on light surfaces, dark section backgrounds, headings. |
| Forest Mid | `#2a6f2b` | Hover state for forest elements. Nothing else. |
| Chartreuse | `#c8f169` | The single accent: active nav pill, tags, highlight marks, stat labels on dark. One chromatic accent per viewport. |
| Ink Black | `#000000` | Hairline borders and fine strokes only. |
| Slate | `#5f5c6e` | Muted helper text only, never primary body text. |

The surface stack, from back to front: Sage Canvas, then Paper White cards, then Deep Forest dark bands, with Chartreuse as the small chromatic punctuation on top. Text on sage or paper is Deep Forest. Text on forest is Paper White.

## Typography

Two families, strict roles, loaded from Google Fonts.

**Fraunces (serif, the voice).** All headlines from 32px up. Weight 400 or 500 only, never bold: size and tight tracking carry the authority. Letter spacing is negative and grows with size, from -0.02em at 36px to about -0.03em at 64px and above. Line height 1.0 to 1.15.

**Inter (sans, the workhorse).** Everything else: body, nav, buttons, labels, captions. Weight 400 for body, 500 for nav and labels, 600 only for small emphasis. Body is 16 to 17px with line height 1.5 to 1.65. Never use Inter for headings 32px and above, and never use Fraunces below 22px.

**The contrast move (bold vs. sharp cursive).** Headlines get their character from mixing roman and italic inside one line. The main statement sits in upright Fraunces, and one or two key words switch to Fraunces italic, which has a sharp, calligraphic feel. Example hero: "A personal tutor for *every student*" with the last two words italic. Use this on the hero and at most one or two section headings per page. It replaces color and boldness as the emphasis tool: never bold a headline word and never color one.

**Eyebrow labels.** A short uppercase Inter label, 12 to 13px, weight 500, letter spacing +0.06em, Deep Forest, sitting 12px above a section heading. Use one per major section so the reader always knows what zone of the page they are in (for example HISTORY, ECONOMY, THE EVIDENCE).

**Type scale:** 12 caption, 14 small, 16 body, 18 subheading, 22 small heading, 36 heading, 48 large heading, 64 display. Desktop hero may reach 72px. On screens under 640px, cap display at 40 to 44px.

## Spacing, radii, layout

- Base spacing unit 8px. Section gaps 56 to 80px. Card padding 24 to 32px. Element gaps 12 to 16px.
- Exactly two radii plus the pill: 4px for buttons and inputs, 16px for cards and large surfaces, 9999px for small tags and the active nav pill. Never any other radius.
- Page content max width 1120px, centered, with 24px side padding. Reading text inside sections stays at a max of 65 characters per line.
- Sections alternate between the sage canvas and full-width Paper White or Deep Forest bands, which creates the landing-page rhythm without any images.
- Navigation is a Paper White top bar: wordmark left in Fraunces, page links right in Inter 500. The active page link sits in a Chartreuse pill with Deep Forest text. Not sticky.

## Component recipes

**Hero (Home only).** Full sage band, 80px vertical padding. Eyebrow, then the display headline with the italic contrast move, then a lede paragraph in Inter 18px Slate-free Deep Forest at 60 characters max, then two link-style buttons (4px radius): a Chartreuse filled one jumping to Impacts and a hairline ghost one jumping to Sources. Centered, single column: the statement is the visual.

**Eyebrow + heading pair.** The standard opener for every section on every page.

**Paper card.** Paper White, 16px radius, 24 to 32px padding, no border, no shadow. Used for the gains and costs columns, source entries, and the classification block.

**Forest stat card.** Deep Forest background, 16px radius, Paper White number in Fraunces 48px, above it a small uppercase Chartreuse label in Inter 12px. Used once, as a row of three on the Recommendation page for the +48, minus 17, and +127 findings. This dark band is the most dramatic moment on the site, so it appears exactly once.

**Gains and costs pair.** Two Paper cards side by side on sage, stacking to one column under 640px. The gains heading in Deep Forest, the costs heading in a muted rust `#8a4b2d`, the only place that color exists.

**Tag.** Chartreuse or sage background, Deep Forest text, pill radius, Inter 13px 500. Used sparingly for things like "peer reviewed" markers on the Sources page.

**Timeline (Home).** Keep the existing left-border list, with the border in Deep Forest and years in Fraunces.

**Footer.** Paper White band, small Inter text in Slate, one line about the project and a pointer to the Sources page.

## Page map

- **Home:** hero, then What counts as an AI tutor (sage), Classification (three Paper cards), History (sage, timeline), How people use them today (Paper White band).
- **Impacts:** short hero-style opener without buttons, then Economy, Culture, Environment, each as eyebrow + heading + full paragraphs + a gains and costs pair. Callout pointing to Recommendation.
- **Recommendation:** opener stating the concern, The Evidence with the forest stat band, the objection section, the three-part recommendation, closing callout.
- **Sources:** opener, then Paper cards grouped by tier, ending with the contested two sigma explanation.

## Do

- Keep all body text Deep Forest on sage or paper; the very high contrast is the point.
- Force hierarchy through size and the roman-italic mix, never through bolding headline words.
- Use exactly one Chartreuse element per viewport.
- Let whitespace do the organizing; when in doubt, add space, not a border.
- Keep every statistic attached to its full plain-language explanation from research.md.

## Don't

- No shadows, no gradients, no more than the listed colors, no third font.
- No all-caps text except the 12 to 13px eyebrow labels.
- No pure white page background and no gray text for primary content.
- No decorative images, stock photos, or icon packs. Type and color are the whole visual identity.
- No component that cannot be explained in one sentence.

## CSS quick start

```css
:root {
  --sage: #eef2e3;
  --paper: #fcfcfc;
  --forest: #043f2e;
  --forest-mid: #2a6f2b;
  --chartreuse: #c8f169;
  --ink: #000000;
  --slate: #5f5c6e;
  --rust: #8a4b2d;

  --font-display: 'Fraunces', Georgia, serif;
  --font-body: 'Inter', system-ui, sans-serif;

  --radius-btn: 4px;
  --radius-card: 16px;
  --radius-pill: 9999px;

  --max-page: 1120px;
  --max-text: 65ch;
  --gap-section: 72px;
  --pad-card: 28px;
}
```

Load fonts with: Fraunces 400 and 500 with italics, Inter 400, 500, 600.
