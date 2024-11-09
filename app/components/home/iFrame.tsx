'use client'

import React, { useState, useEffect } from 'react'
import { Loader2 } from 'lucide-react'

interface CustomIframeProps extends React.IframeHTMLAttributes<HTMLIFrameElement> {
  src: string
  title: string
  className?: string
  loadingClassName?: string
  errorClassName?: string
}

export default function CustomIframe({
  src,
  title,
  className = '',
  loadingClassName = '',
  errorClassName = '',
  ...props
}: CustomIframeProps) {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    setLoading(true)
    setError(null)
  }, [src])

  const handleLoad = () => {
    setLoading(false)
  }

  const handleError = () => {
    setLoading(false)
    setError('Failed to load content. Please try again later.')
  }

  return (
    <div className="relative w-full h-full min-h-[300px]">
      {loading && (
        <div className={`absolute inset-0 flex items-center justify-center bg-gray-100 ${loadingClassName}`}>
          <Loader2 className="w-8 h-8 animate-spin text-primary" />
        </div>
      )}
      {error && (
        <div className={`absolute inset-0 flex items-center justify-center bg-red-100 text-red-600 p-4 ${errorClassName}`}>
          {error}
        </div>
      )}
      <iframe
        src={src}
        title={title}
        className={`w-full h-full border-0 ${className}`}
        onLoad={handleLoad}
        onError={handleError}
        {...props}
      />
    </div>
  )
}