import { Button } from "@/components/ui/button";
import { CardContent, Card } from "@/components/ui/card";
import { locations } from "@/constants";
import Link from "next/link";

export function Locations() {
  return (
    <div className="bg-white p-8">
      <div className="max-w-7xl mx-auto">
        <p className="mt-4 text-gray-600 flex justify-center">
          With over a decade of experience We make it REAL
        </p>
        <h2 className="flex justify-center text-3xl font-bold text-gray-900">
          Our Global Presence
        </h2>

        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {locations.map((location, index) => (
            <div key={index} className="flex flex-col mb-2 p-3">
              <Card className="bg-[#A7F3D0] p-5">
                <CardContent>
                  <h3 className="mt-4 text-lg font-semibold text-gray-900 text-center">
                    {location.Location_Title}
                  </h3>
                  <h3 className="mt-4 text-3xl font-semibold text-gray-900">
                    {location.city}
                  </h3>
                  <p className="mt-2 text-sm text-gray-600">
                    {location.country}
                  </p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
