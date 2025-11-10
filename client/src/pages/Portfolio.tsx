import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, XCircle, TrendingUp } from "lucide-react";
import Layout from "@/components/Layout";
import { portfolioProjects } from "@/data/portfolio";

export default function Portfolio() {
  return (
    <Layout>
      {/* Continuous Glowing Background Wrapper */}
      <div className="relative bg-gradient-to-br from-background via-primary/5 to-accent/10">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
        
      {/* Hero Section */}
      <section className="relative py-20 md:py-32">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <Badge className="mb-4">Portfolio</Badge>
            <h1 className="mb-6 text-4xl font-bold md:text-5xl lg:text-6xl">
              Erfolgsgeschichten meiner{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Kunden
              </span>
            </h1>
            <p className="text-lg text-muted-foreground md:text-xl">
              Messbare Ergebnisse für lokale Unternehmen aus verschiedenen Branchen
            </p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="pb-20 md:pb-32">
        <div className="container">
          <div className="space-y-32">
            {portfolioProjects.map((project, index) => (
              <div key={project.id} className="group">
                {/* Project Header */}
                <div className="mb-12">
                  <div className="mb-4 flex items-center gap-4">
                    <div className="text-6xl">{project.imageEmoji}</div>
                    <div>
                      <Badge variant="secondary" className="mb-2">
                        {project.category}
                      </Badge>
                      <h2 className="text-3xl font-bold md:text-4xl">{project.title}</h2>
                      <p className="text-sm text-muted-foreground">
                        {project.client} · {project.year}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Challenge & Solution */}
                <div className="mb-12 grid gap-8 md:grid-cols-2">
                  <div>
                    <h3 className="mb-3 text-xl font-semibold">Herausforderung</h3>
                    <p className="text-muted-foreground">{project.challenge}</p>
                  </div>
                  <div>
                    <h3 className="mb-3 text-xl font-semibold">Lösung</h3>
                    <p className="text-muted-foreground">{project.solution}</p>
                  </div>
                </div>

                {/* Results - Highlighted with Extra Glow */}
                <div className="relative mb-12">
                  {/* Extra Glowing Highlight for Results */}
                  <div className="absolute inset-0 -m-8 bg-gradient-radial from-primary/10 via-transparent to-transparent opacity-50 blur-2xl" />
                  <div className="flex items-center gap-2 mb-6">
                    <TrendingUp className="h-5 w-5 text-primary" />
                    <h3 className="text-xl font-semibold">Messbare Ergebnisse</h3>
                  </div>
                  <div className="grid gap-6 md:grid-cols-3">
                    {project.results.map((result, idx) => (
                      <Card
                        key={idx}
                        className="border-2 transition-all hover:border-primary hover:shadow-lg"
                      >
                        <CardContent className="p-6">
                          <div className="mb-2 text-4xl font-bold text-primary">
                            {result.metric}
                          </div>
                          <div className="mb-1 font-semibold">{result.value}</div>
                          <div className="text-sm text-muted-foreground">
                            {result.description}
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>

                {/* Before/After Comparison */}
                <div className="mb-12">
                  <h3 className="mb-6 text-xl font-semibold">Vorher/Nachher-Vergleich</h3>
                  <div className="grid gap-6 md:grid-cols-2">
                    {/* Before */}
                    <Card className="border-2 border-destructive/20 bg-destructive/5">
                      <CardContent className="p-6">
                        <div className="mb-4 flex items-center gap-2">
                          <XCircle className="h-5 w-5 text-destructive" />
                          <h4 className="font-semibold text-destructive">
                            {project.before.title}
                          </h4>
                        </div>
                        <ul className="space-y-2">
                          {project.before.points.map((point, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-sm">
                              <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-destructive" />
                              <span className="text-muted-foreground">{point}</span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>

                    {/* After */}
                    <Card className="border-2 border-primary/20 bg-primary/5">
                      <CardContent className="p-6">
                        <div className="mb-4 flex items-center gap-2">
                          <CheckCircle2 className="h-5 w-5 text-primary" />
                          <h4 className="font-semibold text-primary">
                            {project.after.title}
                          </h4>
                        </div>
                        <ul className="space-y-2">
                          {project.after.points.map((point, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-sm">
                              <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                              <span>{point}</span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  </div>
                </div>

                {/* Technologies */}
                <div>
                  <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                    Verwendete Technologien
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="outline" className="px-3 py-1">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Divider */}
                {index < portfolioProjects.length - 1 && (
                  <div className="mt-32 border-t border-border" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section with Extra Glow Highlight */}
      <section className="relative py-20 md:py-32">
        {/* Extra Glowing Highlight for CTA */}
        <div className="absolute inset-0 bg-gradient-radial from-accent/15 via-transparent to-transparent opacity-60" />
        
        <div className="container relative">
          <div className="mx-auto max-w-4xl">
            {/* Glowing Card with Pulsing Effect */}
            <Card className="relative overflow-hidden border-2 border-primary/20 bg-gradient-to-br from-primary/5 via-background to-accent/5">
              {/* Animated Glow Effect */}
              <div className="absolute inset-0 animate-pulse bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10" />
              
              <CardContent className="relative p-12 text-center">
                <h2 className="mb-4 text-3xl font-bold md:text-4xl lg:text-5xl">
                  Ihre Erfolgsgeschichte könnte hier stehen
                </h2>
                <p className="mb-8 text-lg text-muted-foreground md:text-xl">
                  Lassen Sie uns gemeinsam messbare Ergebnisse für Ihr Unternehmen erzielen
                </p>
                
                <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                  <Button size="lg" className="group min-w-[200px]" asChild>
                    <a href="/contact">
                      Kostenloses Erstgespräch
                      <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                    </a>
                  </Button>
                  <Button size="lg" variant="outline" className="min-w-[200px]" asChild>
                    <a href="/">Mehr erfahren</a>
                  </Button>
                </div>

                {/* Trust Indicators */}
                <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                    <span>50+ erfolgreiche Projekte</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                    <span>100% Kundenzufriedenheit</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                    <span>5+ Jahre Erfahrung</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      </div>
    </Layout>
  );
}
