# CLAUDE.md — Les Bras du Bâtiment
## Build Instructions for Claude Code

---

## PROJECT OVERVIEW

**Client:** Les Bras du Bâtiment  
**Type:** BTP labor services lead generation website  
**Market:** Île-de-France, B2B (construction companies, promoteurs, GC)  
**Stack:** Next.js 14 (App Router) + Tailwind CSS + Framer Motion  
**Goal:** Generate inbound leads (demo requests / quote forms)

---

## DESIGN SYSTEM

### Theme: Light — White Primary Surface
This is a **light-first** design. White backgrounds with orange brand accents and navy for dark sections and text. Do NOT build a dark-mode-first site.

```
Primary surface:  #ffffff
Secondary surface: #f4f5f7
Dark sections:    #13274d (navy)
```

---

### COLOR TOKENS

```css
/* Brand — Orange */
--orange:        #f24405;    /* Primary CTA, all links, active states */
--orange-hover:  #d93a03;    /* Hover and active */
--orange-subtle: rgba(242,68,5,0.08);   /* Icon bg, badge fill */
--orange-border: rgba(242,68,5,0.20);   /* Badge border, chip border */
--orange-shadow: rgba(242,68,5,0.38);   /* CTA button shadow */

/* Navy — Dark surfaces & headings */
--navy:          #13274d;    /* Section dark bg, primary text */
--navy-deep:     #0d1c38;    /* Footer bg, deepest */
--navy-mid:      #162448;    /* Cards on dark surfaces */
--navy-light:    #1c3060;    /* Hover on dark */
--navy-border:   #2a3f6e;    /* Lines/dividers on dark surfaces */

/* Neutrals */
--ink:           #101827;    /* Primary body text */
--steel:         #5a606a;    /* Secondary text, labels */
--slate:         #706f7e;    /* Placeholder, tertiary */
--border:        #e2e4ea;    /* All light surface borders */
--surface:       #f4f5f7;    /* Secondary bg, input bg */
--white:         #ffffff;    /* Primary bg */

/* Semantic */
--success:       #149e61;
--danger:        #e03131;

/* Translucent borders */
--border-dark:   rgba(255,255,255,0.07);  /* Borders on navy */
--border-dark-md:rgba(255,255,255,0.16);  /* Mid borders on navy */
```

### Tailwind Config Extension
```js
// tailwind.config.js
colors: {
  orange:  { DEFAULT:'#f24405', hover:'#d93a03' },
  navy:    { DEFAULT:'#13274d', deep:'#0d1c38', mid:'#162448', light:'#1c3060', border:'#2a3f6e' },
  ink:     '#101827',
  steel:   '#5a606a',
  slate:   '#706f7e',
  border:  '#e2e4ea',
  surface: '#f4f5f7',
}
```

---

### TYPOGRAPHY

**Single font family: Inter Tight**  
Load from Google Fonts: `Inter+Tight:wght@400;500;600;700;800;900`

```
NEVER use any other font family.
Weight is the only differentiator between roles.
```

| Role | Size | Weight | Line-H | Tracking |
|---|---|---|---|---|
| Hero H1 | 64px → 40px mobile | 800 | 1.04 | -1.28px |
| Section H2 | 52px → 36px mobile | 800 | 1.08 | -0.52px |
| Sub H3 | 36px → 28px mobile | 700 | 1.12 | -0.32px |
| Feature H4 | 28px | 700 | 1.20 | -0.20px |
| Body Large | 18px | 400 | 1.65 | 0 |
| Body | 16px | 400 | 1.65 | 0 |
| Body Medium | 16px | 500 | 1.65 | 0 |
| Button | 15px | 700 | normal | 0.04em |
| Label/Badge | 11.5px | 600 | normal | 0.07em + uppercase |
| Caption | 10.5px | 600 | normal | 0.06em + uppercase |

---

### COMPONENT SPECS

#### Buttons

