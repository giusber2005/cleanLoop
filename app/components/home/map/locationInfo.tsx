

export default function LocationInfo({ selectedPlace }: { selectedPlace: any }) {
    return (
      <div className="rounded-lg shadow-lg p-4 transition-all duration-300 hover:shadow-xl h-full overflow-auto">
        <h2 className="text-xl font-semibold mb-2">Location Info</h2>
        {selectedPlace ? (
          <div>
            <h3 className="text-lg font-medium">{selectedPlace.name}</h3>
            <p>Latitude: {selectedPlace.lat}</p>
            <p>Longitude: {selectedPlace.lng}</p>
          </div>
        ) : (
          <p>Select a marker on the map to see location details.</p>
        )}
      </div>
    )
  }