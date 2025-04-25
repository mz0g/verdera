import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { SearchForm } from "@/components/search-form"
import { VolunteeringListings } from "@/components/volunteering-listings"
import { GreenScoreCard } from "@/components/green-score-card"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Heart, Award } from "lucide-react"

export default function VolunteeringPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <section className="relative">
          <div className="absolute inset-0 bg-gradient-to-b from-green-900/80 to-green-800/80 z-10" />
          <div
            className="relative h-[300px] bg-cover bg-center"
            style={{ backgroundImage: "url('/placeholder.svg?height=300&width=1200')" }}
          />
          <div className="absolute inset-0 flex items-center justify-center z-20">
            <div className="container px-4 md:px-6">
              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
                    Eco-Volunteering Opportunities
                  </h1>
                  <p className="mx-auto max-w-[700px] text-white md:text-xl">
                    Make a positive impact on the planet while experiencing meaningful travel
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 z-30 transform translate-y-1/2">
            <div className="container px-4 md:px-6">
              <SearchForm defaultTab="volunteering" />
            </div>
          </div>
        </section>

        <section className="py-24 md:py-32 lg:py-36">
          <div className="container px-4 md:px-6 pt-10">
            <div className="grid gap-6 lg:grid-cols-3 lg:gap-12">
              <div className="lg:col-span-2">
                <VolunteeringListings />
              </div>
              <div className="space-y-6">
                <GreenScoreCard />
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Award className="h-5 w-5 text-green-600" />
                      Volunteer Benefits
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-sm text-muted-foreground">When you volunteer with our partner organizations:</p>
                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <div className="rounded-full bg-green-100 p-2 text-green-600 mt-1">
                          <Heart className="h-4 w-4" />
                        </div>
                        <div>
                          <h4 className="text-sm font-medium">Green Score Boost</h4>
                          <p className="text-xs text-muted-foreground">
                            Earn 100+ points on your Green Score for each volunteer project
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="rounded-full bg-green-100 p-2 text-green-600 mt-1">
                          <Heart className="h-4 w-4" />
                        </div>
                        <div>
                          <h4 className="text-sm font-medium">Accommodation Discounts</h4>
                          <p className="text-xs text-muted-foreground">
                            Get 15% off eco-friendly accommodations before and after your project
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="rounded-full bg-green-100 p-2 text-green-600 mt-1">
                          <Heart className="h-4 w-4" />
                        </div>
                        <div>
                          <h4 className="text-sm font-medium">Skill Development</h4>
                          <p className="text-xs text-muted-foreground">
                            Learn conservation skills from experts in the field
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="rounded-full bg-green-100 p-2 text-green-600 mt-1">
                          <Heart className="h-4 w-4" />
                        </div>
                        <div>
                          <h4 className="text-sm font-medium">Community Connection</h4>
                          <p className="text-xs text-muted-foreground">
                            Connect with like-minded travelers and local communities
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}
