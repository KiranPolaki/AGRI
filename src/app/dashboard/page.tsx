import { Button } from "@/components/ui/button";
import Categories from "./components/Categories";
import Search from "./components/Search";
import { Location } from "./components/Location";
import { useScroll } from "framer-motion";
import { SessionProvider, useSession } from "next-auth/react";
import SigIn from "@/components/SignIn";
import DashboardNavBar from "./components/DashboardNavBar";
// import { Card } from "@/components/ui/card";

export default function Dashboard() {
  return (
    <SessionProvider>
      <div className="w-full">
        <div>
          {/* Navbar */}
          <DashboardNavBar />
          <div className="w-full flex items-center justify-center p-2 border-b-2 ">
            {/* Catergories */}
            <Categories />
          </div>
          <div>
            <div>
              <h3 className="text-2xl font-medium">Rent Your Device Now</h3>
              <div className="flex gap-5">
                <div>Sell</div>
                <div>Sell</div>
                <div>Sell</div>
                <div>Sell</div>
                <div>Sell</div>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-medium">Rent Equipment</h3>
              <div className="flex">
                <div></div>
              </div>
            </div>
            <div></div>
            <div></div>
          </div>
        </div>
      </div>
    </SessionProvider>
  );
}
