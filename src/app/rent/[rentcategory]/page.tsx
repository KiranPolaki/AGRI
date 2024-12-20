import React from "react";

export default function RentCategory({
  params,
}: {
  params: { rentcategory: string };
}) {
  //basically with param we fetch something or get the data to display
  return <div>form of category {params.rentcategory}</div>;
}
