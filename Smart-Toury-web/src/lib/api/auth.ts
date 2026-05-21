const API_URL = "http://localhost:8080";

export async function registerUser(data: {
  name: string;
  email: string;
  password: string;
  role: number;
}) {
  const response = await fetch(`${API_URL}/api/users`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: data.name,
      email: data.email,
      password: data.password,
      role: data.role,
    }),
  });

  if (!response.ok) {
    const error = await response.text();
    throw new Error(error || "Ошибка регистрации");
  }

  return response.json();
}

export async function loginUser(data: {
  email: string;
  password: string;
}) {
  const response = await fetch(`${API_URL}/api/auth/sessions`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: data.email,
      password: data.password,
    }),
  });

  if (!response.ok) {
    const error = await response.text();
    throw new Error(error || "Ошибка входа");
  }

  return response.json();
}

export async function createTour(data: {
  name: string;
  description: string;
  price: number;
  durationMinutes: number;
  distanceKm: number;
  tourStops: Array<{
    locationId: string;
    order: number;
    offsetMinutes: number;
    durationMinutes: number;
    guideNotes: string;
  }>;
}) {

  const token = localStorage.getItem("accessToken");

  if (!token) {
    throw new Error("Вы не авторизованы");
  }

  const response = await fetch("http://localhost:8080/api/tours", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {

    const error = await response.text();

    console.error(error);

    throw new Error(
      error || "Ошибка создания тура"
    );
  }

  return response.json();
}

export async function getMyTours() {

  const token = localStorage.getItem("accessToken");

  const response = await fetch(
    "http://localhost:8080/api/tours/me",
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  if (!response.ok) {
    throw new Error("Не удалось загрузить туры");
  }

  const data = await response.json();
  return data.tours || [];
}

export async function createLocation(data: {
  name: string;
  description: string;
  latitude: number;
  longitude: number;
}) {
  const token = localStorage.getItem("accessToken");

  if (!token) {
    throw new Error("Вы не авторизованы");
  }

  const response = await fetch("http://localhost:8080/api/locations", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    const error = await response.text();
    console.error(error);
    throw new Error(error || "Ошибка создания локации");
  }

  return response.json();
}

export async function archiveTour(tourId: number | string) {
  const token = localStorage.getItem("accessToken");

  if (!token) {
    throw new Error("Вы не авторизованы");
  }

  if (!tourId) {
    throw new Error("ID тура не указан");
  }

  const response = await fetch(`http://localhost:8080/api/tours/${tourId}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    const error = await response.text();
    console.error("Ошибка сервера:", error);
    throw new Error(error || "Ошибка архивации тура");
  }

  return response.json();
}