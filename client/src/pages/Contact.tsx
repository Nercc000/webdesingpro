import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { toast } from "sonner";
import Layout from "@/components/Layout";

const contactMethods = [
  {
    icon: Mail,
    title: "E-Mail",
    value: "kontakt@webdesign-pro.de",
    href: "mailto:kontakt@webdesign-pro.de",
    color: "text-blue-500",
    bgColor: "bg-blue-500/10",
  },
  {
    icon: Phone,
    title: "Telefon",
    value: "+49 123 456789",
    href: "tel:+49123456789",
    color: "text-green-500",
    bgColor: "bg-green-500/10",
  },
  {
    icon: MapPin,
    title: "Standort",
    value: "Deutschland",
    href: "#",
    color: "text-purple-500",
    bgColor: "bg-purple-500/10",
  },
];

const faqs = [
  {
    q: "Wie lange dauert die Erstellung einer Website?",
    a: "Die Dauer hängt vom Umfang ab. Eine einfache Website ist in 2-3 Wochen fertig, komplexere Projekte können 4-8 Wochen dauern.",
  },
  {
    q: "Was kostet eine professionelle Website?",
    a: "Die Kosten variieren je nach Anforderungen. Ein Erstgespräch ist kostenlos, danach erstelle ich Ihnen ein individuelles Angebot.",
  },
  {
    q: "Kann ich meine Website selbst aktualisieren?",
    a: "Ja! Ich erstelle Websites mit benutzerfreundlichen Content-Management-Systemen und schule Sie in der Bedienung.",
  },
  {
    q: "Bieten Sie auch Wartung und Support an?",
    a: "Ja, ich biete verschiedene Wartungspakete an, um Ihre Website aktuell und sicher zu halten.",
  },
];

export default function Contact() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast.success("Vielen Dank für Ihre Nachricht! Ich melde mich in Kürze bei Ihnen.");
  };

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
            <Badge variant="outline" className="mb-4">
              Kontakt
            </Badge>
            <h1 className="mb-6 text-4xl font-bold md:text-5xl lg:text-6xl">
              Lassen Sie uns sprechen
            </h1>
            <p className="text-lg text-muted-foreground md:text-xl">
              Bereit für Ihre neue Website? Kontaktieren Sie mich für ein kostenloses
              Erstgespräch
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info with Extra Glow Highlight */}
      <section className="relative py-20 md:py-32">
        {/* Extra Glowing Highlight for Form Area */}
        <div className="absolute inset-0 bg-gradient-radial from-primary/10 via-transparent to-transparent opacity-50" />
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
            {/* Left: Contact Form */}
            <Card>
              <CardContent className="p-8">
                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div className="grid gap-6 md:grid-cols-2">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">
                        Name *
                      </label>
                      <input
                        id="name"
                        type="text"
                        required
                        className="w-full rounded-lg border border-border bg-background px-4 py-3 transition-all focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                        placeholder="Ihr Name"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">
                        E-Mail *
                      </label>
                      <input
                        id="email"
                        type="email"
                        required
                        className="w-full rounded-lg border border-border bg-background px-4 py-3 transition-all focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                        placeholder="ihre@email.de"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="company" className="text-sm font-medium">
                      Unternehmen
                    </label>
                    <input
                      id="company"
                      type="text"
                      className="w-full rounded-lg border border-border bg-background px-4 py-3 transition-all focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                      placeholder="Ihr Unternehmen"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-medium">
                      Telefon
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      className="w-full rounded-lg border border-border bg-background px-4 py-3 transition-all focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                      placeholder="+49 123 456789"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      Nachricht *
                    </label>
                    <textarea
                      id="message"
                      required
                      rows={5}
                      className="w-full resize-none rounded-lg border border-border bg-background px-4 py-3 transition-all focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                      placeholder="Erzählen Sie mir von Ihrem Projekt..."
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full">
                    Nachricht senden
                    <Send className="ml-2 h-4 w-4" />
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Right: Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="mb-4 text-3xl font-bold">Kontaktinformationen</h2>
                <p className="text-lg text-muted-foreground">
                  Sie können mich auch direkt per E-Mail oder Telefon erreichen. Ich freue mich
                  auf Ihre Nachricht!
                </p>
              </div>

              <div className="space-y-4">
                {contactMethods.map((method) => (
                  <Card key={method.title}>
                    <CardContent className="p-6">
                      <a
                        href={method.href}
                        className="flex items-center gap-4 transition-transform hover:scale-[1.02]"
                      >
                        <div className={`rounded-xl ${method.bgColor} p-3`}>
                          <method.icon className={`h-6 w-6 ${method.color}`} />
                        </div>
                        <div>
                          <h3 className="font-semibold">{method.title}</h3>
                          <p className="text-sm text-muted-foreground">{method.value}</p>
                        </div>
                      </a>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <Card>
                <CardContent className="p-6">
                  <h3 className="mb-4 text-xl font-bold">Öffnungszeiten</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Montag - Freitag</span>
                      <span className="font-medium">9:00 - 18:00 Uhr</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Samstag</span>
                      <span className="font-medium">Nach Vereinbarung</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Sonntag</span>
                      <span className="font-medium">Geschlossen</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="relative py-20 md:py-32">
        <div className="container">
          <div className="mb-16 text-center">
            <Badge variant="outline" className="mb-4">
              FAQ
            </Badge>
            <h2 className="mb-4 text-3xl font-bold md:text-4xl lg:text-5xl">Häufige Fragen</h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              Antworten auf die wichtigsten Fragen
            </p>
          </div>

          <div className="mx-auto max-w-3xl space-y-4">
            {faqs.map((faq, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <h3 className="mb-2 font-bold">{faq.q}</h3>
                  <p className="text-sm text-muted-foreground">{faq.a}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      </div>
    </Layout>
  );
}
