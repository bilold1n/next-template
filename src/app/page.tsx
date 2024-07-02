"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Movie } from "@/types";

export default function Cart() {
  const [fav, setFav] = useState<Movie[]>([]);
  const [data, setData] = useState<Movie[]>([]);
  const [request, setRequest] = useState<Movie[]>([]);

  useEffect(() => {
    const favs =
      JSON.parse(window.localStorage.getItem("feverits") as string) ?? [];
    setFav(favs);
  }, []);

  useEffect(() => {
    fetch("https://api.kinopoisk.dev/v1.4/movie?rating.imdb=8-10&limit=12", {
      headers: {
        "Content-Type": "application/json",
        "X-API-KEY": "QQWNV3A-M7D48H9-NFQACDX-S2F394Z",
      },
    })
      .then((res) => res.json())
      .then((res) => {
        setRequest(res.docs);
        console.log(res);
      })
      .catch((error) => console.error("Error fetching movies:", error));
  }, []);

  useEffect(() => {
    fetch("https://api.kinopoisk.dev/v1.4/movie?rating.imdb=9-10&limit=3", {
      headers: {
        "Content-Type": "application/json",
        "X-API-KEY": "QQWNV3A-M7D48H9-NFQACDX-S2F394Z",
      },
    })
      .then((res) => res.json())
      .then((res) => {
        setData(res.docs);
        console.log(res);
      })
      .catch((error) => console.error("Error fetching movies:", error));
  }, []);

  const addToFavorites = (movie: Movie) => {
    const isFav = fav.some((favMovie) => favMovie.id === movie.id);
    let updatedFav;
    if (isFav) {
      updatedFav = fav.filter((favMovie) => favMovie.id !== movie.id);
    } else {
      updatedFav = [...fav, movie];
    }
    setFav(updatedFav);
    window.localStorage.setItem("feverits", JSON.stringify(updatedFav));
  };

  return (
    <div className="pb-12">
      <div className="container flex items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          fill="currentColor"
          className="h-6 w-6 opacity-70"
        >
          <path
            fillRule="evenodd"
            d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
            clipRule="evenodd"
          />
        </svg>
        <label className="flex items-center justify-start gap-2 w-[300px] outline-none">
          <input
            style={{ borderRadius: "12px", background: "none" }}
            type="text"
            className="grow outline-none p-2"
            placeholder="Search for tv series"
          />
        </label>
      </div>
      <h2 className="container mb-5 mt-5 text-2xl">Trending</h2>

      <div className="flex items-center justify-between container">
        {data.map((movie: Movie) => {
          return (
            <Link key={movie.id} href={`/${movie.id}`}>
              <div
                style={{
                  backgroundImage: `url(${
                    movie.poster?.url ??
                    movie.backdrop?.url ??
                    "https://yastatic.net/s3/kinopoisk-frontend/common-static/img/projector-logo/placeholder.svg"
                  })`,
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                }}
                className="w-[400px] h-[230px] card card-compact bg-base-100 shadow-xl"
              >
                <div className="card-body w-[400px] text-[#fff] mt-[100px]">
                  <span
                    className="absolute top-5 right-5 cursor-pointer"
                    onClick={() => addToFavorites(movie)}
                  >
                    <svg
                      width="32"
                      height="32"
                      viewBox="0 0 32 32"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="hover:fill-white"
                      style={
                        fav.find((favMovie) => favMovie.id === movie.id)
                          ? { fill: "white" }
                          : {}
                      }
                    >
                      <circle
                        opacity="0.500647"
                        cx="16"
                        cy="16"
                        r="16"
                        fill="#10141E"
                      />
                      <path
                        d="M20.7112 9.771L20.7215 9.77548L20.7319 9.77965C20.7992 9.80657 20.8386 9.84049 20.8705 9.88692C20.9032 9.93458 20.9167 9.97786 20.9167 10.0364V21.9636C20.9167 22.0221 20.9032 22.0654 20.8705 22.1131C20.8386 22.1595 20.7992 22.1934 20.7319 22.2203L20.7237 22.2236L20.7156 22.2271C20.7107 22.2292 20.6807 22.2407 20.6094 22.2407C20.5085 22.2407 20.4397 22.2142 20.3686 22.15L16.3572 18.2346L15.8333 17.7233L15.3095 18.2346L11.2975 22.1505C11.2129 22.2276 11.1421 22.25 11.0573 22.25C11.02 22.25 10.9882 22.2433 10.9555 22.229L10.9452 22.2245L10.9347 22.2203C10.8674 22.1934 10.8281 22.1595 10.7962 22.1131C10.7635 22.0654 10.75 22.0221 10.75 21.9636V10.0364C10.75 9.97786 10.7635 9.93458 10.7962 9.88692C10.8281 9.84049 10.8674 9.80657 10.9347 9.77965L10.9452 9.77548L10.9555 9.771C10.9882 9.75674 11.02 9.75 11.0573 9.75H20.6094C20.6466 9.75 20.6784 9.75674 20.7112 9.771Z"
                        stroke="white"
                        strokeWidth="1.5"
                      />
                    </svg>
                  </span>
                  <div className="flex items-center justify-between">
                    <p className="text-xl">· {movie.year}</p>
                    <p className="text-xl">· {movie.type}</p>
                    <p className="text-xl">· 16+</p>
                  </div>
                  <h2>{movie.name ?? movie.alternativeName}</h2>
                  <p className="text-[#fff] text-2xl">click me to see</p>
                </div>
              </div>
            </Link>
          );
        })}
      </div>

      <div className="container">
        <h2 className="mt-5 text-2xl">Tv Series</h2>
        <div className="mygrid gap-8 mt-5">
          {request.map((movie: Movie) => {
            return (
              <div
                key={movie.id}
                className="card card-compact bg-base-100 shadow-xl w-full sm:w-[300px] relative"
              >
                <figure>
                  <Link href={`/${movie.id}`}>
                    <img
                      className="object-contain w-full h-[420px]"
                      src={
                        movie.poster?.url ??
                        movie.backdrop?.url ??
                        "https://yastatic.net/s3/kinopoisk-frontend/common-static/img/projector-logo/placeholder.svg"
                      }
                      alt={movie.name}
                      width={280}
                      height={420}
                    />
                  </Link>
                </figure>
                <span
                  className="absolute top-5 right-5 cursor-pointer"
                  onClick={() => addToFavorites(movie)}
                >
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="hover:fill-white"
                    style={
                      fav.find((favMovie) => favMovie.id === movie.id)
                        ? { fill: "white" }
                        : {}
                    }
                  >
                    <circle
                      opacity="0.500647"
                      cx="16"
                      cy="16"
                      r="16"
                      fill="#10141E"
                    />
                    <path
                      d="M20.7112 9.771L20.7215 9.77548L20.7319 9.77965C20.7992 9.80657 20.8386 9.84049 20.8705 9.88692C20.9032 9.93458 20.9167 9.97786 20.9167 10.0364V21.9636C20.9167 22.0221 20.9032 22.0654 20.8705 22.1131C20.8386 22.1595 20.7992 22.1934 20.7319 22.2203L20.7237 22.2236L20.7156 22.2271C20.7107 22.2292 20.6807 22.2407 20.6094 22.2407C20.5085 22.2407 20.4397 22.2142 20.3686 22.15L16.3572 18.2346L15.8333 17.7233L15.3095 18.2346L11.2975 22.1505C11.2129 22.2276 11.1421 22.25 11.0573 22.25C11.02 22.25 10.9882 22.2433 10.9555 22.229L10.9452 22.2245L10.9347 22.2203C10.8674 22.1934 10.8281 22.1595 10.7962 22.1131C10.7635 22.0654 10.75 22.0221 10.75 21.9636V10.0364C10.75 9.97786 10.7635 9.93458 10.7962 9.88692C10.8281 9.84049 10.8674 9.80657 10.9347 9.77965L10.9452 9.77548L10.9555 9.771C10.9882 9.75674 11.02 9.75 11.0573 9.75H20.6094C20.6466 9.75 20.6784 9.75674 20.7112 9.771Z"
                      stroke="white"
                      strokeWidth="1.5"
                    />
                  </svg>
                </span>
                <div className="card-body">
                  <div className="flex items-center justify-between">
                    <p>· {movie.year}</p>
                    <p>· {movie.type}</p>
                    <p>· 16+</p>
                  </div>
                  <h2>{movie.name ?? movie.alternativeName}</h2>
                  <p className="text-[#f0ebeb61]">click me to see</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
