import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ArrowRight, Code, Smartphone, Search, Headphones, CheckCircle2, Phone, Calendar, Sparkles, Zap, Target } from "lucide-react";
import Layout from "@/components/Layout";
import { Marquee } from "@/components/ui/marquee-magic";
import { AuroraText } from "@/components/ui/aurora-text";

// Testimonial Card Component
const TestimonialCard = ({ name, company, text, rating }: { name: string; company: string; text: string; rating: number }) => (
  <div className="mx-4 w-[400px] flex-shrink-0">
    <Card className="h-full border-primary/10 bg-card/50 backdrop-blur transition-all hover:border-primary/30 hover:shadow-lg">
      <CardContent className="p-6">
        {/* Rating Stars */}
        <div className="mb-4 flex gap-1">
          {Array.from({ length: rating }).map((_, i) => (
            <svg key={i} className="h-5 w-5 fill-primary text-primary" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
        </div>
        
        {/* Testimonial Text */}
        <p className="mb-6 text-sm leading-relaxed text-muted-foreground">
          "{text}"
        </p>
        
        {/* Author */}
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 font-bold text-primary">
            {name.charAt(0)}
          </div>
          <div>
            <div className="font-semibold">{name}</div>
            <div className="text-sm text-muted-foreground">{company}</div>
          </div>
        </div>
      </CardContent>
    </Card>
  </div>
);

export default function Home() {
  const features = [
    "Persönliche Betreuung während des gesamten Projekts",
    "Transparente Preisgestaltung ohne versteckte Kosten",
    "Schnelle Umsetzung und pünktliche Lieferung",
    "Moderne Technologien für zukunftssichere Lösungen",
  ];

  const testimonials = [
    {
      name: "Thomas Müller",
      company: "Müller's Gasthaus",
      text: "Seit der neuen Website haben wir 40% mehr Online-Reservierungen. Die Investition hat sich in 3 Monaten amortisiert!",
      rating: 5,
    },
    {
      name: "Sarah Schmidt",
      company: "Blumen Schmidt",
      text: "Endlich eine Website, die auf dem Handy perfekt aussieht. Unsere Kunden finden jetzt viel einfacher zu uns.",
      rating: 5,
    },
    {
      name: "Michael Weber",
      company: "Weber Elektrotechnik",
      text: "Professionelle Beratung und schnelle Umsetzung. Genau das, was ein lokales Unternehmen braucht.",
      rating: 5,
    },
    {
      name: "Anna Becker",
      company: "Becker's Boutique",
      text: "Die neue Website hat unseren Online-Shop auf ein neues Level gehoben. Sehr zufrieden mit dem Ergebnis!",
      rating: 5,
    },
    {
      name: "Klaus Fischer",
      company: "Fischer Immobilien",
      text: "Transparente Preise, keine Überraschungen. Die Zusammenarbeit war unkompliziert und professionell.",
      rating: 5,
    },
    {
      name: "Julia Hoffmann",
      company: "Hoffmann Physiotherapie",
      text: "Unsere Patienten können jetzt online Termine buchen. Das spart uns so viel Zeit am Telefon!",
      rating: 5,
    },
  ];

  return (
    <Layout>
      {/* Hero Section - First Impression */}
      <section className="relative h-screen flex items-center overflow-hidden bg-gradient-to-br from-background via-primary/5 to-accent/10">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
        
        <div className="container relative z-10">
          <div className="mx-auto max-w-5xl text-center">

            {/* Main Headline - Problem Focused */}
            <h1 className="mb-6 text-5xl font-black tracking-tight leading-tight sm:text-6xl md:text-7xl lg:text-8xl">
              <span className="block text-foreground">Ihre Konkurrenz</span>
              <span className="block">
                <AuroraText colors={["#1e3a8a", "#3b82f6", "#60a5fa", "#93c5fd", "#1e3a8a"]} speed={0.8}>
                  gewinnt online
                </AuroraText>
              </span>
              <span className="block text-foreground">Sie nicht?</span>
            </h1>

            {/* Value Proposition - Minimal Text */}
            <p className="mx-auto mb-12 max-w-2xl text-xl font-medium text-muted-foreground md:text-2xl">
              Ich erstelle Websites, die Ihnen mehr Kunden bringen.
              <br />
              <span className="text-foreground">Garantiert. Oder Geld zurück.</span>
            </p>

            {/* CTA Buttons - Big & Bold */}
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Button 
                size="lg" 
                className="h-16 px-12 text-lg font-bold shadow-2xl shadow-primary/50 transition-all hover:scale-105 hover:shadow-primary/70"
                asChild
              >
                <a href="/contact">
                  <Calendar className="mr-3 h-6 w-6" />
                  Kostenloses Erstgespräch
                  <ArrowRight className="ml-3 h-6 w-6" />
                </a>
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="h-16 border-2 px-12 text-lg font-bold transition-all hover:scale-105"
                asChild
              >
                <a href="tel:+49123456789">
                  <Phone className="mr-3 h-6 w-6" />
                  Jetzt anrufen
                </a>
              </Button>
            </div>

            {/* Trust Indicator */}
            <div className="mt-16 flex flex-wrap items-center justify-center gap-8 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-primary" />
                <span>Keine Vorkasse</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-primary" />
                <span>Fertig in 2 Wochen</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-primary" />
                <span>Zufriedenheitsgarantie</span>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute -right-20 -top-20 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute -bottom-20 -left-20 h-96 w-96 rounded-full bg-accent/10 blur-3xl" />
        
        {/* Gradient Fade to Next Section */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-background" />
      </section>

      {/* Services Section - Minimalist Design */}
      <section id="services" className="relative py-32 -mt-16 z-10 overflow-hidden">
        {/* Background Decoration */}
        <div className="absolute top-1/4 right-0 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />
        
        <div className="container relative">
          <div className="mb-20 text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-2">
              <Sparkles className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-primary">Leistungen</span>
            </div>
            <h2 className="mb-6 text-4xl font-black md:text-5xl lg:text-6xl">
              Alles für Ihren{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Online-Erfolg
              </span>
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground md:text-xl">
              Von der ersten Idee bis zur fertigen Website – ich begleite Sie auf jedem Schritt
            </p>
          </div>

          {/* Zigzag Layout with Animations */}
          <div className="mx-auto max-w-6xl space-y-32">
            {/* Service 01 - Left */}
            <div className="group relative grid gap-8 md:grid-cols-12 md:gap-16 items-center transition-all duration-500 hover:translate-x-2">
              <div className="md:col-span-3">
                <div className="flex items-center gap-6">
                  <span className="text-8xl font-black text-primary/20 transition-all duration-500 group-hover:text-primary/50 group-hover:scale-110">01</span>
                  <Code className="h-12 w-12 text-primary transition-transform group-hover:scale-110" />
                </div>
              </div>
              <div className="md:col-span-9">
                <h3 className="mb-4 text-3xl font-bold md:text-4xl transition-colors group-hover:text-primary">Webdesign & Entwicklung</h3>
                <p className="max-w-xl text-lg text-muted-foreground leading-relaxed">
                  Maßgeschneiderte Websites mit modernem Design und sauberer Code-Struktur. Ich erstelle Ihre professionelle digitale Visitenkarte, die nicht nur gut aussieht, sondern Besucher in Kunden verwandelt.
                </p>
                <div className="mt-6 h-px w-full bg-gradient-to-r from-primary/50 via-primary/20 to-transparent transition-all group-hover:from-primary group-hover:via-primary/50" />
              </div>
            </div>

            {/* Service 02 - Right */}
            <div className="group relative grid gap-8 md:grid-cols-12 md:gap-16 items-center transition-all duration-500 hover:-translate-x-2">
              <div className="md:col-span-9 md:order-1 md:flex md:flex-col md:items-end">
                <h3 className="mb-4 text-3xl font-bold md:text-4xl md:text-right transition-colors group-hover:text-primary">Responsive Design</h3>
                <p className="max-w-xl text-lg text-muted-foreground md:text-right leading-relaxed">
                  Perfekte Darstellung auf allen Geräten – vom Smartphone bis zum Desktop-PC. Mit Mobile-First Ansatz sorge ich für optimale Benutzererfahrung und schnelle Ladezeiten auf jedem Bildschirm.
                </p>
                <div className="mt-6 h-px w-full bg-gradient-to-l from-primary/50 via-primary/20 to-transparent transition-all group-hover:from-primary group-hover:via-primary/50" />
              </div>
              <div className="md:col-span-3 md:order-2">
                <div className="flex items-center gap-6 md:justify-end">
                  <Smartphone className="h-12 w-12 text-primary transition-transform group-hover:scale-110" />
                  <span className="text-8xl font-black text-primary/20 transition-all duration-500 group-hover:text-primary/50 group-hover:scale-110">02</span>
                </div>
              </div>
            </div>

            {/* Service 03 - Left */}
            <div className="group relative grid gap-8 md:grid-cols-12 md:gap-16 items-center transition-all duration-500 hover:translate-x-2">
              <div className="md:col-span-3">
                <div className="flex items-center gap-6">
                  <span className="text-8xl font-black text-primary/20 transition-all duration-500 group-hover:text-primary/50 group-hover:scale-110">03</span>
                  <Search className="h-12 w-12 text-primary transition-transform group-hover:scale-110" />
                </div>
              </div>
              <div className="md:col-span-9">
                <h3 className="mb-4 text-3xl font-bold md:text-4xl transition-colors group-hover:text-primary">SEO-Optimierung</h3>
                <p className="max-w-xl text-lg text-muted-foreground leading-relaxed">
                  Bessere Sichtbarkeit in Google & Co. für mehr lokale Kunden. Durch professionelle On-Page SEO und technische Optimierung erreichen Sie Top-Rankings und werden von Ihrer Zielgruppe gefunden.
                </p>
                <div className="mt-6 h-px w-full bg-gradient-to-r from-primary/50 via-primary/20 to-transparent transition-all group-hover:from-primary group-hover:via-primary/50" />
              </div>
            </div>

            {/* Service 04 - Right */}
            <div className="group relative grid gap-8 md:grid-cols-12 md:gap-16 items-center transition-all duration-500 hover:-translate-x-2">
              <div className="md:col-span-9 md:order-1 md:flex md:flex-col md:items-end">
                <h3 className="mb-4 text-3xl font-bold md:text-4xl md:text-right transition-colors group-hover:text-primary">Wartung & Support</h3>
                <p className="max-w-xl text-lg text-muted-foreground md:text-right leading-relaxed">
                  Zuverlässige Betreuung auch nach dem Launch. Regelmäßige Updates, sichere Backups und schneller technischer Support – ich bin immer für Sie da, wenn Sie mich brauchen.
                </p>
                <div className="mt-6 h-px w-full bg-gradient-to-l from-primary/50 via-primary/20 to-transparent transition-all group-hover:from-primary group-hover:via-primary/50" />
              </div>
              <div className="md:col-span-3 md:order-2">
                <div className="flex items-center gap-6 md:justify-end">
                  <Headphones className="h-12 w-12 text-primary transition-transform group-hover:scale-110" />
                  <span className="text-8xl font-black text-primary/20 transition-all duration-500 group-hover:text-primary/50 group-hover:scale-110">04</span>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <div className="mt-20 text-center">
            <Button size="lg" variant="outline" className="group" asChild>
              <a href="/services">
                Alle Leistungen ansehen
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Me Section - Redesigned */}
      <section className="relative py-32 md:py-40 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/20 to-background" />
        <div className="absolute top-1/2 left-1/4 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />
        
        <div className="container relative">
          {/* Header */}
          <div className="mb-20 text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-2">
              <Target className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-primary">Warum ich?</span>
            </div>
            <h2 className="mb-6 text-4xl font-black md:text-5xl lg:text-6xl">
              Ihr Partner für{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                digitalen Erfolg
              </span>
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground md:text-xl">
              Kein Agentur-Overhead. Keine versteckten Kosten. Nur ehrliche Arbeit und messbare Ergebnisse.
            </p>
          </div>

          {/* Content Grid */}
          <div className="mx-auto max-w-6xl">
            {/* Stats Row */}
            <div className="mb-20 grid gap-8 md:grid-cols-3">
              <div className="group text-center">
                <div className="mb-4 text-5xl font-black text-primary md:text-6xl transition-transform group-hover:scale-110">
                  50+
                </div>
                <div className="text-lg font-semibold">Erfolgreiche Projekte</div>
                <div className="text-sm text-muted-foreground">Für lokale Unternehmen</div>
              </div>
              <div className="group text-center">
                <div className="mb-4 text-5xl font-black text-primary md:text-6xl transition-transform group-hover:scale-110">
                  5+
                </div>
                <div className="text-lg font-semibold">Jahre Erfahrung</div>
                <div className="text-sm text-muted-foreground">Im Webdesign</div>
              </div>
              <div className="group text-center">
                <div className="mb-4 text-5xl font-black text-primary md:text-6xl transition-transform group-hover:scale-110">
                  100%
                </div>
                <div className="text-lg font-semibold">Kundenzufriedenheit</div>
                <div className="text-sm text-muted-foreground">Garantiert</div>
              </div>
            </div>

            {/* Technologies & Industries */}
            <div className="grid gap-12 md:grid-cols-2">
              {/* Technologies */}
              <div className="group">
                <div className="mb-6">
                  <h3 className="mb-2 text-2xl font-bold md:text-3xl">Moderne Technologien</h3>
                  <p className="text-muted-foreground">
                    Ich arbeite mit bewährten, zukunftssicheren Technologien
                  </p>
                </div>
                <div className="flex flex-wrap gap-3">
                  {["React", "TypeScript", "Tailwind CSS", "Next.js", "WordPress"].map(
                    (tech) => (
                      <div
                        key={tech}
                        className="rounded-lg border border-border bg-background px-4 py-2 text-sm font-medium transition-all hover:border-primary hover:bg-primary/5 hover:scale-105"
                      >
                        {tech}
                      </div>
                    )
                  )}
                </div>
              </div>

              {/* Industries */}
              <div className="group">
                <div className="mb-6">
                  <h3 className="mb-2 text-2xl font-bold md:text-3xl">Branchen-Expertise</h3>
                  <p className="text-muted-foreground">
                    Erfolgreiche Projekte in verschiedenen Branchen
                  </p>
                </div>
                <div className="flex flex-wrap gap-3">
                  {[
                    "Gastronomie",
                    "Handwerk",
                    "Einzelhandel",
                    "Gesundheit",
                    "Dienstleistung",
                  ].map((industry) => (
                    <div
                      key={industry}
                      className="rounded-lg border border-border bg-background px-4 py-2 text-sm font-medium transition-all hover:border-primary hover:bg-primary/5 hover:scale-105"
                    >
                      {industry}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Features Grid */}
            <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              <div className="group">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-transform group-hover:scale-110">
                  <CheckCircle2 className="h-6 w-6" />
                </div>
                <h4 className="mb-2 font-bold">Persönliche Betreuung</h4>
                <p className="text-sm text-muted-foreground">
                  Direkter Kontakt während des gesamten Projekts
                </p>
              </div>
              <div className="group">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-transform group-hover:scale-110">
                  <CheckCircle2 className="h-6 w-6" />
                </div>
                <h4 className="mb-2 font-bold">Transparente Preise</h4>
                <p className="text-sm text-muted-foreground">
                  Keine versteckten Kosten oder Überraschungen
                </p>
              </div>
              <div className="group">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-transform group-hover:scale-110">
                  <CheckCircle2 className="h-6 w-6" />
                </div>
                <h4 className="mb-2 font-bold">Schnelle Umsetzung</h4>
                <p className="text-sm text-muted-foreground">
                  Ihre Website ist in 2-4 Wochen online
                </p>
              </div>
              <div className="group">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-transform group-hover:scale-110">
                  <CheckCircle2 className="h-6 w-6" />
                </div>
                <h4 className="mb-2 font-bold">Moderne Lösungen</h4>
                <p className="text-sm text-muted-foreground">
                  Zukunftssichere Technologien für langfristigen Erfolg
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section - Scrolling Reviews */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
        
        <div className="container relative">
          {/* Header */}
          <div className="mb-16 text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-2">
              <Sparkles className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-primary">Kundenstimmen</span>
            </div>
            <h2 className="mb-6 text-4xl font-black md:text-5xl lg:text-6xl">
              Was meine{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Kunden sagen
              </span>
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground md:text-xl">
              Echte Ergebnisse von echten lokalen Unternehmen
            </p>
          </div>

          {/* Testimonials Marquee */}
          <div className="relative">
            {/* Fade Overlays */}
            <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-32 bg-gradient-to-r from-background to-transparent" />
            <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-32 bg-gradient-to-l from-background to-transparent" />
            
            {/* First Row - Left to Right */}
            <Marquee className="mb-8 [--duration:30s] [--gap:1rem]" pauseOnHover repeat={6}>
              {testimonials.slice(0, 3).map((testimonial, index) => (
                <TestimonialCard key={`row1-${index}`} {...testimonial} />
              ))}
            </Marquee>
            
            {/* Second Row - Right to Left */}
            <Marquee className="mb-8 [--duration:30s] [--gap:1rem]" reverse pauseOnHover repeat={6}>
              {testimonials.slice(3, 6).map((testimonial, index) => (
                <TestimonialCard key={`row2-${index}`} {...testimonial} />
              ))}
            </Marquee>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 md:py-32">
        <div className="container">
          <div className="mx-auto max-w-3xl">
            <div className="mb-16 text-center">
              <Badge className="mb-4">FAQ</Badge>
              <h2 className="mb-4 text-3xl font-bold md:text-4xl lg:text-5xl">
                Häufig gestellte <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Fragen</span>
              </h2>
              <p className="text-lg text-muted-foreground">
                Alles, was Sie über meine Dienstleistungen wissen müssen
              </p>
            </div>

            <Accordion type="single" collapsible className="w-full space-y-4">
              <AccordionItem value="item-1" className="rounded-lg border border-border bg-card px-6 shadow-sm transition-all hover:shadow-md">
                <AccordionTrigger className="text-left text-lg font-semibold hover:no-underline">
                  Was kostet eine professionelle Website?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Die Kosten variieren je nach Umfang und Anforderungen. Eine einfache Business-Website startet bei ca. €1.500, während umfangreichere Projekte mit E-Commerce oder individuellen Funktionen ab €3.000 beginnen. Im kostenlosen Erstgespräch erstelle ich Ihnen ein transparentes Angebot ohne versteckte Kosten.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="rounded-lg border border-border bg-card px-6 shadow-sm transition-all hover:shadow-md">
                <AccordionTrigger className="text-left text-lg font-semibold hover:no-underline">
                  Wie lange dauert die Erstellung einer Website?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Eine Standard-Website ist in der Regel innerhalb von 2-4 Wochen fertig. Der genaue Zeitrahmen hängt von der Komplexität des Projekts und der Geschwindigkeit Ihres Feedbacks ab. Ich halte Sie während des gesamten Prozesses auf dem Laufenden und arbeite nach einem klaren Zeitplan.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="rounded-lg border border-border bg-card px-6 shadow-sm transition-all hover:shadow-md">
                <AccordionTrigger className="text-left text-lg font-semibold hover:no-underline">
                  Welche Technologien verwenden Sie?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Ich arbeite mit modernen, zukunftssicheren Technologien wie React, TypeScript, Next.js und Tailwind CSS für maßgeschneiderte Lösungen. Für Content-Management-Systeme setze ich auf WordPress. Alle Websites sind responsive, schnell und SEO-optimiert – garantiert.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="rounded-lg border border-border bg-card px-6 shadow-sm transition-all hover:shadow-md">
                <AccordionTrigger className="text-left text-lg font-semibold hover:no-underline">
                  Bieten Sie auch Wartung und Support an?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Ja, ich biete verschiedene Wartungspakete an. Diese umfassen regelmäßige Updates, Sicherheits-Backups, technischen Support und kleinere Anpassungen. Sie können zwischen monatlichen oder jährlichen Paketen wählen – ganz nach Ihrem Bedarf.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5" className="rounded-lg border border-border bg-card px-6 shadow-sm transition-all hover:shadow-md">
                <AccordionTrigger className="text-left text-lg font-semibold hover:no-underline">
                  Kann ich meine Website selbst aktualisieren?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Absolut! Bei WordPress-Projekten erhalten Sie ein benutzerfreundliches Content-Management-System, mit dem Sie Texte, Bilder und Inhalte selbst ändern können. Ich schule Sie gerne in der Bedienung und stelle Ihnen eine ausführliche Dokumentation zur Verfügung.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-6" className="rounded-lg border border-border bg-card px-6 shadow-sm transition-all hover:shadow-md">
                <AccordionTrigger className="text-left text-lg font-semibold hover:no-underline">
                  Wie läuft die Zusammenarbeit ab?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Nach dem kostenlosen Erstgespräch erstelle ich Ihnen ein Angebot. Bei Zusage beginnen wir mit der Konzeption und dem Design. Sie erhalten regelmäßige Updates und können jederzeit Feedback geben. Nach Ihrer finalen Freigabe geht die Website live. Keine Vorkasse erforderlich – Sie zahlen erst bei Zufriedenheit.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-7" className="rounded-lg border border-border bg-card px-6 shadow-sm transition-all hover:shadow-md">
                <AccordionTrigger className="text-left text-lg font-semibold hover:no-underline">
                  Was passiert, wenn mir das Ergebnis nicht gefällt?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Ihre Zufriedenheit ist meine Priorität. Während des Projekts haben Sie mehrere Feedback-Runden, um sicherzustellen, dass alles Ihren Vorstellungen entspricht. Sollten Sie am Ende dennoch nicht zufrieden sein, biete ich eine Geld-zurück-Garantie. Ihr Risiko ist minimal.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* Final CTA Section - Enhanced with Glowing Border */}
      <section className="relative py-20 md:py-32">
        {/* Smooth background transition */}
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-background" />
        
        <div className="container relative">
          <div className="mx-auto max-w-5xl">
            {/* Card with Animated Glowing Trail */}
            <div className="group relative">
              {/* Card Content */}
              <div className="relative overflow-hidden rounded-2xl border-2 border-primary/20 bg-background p-8 shadow-2xl md:p-12">
                {/* Pulsierender Glow-Effekt */}
                <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-primary/30 via-blue-500/30 to-primary/30 opacity-75 blur-lg animate-pulse" />
                <div className="absolute inset-0 rounded-2xl border-2 border-primary/40 animate-[pulse_3s_ease-in-out_infinite]" />
                {/* Subtle accent */}
                <div className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-primary/5 blur-3xl" />
                
                <div className="relative">
                  <div className="mb-10 text-center">
                    <h2 className="mb-4 text-3xl font-bold md:text-4xl lg:text-5xl">
                      Bereit, mehr Kunden zu gewinnen?
                    </h2>
                    <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
                      Buchen Sie jetzt Ihr kostenloses Erstgespräch und erfahren Sie, wie ich Ihr Unternehmen online erfolgreich mache.
                    </p>
                  </div>

                  {/* CTA Buttons - Enhanced Primary */}
                  <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:justify-center">
                    <Button 
                      size="lg" 
                      className="group relative h-16 overflow-hidden px-12 text-lg font-black shadow-2xl shadow-primary/50 transition-all hover:scale-110 hover:shadow-primary/80"
                      asChild
                    >
                      <a href="/contact">
                        {/* Button glow effect */}
                        <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent opacity-0 transition-opacity group-hover:opacity-20" />
                        <Calendar className="relative mr-3 h-6 w-6 transition-transform group-hover:scale-110" />
                        <span className="relative">Kostenloses Erstgespräch</span>
                        <ArrowRight className="relative ml-3 h-6 w-6 transition-transform group-hover:translate-x-2" />
                      </a>
                    </Button>
                    <Button 
                      size="lg" 
                      variant="outline"
                      className="group h-16 border-2 px-12 text-lg font-bold transition-all hover:scale-105 hover:border-primary hover:bg-primary/5"
                      asChild
                    >
                      <a href="/portfolio">
                        Portfolio ansehen
                        <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                      </a>
                    </Button>
                  </div>

                  {/* Trust Indicators - Horizontal */}
                  <div className="flex flex-wrap items-center justify-center gap-6 border-t border-border pt-8 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary" />
                      <span>Antwort in 24h</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary" />
                      <span>Unverbindlich & kostenlos</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary" />
                      <span>Individuelle Beratung</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
