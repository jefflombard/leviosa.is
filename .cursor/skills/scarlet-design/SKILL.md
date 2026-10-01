---
name: scarlet-design
description: Scarlet's design system - typography, color, spacing, motion, and component rules. Use whenever creating or modifying UI in this theme (new pages, sections, components) so the result matches Scarlet's visual language.
---

# Scarlet design system

Scarlet is a dental clinic theme with a calm, friendly look: warm off-white
grounds, a muted sage palette, soft rounded cards, sage-tinted photography,
and a signature notch tab cut into the bottom-right corner of photos. New UI
you build here should be indistinguishable from the existing pages.

## Design personality

- Calm, not clinical: warm neutrals and sage instead of hospital white and blue.
- Cards carry everything: content sits in `bg-muted` rounded cards separated
  by a tight `gap-2`, never in bordered boxes.
- Photography is tinted, not colorful: every photo is `grayscale
  mix-blend-screen` over a `bg-primary` panel, which turns it sage.
- The notch is the signature: a `bg-background` tab with inverted corners
  holds a label and a round arrow button in the bottom-right of a photo.
- Quiet motion: panels rise, photos unmask, headlines slide up line by line.

## Typography

One font, **DM Sans**, set in `src/styles/global.css` and loaded in
`fundations/head/Fonts.astro`. `font-display` (headings, 600) and
`font-sans` (everything else, 400) both point at it. No serif, no mono,
never another font.

Always use the `Text` component (`@/components/fundations/elements/Text.astro`)
instead of raw tags with ad-hoc sizes. Variants: `display2XL`, `displayXL`,
`displayLG`, `displayMD`, `displaySM`, `displayXS`, then `textXL`, `textLG`,
`textBase`, `textSM`, `textXS`. Real usage:

- **Page title (stacked hero):** `tag="h1" variant="display2XL"` +
  `max-w-4xl font-display tracking-tight text-balance`.
- **Split hero title:** `tag="h1" variant="displayLG"` + `font-display
  tracking-tight text-balance`.
- **Section heading:** `tag="h2" variant="displayXL"` (or `displayLG`) +
  `font-display tracking-tight text-balance`.
- **Card title:** `tag="h3" variant="textXL"` + `font-display tracking-tight`.
- **Lead paragraph:** `variant="textLG"` + `text-muted-foreground
  text-pretty`, usually `max-w-xl`.
- **Labels and metadata:** `variant="textSM"` + `text-muted-foreground`;
  values beneath them are `textBase font-medium`.

Headings are always sentence case with `tracking-tight`. Weights are 400
for body, 500 (`font-medium`) for navigation, labels, values and buttons,
and 600 for headings: `font-display` sets 600 by default. Nothing above 600.
Never `font-bold`, never uppercase with wide tracking.

## Color system

Tokens live in `src/styles/global.css` under `@theme`, shadcn style:
`background`, `foreground`, `muted`, `muted-foreground`, `primary`,
`primary-foreground`, `secondary`, `secondary-foreground`, `accent`,
`accent-foreground`, `border`, `ring`. No other palette names exist - never
Tailwind defaults like `gray`/`green`/`slate`, never hex values in markup.

Usage rules:

- The page is `bg-background` (warm off-white). Cards are `bg-muted`.
- `primary` (deep sage) is for buttons, photo panels and a few dark feature
  panels (emergency line, footer, tips). Text on it is
  `text-primary-foreground`, faded to `/70` at most for secondary copy -
  lower opacities fail contrast.
- `secondary` (light sage) is for friendly feature panels, like the children
  hero. `accent` is scarce: the "Buy" button and small highlights.
- A single button on a dark sage panel uses `variant="muted"`.
- Borders are `border-border`, or `border-foreground/10` inside muted cards.
- There is **no dark mode**; don't add `dark:` classes.

## Layout and spacing

- Every section is `<section>` wrapping `Wrapper`
  (`@/components/fundations/containers/Wrapper.astro`): `variant="standard"`
  for pages, `full` for edge-to-edge, `prose` for markdown bodies. Don't
  hand-roll `max-w-* mx-auto` containers.
- Section padding goes on the Wrapper: `py-24` almost everywhere; split
  heroes use `pt-6` so they sit just under the navigation.
- Spacing flows downward: use `mt-*`, never `mb-*`. Heading to lead is
  `gap-6` or `mt-4`; heading area to content is `mt-12`.
- Grids of cards use `gap-2` so the cards read as one surface
  (`grid gap-2 sm:grid-cols-2`, `lg:grid-cols-3`).
- No arbitrary values (`w-[37px]`); use the scale and the theme tokens.

### The split hero

The house hero pattern, used on most pages:

