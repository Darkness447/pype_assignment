"use client";
import { logos } from "@/lib/data";
import Image from "next/image";
import Marquee from "react-fast-marquee";

const CompanyLogoSection = () => {
  return (
    <div className="mb-12 flex flex-col gap-10">
      <h3 className="text-center text-gray-500">
        Helping individuals and teams at the world's best companies
      </h3>
      <div className="max-w-[80%] mx-auto relative overflow-hidden">
        <div className="absolute inset-0 z-10 pointer-events-none">
          <div className="absolute top-0 left-0 h-full w-10 bg-gradient-to-r from-white to-transparent" />
          <div className="absolute top-0 right-0 h-full w-10 bg-gradient-to-l from-white to-transparent" />
        </div>

        <Marquee className="relative z-0">
          <div className="flex gap-14">
            {logos.map((item, index) => {
              return (
                <Image
                  src={item.url}
                  height={130}
                  width={130}
                  alt={item.name}
                  key={item.name + index}
                />
              );
            })}
            {logos.map((item, index) => {
              return (
                <Image
                  src={item.url}
                  height={130}
                  width={130}
                  alt={item.name}
                  key={item.name + index}
                />
              );
            })}
          </div>
        </Marquee>
      </div>
    </div>
  );
};

export default CompanyLogoSection;