```
PRIMARY ORANGE
  bg: #f24405 | text: #fff | padding: 15px 30px
  radius: 6px | shadow: 0 8px 28px rgba(242,68,5,0.38)
  hover: bg #d93a03, translateY(-2px), shadow boost
  font: 15px / 700 / 0.04em / uppercase

OUTLINED ORANGE (on white surface)
  bg: transparent | text: #f24405 | border: 1.5px solid #f24405
  radius: 6px
  hover: bg rgba(242,68,5,0.08)

GHOST (on white surface)
  bg: #f4f5f7 | text: #101827 | border: 1px solid #e2e4ea
  radius: 6px
  hover: bg #e2e4ea

NAVY DARK
  bg: #13274d | text: #fff
  radius: 6px

OUTLINED LIGHT (on navy surface)
  bg: transparent | text: rgba(255,255,255,0.72)
  border: 1px solid rgba(255,255,255,0.16)
  radius: 6px
  hover: border rgba(255,255,255,0.38), text #fff

SUBTLE ORANGE (icon btns, secondary)
  bg: rgba(242,68,5,0.08) | text: #f24405
  border: 1px solid rgba(242,68,5,0.20)
  radius: 8px | padding: 10px 16px
```

**RULE: All CTA buttons use 6px radius — NEVER pill (9999px) on CTAs.**

#### Badges / Chips

```
LIVE BADGE (pill — exception to 6px rule)
  bg: rgba(242,68,5,0.08) | border: 1px solid rgba(242,68,5,0.20)
  text: #f24405 | radius: 9999px
  Contains: 7px pulsing orange dot

NEUTRAL
  bg: rgba(90,96,106,0.10) | text: #5a606a | radius: 8px

SUCCESS
  bg: rgba(20,158,97,0.12) | text: #026b3f | radius: 8px

NAVY INFO
  bg: rgba(19,39,77,0.08) | text: #13274d | radius: 8px
```

#### Cards

```
SERVICE CARD (light surface)
  bg: #fff | border: 1px solid #e2e4ea
  radius: 12px | padding: 24px
  shadow: 0 1px 4px rgba(16,24,40,0.06)
  Icon container: 44x44px, radius 10px, bg rgba(242,68,5,0.08), border rgba(242,68,5,0.20)

CARD ON DARK (navy surface)
  bg: #162448 | border: 1px solid rgba(255,255,255,0.07)
  radius: 12px | padding: 24px

STAT CARD
  bg: rgba(19,39,77,0.04) | border: 1px solid #e2e4ea
  radius: 12px | padding: 20px 24px
  Num: 40px / 800 / -1px tracking, orange em accent
  Label: 12px / 600 / uppercase

FORM INPUTS
  bg: #fff | border: 1.5px solid #e2e4ea
  radius: 6px | padding: 13px 16px | font-size: 16px
  focus ring: 0 0 0 3px rgba(242,68,5,0.15), border #f24405
  error ring: 0 0 0 3px rgba(224,49,49,0.15), border #e03131
```

#### Elevation

```
Flat:    No shadow — border only (most elements)
Subtle:  0 1px 4px rgba(16,24,40,.06), 0 4px 16px rgba(16,24,40,.04)
Card:    0 2px 8px rgba(16,24,40,.08), 0 8px 32px rgba(16,24,40,.06)
CTA btn: 0 8px 28px rgba(242,68,5,.38)
Focus:   0 0 0 3px rgba(242,68,5,.15)
```

---

### LAYOUT

```
Max content width: 1200px (centered)
Side padding desktop: 80-96px
Side padding tablet:  40-48px
Side padding mobile:  20px

Breakpoints:
  Mobile S:  375px
  Mobile:    420px
  Mobile L:  768px
  Tablet:    1024px
  Desktop:   1280px
  Wide:      1440px
```

---

## SITE STRUCTURE & PAGES

### Page: `/` — Homepage

Build these sections in order:

---

