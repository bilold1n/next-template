import Link from "next/link";
import React from "react";

export default async function Params({ params }) {
  console.log(params?.id);

  const req = await fetch(`https://api.kinopoisk.dev/v1.4/movie/${params.id}`, {
    headers: {
      "Content-Type": "application/json",
      "X-API-KEY": "KCAF750-7XJ4DKA-MSHYH4X-0157ENA",
    },
  });

  const res = await req.json();
  const data = res;

  return (
    <div className="container mt-5">
      <Link
        className="mt-5 px-5 py-3 rounded-2xl shadow-[0_1px_7px_0_rgba(255,0,255)] hover:bg-[rgba(255,0,255)]"
        href={"/movies"}
      >
        Back to home
      </Link>
      {Array(data)?.map(
        ({
          id,
          name,
          description,
          year,
          type,
          poster,
          backdrop,
          alternativeName,
          rating,
          countries,
          genres,
        }) => {
          return (
            <div className="card card-side bg-base-100 shadow-[0_2px_15px_0_rgba(255,0,255)] p-5 mt-16">
              <figure>
                <img
                  className="object-contain object-center w-[500px] h-[500px]"
                  src={
                    poster?.url ??
                    backdrop?.url ??
                    "https://yastatic.net/s3/kinopoisk-frontend/common-static/img/projector-logo/placeholder.svg"
                  }
                  alt={name}
                  width={580}
                  height={420}
                />
              </figure>
              <div className="card-body">
                <div className="flex items-center gap-4">
                  <span className="p-2 text-[#ffffff] bg-[#2d1165] rounded-xl w-[100px] text-center">
                    Movie title{" "}
                  </span>{" "}
                  <h1 className="card-title text-5xl">
                    {name ?? alternativeName}
                  </h1>
                </div>
                <div className="w-[420px]">
                  <div className="flex items-start gap-5 mt-3">
                    <span className="p-2 text-[#ffffff] bg-[#2d1165] rounded-xl w-[100px] text-center ">
                      Description{" "}
                    </span>
                    <p>
                      {" "}
                      {description
                        ? description.split(" ").slice(0, 25).join(" ")
                        : " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet eaque ipsum optio aut quidem, at voluptatibus, impedit accusantium voluptate dolorum doloremque porro recusandae rerum aspernatur harum."}
                    </p>{" "}
                  </div>
                  <div className="flex  mt-5 gap-10">
                    <div className="flex flex-col gap-5">
                      <div className="flex gap-4 items-center">
                        <span className="p-2 text-[#ffffff] bg-[#2d1165] rounded-xl w-[100px] text-center">
                          Year{" "}
                        </span>{" "}
                        <p>{year}</p>
                      </div>{" "}
                      <div className="flex gap-4 items-center">
                        <span className="p-2 text-[#ffffff] bg-[#2d1165] rounded-xl w-[100px] text-center">
                          Type{" "}
                        </span>{" "}
                        <p>{type}</p>
                      </div>{" "}
                      <div className="flex gap-4 items-center">
                        <span className="p-2 text-[#ffffff] bg-[#2d1165] rounded-xl w-[100px] text-center">
                          Rating{" "}
                        </span>{" "}
                        <p>{rating?.imdb}</p>
                      </div>
                    </div>
                    <div className="flex flex-col gap-5">
                      <div className="flex gap-4 items-center">
                        <span className="p-2 text-[#ffffff] bg-[#2d1165] rounded-xl w-[100px] text-center">
                          Genre{" "}
                        </span>{" "}
                        <p>{genres[0]?.name}</p>
                      </div>{" "}
                      <div className="flex gap-4 items-center">
                        <span className="p-2 text-[#ffffff] bg-[#2d1165] rounded-xl w-[100px] text-center">
                          Countries{" "}
                        </span>{" "}
                        <p>{countries[0]?.name}</p>
                      </div>
                      <div className="flex gap-4 items-center">
                        <span className="p-2 text-[#ffffff] bg-[#2d1165] rounded-xl w-[100px] text-center">
                          Age limit{" "}
                        </span>{" "}
                        <span
                          style={{
                            borderRadius: "50%",
                            background: "blue",
                            padding: "5px",
                          }}
                        >
                          16+
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card-actions flex items-center justify-end mt-auto">
                  <Link
                    target="blank"
                    href={`https://www.kinopoisk.ru/film/${id}`}
                    className="btn btn-outline btn-info"
                  >
                    Watch 🎬
                  </Link>
                </div>
              </div>
            </div>
          );
        }
      )}
    </div>
  );
}
