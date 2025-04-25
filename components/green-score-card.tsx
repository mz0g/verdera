"use client"

import { useState } from "react"
import { Leaf, Info } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

export function GreenScoreCard() {
  const [score] = useState(78)

  return (
    <Card>
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg font-bold">Your Green Score</CardTitle>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="ghost" size="icon" className="h-8 w-8">
                  <Info className="h-4 w-4" />
                  <span className="sr-only">Info</span>
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p className="max-w-xs">
                  Your Green Score reflects how sustainable your travel choices are. Earn points by choosing
                  eco-friendly options.
                </p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
        <CardDescription>Based on your travel history and choices</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col items-center justify-center space-y-2">
          <div className="relative flex h-32 w-32 items-center justify-center rounded-full border-8 border-green-100">
            <Leaf className="h-10 w-10 text-green-600" />
            <div className="absolute -top-1 -right-1 flex h-10 w-10 items-center justify-center rounded-full bg-green-600 text-white font-bold">
              {score}
            </div>
          </div>
          <div className="space-y-1 w-full">
            <div className="flex justify-between text-sm">
              <span>Progress to next level</span>
              <span className="font-medium">{score}/100</span>
            </div>
            <Progress value={score} className="h-2" />
          </div>
          <div className="grid grid-cols-2 gap-4 w-full pt-4">
            <div className="space-y-1">
              <div className="text-sm font-medium">CO₂ Saved</div>
              <div className="text-2xl font-bold">127kg</div>
            </div>
            <div className="space-y-1">
              <div className="text-sm font-medium">Trees Planted</div>
              <div className="text-2xl font-bold">3</div>
            </div>
          </div>
          <Button className="w-full mt-4 bg-green-600 hover:bg-green-700">Improve Your Score</Button>
        </div>
      </CardContent>
    </Card>
  )
}
