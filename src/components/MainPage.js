import React, { useEffect } from "react";
import Card from "./Card";
import {
  PAYLOAD,
  SWIGGY_RESTOURANTS_API_URL,
  SWIGGY_RESTOURANTS_UPDATE_API_URL,
} from "../apis";
const MainPage = () => {
  const [data, setData] = React.useState([]);
  const url1 = SWIGGY_RESTOURANTS_API_URL;
  const url2 = SWIGGY_RESTOURANTS_UPDATE_API_URL;

  const req1 = async (url) => {
    try {
      const response = await fetch(
        "https://corsproxy.org/?" + encodeURIComponent(url)
      );
      if (response.ok) {
        jsonData = await response.json();
        setData([
          ...data,
          ...jsonData?.data.cards[4]?.card?.card?.gridElements?.infoWithStyle
            ?.restaurants,
        ]);
      } else {
        console.error("Failed to fetch data");
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    let ignore = false;

    req1(url1);
    return () => {
      ignore = true;
    };
  }, []);
  useEffect(() => {
    // console.log(data);
  }, [data]);
  return (
    <div className="grid overflow-hidden max-sm:grid-cols-1 max-md:grid-cols-2 max-lg:grid-cols-4 grid-cols-5 p-3 gap-3 mx-auto">
      {data?.map((card) => (
        <Card key={card?.info?.id} data={card} />
      ))}
      MainPage
    </div>
  );
};

export default MainPage;