#### SECTION 1: HERO
```
Layout: 2-column (text left, visual right) → stacked on tablet
BG: white (#ffffff)
Optional subtle surface-tint strip behind section: #f4f5f7

LEFT CONTENT:
  - Eyebrow badge: "📍 Île-de-France · Disponibles 7j/7" (live badge with pulse dot)
  - H1: "La main-d'œuvre BTP dont vos chantiers ont besoin."
    → "chantiers" gets orange color + animated underline
  - Body large: "Déchargement, manutention, déménagement de chantier. 
    Des équipes réactives et encadrées, opérationnelles en moins de 24h."
  - CTA row: [Primary Orange btn "Demander une équipe →"] [Ghost btn "Voir nos services"]
  - Trust strip: 3 items with small icons
    ✦ +40 clients satisfaits  |  ⏱ Intervention < 24h  |  ✓ Sans engagement

RIGHT VISUAL:
  - Card (radius 24px, bg #f4f5f7, border #e2e4ea, overflow hidden)
  - Contains construction SVG scene (workers, building, crane)
  - Orange corner accent (top-right)
  - 2 floating stat chips (glass effect on light: bg white, shadow card)
  
BELOW (full-width): 4-col stats bar
  bg: #f4f5f7 | border-top: 1px solid #e2e4ea
  Stats: +200 Missions | 40+ Clients | 98% Satisfaction | <24h Délai
  Numbers animated on scroll-in (IntersectionObserver counter)
```

---

#### SECTION 2: SOCIAL PROOF STRIP
```
BG: white
Layout: "Ils nous font confiance" label + auto-scrolling logo marquee
Logos: 6-8 company logos, steel gray, gain full opacity on hover
Marquee: CSS animation, seamless loop, pause on hover
```

---

#### SECTION 3: SERVICES
```
BG: #f4f5f7 (secondary surface)
Header: 
  - Eyebrow: "Nos Prestations"
  - H2: "Tout ce qu'il faut pour avancer sur le chantier."
  - Body: subtitle

3-col grid of SERVICE CARDS (see card spec above):
  Card 1: 🏗 Déchargement & Manutention
    "Livraisons de matériaux, déchargement camions, transfert de charges lourdes."
  Card 2: 🚛 Déménagement de Chantier
    "Déplacement d'équipements, réorganisation d'espaces en cours de travaux."
  Card 3: 🧹 Nettoyage & Remise en état
    "Fin de chantier, évacuation des déchets, remise à blanc des espaces."

Card hover: translateY(-4px) + shadow boost + orange left border (3px) slides in
→ 1 col on mobile
```

---

#### SECTION 4: WHY US (DARK)
```
BG: #13274d (navy) — DARK SECTION
Layout: 2-column (text left, list right)

LEFT:
  - Eyebrow (light muted): "Pourquoi nous choisir"
  - H2 white: "Des équipes professionnelles, une réactivité sans égale."
  - Body: white/55%
  - Primary orange CTA btn

RIGHT — 5 differentiator items (CARD ON DARK spec):
  ✅ Équipes formées et encadrées
  ✅ Intervention sous 24h en Île-de-France
  ✅ Pas d'engagement minimum
  ✅ Suivi client dédié
  ✅ Facturation simple et transparente

Each item: orange check icon + bold title + small desc
Animate items: stagger fade-up on scroll
```

---

#### SECTION 5: HOW IT WORKS
```
BG: white
Header:
  - Eyebrow: "Notre méthode"
  - H2: "Opérationnel en 3 étapes."

Horizontal stepper (3 steps):
  Step 01 🗓 "Vous nous contactez"
    "Via formulaire ou téléphone, on répond sous 2h."
  Step 02 📋 "On cadre votre besoin"
    "Nombre de personnes, dates, type de mission."
  Step 03 🚀 "L'équipe est déployée"
    "Vos bras sur le chantier, prêts à travailler."

Step design:
  Large faded number (01/02/03) behind step content — color #f4f5f7 or rgba(242,68,5,0.06)
  Step connector: horizontal line with orange dashes on desktop
  → Vertical stack on mobile
  Orange accent on step number
```

---

#### SECTION 6: TESTIMONIALS (optional)
```
BG: #f4f5f7
If data available: quote card with company name, role, rating stars
Carousel on mobile, 3-col grid on desktop
```

