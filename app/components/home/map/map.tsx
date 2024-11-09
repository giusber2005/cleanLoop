'use client'
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api'
import { mapContainerStyle, center } from './constants'

// Define the interface for the component props
interface MapProps {
  places: any[];
  interactive?: boolean; // Optional prop to control interactivity
}

export default function Map({ places, interactive = true }: MapProps) {
  // Map options to disable all controls when not interactive
  const nonInteractiveOptions = {
    disableDefaultUI: true, // Removes all default UI elements
    draggable: false,
    zoomControl: false,
    scrollwheel: false,
    disableDoubleClickZoom: true,
    streetViewControl: false,
  }

  return (
    <div className="rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl h-full">
      <LoadScript googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!}>
        <GoogleMap
          mapContainerStyle={mapContainerStyle}
          center={center}
          zoom={17}
          options={interactive ? undefined : nonInteractiveOptions}
        >
          {places.map((place: any) => (
            <Marker
              key={place.id}
              position={{ lat: place.lat, lng: place.lng }}
            />
          ))}
        </GoogleMap>
      </LoadScript>
    </div>
  )
}
