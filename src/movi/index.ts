"server-only";
export async function getMovie() {
  try {
    const req = await fetch("https://api.kinopoisk.dev/v1.4/movie", {
      headers: {
        "Content-Type": "application/json",
        "X-API-KEY": "KCAF750-7XJ4DKA-MSHYH4X-0157ENA",
      },
    });

    const res = await req.json();
    return res;
  } catch (error) {
    return error;
  }
}
