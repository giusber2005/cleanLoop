
'use client'
import React, { useState } from 'react'
import { Button } from '../../components/home/modernButton'
import { Heart, Send, Trash2, Settings, Mail, Plus, Download } from 'lucide-react'

export default function ButtonDemo() {
  const [isLoading, setIsLoading] = useState(false)

  const handleLoadingClick = () => {
    setIsLoading(true)
    setTimeout(() => setIsLoading(false), 2000)
  }

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-4xl font-bold mb-8">Button Examples</h1>

      {/* Basic Variants */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Button Variants</h2>
        <div className="flex flex-wrap gap-4">
          <Button variant="default">Default Button</Button>
          <Button variant="destructive">Destructive</Button>
          <Button variant="outline" size="lg" >Outline</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="link">Link Style</Button>
          <Button variant="red">Red Button</Button>
        </div>
      </section>

      {/* Sizes */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Button Sizes</h2>
        <div className="flex flex-wrap items-center gap-4">
          <Button size="sm">Small Button</Button>
          <Button size="default">Default Size</Button>
          <Button size="lg">Large Button</Button>
        </div>
      </section>

      {/* With Icons */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Buttons with Icons</h2>
        <div className="flex flex-wrap gap-4">
          <Button>
            <Heart className="mr-2 h-4 w-4" /> Like
          </Button>
          <Button variant="outline" size="lg">
            <Send className="mr-2 h-4 w-4" /> Send
          </Button>
          <Button variant="destructive">
            <Trash2 className="mr-2 h-4 w-4" /> Delete
          </Button>
          <Button variant="secondary">
            <Settings className="mr-2 h-4 w-4" /> Settings
          </Button>
        </div>
      </section>

      {/* Loading State */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Loading State</h2>
        <div className="flex flex-wrap gap-4">
          <Button isLoading={isLoading} onClick={handleLoadingClick}>
            Click to Load
          </Button>
          <Button variant="outline" isLoading={isLoading}>
            Loading State
          </Button>
        </div>
      </section>

      {/* Common Use Cases */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Common Use Cases</h2>
        <div className="space-y-4">
          {/* Form Actions */}
          <div className="flex gap-4">
            <Button variant="default" type="submit">
              Submit Form
            </Button>
            <Button variant="outline" type="button">
              Cancel
            </Button>
          </div>

          {/* Call to Action */}
          <div className="flex gap-4">
            <Button size="lg" className="w-full md:w-auto">
              <Mail className="mr-2 h-4 w-4" /> Sign Up Now
            </Button>
          </div>

          {/* Action Group */}
          <div className="flex gap-4">
            <Button variant="default">
              <Plus className="mr-2 h-4 w-4" /> Add Item
            </Button>
            <Button variant="secondary">
              <Download className="mr-2 h-4 w-4" /> Download
            </Button>
            <Button variant="outline">View All</Button>
          </div>
        </div>
      </section>

      {/* Disabled State */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Disabled State</h2>
        <div className="flex flex-wrap gap-4">
          <Button disabled>Disabled Button</Button>
          <Button variant="outline" disabled>
            Disabled Outline
          </Button>
          <Button variant="ghost" disabled>
            Disabled Ghost
          </Button>
        </div>
      </section>

      {/* Full Width */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Full Width</h2>
        <div className="space-y-4">
          <Button className="w-full">Full Width Button</Button>
          <Button variant="outline" className="w-full">
            Full Width Outline
          </Button>
        </div>
      </section>
    </div>
  )
}