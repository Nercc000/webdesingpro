import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Heart,
  Target,
  Zap,
  CheckCircle2,
  ArrowRight,
  Calendar,
  Award,
  TrendingUp,
  Sparkles,
} from "lucide-react";
import Layout from "@/components/Layout";
import { InfiniteSlider } from "@/components/motion-primitives/infinite-slider";
import StackIcon from "tech-stack-icons";

const stats = [
  { value: "50+", label: "Erfolgreiche Projekte", icon: Award },
  { value: "5+", label: "Jahre Erfahrung", icon: TrendingUp },
  { value: "100%", label: "Kundenzufriedenheit", icon: Heart },
];

const values = [
  {
    icon: Target,
    title: "Fokus auf Ergebnisse",
    description:
      "Ihre Website soll nicht nur gut aussehen - sie soll Ihnen mehr Kunden bringen. Messbare Ergebnisse stehen im Mittelpunkt.",
  },
  {
    icon: Heart,
    title: "Persönliche Betreuung",
    description:
      "Sie arbeiten direkt mit mir - kein Projektmanager, keine Agentur-Hierarchie. Schnelle Kommunikation, persönlicher Service.",
  },
  {
    icon: Zap,
    title: "Schnelle Umsetzung",
    description:
      "Keine monatelangen Wartezeiten. Ihre Website ist in 2-4 Wochen fertig - ohne Kompromisse bei der Qualität.",
  },
];

// Tech Stack for Infinite Slider
const technologies = [
  { name: "React", icon: "react" },
  { name: "TypeScript", icon: "typescript" },
  { name: "Next.js", icon: "nextjs2" },
  { name: "Tailwind CSS", icon: "tailwindcss" },
  { name: "WordPress", icon: "wordpress" },
  { name: "Node.js", icon: "nodejs" },
];

const industries = [
  "Gastronomie",
  "Gesundheitswesen",
  "Einzelhandel",
  "Handwerk",
  "Dienstleistungen",
  "Rechtsberatung",
  "Fitness & Wellness",
  "Immobilien",
];

