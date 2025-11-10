# Design-Konzept: Production-Ready Portfolio Website

## Professionelle Farbpalette

### Light Mode
- **Primary (Blau)**: #2563eb (Vertrauenswürdig, professionell)
- **Secondary (Slate)**: #64748b (Neutral, elegant)
- **Accent (Indigo)**: #6366f1 (Modern, auffällig für CTAs)
- **Background**: #ffffff (Weiß)
- **Surface**: #f8fafc (Sehr helles Grau)
- **Text Primary**: #0f172a (Fast Schwarz)
- **Text Secondary**: #475569 (Mittelgrau)
- **Border**: #e2e8f0 (Helles Grau)

### Dark Mode
- **Primary (Blau)**: #3b82f6 (Heller für besseren Kontrast)
- **Secondary (Slate)**: #94a3b8 (Heller für Lesbarkeit)
- **Accent (Indigo)**: #818cf8 (Heller, aber nicht grell)
- **Background**: #0f172a (Sehr dunkles Blau-Schwarz)
- **Surface**: #1e293b (Dunkles Slate)
- **Text Primary**: #f1f5f9 (Fast Weiß)
- **Text Secondary**: #cbd5e1 (Hellgrau)
- **Border**: #334155 (Mittel-dunkles Grau)

## Multi-Page-Struktur

### Seiten
1. **Home** (`/`) - Hero, Kurz-Übersicht, CTA
2. **Services** (`/services`) - Detaillierte Leistungen mit Tabs/Accordion
3. **Portfolio** (`/portfolio`) - Projekt-Galerie mit Carousel
4. **About** (`/about`) - Über mich, Technologien, Prozess
5. **Contact** (`/contact`) - Kontaktformular, Kontaktdaten

### Navigation
- Sticky Header mit Logo und Hauptnavigation
- Dark Mode Toggle in der Navigation
- Footer mit Links zu allen Seiten
- Breadcrumbs auf Unterseiten

## Design-Prinzipien

### Typografie
- **Überschriften**: Inter (600-800 weight)
- **Body**: Inter (400-500 weight)
- **Kontrast-Verhältnis**: Mindestens 4.5:1 (WCAG AA)

### Komponenten
- Konsistente Schatten in beiden Modi
- Sanfte Übergänge beim Theme-Wechsel
- Hover-States für alle interaktiven Elemente
- Focus-States für Accessibility

### Spacing & Layout
- Container max-width: 1280px
- Konsistente Abstände (4px-Grid)
- Responsive Breakpoints: sm(640), md(768), lg(1024), xl(1280)
