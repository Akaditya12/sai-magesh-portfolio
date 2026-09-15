/* ==========================================================================
   content.js — EVERY piece of text on the site lives here.
   Edit this file only; never touch main.js to change wording.
   Anything marked TODO is placeholder and must be replaced before launch.
   Set  draft: false  once the real content is in — it hides the draft chip.
   ========================================================================== */

window.CONTENT = {

  draft: true,

  /* ── Identity ───────────────────────────────────────────────────────── */
  name:    "Sai Magesh Nagarajan",
  kicker:  "Discipline · Precision · Country",          // TODO: confirm or change
  role:    "Professional Title",                         // TODO: e.g. "Mechanical Engineer"
  blurb:   "One-line positioning statement — what he does, for whom, and to what standard.", // TODO
  resume:  "assets/docs/resume.pdf",                     // TODO: drop the PDF at this path

  /* Hero counters. Keep to three or four — they carry weight only if few. */
  stats: [                                               // TODO: real figures
    { value: "0+",  label: "Years experience" },
    { value: "0",   label: "Projects delivered" },
    { value: "0",   label: "Certifications" },
    { value: "0",   label: "Awards" }
  ],

  /* ── 01 · About ─────────────────────────────────────────────────────── */
  about: {
    portrait: "",                                        // TODO: "assets/img/portrait.jpg"
    paragraphs: [                                        // TODO: replace both
      "Opening line that states what he does and the standard he holds himself to. Lead with the claim, not the background.",
      "Second paragraph for the route he took to get here — training, the work that shaped him, and what he is building towards next. Two to four sentences.",
      "Third paragraph, optional: what he cares about outside the work."
    ],
    tags: ["Add", "Focus", "Areas", "Here"],             // TODO
    facts: [                                             // TODO
      { label: "Based in",    value: "City, India" },
      { label: "Focus",       value: "Primary discipline" },
      { label: "Open to",     value: "Roles / projects" },
      { label: "Languages",   value: "English · Tamil" }
    ]
  },

  /* ── 02 · Skills ────────────────────────────────────────────────────── */
  /* level is 0–100. Be honest: everything at 95 reads as nothing at all. */
  skills: [                                              // TODO: replace all groups
    {
      group: "Core discipline",
      items: [
        { name: "Skill one",   level: 85 },
        { name: "Skill two",   level: 75 },
        { name: "Skill three", level: 70 }
      ]
    },
    {
      group: "Tools & software",
      items: [
        { name: "Tool one",   level: 80 },
        { name: "Tool two",   level: 70 },
        { name: "Tool three", level: 60 }
      ]
    },
    {
      group: "Professional",
      items: [
        { name: "Skill one",   level: 85 },
        { name: "Skill two",   level: 80 },
        { name: "Skill three", level: 75 }
      ]
    }
  ],

  /* ── 03 · Experience ────────────────────────────────────────────────── */
  /* Bullets follow: <action verb> <what> <how / scale>, <measurable outcome>. */
  experience: [                                          // TODO: replace all entries
    {
      period:   "2024 — Present",
      role:     "Role Title",
      org:      "Organisation Name",
      location: "City, India",
      points: [
        "Achievement bullet with a number in it.",
        "Second bullet — what he owned and what changed because of it.",
        "Third bullet — scope, scale or recognition."
      ]
    },
    {
      period:   "2022 — 2024",
      role:     "Earlier Role Title",
      org:      "Organisation Name",
      location: "City, India",
      points: [
        "Achievement bullet with a number in it.",
        "Second bullet — what he owned and what changed because of it."
      ]
    }
  ],

  /* ── 04 · Projects ──────────────────────────────────────────────────── */
  /* category drives the filter chips. Keep to four or fewer categories. */
  projects: [                                            // TODO: replace all entries
    {
      title:    "Project One",
      category: "Category A",
      description: "What the problem was, what he built, and the result. Two sentences at most.",
      stack:    ["Tool", "Tool", "Tool"],
      links:    [{ label: "GitHub", url: "#" }]
    },
    {
      title:    "Project Two",
      category: "Category A",
      description: "What the problem was, what he built, and the result. Two sentences at most.",
      stack:    ["Tool", "Tool"],
      links:    [{ label: "Live", url: "#" }, { label: "GitHub", url: "#" }]
    },
    {
      title:    "Project Three",
      category: "Category B",
      description: "What the problem was, what he built, and the result. Two sentences at most.",
      stack:    ["Tool", "Tool", "Tool"],
      links:    []
    }
  ],

  /* ── 05 · Education & certifications ────────────────────────────────── */
  education: [                                           // TODO: replace all entries
    {
      year:  "2020 — 2024",
      title: "Degree Name",
      org:   "Institution Name",
      note:  "Grade, honours or a line on what it covered."
    },
    {
      year:  "2024",
      title: "Certification Name",
      org:   "Issuing Body",
      note:  "One line on scope or credential ID."
    }
  ],

  /* ── 06 · Achievements ──────────────────────────────────────────────── */
  /* figure is animated as a counter. Use a number, or "—" for none. */
  achievements: [                                        // TODO: replace all entries
    { figure: "1st",  title: "Award Title",       note: "Event or issuing body, year." },
    { figure: "3",    title: "Recognition Title", note: "Event or issuing body, year." },
    { figure: "100+", title: "Milestone Title",   note: "Short line of context." }
  ],

  /* ── 07 · Contact ───────────────────────────────────────────────────── */
  contact: {
    lede:     "Open to conversations about roles, projects and collaboration. The fastest route is email.", // TODO
    email:    "email@example.com",                       // TODO
    phone:    "+91 00000 00000",                         // TODO
    location: "City, Tamil Nadu, India",                 // TODO
    linkedin: "https://www.linkedin.com/in/",            // TODO
    github:   "https://github.com/"                      // TODO
  }
};