export default function About() {
  return (
    <Layout>
      {/* Continuous Glowing Background Wrapper */}
      <div className="relative bg-gradient-to-br from-background via-primary/5 to-accent/10">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center overflow-hidden">
        
        <div className="container relative z-10 py-20 md:py-32">
          <div className="mx-auto max-w-4xl text-center">
            <Badge className="mb-6 text-base">Über mich</Badge>
            <h1 className="mb-8 text-5xl font-black tracking-tight md:text-6xl lg:text-7xl">
              Webdesigner für{" "}
              <span className="block bg-gradient-to-r from-primary via-blue-400 to-primary bg-clip-text text-transparent">
                lokale Unternehmen
              </span>
            </h1>

            {/* Stats - Bigger and bolder */}
            <div className="mt-16 grid gap-6 md:grid-cols-3">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="group relative overflow-hidden rounded-2xl border-2 border-primary/20 bg-card/50 p-8 backdrop-blur transition-all hover:border-primary hover:shadow-2xl hover:shadow-primary/20"
                >
                  <div className="mb-4 flex justify-center">
                    <div className="rounded-xl bg-primary/10 p-4 transition-all group-hover:bg-primary/20">
                      <stat.icon className="h-8 w-8 text-primary" />
                    </div>
                  </div>
                  <div className="mb-2 text-5xl font-black text-primary">{stat.value}</div>
                  <div className="text-sm font-medium text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Personal Story */}
      <section className="py-20 md:py-32">
        <div className="container">
          <div className="mx-auto max-w-4xl">
            <div className="space-y-8 text-xl leading-relaxed">
              <p className="text-2xl font-bold text-foreground">
                Hallo, ich bin Ihr Partner für professionelles Webdesign.
              </p>
              <p className="text-muted-foreground">
                Seit über 5 Jahren helfe ich lokalen Unternehmen dabei, online erfolgreich zu sein.
                Ich habe gesehen, wie viele großartige lokale Geschäfte online unsichtbar sind -
                während ihre Konkurrenz Kunden über das Internet gewinnt.
              </p>
              <p className="text-muted-foreground">
                <strong className="text-foreground">Das muss nicht sein.</strong> Meine Mission ist
                einfach: Ich erstelle Websites, die Ihnen messbar mehr Kunden bringen. Keine
                komplizierten Agentur-Prozesse, keine versteckten Kosten, keine monatelangen
                Wartezeiten.
              </p>
              <p className="text-muted-foreground">
                Sie arbeiten direkt mit mir - von der ersten Idee bis zum Launch und darüber hinaus.
                Persönlich, transparent und mit Fokus auf Ihre Geschäftsziele.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Me Section */}
      <section className="relative overflow-hidden py-20 md:py-32">
        
        <div className="container relative z-10">
          <div className="mb-16 text-center">
            <Badge className="mb-6 text-base">Vorteile</Badge>
            <h2 className="mb-6 text-4xl font-black md:text-5xl lg:text-6xl">
              Warum mit mir arbeiten?
            </h2>
            <p className="mx-auto max-w-2xl text-xl text-muted-foreground">
              Was mich von anderen Webdesignern und Agenturen unterscheidet
            </p>
          </div>

          <div className="mx-auto max-w-6xl">
            <div className="grid gap-8 md:grid-cols-3">
              {values.map((value, index) => (
                <Card
                  key={value.title}
                  className="group relative overflow-hidden border-2 border-primary/20 bg-card/50 backdrop-blur transition-all hover:border-primary hover:shadow-2xl hover:shadow-primary/20"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardContent className="p-8">
                    <div className="mb-6 inline-flex rounded-2xl bg-primary/10 p-5 transition-all group-hover:scale-110 group-hover:bg-primary/20">
                      <value.icon className="h-10 w-10 text-primary" />
                    </div>
                    <h3 className="mb-4 text-2xl font-bold">{value.title}</h3>
                    <p className="leading-relaxed text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Technologies - Infinite Slider */}
      <section className="py-20 md:py-32">
        <div className="container">
          <div className="mb-12 text-center">
            <Badge className="mb-6 text-base">Technologien</Badge>
            <h2 className="mb-6 text-4xl font-black md:text-5xl lg:text-6xl">
              Moderne Technologien
            </h2>
            <p className="mx-auto max-w-2xl text-xl text-muted-foreground">
              Ich arbeite mit bewährten, zukunftssicheren Technologien für schnelle, sichere und
              wartbare Websites
            </p>
          </div>

          {/* Infinite Slider */}
          <div className="relative">
            <InfiniteSlider gap={48} reverse speed={40}>
              {technologies.map((tech) => (
                <div
                  key={tech.name}
                  className="flex items-center gap-4 px-8 py-4 transition-all hover:scale-105"
                >
                  <StackIcon name={tech.icon} className="h-12 w-12" />
                  <span className="text-2xl font-bold text-foreground">
                    {tech.name}
                  </span>
                </div>
              ))}
            </InfiniteSlider>
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="relative overflow-hidden py-20 md:py-32">
        <div className="container">
          <div className="mx-auto max-w-5xl">
            <div className="mb-12 text-center">
              <Badge className="mb-6 text-base">Branchen</Badge>
              <h2 className="mb-6 text-4xl font-black md:text-5xl lg:text-6xl">
                Erfahrung in vielen Branchen
              </h2>
              <p className="mx-auto max-w-2xl text-xl text-muted-foreground">
                Von Restaurants bis Anwaltskanzleien - ich kenne die Anforderungen verschiedener
                Branchen
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {industries.map((industry, index) => (
                <div
                  key={industry}
                  className="group rounded-xl border-2 border-primary/20 bg-card p-6 text-center transition-all hover:border-primary hover:shadow-lg"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <div className="mb-3 flex justify-center">
                    <Sparkles className="h-6 w-6 text-primary" />
                  </div>
                  <span className="text-lg font-bold">{industry}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Guarantee Section */}
      <section className="relative overflow-hidden py-20 md:py-32">
        
        <div className="container relative z-10">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-8 inline-flex rounded-full bg-primary/10 p-8">
              <CheckCircle2 className="h-16 w-16 text-primary" />
            </div>
            <h2 className="mb-6 text-4xl font-black md:text-5xl lg:text-6xl">
              Meine Garantie an Sie
            </h2>
            <p className="mb-12 text-xl leading-relaxed text-muted-foreground">
              Ich bin von meiner Arbeit überzeugt. Deshalb biete ich Ihnen eine{" "}
              <strong className="text-foreground">Geld-zurück-Garantie</strong>: Wenn Sie mit dem
              Ergebnis nicht zufrieden sind, zahlen Sie nichts. Kein Risiko für Sie.
            </p>

            <div className="grid gap-6 sm:grid-cols-2">
              <div className="rounded-xl border-2 border-primary/20 bg-card/50 p-6 text-left backdrop-blur">
                <CheckCircle2 className="mb-3 h-8 w-8 text-primary" />
                <div className="mb-2 text-xl font-bold">Keine Vorkasse</div>
                <div className="text-muted-foreground">Sie zahlen erst bei Zufriedenheit</div>
              </div>
              <div className="rounded-xl border-2 border-primary/20 bg-card/50 p-6 text-left backdrop-blur">
                <CheckCircle2 className="mb-3 h-8 w-8 text-primary" />
                <div className="mb-2 text-xl font-bold">Transparente Preise</div>
                <div className="text-muted-foreground">Keine versteckten Kosten</div>
              </div>
              <div className="rounded-xl border-2 border-primary/20 bg-card/50 p-6 text-left backdrop-blur">
                <CheckCircle2 className="mb-3 h-8 w-8 text-primary" />
                <div className="mb-2 text-xl font-bold">Schnelle Umsetzung</div>
                <div className="text-muted-foreground">Fertig in 2-4 Wochen</div>
              </div>
              <div className="rounded-xl border-2 border-primary/20 bg-card/50 p-6 text-left backdrop-blur">
                <CheckCircle2 className="mb-3 h-8 w-8 text-primary" />
                <div className="mb-2 text-xl font-bold">Persönlicher Support</div>
                <div className="text-muted-foreground">Auch nach dem Launch</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-6 text-4xl font-black md:text-5xl lg:text-6xl">
              Lassen Sie uns Ihr Projekt besprechen
            </h2>
            <p className="mb-12 text-xl text-muted-foreground">
              Im kostenlosen Erstgespräch analysieren wir Ihre Situation und ich zeige Ihnen, wie
              eine neue Website Ihr Geschäft voranbringen kann.
            </p>

            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button
                size="lg"
                className="group h-16 min-w-[250px] text-lg font-bold shadow-2xl shadow-primary/50 transition-all hover:scale-105 hover:shadow-primary/70"
                asChild
              >
                <a href="/contact">
                  <Calendar className="mr-3 h-6 w-6" />
                  Erstgespräch buchen
                  <ArrowRight className="ml-3 h-6 w-6 transition-transform group-hover:translate-x-1" />
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="h-16 min-w-[250px] border-2 text-lg font-bold transition-all hover:scale-105"
                asChild
              >
                <a href="/portfolio">Portfolio ansehen</a>
              </Button>
            </div>
          </div>
        </div>
      </section>
      </div>
    </Layout>
  );
}
