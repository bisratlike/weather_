"use client";
import {
  useState,
  useRef,
  useTransition,
  useMemo,
  useCallback,
  useDeferredValue,
} from "react";
import { TextInput, Button, Loader } from "@mantine/core";
import { useWeather } from "../libs/UseWeather";
import WeatherCard from "./WeatherCard";
import SearchHistory from "./SearchHistory";
import ErrorMessage from "./ErrorMessage";
import Loading from "./Loading";

export default function WeatherSearch() {
  const [city, setCity] = useState(""); // Input value
  const [searchCity, setSearchCity] = useState(""); // Triggers API fetch

  const deferredCity = useDeferredValue(city); // Delayed version of city
  const [isPending, startTransition] = useTransition(); // Transition state
  const previousSearches = useRef<Set<string>>(new Set()); // Store search history

  // Fetch weather data based on searchCity
  const { data, isLoading, error } = useWeather(searchCity);

  // Handle search action
  const handleSearch = useCallback(() => {
    if (deferredCity.trim() && !previousSearches.current.has(deferredCity)) {
      previousSearches.current.add(deferredCity);
    }

    startTransition(() => {
      setSearchCity(deferredCity);
    });
  }, [deferredCity]);

  return (
    <div className="max-w-lg mx-auto space-y-6 p-6 border rounded-xl shadow-xl bg-white">
      {/* Input & Button */}
      <div className="space-y-3">
        <TextInput
          label="Search by City"
          placeholder="Enter city name"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          className="w-full"
          size="md"
        />
        <Button
          onClick={handleSearch}
          className="w-full bg-blue-300 hover:bg-blue-300 text-white"
          size="md"
        >
          Search
        </Button>
      </div>

      {/* Previous Searches */}
      <SearchHistory previousSearches={previousSearches.current} />

      {/* Loader, Error, and Weather Info */}
      <div className="flex flex-col items-center space-y-4">
           {isLoading && <Loader size="md" color="blue" />} 
        {isPending && <Loader size="md" color="blue" />}
        {error && <ErrorMessage message={(error as any).message} />}
        {data && <WeatherCard data={data} />}
      </div>
    </div>
  );
}
