import React from "react";
import { SWIGGY_CLOUDINARY_API_URL } from "../apis";
import { FaStar } from "react-icons/fa";
const Card = ({ data }) => {
  return (
    <>
      <div className="">
        <div class=" aspect-square max-w-64 border border-gray-300 rounded-lg overflow-hidden flex flex-col mx-auto">
          <img
            src={SWIGGY_CLOUDINARY_API_URL + data.info.cloudinaryImageId}
            alt="Your Image"
            class="w-full h-2/3 object-cover"
          />
          <div class="flex-grow flex flex-col justify-start px-4 bg-gray-100">
            <div class=" bg-gray-200">{data.info.name}</div>
            <div class="bg-gray-200 flex flex-row items-center gap-1 text-sm font-extrabold">
              <FaStar className=" bg-[#1e531e] text-[#ffffff] rounded-full p-1 text-lg" />
              <span className="px-1">{data.info.avgRating}.</span>
              {data.info.sla.slaString}
            </div>
            <div className=" text-slate-gray text-sm">
              {data.info.cuisines.slice(0, 3).join(", ")}
            </div>
            <div className="text-slate-gray text-xs">{data.info.areaName}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
