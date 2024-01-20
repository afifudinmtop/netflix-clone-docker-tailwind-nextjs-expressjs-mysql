"use client";
import domainName from "@/app/domain";
import { useState, useEffect } from "react";
import Footer from "./Footer";
import Header from "./Header";

const movie = ({ params }) => {
  const uuid = params.uuid;
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    fetch(domainName + "/data/" + uuid, {
      cache: "no-store",
      method: "GET",
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
    <div className="mb-5">
      {data.map((item) => (
        <div key={item.uuid}>
          <Header />

          {/* image */}
          <div className="flex justify-center mt-[30vh]">
            <img
              src={domainName + "/uploads/" + item.gambar}
              className="rounded"
              alt={item.judul}
            />
          </div>

          <Footer judul={item.judul} />
        </div>
      ))}
    </div>
  );
};

export default movie;
