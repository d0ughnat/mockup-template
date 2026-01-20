"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, DollarSign, Activity, TrendingUp } from "lucide-react"

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <p className="text-muted-foreground">Welcome back! Here&apos;s an overview.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          {
            title: "Total Users",
            value: "2,543",
            change: "+12.5%",
            icon: Users,
          },
          {
            title: "Revenue",
            value: "$12,345",
            change: "+8.2%",
            icon: DollarSign,
          },
          {
            title: "Active Now",
            value: "573",
            change: "+23.1%",
            icon: Activity,
          },
          {
            title: "Growth",
            value: "+18.7%",
            change: "+5.4%",
            icon: TrendingUp,
          },
        ].map((stat) => (
          <Card key={stat.title}>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">
                {stat.title}
              </CardTitle>
              <stat.icon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <p className="text-xs text-muted-foreground mt-1">
                <span className="text-green-500">{stat.change}</span> from last month
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Recent Activity</CardTitle>
          <CardDescription>Your latest actions</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
        {[
          { action: "New user registered", time: "2 minutes ago" },
          { action: "Project updated", time: "1 hour ago" },
          { action: "Invoice paid", time: "3 hours ago" },
          { action: "Settings changed", time: "1 day ago" },
        ].map((activity, index) => (
          <div key={index} className="flex items-start gap-4">
                <div className="h-2 w-2 rounded-full bg-primary mt-2" />
                <div className="flex-1">
                  <p className="text-sm font-medium">{activity.action}</p>
                  <p className="text-xs text-muted-foreground">{activity.time}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
