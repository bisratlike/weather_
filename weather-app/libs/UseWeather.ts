import { useQuery, UseQueryResult } from "@tanstack/react-query";
import axios from "axios";
import "dotenv/config";

interface WeatherData {
  name: string;
  main: {
    temp: number;
  };
  weather: {
    description: string;
  }[];
}

interface WeatherError {
  cod: string;
  message: string;
}

const fetchWeather = async (city: string): Promise<WeatherData> => {
  try {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.NEXT_PUBLIC_API_URL}&units=metric`
    );
    return response.data as WeatherData;
  } catch (error) {
    if (axios.isAxiosError(error) && error.response?.data) {
      // Transform the error into a more user-friendly format
      const weatherError = error.response.data as WeatherError;
      throw new Error(weatherError.message || "City not found");
    }
    throw new Error("Failed to fetch weather data");
  }
};

export const useWeather = (
  city: string
): UseQueryResult<WeatherData, Error> => {
  return useQuery({
    queryKey: ["weather", city],
    queryFn: () => fetchWeather(city),
    enabled: !!city, // Only run query if city is provided
    retry: false, // Don't retry on failure
  });
};
