const STORAGE_KEY = "portfolio-location";
const API_ENDPOINT = "/api/location";
const LOCATION_CACHE_TTL = 10000;

let cachedLocation = null;
let cachedAt = 0;
let locationRequest = null;

export const getDefaultLocation = () => ({
  city: "Habiganj",
  country: "Bangladesh",
  displayText: "Habiganj, Sylhet, Bangladesh",
  source: "default",
});

const getStoredLocation = () => {
  if (typeof window === "undefined") return null;

  try {
    const savedLocation = window.localStorage.getItem(STORAGE_KEY);
    return savedLocation ? JSON.parse(savedLocation) : null;
  } catch (error) {
    console.warn("Unable to read saved location", error);
    return null;
  }
};

export const fetchLocation = async () => {
  if (typeof window === "undefined") {
    return getDefaultLocation();
  }

  if (cachedLocation && Date.now() - cachedAt < LOCATION_CACHE_TTL) {
    return cachedLocation;
  }

  if (locationRequest) return locationRequest;

  locationRequest = (async () => {
    try {
      const response = await fetch(`${API_ENDPOINT}?t=${Date.now()}`);
      if (response.ok) {
        const remoteLocation = await response.json();
        if (remoteLocation?.displayText) {
          window.localStorage.setItem(
            STORAGE_KEY,
            JSON.stringify(remoteLocation),
          );
          cachedLocation = remoteLocation;
          cachedAt = Date.now();
          return remoteLocation;
        }
      }
    } catch (error) {
      console.warn("Location API unavailable, using fallback data", error);
    }

    const fallbackLocation = getStoredLocation() || getDefaultLocation();
    cachedLocation = fallbackLocation;
    cachedAt = Date.now();
    return fallbackLocation;
  })();

  try {
    return await locationRequest;
  } finally {
    locationRequest = null;
  }
};

const getWeatherIcon = (weatherCode) => {
  if (weatherCode === undefined || weatherCode === null) return "🌤️";

  if (weatherCode <= 3) return "☀️";
  if (weatherCode >= 45 && weatherCode <= 48) return "🌫️";
  if (weatherCode >= 51 && weatherCode <= 67) return "🌧️";
  if (weatherCode >= 71 && weatherCode <= 77) return "❄️";
  if (weatherCode >= 80 && weatherCode <= 82) return "🌦️";
  if (weatherCode >= 95) return "⛈️";

  return "🌤️";
};

export const fetchWeather = async (location = {}) => {
  const city = location.city || "Habiganj";
  const country = location.country || "Bangladesh";

  try {
    let latitude = location.latitude;
    let longitude = location.longitude;
    let resolvedCity = city;
    let resolvedCountry = country;

    if (latitude == null || longitude == null) {
      const geocodeResponse = await fetch(
        `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(city)}&count=1&language=en&format=json`,
      );
      const geocodeData = await geocodeResponse.json();
      const result = geocodeData?.results?.[0];

      if (!result) throw new Error("Unable to resolve weather location");

      latitude = result.latitude;
      longitude = result.longitude;
      resolvedCity = result.name || city;
      resolvedCountry = result.country || country;
    }

    const weatherResponse = await fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,weather_code,is_day&timezone=auto`,
    );
    const weatherData = await weatherResponse.json();

    return {
      icon: getWeatherIcon(weatherData?.current?.weather_code),
      code: weatherData?.current?.weather_code ?? null,
      isDay: weatherData?.current?.is_day !== 0,
      temperature: weatherData?.current?.temperature_2m,
      city: resolvedCity,
      country: resolvedCountry,
    };
  } catch (error) {
    console.warn("Weather API unavailable", error);
    return {
      icon: "🌤️",
      code: null,
      isDay: true,
      temperature: null,
      city,
      country,
    };
  }
};
