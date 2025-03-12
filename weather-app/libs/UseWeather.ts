import { useQuery, UseQueryResult } from '@tanstack/react-query';
import axios from 'axios';
import 'dotenv/config';
interface WeatherData {
  name: string;
  main: {
    temp: number;
  };
  weather: {
    description: string;
  }[];
}

const fetchWeather = async (city: string): Promise<WeatherData> => {
  const response = await axios.get(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.NEXT_PUBLIC_API_URL}&units=metric`
  );
  return response.data;
};

export const useWeather = (city: string): UseQueryResult<WeatherData, Error> => {
  return useQuery({
    queryKey: ['weather', city],
    queryFn: () => fetchWeather(city),
  });
};