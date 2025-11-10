import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Code,
  Smartphone,
  Search,
  Headphones,
  ArrowRight,
  CheckCircle2,
  Calendar,
  Clock,
} from "lucide-react";
import Layout from "@/components/Layout";

const mainServices = [
  {
    number: "01",
    icon: Code,
    title: "Webdesign & Entwicklung",
    description:
      "Professionelle Websites, die Ihre Kunden begeistern und Ihr Geschäft voranbringen. Von der ersten Skizze bis zum fertigen Produkt.",
    features: [
      "Individuelles, modernes Design",
      "Responsive für alle Geräte",
      "Schnelle Ladezeiten",
      "Sauberer, wartbarer Code",
    ],
  },
  {
    number: "02",
    icon: Search,
    title: "SEO-Optimierung",
    description:
      "Werden Sie von Ihren Kunden gefunden. Ich optimiere Ihre Website für lokale Suchanfragen und bessere Google-Rankings.",
    features: [
      "Lokale Suchmaschinenoptimierung",
      "On-Page SEO",
      "Technische Optimierung",
      "Google My Business Integration",
    ],
  },
  {
    number: "03",
    icon: Smartphone,
    title: "Mobile-First Design",
    description:
      "Über 70% Ihrer Kunden nutzen Smartphones. Ihre Website funktioniert perfekt auf jedem Gerät - garantiert.",
    features: [
      "Touch-optimierte Bedienung",
      "Perfekte Darstellung auf allen Geräten",
      "Schnelle mobile Ladezeiten",
      "App-ähnliches Nutzererlebnis",
    ],
  },
  {
    number: "04",
    icon: Headphones,
    title: "Wartung & Support",
    description:
      "Ihre Website bleibt aktuell und sicher. Ich kümmere mich um Updates, Backups und technischen Support.",
    features: [
      "Regelmäßige Sicherheitsupdates",
      "Automatische Backups",
      "Technischer Support",
      "Performance-Monitoring",
    ],
  },
];

const processSteps = [
  {
    step: "01",
    title: "Kostenloses Erstgespräch",
    description:
      "Wir besprechen Ihre Ziele, Zielgruppe und Anforderungen. Ich erstelle Ihnen ein transparentes Angebot - ohne versteckte Kosten.",
    duration: "30-60 Min",
  },
  {
    step: "02",
    title: "Konzept & Design",
    description:
      "Ich entwickle ein maßgeschneidertes Konzept und Design für Ihre Website. Sie erhalten Entwürfe zur Freigabe.",
    duration: "3-5 Tage",
  },
  {
    step: "03",
    title: "Entwicklung & Testing",
    description:
      "Umsetzung der Website mit modernen Technologien. Umfassende Tests auf allen Geräten und Browsern.",
    duration: "1-2 Wochen",
  },
  {
    step: "04",
    title: "Launch & Support",
    description:
      "Nach Ihrer finalen Freigabe geht die Website live. Ich bin auch danach für Sie da - mit Wartung und Support.",
    duration: "Laufend",
  },
];

