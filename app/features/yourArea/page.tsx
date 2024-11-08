'use client'
import { useState } from 'react'
import Map from '../../components/home/map/map'
import LocationInfo from '../../components/home/map/locationInfo'
import { places } from '../../components/home/map/constants'

export default function MapPage() {
  const [selectedPlace, setSelectedPlace] = useState(null)

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4 text-center">New York City Landmarks</h1>
      <div className="flex flex-col md:flex-row gap-4 h-[calc(100vh-120px)]">
        <div className="w-full md:w-1/2 h-full">
          <Map 
            places={places} 
            onPlaceSelect={setSelectedPlace} 
          />
        </div>
        <div className="w-full md:w-1/2 h-full">
          <LocationInfo selectedPlace={selectedPlace} />
        </div>
      </div>
    </div>
  )
}