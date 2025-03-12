"use client";
import { getWeatherEmoji } from "@/app/utils/weatherEmojis";
import { WeatherData } from "@/types/useWeather";

interface WeatherDisplayProps {
  weatherData: WeatherData;
}

export function WeatherDisplay({ weatherData }: WeatherDisplayProps) {
  const weatherEmoji = getWeatherEmoji(weatherData.weather[0].id);

  return (
    <div className="space-y-2">
      <h2 className="text-2xl font-bold">
        {weatherData.name}, {weatherData.sys.country} {weatherEmoji}
      </h2>
      <div className="text-xl">
        <p>Temperature: {weatherData.main.temp.toFixed(1)}°C</p>
        <p>Feels like: {weatherData.main.feels_like.toFixed(1)}°C</p>
        <p>Weather: {weatherData.weather[0].description}</p>
        <p>Humidity: {weatherData.main.humidity}% 💧</p>
        <p>Wind: {weatherData.wind.speed} m/s 💨</p>
        <img
          src={`http://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`}
          alt="Weather icon"
          className="mx-auto"
        />
      </div>
    </div>
  );
}
