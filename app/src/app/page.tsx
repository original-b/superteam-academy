import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, BookOpen, Shield, Trophy } from "lucide-react";

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="px-6 py-4 flex items-center justify-between border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded bg-primary flex items-center justify-center">
            <BookOpen className="w-5 h-5 text-primary-foreground" />
          </div>
          <span className="text-xl font-bold tracking-tight">Superteam Academy</span>
        </div>
        <nav className="hidden md:flex items-center gap-6">
          <Link href="#features" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            Features
          </Link>
          <Link href="#tracks" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            Tracks
          </Link>
        </nav>
        <div className="flex items-center gap-4">
          <Link href="/dashboard">
            <Button variant="ghost">Sign In</Button>
          </Link>
          <Link href="/dashboard">
            <Button>Get Started</Button>
          </Link>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-24 px-6 text-center lg:py-32 flex flex-col items-center justify-center bg-gradient-to-b from-background to-muted/20">
          <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80 mb-8">
            Now live on Solana Mainnet
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight max-w-4xl mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60">
            Learn, Build, and Earn on Solana
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mb-10">
            Join the decentralized learning platform. Complete courses, earn on-chain XP, and mint soulbound credentials to prove your skills.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/dashboard">
              <Button size="lg" className="w-full sm:w-auto gap-2">
                Start Learning <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
            <Link href="#features">
              <Button size="lg" variant="outline" className="w-full sm:w-auto">
                Explore Features
              </Button>
            </Link>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-24 px-6 bg-background">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight mb-4">Powered by Solana</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Everything from enrollment to credential issuance is handled securely on-chain.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="p-6 rounded-2xl border bg-card text-card-foreground shadow-sm">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                  <Shield className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Verifiable Credentials</h3>
                <p className="text-muted-foreground">
                  Earn soulbound Metaplex Core NFTs that upgrade dynamically as you progress through learning tracks.
                </p>
              </div>
              
              <div className="p-6 rounded-2xl border bg-card text-card-foreground shadow-sm">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                  <Trophy className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Earn On-Chain XP</h3>
                <p className="text-muted-foreground">
                  Get rewarded with Token-2022 XP for completing lessons and finishing courses.
                </p>
              </div>
              
              <div className="p-6 rounded-2xl border bg-card text-card-foreground shadow-sm">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                  <BookOpen className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Curated Tracks</h3>
                <p className="text-muted-foreground">
                  Follow structured learning paths from Anchor basics to advanced DeFi protocols.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t py-8 px-6 bg-muted/20">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-muted-foreground" />
            <span className="text-sm font-semibold text-muted-foreground">Superteam Academy</span>
          </div>
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Superteam. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
