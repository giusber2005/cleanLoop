'use client'
import React, { useState } from 'react'
import CustomIframe from '@/app/components/home/iFrame'
import { Button } from '@/app/components/home/modernButton'
import { RefreshCw } from 'lucide-react'

export default function IframeDemo() {
  const [selectedUrl, setSelectedUrl] = useState('https://example.com')
  const [key, setKey] = useState(0) // for forcing iframe reload

  const demoUrls = [
    {
      title: 'Example Site',
      url: 'https://example.com'
    },
    {
      title: 'Mock Error URL',
      url: 'https://thisurldoesnotexist.com'
    },
    {
      title: 'Wikipedia',
      url: 'https://wikipedia.org'
    }
  ]

  const handleRefresh = () => {
    setKey(prev => prev + 1) // Force reload iframe
  }

  return (
    <div className="container mx-auto p-6">
      <div className="space-y-6">
        {/* Header Section */}
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold">IFrame Demo</h1>
          <Button 
            variant="outline" 
            onClick={handleRefresh}
            className="flex items-center gap-2"
          >
            <RefreshCw className="w-4 h-4" />
            Refresh Frame
          </Button>
        </div>

        {/* URL Selection */}
        <div className="flex flex-wrap gap-4 mb-6">
          {demoUrls.map((demo) => (
            <Button
              key={demo.url}
              variant={selectedUrl === demo.url ? 'default' : 'outline'}
              onClick={() => setSelectedUrl(demo.url)}
            >
              {demo.title}
            </Button>
          ))}
        </div>

        {/* Current URL Display */}
        <div className="bg-gray-100 p-4 rounded-lg mb-6">
          <p className="text-sm text-gray-600">Current URL:</p>
          <code className="text-sm">{selectedUrl}</code>
        </div>

        {/* IFrame Container */}
        <div className="rounded-lg overflow-hidden border border-gray-200 shadow-lg">
          <CustomIframe
            key={key} // Force reload when key changes
            src={selectedUrl}
            title="Demo Frame"
            className="rounded-lg"
            loadingClassName="bg-gray-50"
            errorClassName="bg-red-50"
            style={{ height: '600px' }} // Fixed height for demo
            sandbox="allow-same-origin allow-scripts"
          />
        </div>

        {/* Features Description */}
        <div className="mt-8 space-y-4">
          <h2 className="text-xl font-semibold">Features:</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>Loading state with spinner animation</li>
            <li>Error handling with friendly message</li>
            <li>Responsive design</li>
            <li>URL switching with state management</li>
            <li>Manual refresh capability</li>
            <li>Customizable styling through className props</li>
          </ul>
        </div>

        {/* Usage Example */}
        <div className="mt-8">
          <h2 className="text-xl font-semibold mb-4">Usage Example:</h2>
          <div className="bg-gray-900 text-gray-100 p-4 rounded-lg">
            <pre className="text-sm overflow-x-auto">
{`<CustomIframe
  src="https://example.com"
  title="Example Frame"
  className="rounded-lg"
  loadingClassName="bg-gray-50"
  errorClassName="bg-red-50"
  style={{ height: '600px' }}
  sandbox="allow-same-origin allow-scripts"
/>`}
            </pre>
          </div>
        </div>
      </div>
    </div>
  )
}