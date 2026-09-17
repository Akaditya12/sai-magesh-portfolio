# Maintaining this site

All copy and every photo reference lives in [`assets/js/content.js`](assets/js/content.js).
Nothing else needs touching to change wording, add a project, or publish more photographs.

## Adding photographs to an Off Duty card

1. Put the image in `assets/img/gallery/<folder>/` at two sizes:
   `name.jpg` (long edge 1400 px) and `name_t.jpg` (long edge 560 px).
2. Add one line to that strand's `gallery` array in `content.js`:
   `{ src: "name", caption: "What it shows" }`

The card's photograph count, the lightbox and the thumbnail strip all update themselves.
Folders in use: `defence_ncc`, `extracurricular`, `sports`, `music`, `photography`.

**Music has no photographs yet.** Its card front falls back to a typographic panel, which is why
it looks different from the other four. Add images to `assets/img/gallery/music/` and set
`cover` on that strand to switch it to a photo front.

## Adding a project gallery

Put the images in `assets/img/gallery/<folder>/`, add the folder to `projectGalleries` in
`content.js`, then set `gallery: "<folder>"` on the project. A "Field photographs (n)" button
appears on the card automatically.

## Resizing

```bash
# from the repo root, for one folder
python3 - <<'PY'
from PIL import Image, ImageOps
import glob, os
for f in glob.glob("assets/img/gallery/<folder>/*.jpg"):
    if f.endswith("_t.jpg"): continue
    im = ImageOps.exif_transpose(Image.open(f)).convert("RGB")
    full = im.copy(); full.thumbnail((1400,1400), Image.LANCZOS)
    th   = im.copy(); th.thumbnail((560,560), Image.LANCZOS)
    full.save(f, "JPEG", quality=80, optimize=True, progressive=True)
    th.save(f.replace(".jpg","_t.jpg"), "JPEG", quality=76, optimize=True, progressive=True)
PY
```

## Open points

- [ ] **Case decks are public** under `assets/docs/` and linked from the project cards. Confirm the
      competition organisers permit sharing submissions.
- [ ] **Résumé PDF** is public and carries age and gender — normal on an Indian CV, but a
      deliberate choice worth making.
- [ ] **FinEase** has no link. A repo or a screenshot would turn it into a real entry.
- [ ] **Tata Steel vs JSW** links to a raw `.xlsx`. A one-page PDF summary would read better to a
      recruiter than a spreadsheet download.
