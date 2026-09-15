# Sri Saye Magesh N — Portfolio

Portfolio site for Sri Saye Magesh N — MBA (PGPM) candidate, Great Lakes Chennai. Single page. Static, dependency-free, no build step. Deployed on GitHub Pages.

**Live:** https://akaditya12.github.io/sai-magesh-portfolio/

---

## Status

**Live with real content.** Structure, theme, interactions and copy are all in. A small
`DRAFT BUILD · CONTENT PENDING` chip shows bottom-left until the portrait and the remaining
confirmations land — see [CONTENT.md](CONTENT.md). Set `draft: false` in `content.js` to hide it.

---

## Editing the content

**All text lives in one file: [`assets/js/content.js`](assets/js/content.js).** Nothing else needs
touching to change wording, add a project, or update the contact details.

| To change | Edit |
|---|---|
| Name, role, tagline, hero counters | `name`, `role`, `kicker`, `blurb`, `stats` |
| About paragraphs, tags, side panel facts | `about` |
| Skill groups and proficiency bars | `skills` |
| Work history | `experience` |
| Project cards and filter categories | `projects` |
| Degrees and certifications | `education` |
| Awards and milestones | `achievements` |
| Email, phone, LinkedIn, GitHub | `contact` |

### Adding the photo and résumé

| File | Drop it at | Then set |
|---|---|---|
| Portrait | `assets/img/portrait.jpg` | `about.portrait: "assets/img/portrait.jpg"` |
| Résumé PDF | `assets/docs/resume.pdf` | `resume: "assets/docs/resume.pdf"` |

Portrait works best at 4:5, at least 800 × 1000 px. If `about.portrait` is left empty the panel
shows a marked placeholder instead of breaking.

### Writing the bullets

Experience bullets follow one shape: **action verb → what → how or at what scale → measurable
outcome.** "Cut assembly rework by 18% across three lines" beats "responsible for quality".

Skill levels are 0–100 and should be honest. Everything at 95 communicates nothing.

---

## Running it locally

Open `index.html` in a browser. That is the whole procedure — there is no server requirement,
no npm install, no build.

To preview exactly as GitHub Pages serves it:

```bash
python3 -m http.server 8000
# then open http://localhost:8000
```

---

## Deploying

The site deploys from the `main` branch root on every push.

```bash
git add -A
git commit -m "Update content"
git push
```

Changes appear in about a minute. `.nojekyll` is present so GitHub Pages serves the files
as-is rather than running them through Jekyll.

---

## Transferring the repo to Sai

When he is ready to own it:

```bash
gh repo transfer Akaditya12/sai-magesh-portfolio <his-github-username>
```

Or via the web UI: **Settings → General → Danger Zone → Transfer ownership.**

Transfer keeps the full commit history and leaves a redirect from the old URL. He then needs to
re-enable Pages under **Settings → Pages → Deploy from branch → `main` / `root`**. The site
address becomes `https://<his-username>.github.io/sai-magesh-portfolio/`.

For a cleaner address, rename the repo to `<his-username>.github.io` — it then serves from
`https://<his-username>.github.io/`.

---

## Structure

```
index.html              Page markup — section shells only
404.html                Themed not-found page
.nojekyll               Tells GitHub Pages to skip Jekyll
assets/
  css/styles.css        All styling, tokens at the top
  js/content.js         ← ALL CONTENT LIVES HERE
  js/main.js            Rendering and interaction. No copy in this file.
  img/                  Portrait and any project images
  docs/                 Résumé PDF
```

---

## Design notes

**Theme.** Military-institutional discipline rather than costume: instrument dials, range rings,
topographic contour lines, HUD corner brackets, stencil-adjacent display type. The Indian
tricolour appears only as a signal — the scroll progress bar, section rules, and the footer mark.

**Emblem caution.** No Indian Army insignia, no national emblem, and no rendering of the national
flag are used anywhere. The Ashoka Chakra and service insignia are protected under the State
Emblem of India (Prohibition of Improper Use) Act 2005 and the Emblems and Names (Prevention of
Improper Use) Act 1950. The 24-tick dial motif is an original instrument graphic in navy, not a
reproduction of the Chakra. Keep it that way if you extend the design.

**Palette.** Night `#0A0E0C` base, saffron `#FFA94D` as the single accent, India green `#35A866`
and chakra blue `#6E9BE0` as secondary signals, sand `#C9B688` for supporting text. All text
combinations clear WCAG AA on the dark base.

**Type.** Oswald for display, Inter for body, JetBrains Mono for labels and data.

**Accessibility.** Skip link, visible focus rings, keyboard-operable navigation and filters,
semantic landmarks, ARIA labels on the proficiency meters, and a full `prefers-reduced-motion`
path that disables the boot sequence, cursor, radar canvas, parallax and scramble effect. There
is also a print stylesheet.

---

## Interactions

Boot sequence (once per session) · crosshair cursor with hover response · radar sweep canvas with
a connected node field · tricolour scroll progress · scroll-driven section reveals · animated
counters · proficiency meters that fill on entry · project category filters · HUD brackets on card
hover · magnetic buttons · text scramble on the role line · scroll-linked instrument dial ·
sticky navigation with active-section tracking · mobile drawer · back to top.

Every one of them is disabled or reduced under `prefers-reduced-motion: reduce`.
