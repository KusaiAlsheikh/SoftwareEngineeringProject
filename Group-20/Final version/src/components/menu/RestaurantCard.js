import React from "react";
import Link from "next/link";

export default function RestaurantCard({ restaurant }) {
  if (!restaurant) return;

  return (
    <Link
      href={"/menu/" + restaurant._id}
      className="p-3 hover:border rounded-xl hover:border-primary curser-pointer hover:bg-red-60"
    >
      <img
        src={restaurant.image}
        alt={restaurant.name}
        width={600}
        height={100}
        className="h-[130px] rounded-xl onject-cover"
      />
      <div className="flex flex-col justify-between ml-3">
        <div className="flex items-center">
          <h2 className="font-bold text-lg">{restaurant.name}</h2>
          {restaurant.freeDelivery && (
            <img
              className="free-delivery-icon ml-auto"
              src="/free-delivery.png"
              alt="freedelivery"
              width={30}
              height={30}
            />
          )}
        </div>
        <div className="flex gap-2 items-center">
          <img src="/star.png" alt="star" width={14} height={14} />{" "}
          <label className="text-gray-400">{restaurant.rating}</label>
        </div>
      </div>
    </Link>
  );
}
