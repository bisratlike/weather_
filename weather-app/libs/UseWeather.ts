// hooks/useWeather.ts
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const fetchWeather = async (city: string) => {
  const response = await axios.get(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=YOUR_API_KEY&units=metric`
  );
  return response.data;
};

export const useWeather = (city: string) => {
  return useQuery(
    ['weather', city],
    () => fetchWeather(city),
    {
      enabled: !!city,
    }
  );
};
