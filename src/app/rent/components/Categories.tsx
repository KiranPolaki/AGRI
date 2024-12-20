import React from "react";

import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

export default function Categories() {
  const categories = [
    {
      name: "Equipment",
      subcategories: [
        {
          name: "Tractors",
          description: "Various types of tractors for different farming needs.",
          examples: [
            {
              name: "John Deere 5100",
              link: "http://example.com/johndeere5100",
            },
            { name: "Case IH AX8250", link: "http://example.com/caseihax8250" },
            {
              name: "New Holland T9.710",
              link: "http://example.com/newhollandt9710",
            },
          ],
        },
        {
          name: "Combine Harvesters",
          description: "Machines for harvesting crops efficiently.",
          examples: [
            {
              name: "CNH Industrial CR9500CX",
              link: "http://example.com/cnhcr9500cx",
            },
            { name: "AGCO S-Series", link: "http://example.com/agcoseries" },
          ],
        },
        {
          name: "Plows",
          description: "Tools for preparing the soil for planting.",
          examples: [
            {
              name: "Valley Plow 6700 Series",
              link: "http://example.com/valleyplow6700",
            },
            {
              name: "Great Plains 8400 Series",
              link: "http://example.com/greatplains8400",
            },
          ],
        },
        {
          name: "Sprayers",
          description: "Equipment for applying pesticides and fertilizers.",
          examples: [
            {
              name: "John Deere 720S Series",
              link: "http://example.com/johndeere720s",
            },
            {
              name: "Case IH Axtronic 800",
              link: "http://example.com/caseihaxtronic800",
            },
          ],
        },
        {
          name: "Mowers",
          description: "Machines for cutting grass and crops.",
          examples: [
            {
              name: "John Deere S-Series",
              link: "http://example.com/johndeereseries",
            },
            { name: "Kubota L-4956H", link: "http://example.com/kubotal4956h" },
          ],
        },
      ],
    },
    {
      name: "Land",
      subcategories: [
        {
          name: "Farmland",
          description: "Different types of land for farming.",
          examples: [
            { name: "Grassy fields", link: "http://example.com/grassyfields" },
            { name: "Sandy soil", link: "http://example.com/sandysoil" },
            { name: "Fertile land", link: "http://example.com/fertileland" },
            {
              name: "Dry lands with rocky terrain",
              link: "http://example.com/drylandsrockyterrain",
            },
          ],
        },
        {
          name: "Irrigation Systems",
          description: "Systems for watering crops.",
          examples: [
            {
              name: "Sprinkler systems",
              link: "http://example.com/sprinklersystems",
            },
            {
              name: "Drip irrigation",
              link: "http://example.com/dripirrigation",
            },
            { name: "Center pivots", link: "http://example.com/centerpivots" },
          ],
        },
        {
          name: "Fencing and Barns",
          description: "Structures and enclosures for farms.",
          examples: [
            { name: "Wooden fences", link: "http://example.com/woodenfences" },
            { name: "Metal fencing", link: "http://example.com/metalfencing" },
            {
              name: "Barns with stalls",
              link: "http://example.com/barnsstalls",
            },
          ],
        },
      ],
    },
    {
      name: "Livestock",
      subcategories: [
        {
          name: "Cattle",
          description: "Different types of cattle for farming.",
          examples: [
            { name: "Bulls", link: "http://example.com/bulls" },
            { name: "Heifers", link: "http://example.com/heifers" },
            { name: "Calves", link: "http://example.com/calves" },
            {
              name: "Beef breeds (Angus, Hereford)",
              link: "http://example.com/beefbreeds",
            },
            {
              name: "Dairy breeds (Holstein)",
              link: "http://example.com/dairybreeds",
            },
          ],
        },
        {
          name: "Sheep and Goats",
          description: "Breeds of sheep and goats for various purposes.",
          examples: [
            {
              name: "Breeding stock",
              link: "http://example.com/breedingstock",
            },
            { name: "Market lambs", link: "http://example.com/marketlambs" },
            {
              name: "Goats for meat production",
              link: "http://example.com/meatgoats",
            },
          ],
        },
        {
          name: "Pigs",
          description: "Different breeds and types of pigs for farming.",
          examples: [
            { name: "Boars", link: "http://example.com/boars" },
            { name: "Sows", link: "http://example.com/sows" },
            { name: "Piglets", link: "http://example.com/piglets" },
            {
              name: "Hog breeds (Duroc, Hampshire)",
              link: "http://example.com/hogbreeds",
            },
          ],
        },
      ],
    },
    {
      name: "Farming",
      subcategories: [
        {
          name: "Seeds and Fertilizers",
          description: "Various seeds and fertilizers for crop production.",
          examples: [
            { name: "Corn seeds", link: "http://example.com/cornseeds" },
            { name: "Soybean seeds", link: "http://example.com/soybeanseeds" },
            {
              name: "Nitrogen-based fertilizers",
              link: "http://example.com/nitrogenfertilizers",
            },
          ],
        },
        {
          name: "Pest Control",
          description: "Products for managing pests in farming.",
          examples: [
            { name: "Insecticides", link: "http://example.com/insecticides" },
            { name: "Fungicides", link: "http://example.com/fungicides" },
            { name: "Rodenticides", link: "http://example.com/rodenticides" },
          ],
        },
        {
          name: "Equipment Accessories",
          description: "Accessories and parts for farming equipment.",
          examples: [
            { name: "Tires", link: "http://example.com/tires" },
            { name: "Air filters", link: "http://example.com/airfilters" },
            {
              name: "Belts for tractors and combine harvesters",
              link: "http://example.com/belts",
            },
          ],
        },
      ],
    },
  ];

  return (
    <div>
      <div>
        <NavigationMenu>
          <NavigationMenuList>
            <div className="flex">
              {categories.map((catergory, i) => {
                return (
                  <NavigationMenuItem key={`${i}`}>
                    <NavigationMenuTrigger>
                      {catergory.name}
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                        {catergory.subcategories.map((component) => (
                          <ListItem
                            key={component.name}
                            title={component.name}
                            href={component?.name}
                          >
                            {component.description}
                          </ListItem>
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                );
              })}
            </div>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </div>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
