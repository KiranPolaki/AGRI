import React from "react";

export default function RentForm() {
  const farmingCategories = [
    "Tractors",
    "Harvesters",
    "Ploughs",
    "Seeders and Planters",
    "Irrigation Equipment",
    "Sprayer",
    "Tillage Equipment",
    "Threshers",
    "Bale Equipment",
    "Livestock Equipment",
    "Transport",
  ];
  return (
    <div className="py-6 px-12">
      bunch of cards as categproies with an image, title, examples
      <div className="flex gap-8">
        {farmingCategories.map((item, i) => {
          return <div key={`${i}item`}>{item}</div>;
        })}
      </div>
    </div>
  );
}
