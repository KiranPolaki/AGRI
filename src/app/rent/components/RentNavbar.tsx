import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import React from "react";

export default function RentNavbar() {
  return (
    <nav>
      <div className="flex justify-between items-center h-full py-6 px-12 border-b-2">
        <Button className="flex gap-2 bg-background items-center text-black hover:bg-white hover:text-lime-600 transformation border-none shadow-none text-md font-medium">
          <ArrowLeft />
          Back to Dashboard
        </Button>
        <div className="flex justify-between max-w-lg w-full items-center">
          <div>
            <span className="border-2 rounded-full px-2 py-1 mr-2   ">1</span>
            Category
          </div>
          <span className="w-full h-1 bg-gray-200 mx-2"></span>
          <div>
            <span className="border-2 rounded-full px-2 py-1 mr-2   ">2</span>
            Details
          </div>
          <span className="w-full h-1 bg-gray-200 mx-2"></span>
          <div>
            <span className="border-2 rounded-full px-2 py-1 mr-2 w-full ">
              3
            </span>
            Payment
          </div>
        </div>
        <Button className="bg-lime-700 hover:bg-lime-600 text-white shadow-md">
          Rent it
        </Button>
      </div>
    </nav>
  );
}
