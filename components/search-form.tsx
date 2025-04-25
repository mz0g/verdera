"use client"

import { useState } from "react"
import { Calendar, MapPin, Users, Car, Package, Heart } from "lucide-react"
import { useRouter } from "next/navigation"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Calendar as CalendarComponent } from "@/components/ui/calendar"
import { cn } from "@/lib/utils"
import { format } from "date-fns"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

interface SearchFormProps {
  defaultTab?: string
}

export function SearchForm({ defaultTab = "stays" }: SearchFormProps) {
  const [checkInDate, setCheckInDate] = useState<Date>()
  const [checkOutDate, setCheckOutDate] = useState<Date>()
  const [departDate, setDepartDate] = useState<Date>()
  const [returnDate, setReturnDate] = useState<Date>()
  const router = useRouter()

  const handleSearch = (tab: string) => {
    // In a real app, this would handle the search and navigate to results
    router.push(`/${tab}`)
  }

  return (
    <Card className="w-full shadow-lg">
      <CardContent className="p-0">
        <Tabs defaultValue={defaultTab} className="w-full">
          <div className="flex items-center justify-between p-4 md:p-6 bg-green-50 rounded-t-lg">
            <TabsList className="grid w-full md:w-auto grid-cols-4 md:grid-cols-6 bg-green-100">
              <TabsTrigger
                value="stays"
                className="data-[state=active]:bg-green-600 data-[state=active]:text-white"
                onClick={() => router.push("/")}
              >
                Stays
              </TabsTrigger>
              <TabsTrigger
                value="cars"
                className="data-[state=active]:bg-green-600 data-[state=active]:text-white"
                onClick={() => router.push("/cars")}
              >
                Cars
              </TabsTrigger>
              <TabsTrigger
                value="packages"
                className="data-[state=active]:bg-green-600 data-[state=active]:text-white"
                onClick={() => router.push("/packages")}
              >
                Packages
              </TabsTrigger>
              <TabsTrigger
                value="volunteering"
                className="hidden md:block data-[state=active]:bg-green-600 data-[state=active]:text-white"
                onClick={() => router.push("/volunteering")}
              >
                Volunteering
              </TabsTrigger>
            </TabsList>
            <div className="hidden md:flex items-center gap-2">
              <span className="text-sm font-medium">Eco Mode:</span>
              <Button variant="outline" size="sm" className="h-7 gap-1 border-green-600 text-green-600">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-600"></span>
                </span>
                On
              </Button>
            </div>
          </div>

          <TabsContent value="stays" className="p-0 m-0">
            <div className="grid gap-4 p-4 md:p-6 md:grid-cols-4">
              <div className="grid gap-2">
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-green-600" />
                  <span className="text-sm font-medium">Going to</span>
                </div>
                <Input placeholder="Enter destination" />
              </div>
              <div className="grid gap-2">
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-green-600" />
                  <span className="text-sm font-medium">Check-in</span>
                </div>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant={"outline"}
                      className={cn(
                        "w-full justify-start text-left font-normal",
                        !checkInDate && "text-muted-foreground",
                      )}
                    >
                      {checkInDate ? format(checkInDate, "PPP") : "Select date"}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0">
                    <CalendarComponent mode="single" selected={checkInDate} onSelect={setCheckInDate} initialFocus />
                  </PopoverContent>
                </Popover>
              </div>
              <div className="grid gap-2">
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-green-600" />
                  <span className="text-sm font-medium">Check-out</span>
                </div>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant={"outline"}
                      className={cn(
                        "w-full justify-start text-left font-normal",
                        !checkOutDate && "text-muted-foreground",
                      )}
                    >
                      {checkOutDate ? format(checkOutDate, "PPP") : "Select date"}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0">
                    <CalendarComponent mode="single" selected={checkOutDate} onSelect={setCheckOutDate} initialFocus />
                  </PopoverContent>
                </Popover>
              </div>
              <div className="grid gap-2">
                <div className="flex items-center gap-2">
                  <Users className="h-4 w-4 text-green-600" />
                  <span className="text-sm font-medium">Travelers</span>
                </div>
                <div className="flex items-center gap-2">
                  <Input type="number" defaultValue="2" min="1" className="w-20" />
                  <Button className="w-full bg-green-600 hover:bg-green-700" onClick={() => handleSearch("stays")}>
                    Search
                  </Button>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="cars" className="p-0 m-0">
            <div className="grid gap-4 p-4 md:p-6 md:grid-cols-4">
              <div className="grid gap-2">
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-green-600" />
                  <span className="text-sm font-medium">Pick-up location</span>
                </div>
                <Input placeholder="City, airport, or address" />
              </div>
              <div className="grid gap-2">
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-green-600" />
                  <span className="text-sm font-medium">Pick-up date</span>
                </div>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant={"outline"}
                      className={cn(
                        "w-full justify-start text-left font-normal",
                        !checkInDate && "text-muted-foreground",
                      )}
                    >
                      {checkInDate ? format(checkInDate, "PPP") : "Select date"}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0">
                    <CalendarComponent mode="single" selected={checkInDate} onSelect={setCheckInDate} initialFocus />
                  </PopoverContent>
                </Popover>
              </div>
              <div className="grid gap-2">
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-green-600" />
                  <span className="text-sm font-medium">Drop-off date</span>
                </div>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant={"outline"}
                      className={cn(
                        "w-full justify-start text-left font-normal",
                        !checkOutDate && "text-muted-foreground",
                      )}
                    >
                      {checkOutDate ? format(checkOutDate, "PPP") : "Select date"}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0">
                    <CalendarComponent mode="single" selected={checkOutDate} onSelect={setCheckOutDate} initialFocus />
                  </PopoverContent>
                </Popover>
              </div>
              <div className="grid gap-2">
                <div className="flex items-center gap-2">
                  <Car className="h-4 w-4 text-green-600" />
                  <span className="text-sm font-medium">Vehicle type</span>
                </div>
                <div className="flex items-center gap-2">
                  <Select defaultValue="electric">
                    <SelectTrigger className="w-[140px]">
                      <SelectValue placeholder="Select type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="electric">Electric</SelectItem>
                      <SelectItem value="hybrid">Hybrid</SelectItem>
                      <SelectItem value="economy">Economy</SelectItem>
                      <SelectItem value="compact">Compact</SelectItem>
                    </SelectContent>
                  </Select>
                  <Button className="w-full bg-green-600 hover:bg-green-700" onClick={() => handleSearch("cars")}>
                    Search
                  </Button>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="packages" className="p-0 m-0">
            <div className="grid gap-4 p-4 md:p-6 md:grid-cols-4">
              <div className="grid gap-2">
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-green-600" />
                  <span className="text-sm font-medium">Destination</span>
                </div>
                <Input placeholder="Where do you want to go?" />
              </div>
              <div className="grid gap-2">
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-green-600" />
                  <span className="text-sm font-medium">Departure</span>
                </div>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant={"outline"}
                      className={cn(
                        "w-full justify-start text-left font-normal",
                        !departDate && "text-muted-foreground",
                      )}
                    >
                      {departDate ? format(departDate, "PPP") : "Select date"}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0">
                    <CalendarComponent mode="single" selected={departDate} onSelect={setDepartDate} initialFocus />
                  </PopoverContent>
                </Popover>
              </div>
              <div className="grid gap-2">
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-green-600" />
                  <span className="text-sm font-medium">Return</span>
                </div>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant={"outline"}
                      className={cn(
                        "w-full justify-start text-left font-normal",
                        !returnDate && "text-muted-foreground",
                      )}
                    >
                      {returnDate ? format(returnDate, "PPP") : "Select date"}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0">
                    <CalendarComponent mode="single" selected={returnDate} onSelect={setReturnDate} initialFocus />
                  </PopoverContent>
                </Popover>
              </div>
              <div className="grid gap-2">
                <div className="flex items-center gap-2">
                  <Package className="h-4 w-4 text-green-600" />
                  <span className="text-sm font-medium">Package type</span>
                </div>
                <div className="flex items-center gap-2">
                  <Select defaultValue="eco">
                    <SelectTrigger className="w-[140px]">
                      <SelectValue placeholder="Select type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="eco">Eco-Friendly</SelectItem>
                      <SelectItem value="adventure">Adventure</SelectItem>
                      <SelectItem value="wellness">Wellness</SelectItem>
                      <SelectItem value="cultural">Cultural</SelectItem>
                    </SelectContent>
                  </Select>
                  <Button className="w-full bg-green-600 hover:bg-green-700" onClick={() => handleSearch("packages")}>
                    Search
                  </Button>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="volunteering" className="p-0 m-0">
            <div className="grid gap-4 p-4 md:p-6 md:grid-cols-4">
              <div className="grid gap-2">
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-green-600" />
                  <span className="text-sm font-medium">Location</span>
                </div>
                <Input placeholder="Where do you want to volunteer?" />
              </div>
              <div className="grid gap-2">
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-green-600" />
                  <span className="text-sm font-medium">Available from</span>
                </div>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant={"outline"}
                      className={cn(
                        "w-full justify-start text-left font-normal",
                        !departDate && "text-muted-foreground",
                      )}
                    >
                      {departDate ? format(departDate, "PPP") : "Select date"}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0">
                    <CalendarComponent mode="single" selected={departDate} onSelect={setDepartDate} initialFocus />
                  </PopoverContent>
                </Popover>
              </div>
              <div className="grid gap-2">
                <div className="flex items-center gap-2">
                  <Heart className="h-4 w-4 text-green-600" />
                  <span className="text-sm font-medium">Project type</span>
                </div>
                <Select defaultValue="conservation">
                  <SelectTrigger>
                    <SelectValue placeholder="Select type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="conservation">Conservation</SelectItem>
                    <SelectItem value="wildlife">Wildlife</SelectItem>
                    <SelectItem value="marine">Marine</SelectItem>
                    <SelectItem value="community">Community</SelectItem>
                    <SelectItem value="farming">Organic Farming</SelectItem>
                    <SelectItem value="education">Education</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="grid gap-2">
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-green-600" />
                  <span className="text-sm font-medium">Duration</span>
                </div>
                <div className="flex items-center gap-2">
                  <Select defaultValue="1-2">
                    <SelectTrigger className="w-[140px]">
                      <SelectValue placeholder="Select weeks" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1-2">1-2 weeks</SelectItem>
                      <SelectItem value="2-4">2-4 weeks</SelectItem>
                      <SelectItem value="1-3">1-3 months</SelectItem>
                      <SelectItem value="3+">3+ months</SelectItem>
                    </SelectContent>
                  </Select>
                  <Button
                    className="w-full bg-green-600 hover:bg-green-700"
                    onClick={() => handleSearch("volunteering")}
                  >
                    Search
                  </Button>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}
