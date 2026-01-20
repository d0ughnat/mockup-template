"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { TrendingUp, TrendingDown, Minus } from "lucide-react"

export default function AnalyticsPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">Analytics</h1>
        <p className="text-muted-foreground">Track your performance metrics</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[
          {
            title: "Total Sessions",
            value: "12,459",
            change: "+15.3%",
            trend: "up",
            description: "vs last month",
          },
          {
            title: "Avg. Duration",
            value: "4m 32s",
            change: "-2.1%",
            trend: "down",
            description: "vs last month",
          },
          {
            title: "Bounce Rate",
            value: "42.3%",
            change: "+0.5%",
            trend: "up",
            description: "vs last month",
          },
          {
            title: "Conversion Rate",
            value: "3.2%",
            change: "+0.8%",
            trend: "up",
            description: "vs last month",
          },
          {
            title: "Page Views",
            value: "84,231",
            change: "-5.4%",
            trend: "down",
            description: "vs last month",
          },
          {
            title: "Unique Visitors",
            value: "45,678",
            change: "+8.9%",
            trend: "up",
            description: "vs last month",
          },
        ].map((metric) => {
          const TrendIcon = metric.trend === "up" ? TrendingUp : metric.trend === "down" ? TrendingDown : Minus
          const trendColor = metric.trend === "up" && metric.title.includes("Bounce") || 
                           metric.trend === "down" && !metric.title.includes("Bounce") && 
                           !metric.title.includes("Duration")
                            ? "text-green-500" 
                            : metric.trend === "up" && !metric.title.includes("Bounce")
                            ? "text-red-500"
                            : "text-gray-500"

          return (
            <Card key={metric.title}>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">
                  {metric.title}
                </CardTitle>
                <TrendIcon className={`h-4 w-4 text-muted-foreground`} />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{metric.value}</div>
                <div className="flex items-center gap-2 mt-1">
                  <span className={`text-xs ${trendColor}`}>
                    {metric.trend === "up" ? "+" : ""}{metric.change}
                  </span>
                  <span className="text-xs text-muted-foreground">
                    {metric.description}
                  </span>
                </div>
              </CardContent>
            </Card>
          )
        })}
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Traffic Overview</CardTitle>
          <CardDescription>Daily page views over the last 7 days</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="h-64 flex items-center justify-center border-2 border-dashed border-muted-foreground/25 rounded-lg">
            <p className="text-muted-foreground">Chart visualization placeholder</p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
