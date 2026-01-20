"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, DollarSign, Activity, AlertTriangle } from "lucide-react"

export default function AdminPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">Admin Overview</h1>
        <p className="text-muted-foreground">System-wide metrics and controls</p>
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
            title: "Monthly Revenue",
            value: "$45,231",
            change: "+8.2%",
            icon: DollarSign,
          },
          {
            title: "Active Sessions",
            value: "573",
            change: "+23.1%",
            icon: Activity,
          },
          {
            title: "Pending Issues",
            value: "23",
            change: "-5.2%",
            icon: AlertTriangle,
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
                <span className={stat.change.startsWith('+') ? 'text-green-500' : 'text-red-500'}>{stat.change}</span> from last month
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Recent User Registrations</CardTitle>
            <CardDescription>Latest users who joined the platform</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { name: "John Doe", email: "john@example.com", time: "2 min ago" },
                { name: "Jane Smith", email: "jane@example.com", time: "1 hour ago" },
                { name: "Bob Johnson", email: "bob@example.com", time: "3 hours ago" },
                { name: "Alice Williams", email: "alice@example.com", time: "1 day ago" },
              ].map((user, index) => (
                <div key={index} className="flex items-center gap-4">
                  <div className="h-10 w-10 rounded-full bg-muted flex items-center justify-center font-medium">
                    {user.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium">{user.name}</p>
                    <p className="text-xs text-muted-foreground">{user.email}</p>
                  </div>
                  <span className="text-xs text-muted-foreground">{user.time}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>System Health</CardTitle>
            <CardDescription>Current system status</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { service: "Database", status: "Operational", statusColor: "bg-green-500" },
                { service: "API", status: "Operational", statusColor: "bg-green-500" },
                { service: "Authentication", status: "Operational", statusColor: "bg-green-500" },
                { service: "Email Service", status: "Degraded", statusColor: "bg-yellow-500" },
              ].map((item, index) => (
                <div key={index} className="flex items-center justify-between">
                  <span className="text-sm font-medium">{item.service}</span>
                  <div className="flex items-center gap-2">
                    <div className={`h-2 w-2 rounded-full ${item.statusColor}`} />
                    <span className="text-xs text-muted-foreground">{item.status}</span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
