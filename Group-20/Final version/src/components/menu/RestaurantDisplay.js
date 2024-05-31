import Plus from "@/components/icons/Plus";
import Trash from "@/components/icons/Trash";
import EditableImage from "@/components/layout/EditableImage";
import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";

export default function RestaurantItem({ onSubmit, restaurantItem }) {
  const [image, setImage] = useState(restaurantItem?.image || "");
  const [name, setName] = useState(restaurantItem?.name || "");
  const [phone, setPhone] = useState(restaurantItem?.phone || "");
  const [delivery, setDelivery] = useState(restaurantItem?.delivery || false);
  const [rating, setRating] = useState(restaurantItem?.Rating || 0);
  const [menu, setMenu] = useState(restaurantItem?.menu || []);

  return (
    <>
      <div>
        {RestaurantItem.map((RestaurantItem, index) => (
          <div className="grid grid-cold-1 cold-2 gap-7 mt-3">
            <RestaurantCard /> key{index}
            RestaurantItem = {restaurant}
          </div>
        ))}
      </div>
    </>
  );
}
