// Weather condition codes: https://openweathermap.org/weather-conditions
export const getWeatherEmoji = (weatherId: number): string => {
  // Thunderstorm (200-232)
  if (weatherId >= 200 && weatherId < 300) {
    return "⛈️";
  }
  // Drizzle (300-321)
  if (weatherId >= 300 && weatherId < 400) {
    return "🌧️";
  }
  // Rain (500-531)
  if (weatherId >= 500 && weatherId < 600) {
    return weatherId === 511 ? "🌨️" : "🌧️";
  }
  // Snow (600-622)
  if (weatherId >= 600 && weatherId < 700) {
    return "❄️";
  }
  // Atmosphere (701-781): mist, smoke, haze, fog, etc.
  if (weatherId >= 700 && weatherId < 800) {
    switch (weatherId) {
      case 701:
        return "🌫️"; // mist
      case 711:
        return "💨"; // smoke
      case 721:
        return "🌫️"; // haze
      case 731:
        return "⚠️"; // dust/sand
      case 741:
        return "🌫️"; // fog
      case 751:
        return "⚠️"; // sand
      case 761:
        return "⚠️"; // dust
      case 762:
        return "🌋"; // volcanic ash
      case 771:
        return "💨"; // squalls
      case 781:
        return "🌪️"; // tornado
      default:
        return "🌫️";
    }
  }
  // Clear (800)
  if (weatherId === 800) {
    return "☀️";
  }
  // Clouds (801-804)
  if (weatherId > 800 && weatherId < 805) {
    switch (weatherId) {
      case 801:
        return "🌤️"; // few clouds
      case 802:
        return "⛅"; // scattered clouds
      case 803:
        return "🌥️"; // broken clouds
      case 804:
        return "☁️"; // overcast clouds
      default:
        return "☁️";
    }
  }
  return "❓"; // unknown weather condition
};
