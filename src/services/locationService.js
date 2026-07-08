const STORAGE_KEY = "portfolio-location";
const API_ENDPOINT = "/api/location";

export const getDefaultLocation = () => ({
  city: "Dhaka",
  country: "Bangladesh",
  displayText: "Dhaka, Bangladesh",
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

  try {
    const response = await fetch(`${API_ENDPOINT}?t=${Date.now()}`);
    if (response.ok) {
      const remoteLocation = await response.json();
      if (remoteLocation?.displayText) {
        window.localStorage.setItem(
          STORAGE_KEY,
          JSON.stringify(remoteLocation),
        );
        return remoteLocation;
      }
    }
  } catch (error) {
    console.warn("Location API unavailable, using fallback data", error);
  }

  return getStoredLocation() || getDefaultLocation();
};

export const submitLocation = async (locationData) => {
  if (typeof window === "undefined") {
    return locationData;
  }

  const normalized = {
    ...locationData,
    displayText:
      locationData.displayText ||
      [locationData.city, locationData.country].filter(Boolean).join(", "),
  };

  try {
    await fetch(API_ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(normalized),
    });
  } catch (error) {
    console.warn("Location update could not reach the API", error);
  }

  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(normalized));

  return normalized;
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
  const city = location.city || "Dhaka";
  const country = location.country || "Bangladesh";

  try {
    const geocodeResponse = await fetch(
      `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(city)}&count=1&language=en&format=json`,
    );
    const geocodeData = await geocodeResponse.json();
    const result = geocodeData?.results?.[0];

    if (!result) {
      return { icon: "🌤️", temperature: null, city, country };
    }

    const weatherResponse = await fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${result.latitude}&longitude=${result.longitude}&current=temperature_2m,weather_code&timezone=auto`,
    );
    const weatherData = await weatherResponse.json();

    return {
      icon: getWeatherIcon(weatherData?.current?.weather_code),
      temperature: weatherData?.current?.temperature_2m,
      city: result.name || city,
      country: result.country || country,
    };
  } catch (error) {
    console.warn("Weather API unavailable", error);
    return { icon: "🌤️", temperature: null, city, country };
  }
};
