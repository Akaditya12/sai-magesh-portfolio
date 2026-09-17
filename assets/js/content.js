/* ==========================================================================
   content.js — EVERY piece of text on the site lives here.
   Edit this file only; never touch main.js to change wording.

   PHOTOS: drop <name>.jpg and <name>_t.jpg into assets/img/gallery/<folder>/
   and add one line to that strand's gallery array below.
   ========================================================================== */

window.CONTENT = {

  draft: false,

  /* ── Identity ───────────────────────────────────────────────────────── */
  name:      "Sri Saye Magesh N",
  kicker:    "Patience · Perseverance · Dedication",
  role:      "Strong Finance Background · Consulting & Finance Major · Risk & Compliance",
  roleShort: "Finance · Consulting · Risk",
  blurb:     "MBA candidate with experience across corporate banking operations, transaction filtering, taxation and financial auditing, with strong exposure to high-volume, high-risk financial processes. Analytical and detail-oriented, skilled in identifying process gaps, improving operational efficiency and maintaining accuracy in risk-sensitive environments. Combines financial knowledge, problem-solving and stakeholder management with a strong interest in credit, portfolio management and investment analysis.",
  resume:    "assets/docs/resume_sri_saye_magesh_n.pdf",

  stats: [
    { value: "43",   label: "Months in practice" },
    { value: "40+",  label: "Audit clients run" },
    { value: "83%",  label: "Cycle time cut" },
    { value: "105",  label: "NCC cadets led" }
  ],

  /* ── 01 · About ─────────────────────────────────────────────────────── */
  about: {
    portrait: "assets/img/portrait.jpg",
    paragraphs: [
      "I work where compliance meets operations — finding the control that is failing, then fixing the process behind it.",
      "At NatWest I held a zero processing-error rate across two years of transaction monitoring, and identified a payment cut-off risk running through 2,000–3,000 transactions a day. The automated alert system I proposed cut daily violations by 70%. At M.R. Rajshekar & Co I ran delivery for more than 40 annual audit clients and rebuilt the workflow behind them, cutting process cycle time by 83%.",
      "I am now in the 2026–27 MBA batch at Great Lakes Institute of Management, Chennai, applying that same structure to strategy problems — market entry, channel economics and capital allocation — through live case competitions.",
      "Away from the desk I served as Company Sergeant Major with the NCC at Ramakrishna Mission Vivekananda College, responsible for 105 cadets, and was selected for the NCC Youth Exchange Programme to Singapore. Five Services Selection Boards so far, three conference-outs. I play table tennis at state level and run long distance."
    ],
    tags: [
      "Risk & Controls",
      "Financial Analysis",
      "Process Optimisation",
      "Go-to-Market Strategy",
      "Structured Problem Solving"
    ],
    facts: [
      { label: "Based in",   value: "Chennai, Tamil Nadu" },
      { label: "Programme",  value: "MBA (PGPM), Great Lakes Chennai · Batch of 2026–27" },
      { label: "Experience", value: "43 months — audit, AML monitoring, corporate tax" },
      { label: "Open to",    value: "Consulting, strategy and finance roles" },
      { label: "Languages",  value: "English · Tamil · Hindi" }
    ]
  },

  /* ── 02 · Skills ────────────────────────────────────────────────────── */
  /* Plain lists. No proficiency bars — a self-scored percentage is the one
     thing on a portfolio an interviewer can argue with. */
  skills: [
    {
      group: "Core Competencies",
      items: [
        "Risk mitigation & internal controls",
        "Problem solving & structured thinking",
        "Financial analysis & quant modelling",
        "Cycle-time optimisation",
        "Client relationship management"
      ]
    },
    {
      group: "Tools & Software",
      items: [
        "MS Office",
        "Tally",
        "Odoo ERP",
        "Tableau",
        "Bizagi Modular (Basics)"
      ]
    }
  ],

  /* ── 03 · Experience ────────────────────────────────────────────────── */
  experience: [
    {
      period:   "Oct 2024 — Mar 2026",
      role:     "Audit Assistant",
      org:      "M.R. Rajshekar & Co",
      location: "Chennai, India",
      points: [
        "Executed tax and statutory audit engagements at 100% accuracy, keeping regulatory compliance clean across the portfolio.",
        "Ran standalone account management and delivery for more than 40 annual audit clients, holding on-time completion through peak season.",
        "Reviewed accounting and operational workflows for systemic bottlenecks, then rebuilt the process — cutting cycle time by 83%."
      ]
    },
    {
      period:   "Oct 2022 — Sep 2024",
      role:     "Customer Service & Operations Analyst",
      org:      "NatWest Digital Services India",
      location: "Chennai, India",
      points: [
        "Applied transaction monitoring frameworks to complex international flows, identifying and escalating high-risk anomalies across AML, global sanctions and fraud.",
        "Identified a critical payment cut-off risk in transaction filtering and proposed an automated visual alert system, cutting daily violations by 70% across 2,000–3,000 daily cut-off transactions.",
        "Led process improvements that strengthened system controls, saving 3–4 seconds per transaction and eight labour hours a day.",
        "Maintained a zero processing-error rate across the full two-year tenure."
      ]
    },
    {
      period:   "Jul 2022 — Oct 2022",
      role:     "Tax Analyst",
      org:      "EY Global Delivery Services India",
      location: "Chennai, India",
      points: [
        "Managed UK corporate tax assessment processes against HMRC regulations and internal quality standards.",
        "Resolved client tax enquiries inside stringent service-level timelines, lifting client satisfaction above benchmark."
      ]
    }
  ],

  /* ── 04 · Projects ──────────────────────────────────────────────────── */
  projects: [
    {
      title:    "GlobalCraft Innovations — Go-to-Market Strategy",
      category: "Strategy",
      description: "A Renegotiate–Rebuild–Diversify roadmap for a premium stationery exporter trapped by a legacy US distributor. Hybrid channel architecture pairing distributor-led national retail with a rebuilt direct-to-retailer model: trade margin 70% → 60%, cash cycle 120 → 30 days, US dependency 60% → 52%, and +44% revenue on the same demand.",
      stack:    ["Channel economics", "Negotiation strategy", "Scenario analysis", "Working capital"],
      links:    [{ label: "Deck", url: "assets/docs/globalcraft_gtm_strategy.pdf" }]
    },
    {
      title:    "Nova Consumer — Winning the Next 100 Million",
      category: "Strategy",
      description: "Market-entry and growth strategy for Tier-2 and Tier-3 India in beauty and personal care, built on a primary consumer survey and on-ground retail research into channel preference, price sensitivity and local trust drivers. Market sizing, segmentation, unit economics and a five-year roadmap to ₹2,500–3,500 Cr revenue and 95–100M consumers. Cleared two rounds to the Pre-Finals of the Learnous Case Study Challenge, Season 7.",
      stack:    ["Consumer research", "Market sizing", "Unit economics", "Go-to-market"],
      links:    [{ label: "Deck", url: "assets/docs/nova_consumer_next_100_million.pdf" }]
    },
    {
      title:    "The Good Doll — Retail Expansion Strategy",
      category: "Strategy",
      description: "A capital-efficient offline growth strategy built as a Test–Prove–Scale roadmap rather than a store-count plan. Cities prioritised on purchasing power, retail presence, cultural fit and logistics; channels chosen on customer fit and scalability across curated retail partnerships, experiential tourism, premium school channels and D2C–offline integration — inside a phased ₹1 Cr investment plan.",
      stack:    ["Channel strategy", "City prioritisation", "Unit economics", "Retail"],
      links:    [{ label: "Deck", url: "assets/docs/the_good_doll_retail_expansion.pdf" }]
    },
    {
      title:    "Climate Resilience & Adaptive Strategies — Natham Kariyacheri",
      category: "Sustainability",
      description: "Led a 10-member team on a field-based sustainability initiative in Chengalpattu, engaging farmers and self-help groups to drive climate-resilient agriculture, strengthen market linkages and create livelihoods. Acted as SPOC between villagers and the team, working past language barriers to build trust and active participation. Promoted water-efficient practices and drought-resilient crops, and built direct market linkages by identifying vendors — improving farmer value capture while enabling SHG-led employment in sorting, packaging and coordination.",
      stack:    ["Leadership & team management", "Stakeholder management", "Market linkages", "Sustainability & ESG"],
      gallery:  "karma_yoga",
      links:    []
    },
    {
      title:    "Tata Steel vs JSW Steel — Cash Flow Analysis",
      category: "Finance",
      description: "A three-year comparative study of cash generation quality across FY2024–FY2026, covering operating cash flow, investing and financing activity, free cash flow, capital expenditure and closing cash. Assessed FCF conversion, OCF-to-capex efficiency and reinvestment intensity to judge which company can fund its own growth.",
      stack:    ["Cash flow analysis", "Ratio analysis", "Comparative benchmarking", "Excel"],
      links:    [{ label: "Model", url: "assets/docs/tata_steel_vs_jsw_cash_flow_analysis.xlsx" }]
    },
    {
      title:    "FinEase — AI Financial Analysis Agent",
      category: "AI & Product",
      description: "An AI tool, in development, that converts raw financial statements into structured analysis and generates industry-benchmarked insights and hypotheses.",
      stack:    ["AI agents", "Financial analysis", "Benchmarking"],
      links:    []
    }
  ],

  /* ── 05 · Education & certifications ────────────────────────────────── */
  education: [
    { year: "2026 — 2027", title: "MBA (PGPM)", org: "Great Lakes Institute of Management, Chennai", note: "CGPA 3.37 · Member, Food Committee 2026" },
    { year: "2019 — 2022", title: "B.Com (Commerce)", org: "Ramakrishna Mission Vivekananda College, Chennai", note: "80.8% · Company Sergeant Major, NCC" },
    { year: "2021", title: "CMA (Intermediate)", org: "Institute of Cost Accountants of India", note: "Cleared the intermediate level." },
    { year: "2026", title: "Discounted Cash Flow Modelling", org: "Coursera", note: "Valuation and cash flow modelling certification." },
    { year: "2019", title: "Diploma in Computer Application", org: "Common Service Centre (CSC)", note: "Foundational computing and office systems." }
  ],

  /* ── 06 · Achievements ──────────────────────────────────────────────── */
  achievements: [
    { figure: "1st",   title: "Mock SSB — Army",          note: "Placed first in the Services Selection Board mock interview conducted by DGV College, Chennai." },
    { figure: "3/5",   title: "SSB Conference-Outs",      note: "Three conference-outs across five Services Selection Boards attended to date." },
    { figure: "105",   title: "Cadets Commanded",         note: "Company Sergeant Major, NCC · Ramakrishna Mission Vivekananda College · 2021–22." },
    { figure: "YEP",   title: "Youth Exchange Programme", note: "Qualified for the NCC Youth Exchange Programme to Singapore, 2020." },
    { figure: "1st",   title: "Table Tennis",             note: "Won first place in the intra- and inter-company table tennis tournaments representing NatWest Group." },
    { figure: "State", title: "Table Tennis",             note: "Represented the district in state-level table tennis for nine consecutive years, with prizes in individual events." },
    { figure: "Won",   title: "Long Distance Running",    note: "Prizes across long-distance events, including several marathons." },
    { figure: "80+",   title: "School & College Awards",  note: "Elocution, acting, painting and singing · President, annual drama club." }
  ],

  /* ── 07 · Off duty ──────────────────────────────────────────────────── */
  offDuty: {
    lede: "Five things outside the spreadsheet — defence, stage, sport, music and a lens — that shaped how I lead, compete and create.",
    strands: [
      {
        label:  "Defence & NCC",
        folder: "defence_ncc",
        cover:  "img_1093",
        text:   "Being the CSM of 105 cadets in the National Cadet Corps inducted me into defence. That experience culminated in selection for the Singapore Youth Exchange Programme 2020. Reaching level 3 in the Army SSB conference after five attempts, and winning DGV College's mock SSB organised by serving colonels, has proved my ability to lead under pressure several times over.",
        gallery: [
          { src: "img_1093", caption: "On guard duty" },
          { src: "ncc_cadets", caption: "The company" },
          { src: "photo_1", caption: "Cadet contingent, decorated" },
          { src: "photo_2", caption: "At the war memorial" },
          { src: "photo_3", caption: "Training ground" },
          { src: "photo_4", caption: "Camp grounds" },
          { src: "photo_5", caption: "Republic Day kolam" },
          { src: "photo_6", caption: "On parade" },
          { src: "photo_7", caption: "Cross-country, race day" },
          { src: "photo_8", caption: "Camp gate" },
          { src: "photo_9", caption: "Kit laid out" },
          { src: "photo_10", caption: "Before the parade" },
          { src: "photo_11", caption: "Prize ceremony" }
        ]
      },
      {
        label:  "Extracurricular",
        folder: "extracurricular",
        cover:  "photo_4",
        text:   "Having always been a 'yes man' at school, I have won more than 80 awards across elocution, acting, painting and singing. Serving as President of my college's annual drama club gave me the exposure that built creativity and adaptability, and made me a curious learner for life.",
        gallery: [
          { src: "photo_1", caption: "Certificates of merit" },
          { src: "photo_2", caption: "Stacked and kept" },
          { src: "photo_3", caption: "Eighty and counting" },
          { src: "photo_4", caption: "At the microphone" }
        ]
      },
      {
        label:  "Sports",
        folder: "sports",
        cover:  "photo_2",
        text:   "I play badminton, cricket and cycle to stay agile and team-oriented, but my competitive drive sits in state-level table tennis and long-distance running. Table tennis trained my split-second decision-making; distance running taught me resilience. Beyond competition, daily fitness is non-negotiable — it keeps my mind sharp under pressure. On the pitch, the table or the road, sport has hardwired me to outlast the challenge.",
        gallery: [
          { src: "photo_1", caption: "The trophy shelf" },
          { src: "photo_2", caption: "A handful of medals" },
          { src: "photo_3", caption: "Krishnagiri district ranking — table tennis" },
          { src: "photo_4", caption: "Marathon certificate, Hosur" },
          { src: "photo_5", caption: "Long-distance trophy" },
          { src: "photo_6", caption: "Running on the beach" },
          { src: "photo_7", caption: "On the bike" },
          { src: "photo_8", caption: "Evening on the terrace" },
          { src: "photo_9", caption: "Badminton court" }
        ]
      },
      {
        label:  "Music",
        folder: "music",
        cover:  "",
        text:   "Playing the violin for four years taught me several things. First, the endless patience and refinement that mastering anything demands. Second, through my school's bhajan group, how individual voices must blend exactly to form a harmonious whole. I led many bhajan sessions in my school years. Music gives me the balance my rational mindset needs.",
        gallery: []          // no photographs yet — the card front falls back to type
      },
      {
        label:  "Photography",
        folder: "photography",
        cover:  "photo_3",
        text:   "Photography, for me, means freezing the neglected parts of a fast-moving environment. Just as I find patterns among complex numbers and financial statements, through a lens I can hold both movement and stillness in a single frame. Photography needs no words — the image carries everything.",
        gallery: [
          { src: "photo_1", caption: "Anvil cloud building" },
          { src: "photo_2", caption: "Inverted horizon" },
          { src: "photo_3", caption: "Night-blooming cereus" },
          { src: "photo_4", caption: "Temple interior" },
          { src: "photo_5", caption: "Campus from above" },
          { src: "photo_6", caption: "Lights and long tables" },
          { src: "photo_7", caption: "Falling water" },
          { src: "photo_8", caption: "The main block" },
          { src: "photo_9", caption: "Grey afternoon, brick path" },
          { src: "photo_10", caption: "Last light on the scrub" },
          { src: "photo_11", caption: "The road out" },
          { src: "photo_12", caption: "Platform arches" }
        ]
      }
    ]
  },

  /* ── Project galleries, keyed by the project's `gallery` value ──────── */
  projectGalleries: {
    karma_yoga: [
      { src: "ky_1", caption: "At the village shop" },
      { src: "ky_2", caption: "The ten-member team" },
      { src: "ky_3", caption: "In the fields, Natham Kariyacheri" },
      { src: "ky_4", caption: "In session with a local trader" },
      { src: "ky_5", caption: "Working through the numbers" },
      { src: "ky_6", caption: "With the self-help group" },
      { src: "ky_7", caption: "Community session" },
      { src: "ky_8", caption: "Door to door" },
      { src: "ky_9", caption: "Mapping the retail chain" }
    ]
  },

  /* ── 08 · Contact ───────────────────────────────────────────────────── */
  contact: {
    lede:     "Open to consulting, strategy and finance roles, and to case competitions. Email is the fastest route.",
    email:    "srisayemageshn10@gmail.com",
    phone:    "+91 63790 42424",
    location: "Chennai, Tamil Nadu, India",
    linkedin: "https://www.linkedin.com/in/sri-saye-magesh-n-296395225",
    github:   "https://github.com/SriSayeMagesh"
  }
};