export default function Services() {
  return (
    <Layout>
      {/* Continuous Glowing Background Wrapper */}
      <div className="relative bg-gradient-to-br from-background via-primary/5 to-accent/10">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
        
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center overflow-hidden">
        
        <div className="container relative z-10 py-20 md:py-32">
          <div className="mx-auto max-w-3xl text-center">
            <Badge className="mb-6 text-base">Leistungen</Badge>
            <h1 className="mb-8 text-5xl font-black tracking-tight md:text-6xl lg:text-7xl">
              Alles für Ihren{" "}
              <span className="block bg-gradient-to-r from-primary via-blue-400 to-primary bg-clip-text text-transparent">
                Online-Erfolg
              </span>
            </h1>
            <p className="text-xl font-medium text-muted-foreground md:text-2xl">
              Von der ersten Idee bis zur fertigen Website und darüber hinaus - ich begleite Sie
              auf Ihrem digitalen Weg.
            </p>
          </div>
        </div>
      </section>

      {/* Main Services - Zigzag Layout */}
      <section className="py-20 md:py-32">
        <div className="container">
          <div className="space-y-32">
            {mainServices.map((service, index) => (
              <div
                key={service.number}
                className={`grid items-center gap-12 lg:grid-cols-2 lg:gap-20 ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Number & Icon - Alternating sides */}
                <div
                  className={`flex items-center justify-center ${
                    index % 2 === 1 ? "lg:order-2" : ""
                  }`}
                >
                  <div className="relative">
                    {/* Large Number Background */}
                    <div className="text-[200px] font-black leading-none text-primary/5">
                      {service.number}
                    </div>
                    {/* Icon Overlay */}
                    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                      <div className="rounded-2xl border-2 border-primary/20 bg-primary/10 p-8 backdrop-blur transition-all hover:scale-110 hover:border-primary hover:shadow-2xl hover:shadow-primary/20">
                        <service.icon className="h-16 w-16 text-primary" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content - Alternating sides */}
                <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                  <h2 className="mb-6 text-4xl font-black md:text-5xl">{service.title}</h2>
                  <p className="mb-8 text-xl leading-relaxed text-muted-foreground">
                    {service.description}
                  </p>

                  {/* Features List */}
                  <ul className="space-y-4">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <CheckCircle2 className="mt-1 h-6 w-6 flex-shrink-0 text-primary" />
                        <span className="text-lg text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section with Extra Glow Highlight */}
      <section className="relative overflow-hidden py-20 md:py-32">
        {/* Extra Glowing Highlight for Process Section */}
        <div className="absolute inset-0 bg-gradient-radial from-primary/10 via-transparent to-transparent opacity-50" />
        
        <div className="container relative z-10">
          <div className="mb-16 text-center">
            <Badge className="mb-6 text-base">Prozess</Badge>
            <h2 className="mb-6 text-4xl font-black md:text-5xl lg:text-6xl">
              So läuft die Zusammenarbeit ab
            </h2>
            <p className="mx-auto max-w-2xl text-xl text-muted-foreground">
              Ein strukturierter Prozess für Ihren Erfolg - transparent und nachvollziehbar
            </p>
          </div>

          <div className="mx-auto max-w-5xl">
            <div className="grid gap-8 md:grid-cols-2">
              {processSteps.map((step, index) => (
                <Card
                  key={step.step}
                  className="group relative overflow-hidden border-2 border-primary/20 bg-card/50 backdrop-blur transition-all hover:border-primary hover:shadow-2xl hover:shadow-primary/20"
                >
                  <CardContent className="p-8">
                    {/* Step Number & Duration */}
                    <div className="mb-6 flex items-center justify-between">
                      <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-2xl font-black text-primary transition-all group-hover:bg-primary/20">
                        {step.step}
                      </div>
                      <Badge variant="secondary" className="flex items-center gap-2 px-4 py-2">
                        <Clock className="h-4 w-4" />
                        {step.duration}
                      </Badge>
                    </div>

                    {/* Title & Description */}
                    <h3 className="mb-4 text-2xl font-bold">{step.title}</h3>
                    <p className="leading-relaxed text-muted-foreground">{step.description}</p>

                    {/* Arrow for flow indication */}
                    {index < processSteps.length - 1 && (
                      <div className="absolute -bottom-4 -right-4 text-primary/5">
                        <ArrowRight className="h-24 w-24" />
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section with Extra Glow Highlight */}
      <section className="relative py-20 md:py-32">
        {/* Extra Glowing Highlight for Pricing */}
        <div className="absolute inset-0 bg-gradient-radial from-accent/10 via-transparent to-transparent opacity-50" />
        <div className="container">
          <div className="mx-auto max-w-4xl text-center">
            <Badge className="mb-6 text-base">Preise</Badge>
            <h2 className="mb-6 text-4xl font-black md:text-5xl lg:text-6xl">
              Transparente Preisgestaltung
            </h2>
            <p className="mb-12 text-xl text-muted-foreground">
              Jedes Projekt ist einzigartig. Im kostenlosen Erstgespräch erstelle ich Ihnen ein
              maßgeschneidertes Angebot - transparent und fair.
            </p>

            {/* Price Ranges */}
            <div className="mb-12 grid gap-6 md:grid-cols-3">
              <Card className="border-2 border-primary/20 transition-all hover:border-primary hover:shadow-lg">
                <CardContent className="p-8 text-center">
                  <div className="mb-3 text-4xl font-black text-primary">ab €1.500</div>
                  <div className="mb-2 text-xl font-bold">Starter</div>
                  <div className="text-muted-foreground">Einfache Business-Website</div>
                </CardContent>
              </Card>
              <Card className="border-2 border-primary bg-primary/5 shadow-xl shadow-primary/20">
                <CardContent className="p-8 text-center">
                  <div className="mb-3 text-4xl font-black text-primary">ab €3.000</div>
                  <div className="mb-2 text-xl font-bold">Business</div>
                  <div className="text-muted-foreground">
                    Umfangreiche Website mit Features
                  </div>
                </CardContent>
              </Card>
              <Card className="border-2 border-primary/20 transition-all hover:border-primary hover:shadow-lg">
                <CardContent className="p-8 text-center">
                  <div className="mb-3 text-4xl font-black text-primary">ab €5.000</div>
                  <div className="mb-2 text-xl font-bold">Premium</div>
                  <div className="text-muted-foreground">E-Commerce & Custom Solutions</div>
                </CardContent>
              </Card>
            </div>

            <Button
              size="lg"
              className="group h-16 min-w-[280px] text-lg font-bold shadow-2xl shadow-primary/50 transition-all hover:scale-105 hover:shadow-primary/70"
              asChild
            >
              <a href="/contact">
                <Calendar className="mr-3 h-6 w-6" />
                Kostenloses Erstgespräch buchen
                <ArrowRight className="ml-3 h-6 w-6 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>

            {/* Trust Indicators */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-base text-muted-foreground">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-primary" />
                <span>Keine Vorkasse</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-primary" />
                <span>Geld-zurück-Garantie</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-primary" />
                <span>Fertig in 2-4 Wochen</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      </div>
    </Layout>
  );
}
