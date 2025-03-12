import Image from "next/image";

export default function Home() {
  return (
    <div>
      <h1>Weather App</h1>
      <Image
        src="/weather.png"
        alt="Weather App"
        width={500}
        height={500}
      />
    </div>
  );
}
