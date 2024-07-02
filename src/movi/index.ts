"server-only";
export function getMovie() {
  const req = fetch("https://api.kinopoisk.dev/v1.4/movie?limit=24", {
    headers: {
      "Content-Type": "application/json",
      "X-API-KEY": "KCAF750-7XJ4DKA-MSHYH4X-0157ENA",
    },
  }).then((res) => res.json());
  console.log(req);
  return req;
}
