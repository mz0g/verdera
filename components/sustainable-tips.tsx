import { Lightbulb, Recycle, Droplets, TreePine } from "lucide-react"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function SustainableTips() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Sustainable Travel Tips</CardTitle>
        <CardDescription>Reduce your environmental impact while traveling</CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="tips">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="tips">Tips</TabsTrigger>
            <TabsTrigger value="challenges">Challenges</TabsTrigger>
          </TabsList>
          <TabsContent value="tips" className="space-y-4 pt-4">
            <div className="flex items-start gap-3">
              <div className="rounded-full bg-green-100 p-2 text-green-600">
                <Lightbulb className="h-4 w-4" />
              </div>
              <div>
                <h4 className="text-sm font-medium">Pack Light</h4>
                <p className="text-xs text-muted-foreground">
                  Every extra kg on a flight increases carbon emissions. Pack only what you need.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="rounded-full bg-green-100 p-2 text-green-600">
                <Recycle className="h-4 w-4" />
              </div>
              <div>
                <h4 className="text-sm font-medium">Reusable Items</h4>
                <p className="text-xs text-muted-foreground">
                  Bring a reusable water bottle, shopping bag, and utensils to reduce waste.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="rounded-full bg-green-100 p-2 text-green-600">
                <Droplets className="h-4 w-4" />
              </div>
              <div>
                <h4 className="text-sm font-medium">Save Water</h4>
                <p className="text-xs text-muted-foreground">
                  Take shorter showers and reuse towels to conserve water during your stay.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="rounded-full bg-green-100 p-2 text-green-600">
                <TreePine className="h-4 w-4" />
              </div>
              <div>
                <h4 className="text-sm font-medium">Offset Your Trip</h4>
                <p className="text-xs text-muted-foreground">
                  Consider carbon offsetting your flights by supporting reforestation projects.
                </p>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="challenges" className="pt-4">
            <div className="space-y-4">
              <div className="rounded-lg border bg-green-50 p-3">
                <div className="flex items-center justify-between">
                  <h4 className="font-medium text-green-800">Plastic-Free Week</h4>
                  <span className="text-xs font-medium text-green-600">+50 points</span>
                </div>
                <p className="text-xs text-green-700 mt-1">Travel for a week without using any single-use plastics</p>
              </div>
              <div className="rounded-lg border bg-muted p-3">
                <div className="flex items-center justify-between">
                  <h4 className="font-medium">Local Transport Only</h4>
                  <span className="text-xs font-medium text-green-600">+30 points</span>
                </div>
                <p className="text-xs text-muted-foreground mt-1">
                  Use only public transport, bikes or walk during your trip
                </p>
              </div>
              <div className="rounded-lg border bg-muted p-3">
                <div className="flex items-center justify-between">
                  <h4 className="font-medium">Eat Local Challenge</h4>
                  <span className="text-xs font-medium text-green-600">+25 points</span>
                </div>
                <p className="text-xs text-muted-foreground mt-1">
                  Only eat at restaurants that source ingredients locally
                </p>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}
