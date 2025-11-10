import { Button } from "@/components/ui/button";
import { Moon, Sun, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { useTheme } from "@/contexts/ThemeContext";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hasLoaded, setHasLoaded] = useState(false);
  const [location] = useLocation();
  const { theme, toggleTheme } = useTheme();

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/services", label: "Leistungen" },
    { path: "/portfolio", label: "Portfolio" },
    { path: "/about", label: "Über mich" },
    { path: "/contact", label: "Kontakt" },
  ];

  const isActive = (path: string) => location === path;

  // Detect scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Fade in on load
  useEffect(() => {
    const timer = setTimeout(() => setHasLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Floating Header - Appears on Scroll */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
          hasLoaded ? "translate-y-4 opacity-100" : "-translate-y-full opacity-0"
        }`}
      >
        <div className="container">
          <div className="mx-auto max-w-6xl">
            {/* Glassmorphism Container */}
            <div className="rounded-2xl border border-border/40 bg-background/80 shadow-2xl shadow-black/10 backdrop-blur-xl dark:shadow-black/30">
              <div className="flex items-center justify-between px-6 py-4">
                {/* Logo */}
                <Link href="/">
                  <a className="flex items-center gap-2 font-bold text-lg hover:opacity-80 transition-opacity">
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-primary to-accent">
                      <span className="text-lg font-black text-primary-foreground">W</span>
                    </div>
                    <span className="hidden sm:inline">WebDesign Pro</span>
                  </a>
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center gap-1">
                  {navItems.map((item) => (
                    <Link key={item.path} href={item.path}>
                      <a
                        className={`relative px-4 py-2 text-sm font-medium transition-colors rounded-lg hover:bg-accent/50 ${
                          isActive(item.path)
                            ? "text-primary"
                            : "text-muted-foreground hover:text-foreground"
                        }`}
                      >
                        {item.label}
                        {/* Active Indicator */}
                        {isActive(item.path) && (
                          <span className="absolute bottom-0 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-primary" />
                        )}
                      </a>
                    </Link>
                  ))}
                </div>

                {/* Right Side: Theme Toggle + Mobile Menu */}
                <div className="flex items-center gap-2">
                  {/* Dark Mode Toggle */}
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={toggleTheme}
                    className="rounded-lg"
                    aria-label="Toggle theme"
                  >
                    {theme === "dark" ? (
                      <Sun className="h-5 w-5" />
                    ) : (
                      <Moon className="h-5 w-5" />
                    )}
                  </Button>

                  {/* Mobile Menu Button */}
                  <button
                    className="md:hidden rounded-lg p-2 hover:bg-accent transition-colors"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    aria-label="Toggle menu"
                  >
                    {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                  </button>
                </div>
              </div>

              {/* Mobile Navigation */}
              {mobileMenuOpen && (
                <div className="border-t border-border/40 px-6 py-4 md:hidden">
                  <div className="flex flex-col gap-2">
                    {navItems.map((item) => (
                      <Link key={item.path} href={item.path}>
                        <a
                          onClick={() => setMobileMenuOpen(false)}
                          className={`block rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
                            isActive(item.path)
                              ? "bg-primary/10 text-primary"
                              : "text-muted-foreground hover:bg-accent hover:text-foreground"
                          }`}
                        >
                          {item.label}
                        </a>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-1">{children}</main>

      {/* Footer */}
      <footer className="py-12 bg-muted/30 border-t border-border mt-auto">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-primary to-accent">
                  <span className="text-lg font-black text-primary-foreground">W</span>
                </div>
                <span className="font-bold text-lg text-foreground">WebDesign Pro</span>
              </div>
              <p className="text-muted-foreground">
                Professionelle Websites für lokale Unternehmen
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-4">Navigation</h3>
              <div className="space-y-2">
                {navItems.map((item) => (
                  <Link key={item.path} href={item.path}>
                    <a className="block text-muted-foreground hover:text-primary transition-colors">
                      {item.label}
                    </a>
                  </Link>
                ))}
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-4">Kontakt</h3>
              <div className="space-y-2 text-muted-foreground">
                <p>E-Mail: kontakt@webdesign-pro.de</p>
                <p>Telefon: +49 123 456789</p>
                <p>Standort: Deutschland</p>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-border text-center text-muted-foreground">
            <p>&copy; 2024 WebDesign Pro. Alle Rechte vorbehalten.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
