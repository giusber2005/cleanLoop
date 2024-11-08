import { locationDescriptions } from './constants'

export default function LocationInfo({ selectedPlace }: { selectedPlace: any }) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-4 transition-all duration-300 hover:shadow-xl h-full overflow-auto">
      <h2 className="text-xl font-semibold mb-2">Location Info</h2>
      {selectedPlace ? (
        <div>
          <h3 className="text-lg font-medium">{selectedPlace.name}</h3>
          <p>Latitude: {selectedPlace.lat}</p>
          <p>Longitude: {selectedPlace.lng}</p>
          <div className="mt-4">
            <h4 className="text-md font-medium mb-2">About this location:</h4>
            <p className="text-gray-700">
              {locationDescriptions[selectedPlace.name as keyof typeof locationDescriptions]}
            </p>
          </div>
        </div>
      ) : (
        <p>Select a marker on the map to see location details.</p>
      )}
    </div>
  )
}