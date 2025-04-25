import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Leaf, Globe, Map, Users, BadgeCheck, Heart } from "lucide-react"

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
            style={{ backgroundImage: "url('/placeholder.svg?height=400&width=1200')" }}
          />
          <div className="absolute inset-0 flex items-center justify-center z-20">
            <div className="container px-4 md:px-6">
              <div className="flex flex-col items-center space-y-4 text-center">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-white">
                  Reimagining Travel for People and the Planet
                </h1>
                <p className="mx-auto max-w-[800px] text-white md:text-xl">
                  Verdera is a next-gen travel platform curating sustainable, inclusive, and community-powered experiences. We're building a world where every journey helps restore ecosystems, uplift local economies, and preserve culture.
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
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="border-2 border-red-200">
                <CardHeader className="pb-2">
                  <CardTitle className="text-xl text-red-600">Overtourism → Cultural Erosion</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Only $5 of every $100 spent by tourists stays in local communities</p>
                </CardContent>
              </Card>
              
              <Card className="border-2 border-red-200">
                <CardHeader className="pb-2">
                  <CardTitle className="text-xl text-red-600">Carbon Emissions → Climate Crisis</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Tourism emits up to 11% of global greenhouse gases</p>
                </CardContent>
              </Card>
              
              <Card className="border-2 border-red-200">
                <CardHeader className="pb-2">
                  <CardTitle className="text-xl text-red-600">Corporate Chains → Local Poverty</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Most travel experiences aren't accessible or inclusive</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Our Solution Section */}
        <section className="py-16 md:py-24 bg-green-50">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Meet Verdera: Travel With Purpose</h2>
            </div>
            
            <div className="flex flex-col md:flex-row items-center gap-8 mb-12">
              <div className="w-full md:w-1/2">
                <img 
                  src="/placeholder.svg?height=400&width=600" 
                  alt="Platform mockup" 
                  className="rounded-lg shadow-lg"
                />
              </div>
              
              <div className="w-full md:w-1/2 space-y-6">
                <div className="flex gap-4 items-start">
                  <div className="mt-1 rounded-full bg-green-100 p-2 text-green-600">
                    <Leaf className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">GreenScore™</h3>
                    <p className="text-muted-foreground">Track your journey's positive impact</p>
                  </div>
                </div>
                
                <div className="flex gap-4 items-start">
                  <div className="mt-1 rounded-full bg-green-100 p-2 text-green-600">
                    <Map className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Curated Itineraries</h3>
                    <p className="text-muted-foreground">Hyper-local, authentic, and community-led</p>
                  </div>
                </div>
                
                <div className="flex gap-4 items-start">
                  <div className="mt-1 rounded-full bg-green-100 p-2 text-green-600">
                    <Globe className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Modular Add-ons</h3>
                    <p className="text-muted-foreground">Customize with meaningful micro-experiences</p>
                  </div>
                </div>
                
                <div className="flex gap-4 items-start">
                  <div className="mt-1 rounded-full bg-green-100 p-2 text-green-600">
                    <Users className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Equity & Accessibility First</h3>
                    <p className="text-muted-foreground">Designed for travelers of all backgrounds and abilities</p>
                  </div>
                </div>
                
                <div className="flex gap-4 items-start">
                  <div className="mt-1 rounded-full bg-green-100 p-2 text-green-600">
                    <BadgeCheck className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Verified Hosts</h3>
                    <p className="text-muted-foreground">Trained in sustainability and inclusive tourism</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why It Matters Section */}
        <section className="py-16 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Travel Can Be a Force for Good</h2>
              <p className="mx-auto max-w-[800px] text-muted-foreground md:text-lg">
                We believe your journey should support clean water in Bali, empower indigenous artists in Peru, and regenerate coral reefs in Fiji. Every trip booked on Verdera is an investment in a better world.
              </p>
            </div>
            
            <div className="relative h-[400px] rounded-xl overflow-hidden">
              <img 
                src="/placeholder.svg?height=400&width=1200" 
                alt="World map with impact" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                <Button className="bg-green-600 hover:bg-green-700">See Our Impact</Button>
              </div>
            </div>
          </div>
        </section>

        {/* Our Model Section */}
        <section className="py-16 md:py-24 bg-green-50">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">How Verdera Works (and Earns)</h2>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <Card className="bg-white">
                <CardContent className="pt-6">
                  <div className="flex flex-col items-center text-center gap-3">
                    <div className="rounded-full bg-green-100 p-3 text-green-600">
                      <Heart className="h-6 w-6" />
                    </div>
                    <h3 className="font-bold">Fair Commission</h3>
                    <p className="text-sm text-muted-foreground">No upfront fees for local hosts</p>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="bg-white">
                <CardContent className="pt-6">
                  <div className="flex flex-col items-center text-center gap-3">
                    <div className="rounded-full bg-green-100 p-3 text-green-600">
                      <Heart className="h-6 w-6" />
                    </div>
                    <h3 className="font-bold">Add-On Magic</h3>
                    <p className="text-sm text-muted-foreground">Enhance your trip, support deeper local engagement</p>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="bg-white">
                <CardContent className="pt-6">
                  <div className="flex flex-col items-center text-center gap-3">
                    <div className="rounded-full bg-green-100 p-3 text-green-600">
                      <Heart className="h-6 w-6" />
                    </div>
                    <h3 className="font-bold">Real Partnerships</h3>
                    <p className="text-sm text-muted-foreground">Only ethical, green-vetted brands allowed</p>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="bg-white">
                <CardContent className="pt-6">
                  <div className="flex flex-col items-center text-center gap-3">
                    <div className="rounded-full bg-green-100 p-3 text-green-600">
                      <Heart className="h-6 w-6" />
                    </div>
                    <h3 className="font-bold">Impact Tips</h3>
                    <p className="text-sm text-muted-foreground">100% to community-led restoration projects</p>
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
              <h2 className="text-3xl font-bold mb-4">The Future of Travel Is Regenerative</h2>
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
