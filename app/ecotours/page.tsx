import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { SearchForm } from "@/components/search-form"
import { EcoTourListings } from "@/components/ecotour-listings"
import { GreenScoreCard } from "@/components/green-score-card"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { TreePine } from "lucide-react"

export default function EcoToursPage() {
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
                    Eco Tours & Experiences
                  </h1>
                  <p className="mx-auto max-w-[700px] text-white md:text-xl">
                    Immersive nature experiences with certified eco-guides and conservation focus
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 z-30 transform translate-y-1/2">
            <div className="container px-4 md:px-6">
              <SearchForm defaultTab="ecotours" />
            </div>
          </div>
        </section>

        <section className="py-24 md:py-32 lg:py-36">
          <div className="container px-4 md:px-6 pt-10">
            <div className="grid gap-6 lg:grid-cols-3 lg:gap-12">
              <div className="lg:col-span-2">
                <EcoTourListings />
              </div>
              <div className="space-y-6">
                <GreenScoreCard />
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <TreePine className="h-5 w-5 text-green-600" />
                      Conservation Impact
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-sm text-muted-foreground">
                      Our eco tours directly support these conservation efforts:
                    </p>
                    <div className="space-y-3">
                      <div className="rounded-lg border bg-green-50 p-3">
                        <h3 className="font-medium text-green-800">Rainforest Protection</h3>
                        <p className="text-xs text-green-700 mt-1">
                          10% of tour fees go to protecting endangered rainforest habitats
                        </p>
                      </div>
                      <div className="rounded-lg border bg-green-50 p-3">
                        <h3 className="font-medium text-green-800">Marine Conservation</h3>
                        <p className="text-xs text-green-700 mt-1">
                          Supporting coral reef restoration and marine protected areas
                        </p>
                      </div>
                      <div className="rounded-lg border bg-green-50 p-3">
                        <h3 className="font-medium text-green-800">Wildlife Corridors</h3>
                        <p className="text-xs text-green-700 mt-1">
                          Funding the creation of wildlife corridors to connect fragmented habitats
                        </p>
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
