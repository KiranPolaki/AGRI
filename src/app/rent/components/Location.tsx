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
    { name: "Banglore", icon: "" },
    { name: "Chennai", icon: "" },
    { name: "Delhi", icon: "" },
    { name: "Gurgaon", icon: "" },
    { name: "Hyderabad", icon: "" },
    { name: "Kolkata", icon: "" },
    { name: "Mumbai", icon: "" },
    { name: "Noida", icon: "" },
    { name: "Pune", icon: "" },
  ];
  const [showAllCities, setShowAllCities] = useState<boolean>(false);

  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button variant="outline" className="p-6">
          Location
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
                <div className="mt-3 h-[150px] flex flex-col items-center justify-between">
                  <div className="flex w-full gap-10 flex-wrap md:gap-3">
                    {popularCities.map((city, i) => {
                      return (
                        <div key={`city${i}`} className="flex flex-col">
                          {city?.icon}
                          <p>{city?.name}</p>
                        </div>
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
                        <div className="w-1/4" key={i}>
                          {city}
                        </div>
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
