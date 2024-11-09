'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from "@/components/home/modernButton"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Camera, Loader2 } from 'lucide-react'

export default function PhotoUploadForm() {
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setIsLoading(true)

    const formData = new FormData(event.currentTarget)
    
    const file = formData.get('photo') as File
    if (!file) {
      alert('Please select a photo')
      setIsLoading(false)
      return
    }

    try {
      // Upload photo to Vercel Blob
      const uploadResponse = await fetch('/api/upload', {
        method: 'POST',
        body: formData
      })
      const { url } = await uploadResponse.json()

      // Save metadata to Vercel Postgres
      const saveResponse = await fetch('/api/save-photo-metadata', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          photoUrl: url,
        }),
      })

      if (saveResponse.ok) {
        router.push('/photos')  // Redirect to photos page after successful upload
      } else {
        throw new Error('Failed to save photo metadata')
      }
    } catch (error) {
      console.error('Error uploading photo:', error)
      alert('Failed to upload photo. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <form onSubmit={onSubmit} className="space-y-8">
      <div>
        <Label htmlFor="photo">Photo</Label>
        <div className="mt-1 flex items-center">
          <Input
            id="photo"
            name="photo"
            type="file"
            accept="image/*"
            required
            className="sr-only"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              const file = e.target.files?.[0]
              if (file) {
                // You can add preview logic here if needed
              }
            }}
          />
          <Label
            htmlFor="photo"
            className="cursor-pointer bg-white py-2 px-3 border border-gray-300 rounded-md shadow-sm text-sm leading-4 font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            <Camera className="h-5 w-5 text-gray-400 mr-2 inline-block" />
            Choose photo
          </Label>
        </div>
      </div>

      <Button type="submit" disabled={isLoading}>
        {isLoading ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Uploading...
          </>
        ) : (
          'Upload Photo'
        )}
      </Button>
    </form>
  )
}