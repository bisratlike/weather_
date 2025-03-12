export default function SearchHistory({ previousSearches }: { previousSearches: Set<string> }) {
    if (previousSearches.size === 0) return null;
  
    return (
      <div className="mt-4 p-4 bg-gray-100 rounded-lg shadow-md">
        <h3 className="text-lg font-semibold text-gray-700">Previous Searches</h3>
        <ul className="list-disc pl-4 text-gray-600 space-y-1">
          {[...previousSearches].map((city, index) => (
            <li key={index} className="text-gray-600">{city}</li>
          ))}
        </ul>
      </div>
    );
  }
  