---

#### SECTION 7: FAQ
```
BG: white
Header:
  - H2: "Questions fréquentes"

Accordion items (no card bg, just divider lines):
  Q: Intervenez-vous partout en Île-de-France ?
  Q: Quel délai pour avoir une équipe ?
  Q: Quels types de chantiers acceptez-vous ?
  Q: Comment se passe la facturation ?
  Q: Combien de personnes peut-on demander ?

Accordion:
  Closed: title + plus icon (right-aligned)
  Open: title (orange) + minus icon + body text
  Transition: max-height smooth expand
  Active border-left: 3px solid #f24405
  No card bg — just list with 1px #e2e4ea dividers
```

---

#### SECTION 8: FINAL CTA
```
BG: #13274d (navy)
Layout: Centered, full-width

H2 white: "Un chantier qui avance, ça commence ici."
Body: white/55%: "Contactez-nous aujourd'hui et recevez une réponse sous 2h."
CTAs: [Primary Orange "Demander un devis gratuit"] [Outlined Light "📞 Nous appeler"]

Optional decorative: faint grid pattern overlay (rgba(255,255,255,0.03))
Orange ambient glow top-center
```

---

#### FOOTER
```
BG: #0d1c38 (navy-deep)
Border-top: 1px solid rgba(255,255,255,0.06)

Layout: 4-col (logo+desc | links | services | contact) → 2-col tablet → 1-col mobile
Bottom bar: copyright + legal links | border-top rgba(255,255,255,0.06)

Logo: white version
Links: rgba(255,255,255,0.55) → white on hover
Orange on active/current section link
```

---

## ANIMATIONS

Use **Framer Motion** for all scroll-triggered animations.

```
Page load — Hero:
  Eyebrow: fadeUp delay 0ms
  H1: fadeUp delay 100ms, with orange underline scaleX(0→1) at delay 600ms
  Subtext: fadeUp delay 200ms
  CTAs: fadeUp delay 300ms
  Trust: fadeUp delay 400ms
  Visual card: fadeUp delay 150ms
  Stat cards: slideIn from edges delay 400ms, 600ms

Scroll-triggered (all sections):
  Threshold: 0.15
  Children: staggerChildren 0.1s
  Each child: opacity 0→1, y 24→0, duration 0.6s, ease [0.19, 1, 0.22, 1]

Stats bar:
  Counter animation on IntersectionObserver (threshold 0.4)
  Duration: 1400ms, ease out quart

Hover states:
  Cards: translateY(-4px) + shadow boost — 250ms spring
  CTAs: translateY(-2px) + shadow boost — 200ms
  CTA arrow icon: translateX(4px) — spring
  Nav links: color transition 150ms

Service card hover:
  Orange left border: scaleY(0→1) from top, 200ms
  Card lift: translateY(-4px)
```

---

## COMPONENT FILE STRUCTURE

```
src/
├── app/
│   ├── layout.tsx          # Root layout, metadata, fonts
│   ├── page.tsx            # Homepage — composes all sections
│   └── globals.css         # CSS variables, base styles
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx      # Sticky, transparent→frosted on scroll
│   │   └── Footer.tsx
│   ├── sections/
│   │   ├── Hero.tsx
│   │   ├── LogoStrip.tsx
│   │   ├── Services.tsx
│   │   ├── WhyUs.tsx
│   │   ├── HowItWorks.tsx
│   │   ├── FAQ.tsx
│   │   └── FinalCTA.tsx
│   └── ui/
│       ├── Button.tsx      # All variants via props
│       ├── Badge.tsx
│       ├── Card.tsx        # ServiceCard, StatCard, DarkCard
│       ├── SectionLabel.tsx
│       └── AnimatedCounter.tsx
└── lib/
    └── tokens.ts           # All CSS variables as TS constants
```

---

## NAVBAR SPEC

