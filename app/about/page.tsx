import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Leaf, Globe, Map, Users, BadgeCheck, Heart, DollarSign, Zap, ShieldCheck } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative">
          <div className="absolute inset-0 bg-gradient-to-b from-green-900/80 to-green-800/80 z-10" />
          <div
            className="relative h-[400px] bg-cover bg-center"
            style={{ backgroundImage: "url('/images/overcrowding.jpg')" }}
          />
          <div className="absolute inset-0 flex items-center justify-center z-20">
            <div className="container px-4 md:px-6">
              <div className="flex flex-col items-center space-y-4 text-center">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-white">
                  The Crowded Reality of Modern Tourism
                </h1>
                <p className="mx-auto max-w-[800px] text-white md:text-xl">
                  Today's tourism is overrun with crowds, diminishing experiences while damaging local cultures and environments. Verdera reimagines travel as sustainable, authentic, and beneficial for both visitors and communities.
                </p>
                <Button className="bg-green-600 hover:bg-green-700 mt-4">
                  Discover Conscious Travel
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* The Problem Section */}
        <section className="py-16 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Tourism Is Broken</h2>
              <p className="mx-auto max-w-[800px] text-muted-foreground md:text-lg">
                Tourism represents over 10% of global GDP — but at a steep cost, both to our planet and communities worldwide.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="border-2 border-red-200">
                <CardHeader className="pb-2">
                  <CardTitle className="text-xl text-red-600">Environmental Impact</CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-4xl font-bold text-red-600 mb-2">8–11%</p>
                  <p className="text-muted-foreground">of global greenhouse gas emissions come from tourism, accelerating climate change</p>
                </CardContent>
              </Card>
              
              <Card className="border-2 border-red-200">
                <CardHeader className="pb-2">
                  <CardTitle className="text-xl text-red-600">Economic Leakage</CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-4xl font-bold text-red-600 mb-2">80%</p>
                  <p className="text-muted-foreground">of tourist spending in developing regions leaks to foreign corporations</p>
                </CardContent>
              </Card>
              
              <Card className="border-2 border-red-200">
                <CardHeader className="pb-2">
                  <CardTitle className="text-xl text-red-600">Cultural Erosion</CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-4xl font-bold text-red-600 mb-2">+70%</p>
                  <p className="text-muted-foreground">of iconic destinations are severely overcrowded, risking cultural erasure</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Our Solution Section */}
        <section className="py-16 md:py-24 bg-green-50">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Verdera: The Future of Conscious Exploration</h2>
              <p className="mx-auto max-w-[800px] text-muted-foreground md:text-lg">
                We are a platform that curates hyper-local, culturally rich, and environmentally responsible itineraries — experiences built with communities, not over them.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              <div className="flex gap-4 items-start">
                <div className="mt-1 rounded-full bg-green-100 p-2 text-green-600">
                  <Leaf className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-bold text-lg">GreenScore™</h3>
                  <p className="text-muted-foreground">Our proprietary impact metric measures sustainability and cultural contribution</p>
                </div>
              </div>
              
              <div className="flex gap-4 items-start">
                <div className="mt-1 rounded-full bg-green-100 p-2 text-green-600">
                  <Map className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-bold text-lg">Responsible Itineraries</h3>
                  <p className="text-muted-foreground">Customizable journeys integrating vetted local hosts and eco-lodging</p>
                </div>
              </div>
              
              <div className="flex gap-4 items-start">
                <div className="mt-1 rounded-full bg-green-100 p-2 text-green-600">
                  <Globe className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-bold text-lg">Cultural Authenticity</h3>
                  <p className="text-muted-foreground">Genuine workshops and experiences that preserve local traditions</p>
                </div>
              </div>
              
              <div className="flex gap-4 items-start">
                <div className="mt-1 rounded-full bg-green-100 p-2 text-green-600">
                  <Users className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-bold text-lg">Community-Centered</h3>
                  <p className="text-muted-foreground">Experiences built with communities, ensuring benefits flow locally</p>
                </div>
              </div>
              
              <div className="flex gap-4 items-start">
                <div className="mt-1 rounded-full bg-green-100 p-2 text-green-600">
                  <BadgeCheck className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-bold text-lg">Accessible Travel</h3>
                  <p className="text-muted-foreground">Making meaningful travel the norm, not the exception</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why It Matters Section */}
        <section className="py-16 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">The Growing Demand for Conscious Travel</h2>
              <p className="mx-auto max-w-[800px] text-muted-foreground md:text-lg">
                The sustainable tourism market is projected to surpass $1.5 trillion by 2027. Yet no major player fully integrates sustainability, accessibility, and cultural authenticity into one platform.
              </p>
            </div>
            
            <div className="relative h-[400px] rounded-xl overflow-hidden">
              <img 
                src="/images/costarica1.jpg" 
                alt="Sustainable tourism in Costa Rica" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/25 to-transparent flex items-center justify-center">
                <Button className="bg-green-600 hover:bg-green-700">See Our Impact</Button>
              </div>
            </div>
          </div>
        </section>

        {/* Our Model Section */}
        <section className="py-16 md:py-24 bg-green-50">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">A Clean, Scalable Business Model</h2>
              <p className="mx-auto max-w-[800px] text-muted-foreground md:text-lg">
                Verdera profits when communities prosper — not when they are exploited.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="bg-white">
                <CardContent className="pt-6">
                  <div className="flex flex-col items-center text-center gap-3">
                    <div className="rounded-full bg-green-100 p-3 text-green-600">
                      <DollarSign className="h-6 w-6" />
                    </div>
                    <h3 className="font-bold">12-15% Commission</h3>
                    <p className="text-sm text-muted-foreground">Fair fees on bookings — no listing costs, no barriers for local entrepreneurs</p>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="bg-white">
                <CardContent className="pt-6">
                  <div className="flex flex-col items-center text-center gap-3">
                    <div className="rounded-full bg-green-100 p-3 text-green-600">
                      <Zap className="h-6 w-6" />
                    </div>
                    <h3 className="font-bold">Curated Add-Ons</h3>
                    <p className="text-sm text-muted-foreground">Experiences that deepen impact while increasing booking value</p>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="bg-white">
                <CardContent className="pt-6">
                  <div className="flex flex-col items-center text-center gap-3">
                    <div className="rounded-full bg-green-100 p-3 text-green-600">
                      <ShieldCheck className="h-6 w-6" />
                    </div>
                    <h3 className="font-bold">Mission-Aligned Sponsorships</h3>
                    <p className="text-sm text-muted-foreground">Partnerships with eco-brands and social enterprises</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Powered by Visionaries Section */}
        <section className="py-16 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Backed by Industry Trailblazers</h2>
              <p className="mx-auto max-w-[800px] text-muted-foreground md:text-lg">
                Inspired by the vision of Steve Kaufer, founder of TripAdvisor, Verdera builds on the belief that travel should be open, ethical, and empowering for all.
              </p>
            </div>
            
            <div className="flex flex-wrap justify-center gap-8">
              {/* Placeholder for partner/backer logos */}
              <div className="w-32 h-16 bg-muted rounded flex items-center justify-center">Logo</div>
              <div className="w-32 h-16 bg-muted rounded flex items-center justify-center">Logo</div>
              <div className="w-32 h-16 bg-muted rounded flex items-center justify-center">Logo</div>
              <div className="w-32 h-16 bg-muted rounded flex items-center justify-center">Logo</div>
            </div>
          </div>
        </section>

        {/* Join the Movement Section */}
        <section className="py-16 md:py-24 bg-green-800 text-white">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Travel Should Be a Force That Heals, Not Harms</h2>
              <p className="mx-auto max-w-[800px] text-green-100 md:text-lg">
                At Verdera, we believe travel should connect, not consume. It should enrich every community it touches. We're not just building a platform. We're building a movement — one conscious journey at a time.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="text-center p-6 bg-green-700/50 rounded-lg">
                <Globe className="mx-auto h-10 w-10 mb-4" />
                <h3 className="text-xl font-bold mb-2">Become a conscious traveler</h3>
                <p className="text-green-100">Join our community of responsible explorers making a difference.</p>
              </div>
              
              <div className="text-center p-6 bg-green-700/50 rounded-lg">
                <Users className="mx-auto h-10 w-10 mb-4" />
                <h3 className="text-xl font-bold mb-2">Partner as a local host or guide</h3>
                <p className="text-green-100">Share your knowledge and culture while earning fairly.</p>
              </div>
              
              <div className="text-center p-6 bg-green-700/50 rounded-lg">
                <Heart className="mx-auto h-10 w-10 mb-4" />
                <h3 className="text-xl font-bold mb-2">Make your next journey your most impactful yet</h3>
                <p className="text-green-100">Travel with purpose and create positive change.</p>
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row items-center justify-center gap-4">
              <Button className="bg-white text-green-800 hover:bg-green-100">Explore Experiences</Button>
              <Button variant="outline" className="border-white text-white hover:bg-green-700">Apply as a Host</Button>
              <Button variant="outline" className="border-white text-white hover:bg-green-700">Follow Our Journey</Button>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}
