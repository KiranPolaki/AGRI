"use client";

import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import Search from "./Search";
import { MapPin, X } from "lucide-react";
import { useEffect, useState } from "react";
import axios from "axios";
import banglore from "../../../public/9.svg";
import chennai from "../../../public/1.svg";
import delhi from "../../../public/2.svg";
import gurgaon from "../../../public/3.svg";
import hyderabad from "../../../public/4.svg";
import kolkata from "../../../public/5.svg";
import mumbai from "../../../public/6.svg";
import noida from "../../../public/7.svg";
import pune from "../../../public/8.svg";
import Image from "next/image";

export function Location() {
  const [cities, setCities] = useState<string[]>([]);
  useEffect(() => {
    axios
      .post("https://countriesnow.space/api/v0.1/countries/cities", {
        country: "india",
      })
      .then((response) => {
        console.log(response.data, "cities");
        const sortedCities = sortCities(response?.data?.data);
        setCities(sortedCities);
      });
  }, []);
  const sortCities = (cities: [string]) => {
    return cities
      .map((city) => city.split(" ")[0])
      .filter((city) => {
        return !city.includes("Ā");
      })
      .sort();
  };
  const popularCities = [
    { name: "Banglore", icon: banglore },
    { name: "Chennai", icon: chennai },
    { name: "Delhi", icon: delhi },
    { name: "Gurgaon", icon: gurgaon },
    { name: "Hyderabad", icon: hyderabad },
    { name: "Kolkata", icon: kolkata },
    { name: "Mumbai", icon: mumbai },
    { name: "Noida", icon: noida },
    { name: "Pune", icon: pune },
  ];
  const [showAllCities, setShowAllCities] = useState<boolean>(false);
  const [location, setLocation] = useState<{
    latitude: number;
    longitude: number;
  }>({ latitude: 0, longitude: 0 });
  const [city, setCity] = useState<string>("");
  const [getLocation, setGetLocation] = useState<boolean>(false);

  useEffect(() => {
    if (navigator.geolocation && getLocation) {
      console.log("navigator geolocation", navigator.geolocation);
      // console.log("navigator geolocation", navigator.geolocation);
      navigator.geolocation.getCurrentPosition((position) => {
        console.log(position, "position");
        getCity(position.coords.latitude, position.coords.longitude);
        setLocation({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });
      });
    }
  }, [getLocation]);

  useEffect(() => {}, [city]);
  async function getCity(latitude: number, longitude: number) {
    const options = {
      method: "GET",
      url: "https://forward-reverse-geocoding.p.rapidapi.com/v1/reverse",
      params: {
        lat: `${latitude}`,
        lon: `${longitude}`,
        zoom: "10",
        addressdetails: "1",
        namedetails: "0",
        "accept-language": "en",
        format: "json",
        polygon_text: "0",
        polygon_kml: "0",
        polygon_svg: "0",
        polygon_geojson: "0",
        polygon_threshold: "0.0",
        limit: "1",
      },
      headers: {
        "x-rapidapi-key": `${process.env.NEXT_PUBLIC_GEO_RAPID_API_KEY}`,
        "x-rapidapi-host": "forward-reverse-geocoding.p.rapidapi.com",
      },
    };

    try {
      const response = await axios.request(options);
      setCity(response.data.address.state_district);
    } catch (error) {
      console.log(process.env.GEO_RAPID_API_KEY, "apikey");
      console.error(error, "city");
    }
  }

  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button
          variant="outline"
          className="p-6"
          onClick={() => setGetLocation(true)}
        >
          {city === "" ? "Location" : city}
          <MapPin />
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <div className="flex justify-end w-full px-4 cursor-pointer">
          <DrawerClose
            asChild
            onClick={() => {
              setShowAllCities(false);
            }}
          >
            <X />
          </DrawerClose>
        </div>
        <div className="mx-auto w-full max-w-7xl">
          <DrawerHeader className="w-full flex flex-col items-center justify-center gap-2">
            <DrawerDescription className="w-full">
              <Search />
            </DrawerDescription>
          </DrawerHeader>
          <div className="p-4 pb-0 w-full">
            {!showAllCities ? (
              <div>
                <DrawerTitle>Popular cities</DrawerTitle>
                <div className="mt-3 h-full flex flex-col items-center justify-between">
                  <div className="flex w-full gap-10 flex-wrap justify-between md:gap-8">
                    {popularCities.map((city, i) => {
                      return (
                        <DrawerClose asChild>
                          <div
                            onClick={() => setCity(city?.name)}
                            key={`city${i}`}
                            className="flex flex-col items-center cursor-pointer"
                          >
                            <Image
                              src={city?.icon}
                              alt="banglore"
                              width="90"
                              height="90"
                            ></Image>
                            <p>{city?.name}</p>
                          </div>
                        </DrawerClose>
                      );
                    })}
                  </div>
                  <Button
                    variant={"outline"}
                    onClick={() => {
                      setShowAllCities(true);
                    }}
                    className="border-none hover:bg-background hover:underline"
                  >
                    Show all cities
                  </Button>
                </div>
              </div>
            ) : (
              <div>
                <DrawerTitle>All cities</DrawerTitle>
                <div className="mt-3 h-[170px]">
                  <div className="flex flex-wrap items-start h-full overflow-y-scroll">
                    {cities.map((city, i) => {
                      return (
                        <DrawerClose asChild>
                          <div
                            className="w-1/4 cursor-pointer hover:text-lime-600"
                            key={i}
                            onClick={() => setCity(city)}
                          >
                            {city}
                          </div>
                        </DrawerClose>
                      );
                    })}
                  </div>
                </div>
              </div>
            )}
          </div>
          <DrawerFooter></DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
