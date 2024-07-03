"server-only";
export async function getMovie() {
  try {
    const req = fetch("https://api.kinopoisk.dev/v1.4/movie?limit=24", {
      headers: {
        "Content-Type": "application/json",
        "X-API-KEY": "QQWNV3A-M7D48H9-NFQACDX-S2F394Z",
      },
    });

    const res = (await req).json();
    return res;
  } catch (error) {}
}
