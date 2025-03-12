import { Card } from "@mantine/core";

export default function WeatherCard({ data }: { data: any }) {
  return (
    <Card shadow="lg" padding="xl" radius="lg" className="text-center w-full bg-gradient-to-r from-blue-400 to-D1EAF0-500 text-white">
      <h2 className="text-2xl font-bold">{data.name}</h2>
      <p className="text-lg font-medium">Temperature: {data.main.temp}°C</p>
      <p className="text-lg capitalize">{data.weather[0].description}</p>
    </Card>
  );
}
