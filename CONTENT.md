# Outstanding items

Content is in. This is what still needs a decision or a file before `draft: false` is set
in [`assets/js/content.js`](assets/js/content.js).

## Needs a file

- [ ] **Portrait** → save as `assets/img/portrait.jpg`. 4:5 crop, at least 800 × 1000 px.
      `content.js` already points at that path; until the file exists the panel shows a
      marked placeholder rather than an empty box.
- [ ] **Photography gallery** → `assets/img/photography/`
- [ ] **NCC** → `assets/img/ncc/`
- [ ] **Sports** → `assets/img/sports/`

The three galleries need a new section built. Drop the images in and say the word.

## Needs Sri Saye's confirmation

- [ ] **Name spelling.** The site uses **Sri Saye Magesh N**, as it appears on his résumé.
      The repo and folder are still named `sai-magesh-portfolio` — say if that should change.
- [ ] **Voice.** The About section is written in the first person ("I work where compliance
      meets operations…"). Third person is a one-line change if he prefers it.
- [ ] **Skill levels.** The 0–100 figures in `skills` are an estimate drawn from his résumé,
      not his own rating. He should adjust them — they are the one thing on the page he can
      be challenged on in an interview.
- [ ] **Case decks.** Four of his own documents are published under `assets/docs/` and linked
      from the project cards. Confirm the competition organisers allow public sharing of
      submissions before the link goes out widely.
- [ ] **Résumé PDF.** It is public at `assets/docs/resume_sri_saye_magesh_n.pdf` and carries
      his age and gender. Fine if intended; worth a second's thought before sharing widely.

## Gaps worth filling

- [ ] **FinEase** has no link and no detail beyond one line. A repo link or a screenshot
      would make it a real entry rather than a mention.
- [ ] **Tata Steel vs JSW** links to the raw `.xlsx`. A one-page PDF summary would read far
      better to a recruiter than a spreadsheet download.
- [ ] **Learnous result** — the site says Pre-Finals. Update if the final placing is known.
- [ ] School results (12th 85.8%, 10th 89.3%) were left off deliberately. Say if they should
      go back in.

## Then

- [ ] Set `draft: false` in `content.js` — this hides the DRAFT BUILD chip.
- [ ] Check on a phone.
- [ ] Transfer the repo (see README).
