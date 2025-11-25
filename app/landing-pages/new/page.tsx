"use client"

import * as React from "react"
import { DashboardLayout } from "@/components/dashboard/layout"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Switch } from "@/components/ui/switch"
import { Sparkles, LayoutTemplate, Check, GripVertical, ArrowLeft } from 'lucide-react'
import { cn } from "@/lib/utils"
import Link from "next/link"

export default function NewLandingPagePage() {
  const [landingPageMethod, setLandingPageMethod] = React.useState<"template" | "ai" | null>(null)
  const [selectedTemplate, setSelectedTemplate] = React.useState<string | null>(null)
  const [aiPrompt, setAiPrompt] = React.useState("")
  const [isGenerating, setIsGenerating] = React.useState(false)

  const handleGenerateWithAI = () => {
    setIsGenerating(true)
    setTimeout(() => {
      setIsGenerating(false)
      setSelectedTemplate("ai-generated")
    }, 2000)
  }

  const templates = [
    {
      id: "modern",
      name: "Modern Tech",
      description: "Clean, minimalist design perfect for tech products",
      preview: "/modern-tech-event-landing-page.jpg",
    },
    {
      id: "corporate",
      name: "Corporate Professional",
      description: "Professional layout ideal for business products",
      preview: "/corporate-event-landing-page.jpg",
    }
  ]

  return (
    <DashboardLayout>
      <div className="max-w-6xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link href="/landing-pages">
              <Button variant="ghost" size="icon">
                <ArrowLeft className="h-5 w-5" />
              </Button>
            </Link>
            <div>
              <h1 className="text-3xl font-bold text-foreground">Create Landing Page</h1>
              <p className="text-sm text-muted-foreground mt-1">
                Choose a template or generate with AI
              </p>
            </div>
          </div>
          {selectedTemplate && (
            <div className="flex gap-2">
              <Button variant="outline">Save Draft</Button>
              <Button>Publish</Button>
            </div>
          )}
        </div>

        {/* Method Selection */}
        {!landingPageMethod ? (
          <div className="grid gap-6 md:grid-cols-2">
            <Card className="cursor-pointer border-2 hover:border-primary transition-colors">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <LayoutTemplate className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <CardTitle className="text-lg">Choose Template</CardTitle>
                    <CardDescription className="text-sm">
                      Select from pre-designed templates
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <Button 
                  className="w-full gap-2"
                  onClick={() => setLandingPageMethod("template")}
                >
                  <LayoutTemplate className="h-4 w-4" />
                  Browse Templates
                </Button>
              </CardContent>
            </Card>

            <Card className="cursor-pointer border-2 hover:border-primary transition-colors">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-purple-100">
                    <Sparkles className="h-6 w-6 text-purple-600" />
                  </div>
                  <div>
                    <CardTitle className="text-lg">Generate with AI</CardTitle>
                    <CardDescription className="text-sm">
                      Let AI create a custom design
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <Button 
                  className="w-full gap-2 bg-purple-600 hover:bg-purple-700"
                  onClick={() => setLandingPageMethod("ai")}
                >
                  <Sparkles className="h-4 w-4" />
                  Create with AI
                </Button>
              </CardContent>
            </Card>
          </div>
        ) : landingPageMethod === "template" && !selectedTemplate ? (
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>Choose a Template</CardTitle>
                  <CardDescription>
                    Select a pre-designed template for your landing page
                  </CardDescription>
                </div>
                <Button 
                  variant="outline" 
                  onClick={() => setLandingPageMethod(null)}
                >
                  Back
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid gap-6 md:grid-cols-2">
                {templates.map((template) => (
                  <Card
                    key={template.id}
                    className={cn(
                      "cursor-pointer transition-all hover:shadow-lg",
                      selectedTemplate === template.id && "ring-2 ring-primary"
                    )}
                    onClick={() => setSelectedTemplate(template.id)}
                  >
                    <div className="relative">
                      <img
                        src={template.preview || "/placeholder.svg"}
                        alt={template.name}
                        className="w-full h-48 object-cover rounded-t-lg"
                      />
                      {selectedTemplate === template.id && (
                        <div className="absolute top-2 right-2 bg-primary text-white rounded-full p-1">
                          <Check className="h-4 w-4" />
                        </div>
                      )}
                    </div>
                    <CardHeader>
                      <CardTitle className="text-base">{template.name}</CardTitle>
                      <CardDescription className="text-sm">
                        {template.description}
                      </CardDescription>
                    </CardHeader>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>
        ) : landingPageMethod === "ai" && !selectedTemplate ? (
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="flex items-center gap-2">
                    <Sparkles className="h-5 w-5 text-purple-600" />
                    Generate with AI
                  </CardTitle>
                  <CardDescription>
                    Describe your landing page and let AI create it
                  </CardDescription>
                </div>
                <Button 
                  variant="outline" 
                  onClick={() => setLandingPageMethod(null)}
                  disabled={isGenerating}
                >
                  Back
                </Button>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="ai-prompt">Describe Your Landing Page</Label>
                  <Textarea
                    id="ai-prompt"
                    placeholder="Example: Create a modern landing page for a premium laptop with hero section, key features grid, detailed specifications, customer testimonials, and purchase form. Use blue and white colors with a tech-focused feel."
                    rows={6}
                    value={aiPrompt}
                    onChange={(e) => setAiPrompt(e.target.value)}
                    disabled={isGenerating}
                  />
                </div>

                <div className="rounded-lg bg-purple-50 p-4 space-y-2">
                  <p className="text-sm font-medium text-purple-900">AI will generate:</p>
                  <ul className="text-sm text-purple-700 space-y-1 ml-4 list-disc">
                    <li>Custom page layout based on your description</li>
                    <li>Appropriate sections and components</li>
                    <li>Color scheme and typography</li>
                    <li>Content structure and placeholders</li>
                  </ul>
                </div>

                <Button 
                  className="w-full gap-2 bg-purple-600 hover:bg-purple-700"
                  disabled={!aiPrompt.trim() || isGenerating}
                  onClick={handleGenerateWithAI}
                >
                  {isGenerating ? (
                    <>
                      <div className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
                      Generating...
                    </>
                  ) : (
                    <>
                      <Sparkles className="h-4 w-4" />
                      Generate Landing Page
                    </>
                  )}
                </Button>
              </div>
            </CardContent>
          </Card>
        ) : (
          <>
            <div className="flex items-center justify-between">
              <Badge variant="secondary" className="gap-1">
                {landingPageMethod === "template" ? (
                  <>
                    <LayoutTemplate className="h-3 w-3" />
                    Template: {templates.find(t => t.id === selectedTemplate)?.name}
                  </>
                ) : (
                  <>
                    <Sparkles className="h-3 w-3" />
                    AI Generated
                  </>
                )}
              </Badge>
              <Button 
                variant="outline" 
                size="sm"
                onClick={() => {
                  setLandingPageMethod(null)
                  setSelectedTemplate(null)
                  setAiPrompt("")
                }}
              >
                Change Method
              </Button>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Landing Page Sections</CardTitle>
                <CardDescription>Configure your landing page sections</CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                {[
                  "Hero Banner",
                  "Product Highlights",
                  "Specifications Grid",
                  "Video Demo",
                  "Image Gallery",
                  "Special Offers",
                  "Customer Reviews",
                  "Contact Form",
                ].map((section) => (
                  <div
                    key={section}
                    className="flex items-center justify-between rounded-lg border border-slate-200 p-3"
                  >
                    <div className="flex items-center gap-3">
                      <GripVertical className="h-4 w-4 text-muted-foreground cursor-grab" />
                      <span className="text-sm font-medium">{section}</span>
                    </div>
                    <Switch defaultChecked />
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Branding Colors</CardTitle>
                <CardDescription>Customize your landing page colors</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="primary-color">Primary Color</Label>
                    <div className="flex gap-2">
                      <Input
                        id="primary-color"
                        type="color"
                        defaultValue="#6366f1"
                        className="w-16 h-10 p-1"
                      />
                      <Input value="#6366f1" readOnly className="flex-1" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="accent-color">Accent Color</Label>
                    <div className="flex gap-2">
                      <Input
                        id="accent-color"
                        type="color"
                        defaultValue="#8b5cf6"
                        className="w-16 h-10 p-1"
                      />
                      <Input value="#8b5cf6" readOnly className="flex-1" />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </>
        )}
      </div>
    </DashboardLayout>
  )
}
