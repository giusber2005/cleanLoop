'use client'
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api'
import { mapContainerStyle, center } from './constants'

export default function Map({ places, onPlaceSelect }: { places: any[], onPlaceSelect: (place: any) => void }) {
  return (
    <div className="rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl h-full">
      <LoadScript googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!}>
        <GoogleMap
          mapContainerStyle={mapContainerStyle}
          center={center}
          zoom={12}
        >
          {places.map((place: any) => (
            <Marker
              key={place.id}
              position={{ lat: place.lat, lng: place.lng }}
              onClick={() => onPlaceSelect(place)}
            />
          ))}
        </GoogleMap>
      </LoadScript>
    </div>
  )
}
