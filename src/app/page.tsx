import Link from "next/link";
import React from "react";
import { Movie } from "@/types";
import { getTrending } from "@/trending";

export default async function Cart() {
  const request = await getTrending();

  const req = await fetch(
    `https://api.kinopoisk.dev/v1.4/movie?rating.imdb=9-10&limit=3`,
    {
      headers: {
        "Content-Type": "application/json",
        "X-API-KEY": "KCAF750-7XJ4DKA-MSHYH4X-0157ENA",
      },
    }
  );

  const res = await req.json();
  const data = res;
  console.log(data);

  return (
    <div className="pb-12">
      <div className="container flex items-center ">
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
            placeholder="Search for movies or tv series"
          />
        </label>
      </div>
      <h2 className="container mb-5 mt-5 text-2xl">Trending</h2>

      <div className="flex items-center justify-between container">
        {data?.docs?.map(
          ({
            id,
            name,
            description,
            year,
            type,
            poster,
            backdrop,
            alternativeName,
          }: Movie) => {
            return (
              <Link key={id} href={`/${id}`}>
                <div
                  style={{
                    backgroundImage: `url(${
                      poster?.url ??
                      backdrop?.url ??
                      "https://yastatic.net/s3/kinopoisk-frontend/common-static/img/projector-logo/placeholder.svg"
                    })`,
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                  }}
                  className="w-[400px] h-[230px] card card-compact bg-base-100 shadow-xl "
                >
                  <div className="card-body w-[400px] text-[#fff] mt-[100px] ">
                    <div className="flex items-center justify-between">
                      <p className="text-xl">· {year}</p>
                      <p className="text-xl">· {type}</p>
                      <p className="text-xl">· 16+</p>
                    </div>
                    <h2>{name ?? alternativeName}</h2>
                    <p className="text-[#fff] text-2xl">click me to see</p>
                  </div>
                </div>
              </Link>
            );
          }
        )}
      </div>
      <div className="container">
        <h2 className="mt-5 text-2xl">Recommended for you</h2>

        <div className="mygrid gap-8 mt-5">
          {request?.docs?.map(
            ({
              id,
              name,
              description,
              year,
              type,
              poster,
              backdrop,
              alternativeName,
            }: Movie) => {
              return (
                <Link key={id} href={`/${id}`}>
                  <div className="card card-compact bg-base-100 shadow-xl w-full sm:w-[300px]">
                    <figure>
                      <img
                        className="object-contain w-full h-[420px]"
                        src={
                          poster?.url ??
                          backdrop?.url ??
                          "https://yastatic.net/s3/kinopoisk-frontend/common-static/img/projector-logo/placeholder.svg"
                        }
                        alt={name}
                        width={280}
                        height={420}
                      />
                    </figure>
                    <div className="card-body">
                      <div className="flex items-center justify-between">
                        <p>· {year}</p>
                        <p>· {type}</p>
                        <p>· 16+</p>
                      </div>
                      <h2>{name ?? alternativeName}</h2>
                      <p className="text-[#f0ebeb61]">click me to see</p>
                    </div>
                  </div>
                </Link>
              );
            }
          )}
        </div>
      </div>
    </div>
  );
}
