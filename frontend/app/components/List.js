"use client";
import domainName from "../domain";
import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";

// Import Swiper styles
import "swiper/css";

export default function List(props) {
  const kategori = props.kategori;
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    fetch(domainName + "/data/kategori/", {
      cache: "no-store",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ kategori }),
    })
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        console.log(data);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  };

  return (
    <div className="mb-12">
      <div className="text-slate-50 font-bold text-lg mb-2">{kategori}</div>
      <Swiper
        className="flex gap-1"
        slidesPerView={6}
        loop={true}
        spaceBetween={10}
      >
        {data.map((item) => (
          <SwiperSlide key={item.uuid}>
            <Link href={"/movie/" + item.uuid}>
              <img
                src={domainName + "/uploads/" + item.gambar}
                className="rounded"
                alt={item.judul}
              />
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
