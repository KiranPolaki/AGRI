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
  const components: { title: string; href: string; description: string }[] = [
    {
      title: "Alert Dialog",
      href: "/docs/primitives/alert-dialog",
      description:
        "A modal dialog that interrupts the user with important content and expects a response.",
    },
    {
      title: "Hover Card",
      href: "/docs/primitives/hover-card",
      description:
        "For sighted users to preview content available behind a link.",
    },
    {
      title: "Progress",
      href: "/docs/primitives/progress",
      description:
        "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
    },
    {
      title: "Scroll-area",
      href: "/docs/primitives/scroll-area",
      description: "Visually or semantically separates content.",
    },
    {
      title: "Tabs",
      href: "/docs/primitives/tabs",
      description:
        "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
    },
    {
      title: "Tooltip",
      href: "/docs/primitives/tooltip",
      description:
        "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
    },
  ];
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
            <NavigationMenuItem>
              <NavigationMenuTrigger>Getting started</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                  <li className="row-span-3">
                    <NavigationMenuLink asChild>
                      <a
                        className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                        href="/"
                      >
                        <div className="mb-2 mt-4 text-lg font-medium">
                          shadcn/ui
                        </div>
                        <p className="text-sm leading-tight text-muted-foreground">
                          Beautifully designed components built with Radix UI
                          and Tailwind CSS.
                        </p>
                      </a>
                    </NavigationMenuLink>
                  </li>
                  <ListItem href="/docs" title="Introduction">
                    Re-usable components built using Radix UI and Tailwind CSS.
                  </ListItem>
                  <ListItem href="/docs/installation" title="Installation">
                    How to install dependencies and structure your app.
                  </ListItem>
                  <ListItem
                    href="/docs/primitives/typography"
                    title="Typography"
                  >
                    Styles for headings, paragraphs, lists...etc
                  </ListItem>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

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
            <NavigationMenuItem>
              <NavigationMenuTrigger>Components</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                  {components.map((component) => (
                    <ListItem
                      key={component.title}
                      title={component.title}
                      href={component.href}
                    >
                      {component.description}
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
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