```
Position: fixed, top: 0
Height: 72px desktop, 64px mobile
BG: transparent on load → frosted glass on scroll (20px threshold)
  Scrolled: bg rgba(255,255,255,0.88), backdrop-filter blur(20px), border-bottom 1px solid #e2e4ea
  
Left: Logo (icon + "Les Bras du Bâtiment" — navy text, "Bâtiment" optional orange)
Center: Nav links (hidden on tablet/mobile)
  Services | Méthode | Tarifs | FAQ | Blog
  Link style: 14px / 500 / steel gray → ink on hover, orange underline slide-in
Right: CTA btn "Demander un devis" (Primary Orange, smaller: 10px 20px padding)

Mobile (≤1024px):
  Hamburger icon replaces links + CTA
  Opens side drawer (right, 340px wide)
  Drawer: white bg, border-left 1px solid #e2e4ea
  Links: 28px / 800 / navy → orange on hover
  Drawer CTA: full-width orange btn at bottom
```

---

## CONTENT — FINAL COPY

```
Company: Les Bras du Bâtiment
Tagline: "La main-d'œuvre BTP dont vos chantiers ont besoin."
Services: Déchargement & Manutention | Déménagement de Chantier | Nettoyage & Remise en état
USP: Disponibles 7j/7 | Île-de-France | Intervention < 24h | Sans engagement
Stats: +200 missions | 40+ clients | 98% satisfaction | <24h délai
Phone: [to be provided]
Email: [to be provided]
Zone: Île-de-France
```

---

## DO'S AND DON'TS

### DO
- White (`#ffffff`) as primary page background — light theme
- `#f4f5f7` for secondary surfaces (section alternation, card hover bg)
- `#f24405` for all primary CTAs and orange accents only
- `6px` radius on all buttons
- `Inter Tight` only — weight alone differentiates hierarchy
- `#13274d` navy for dark sections (Why Us, Final CTA, Footer)
- Animate everything on scroll with Framer Motion stagger
- Mobile-first CSS, expand up through breakpoints

### DON'T
- ❌ Black (`#000000`) anywhere — use `#101827` (ink) max
- ❌ Dark navy as page background — that's the old dark theme
- ❌ Pill buttons (9999px) for CTAs — pills are for badges only
- ❌ More than one accent color — system is Orange + Navy, zero others
- ❌ Warm grays (beige, cream) — keep the cool gray neutrals
- ❌ Any other font — Inter Tight only, no mixing
- ❌ Orange as background fill — only #f24405 for icons, buttons, text accents
- ❌ Use `rgba(0,0,0,.45)` heavy shadows on light surfaces

---

## AGENT QUICK-REFERENCE

**Starting a section:**
```
"White bg #ffffff section. Inter Tight H2 52px 800 weight -0.52px tracking, 
color #101827. Eyebrow badge: rgba(242,68,5,0.08) bg, rgba(242,68,5,0.20) border, 
pill shape, #f24405 text, 11.5px 600 uppercase. Cards: white, 1px solid #e2e4ea, 
12px radius, subtle shadow."
```

**Starting a dark section:**
```
"Navy bg #13274d. H2 white 52px 800. Body rgba(255,255,255,0.55). 
Primary CTA: #f24405 bg, 15px 30px padding, 6px radius, shadow 0 8px 28px rgba(242,68,5,0.38). 
Secondary CTA: transparent, 1px solid rgba(255,255,255,0.16), text rgba(255,255,255,0.72), 6px radius."
```

**Starting the hero:**
```
"Hero: white bg. 2-col grid. Left: eyebrow badge (#f24405 pill), H1 Inter Tight 
64px 800 -1.28px tracking, 'chantiers' in #f24405 with animated underline scaleX 0→1. 
Subtext 18px 400 #5a606a. CTA row: primary orange + ghost btn. Trust strip 3 items. 
Right: card bg #f4f5f7, 24px radius, construction SVG scene, 2 floating stat cards 
(white bg, shadow card, 12px radius), orange corner accent top-right. 
Full-width stats bar below: bg #f4f5f7, 4 cols, counters animate on scroll."
```