```astro
<Wrapper variant="standard" class="pt-6">
  <div data-hero class="grid gap-2 lg:min-h-hero lg:grid-cols-2">
    <div class="flex flex-col justify-between gap-16 rounded-3xl bg-muted p-6 sm:p-10 lg:rounded-4xl lg:p-12">
      <!-- h1, lead, buttons on top; a <dl> of facts at the bottom -->
    </div>
    <div class="relative aspect-4/5 overflow-hidden rounded-3xl bg-primary sm:aspect-4/3 lg:aspect-auto lg:rounded-4xl">
      <Image src={photo} alt="..." class="absolute inset-0 size-full object-cover grayscale mix-blend-screen" />
      <!-- optional notch tab -->
    </div>
  </div>
</Wrapper>
```

`lg:min-h-hero` fills the screen below the navigation (`--spacing-hero`).

## Components

Reuse these before writing anything new:

- **Button** (`fundations/elements/Button.astro`): pill-shaped, `rounded-full`
  baked in. Variants `primary`, `muted`, `accent`, `none`. Sizes `xxs` to
  `xl`; `iconOnly` adds `2xl` (`size-16`, used in notches). `isLink` + `href`
  renders an anchor. Hero and navigation buttons pass `outline={false}`.
- **Arrow pair:** a primary CTA is a text button followed by an `iconOnly`
  arrow button in a `group` wrapper; the arrow rotates `-45deg` on hover.
- **Notch tab:** `absolute right-0 bottom-0 rounded-tl-5xl bg-background pt-3
  pl-3` (or `pl-8` with a label), two `Corner` icons (`@/icons/corner.svg`)
  at `right-full bottom-0` and `right-0 bottom-full` in `text-background`,
  and a `size="2xl" iconOnly` arrow button. Add `data-notch`.
- **Cards:** `TreatmentCard`, `TeamCard`, `StoryCard`, `BlogCard`, `RoleCard`
  in their folders. Linked cards are a `group relative` with a stretched
  link or an `after:absolute after:inset-0` button.
- **Text** and **Wrapper**: the only type scale and page container.
- Icons are SVGs in `src/icons/` imported as components
  (`import ArrowRight from "@/icons/arrow-right.svg"`), thin line style.
  Add new ones there in the same stroke style instead of icon packs.
- Links are never underlined.

## Corners, borders, shadows

- Radius policy: `rounded-3xl` on mobile and `lg:rounded-4xl` on desktop for
  cards and photo panels, `rounded-tl-5xl` for notch tabs, `rounded-full`
  for buttons, avatars and pills.
- No drop shadows. Separation comes from the `gap-2` between cards and the
  contrast between `bg-background` and `bg-muted`.

## Motion

All motion lives in `fundations/scripts/Motion.astro` (GSAP + ScrollTrigger +
SplitText, Lenis smooth scroll). Tag elements instead of writing scripts:

- `data-hero` on every page's opening block.
- `data-animate="fade-up" data-stagger="0.08"` on repeated grids.
- `data-notch` on notch tabs and corner arrows, `data-zoom` on photos whose
  parent has `overflow-hidden`, `data-draw` on SVG line art.

Reduced motion is handled by the script. Never add CSS keyframes or another
animation library for entrances.

## Voice and copy

Warm, plain and reassuring, like a good front desk: "A smile is the simplest
thing you can wear.", "Talk to a real person, not a booking bot." Headings
are short sentence-case statements that end with a full stop. Prices are in
euros (`€85`), times use `8:00 to 18:00`. People have Spanish, Nordic or
Italian names; the brand is Scarlet; emails use `@scarlet.example`. No
exclamation marks, no emoji, no medical jargon without a plain explanation.

## Do / Don't

Do:

- Copy an existing section's structure (split hero, card grid, dark panel)
  before inventing a new layout.
- Tint every photo with `grayscale mix-blend-screen` on `bg-primary`.
- Use `text-balance` / `text-pretty` on headings and leads.
- Tag new heroes and grids so they animate like the rest of the site.

Don't:

- Don't add shadows, gradients, borders around cards or colorful photos.
- Don't use Tailwind default palettes, hex values or arbitrary values.
- Don't use `mb-*`, underlined links or uppercase tracked labels.
- Don't fade `text-primary-foreground` below `/70` on dark panels.
- Don't inline a heading with raw classes when `Text` has a variant for it.

## Quality check before finishing

1. Fonts, colors and spacing come from existing tokens and match a sibling
   section.
2. The section reads correctly at `sm`, `md` and `lg` breakpoints.
3. Headings use `Text` variants in order (one `h1`, no skipped levels);
   buttons use `Button` variants.
4. New heroes and grids carry their motion attributes.
5. No new dependencies, no unused imports, minimal diff.
