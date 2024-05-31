"use client";
import SectionHeaders from "@/components/layout/SectionHeaders";
import RestaurantCard from "@/components/menu/RestaurantCard";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function HomeMenu() {
  const [restaurants, setRestaurants] = useState([]);
  useEffect(() => {
    fetch("/api/restaurants").then((res) => {
      res.json().then((restaurants) => {
        console.log(restaurants);
        setRestaurants(restaurants);
      });
    });
  }, []);
  return (
    <section className="">
      <div className="absolute left-0 right-0 w-full justify-start">
        <div className="absolute left-0 -top-[70px] text-left -z-10">
          <Image
            src={"/halfleft.png"}
            width={109}
            height={189}
            alt={"halfleft"}
          />
        </div>
        <div className="absolute -top-[100px] right-0 -z-10">
          <Image
            src={"/halfright.png"}
            width={107}
            height={195}
            alt={"halfright"}
          />
        </div>
      </div>
      <div
        className="text-center mb-4"
        style={{ marginTop: "25px" }}
        id="Restaurants"
      >
        <SectionHeaders mainHeader={"RESTAURANTS"} />
      </div>
      <div className="grid sm:grid-cols-3 gap-4">
        {restaurants?.length > 0 &&
          restaurants.map((item) => (
            <RestaurantCard key={item._id} restaurant={item} />
          ))}
      </div>
    </section>
  );
}
