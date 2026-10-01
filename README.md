# Scarlet

A dental clinic theme for Astro and Tailwind CSS, by [Lexington Themes](https://lexingtonthemes.com).

## Pages

- Home, About, Our clinic, Contact
- Book a visit, New patients, Emergency, Pricing, Children
- Reviews, FAQ, 404
- Treatments, Team, Blog, Smile stories and Careers, each with index and detail pages
- System pages for colors, typography, buttons and links, plus an overview of every page

## Content collections

All content lives in `src/content` as Markdown, with schemas in `src/content.config.ts`.

| Collection   | Folder                   | Used for                                   |
| :----------- | :----------------------- | :----------------------------------------- |
| `treatments` | `src/content/treatments` | Treatment pages, price, steps and FAQs     |
| `team`       | `src/content/team`       | Team profiles and the treatments they lead |
| `posts`      | `src/content/posts`      | Blog posts, with author and treatment      |
| `stories`    | `src/content/stories`    | Smile stories, linked to a treatment       |
| `roles`      | `src/content/roles`      | Open roles on the careers page             |
| `legal`      | `src/content/legal`      | Privacy, terms and cookie pages            |

## Customizing

- **Colors:** every color is a token in `src/styles/global.css` (`background`, `foreground`, `primary`, `accent` and so on). Change them there and the whole site follows.
- **Fonts:** loaded in `src/components/fundations/head/Fonts.astro` and set as `--font-sans` and `--font-display` in `src/styles/global.css`.
- **Navigation and footer:** `src/components/global/Navigation.astro` and `src/components/global/Footer.astro`.
- **Hero height:** split heroes fill the screen with `lg:min-h-hero`, set as `--spacing-hero` in `src/styles/global.css`. If you change the navigation height, update that value.
- **Map:** the clinic map on the Our clinic page is an OpenStreetMap embed. Set your own location in the `map` object at the top of `src/components/clinic/Access.astro`.
- **Forms:** the contact and booking forms are static markup. Connect them to the form service of your choice.

## Motion

Scarlet uses [GSAP](https://gsap.com) with ScrollTrigger and SplitText for animation, and [Lenis](https://lenis.darkroom.engineering) for smooth scrolling. Everything runs from one script, `src/components/fundations/scripts/Motion.astro`, which is loaded once in `src/layouts/BaseLayout.astro`.

Nothing moves unless it is tagged. Add a data attribute to any element:

| Attribute                                         | When           | What it does                                                        |
| :------------------------------------------------ | :------------- | :------------------------------------------------------------------ |
| `data-hero`                                       | On page load   | Panels rise, photo panels unmask and settle, the `h1` slides up line by line |
| `data-animate="fade-up"` + `data-stagger="0.08"` | On scroll      | Each child rises in turn. Use it on grids of cards, steps or stats  |
| `data-animate="fade-in"` + `data-delay="0.2"`    | On scroll      | One element. Presets are `fade-up`, `fade-in` and `scale-in`        |
| `data-notch`                                      | On scroll      | A corner tab or arrow pops out of the bottom-right corner           |
| `data-zoom`                                       | On scroll      | A photo settles from a slight zoom. Its parent needs `overflow-hidden` |
| `data-draw`                                       | On scroll      | SVG strokes draw themselves, then any dots inside pop in            |

Examples:

```astro
<div data-hero class="grid gap-2 lg:grid-cols-2">
  <div>...headline and text...</div>
  <div class="relative overflow-hidden">
    <Image src={photo} alt="" class="absolute inset-0 size-full object-cover" />
  </div>
</div>

<div data-animate="fade-up" data-stagger="0.08" class="grid gap-2 sm:grid-cols-2">
  {treatments.map((treatment) => <TreatmentCard treatment={treatment} />)}
</div>
```

In a `data-hero`, photo panels are the children that have an `<img>` as a direct child. Every other child is treated as a text panel.

Durations and presets live at the top of the script inside `Motion.astro`.

### Turning it off

- **For everyone:** set `const animations = true;` to `false` at the top of the script in `Motion.astro`. Elements show in place, and smooth scrolling is off too. Accordions and the navigation still work.
- **For one element:** remove its data attribute.
- **Reduced motion:** visitors who ask for reduced motion in their system settings get no animation automatically.

## Commands

All commands are run from the root of the project:

| Command           | Action                                       |
| :---------------- | :------------------------------------------- |
| `npm install`     | Installs dependencies                        |
| `npm run dev`     | Starts the dev server at `localhost:4321`    |
| `npm run build`   | Builds the production site to `./dist/`      |
| `npm run preview` | Previews the build locally before deploying  |

## Documentation

See the Lexington [documentation](https://lexingtonthemes.com/documentation/quick-start/) for setup and deployment guides.
