import React from "react";
import Image from "next/image";
import pharmacist from "../assets/images/icons/pharmacist.svg";
import pharmacistBlue from "../assets/images/icons/pharmacistBlue.svg";
import people from "../assets/images/icons/people.svg";
import peopleBlue from "../assets/images/icons/peopleBlue.svg";
import pharmacy from "../assets/images/icons/pharmacy.svg";
import pharmacyBlue from "../assets/images/icons/phamacyBlue.svg";
import myPick from "../assets/images/icons/myPick.svg";
import myPickBlue from "../assets/images/icons/myPickBlue.svg";

const NavBar = ({ location }: { location: string }) => {
  return (
    <div className="w-full h-[60px] sticky bottom-[0px] flex justify-evenly items-center bg-lightGray z-40 pt-1">
      {location === "pharmacistPick" ? (
        <div className="flex flex-col items-center text-skyblue">
          <Image alt="" src={pharmacistBlue} />
          <span className="text-[8px]  font-sdg-m mt-[0px]">약사픽</span>
        </div>
      ) : (
        <div className="flex flex-col items-center">
          <Image alt="" src={pharmacist} />
          <span className="text-[8px] text-gray font-sdg-m mt-[5px]">
            약사픽
          </span>
        </div>
      )}
      {location === "peoplePick" ? (
        <div className="flex flex-col items-center text-skyblue">
          <Image alt="" src={peopleBlue} />
          <span className="text-[8px]  font-sdg-m mt-[-3px]">대중픽</span>
        </div>
      ) : (
        <div className="flex flex-col items-center ">
          <Image alt="" src={people} />
          <span className="text-[8px] text-gray font-sdg-m mt-[5px]">
            대중픽
          </span>
        </div>
      )}
      {location === "neighborhood" ? (
        <div className="flex flex-col items-center">
          <Image alt="" src={pharmacyBlue} />
          <span className="text-[8px] text-skyblue font-sdg-m mt-[0px]">
            울동네약사
          </span>
        </div>
      ) : (
        <div className="flex flex-col items-center">
          <Image alt="" src={pharmacy} />
          <span className="text-[8px] text-gray font-sdg-m mt-[5px]">
            울동네약사
          </span>
        </div>
      )}
      {location === "myPick" ? (
        <div className="flex flex-col items-center">
          <Image alt="" src={myPickBlue} />
          <span className="text-[8px] text-skyblue font-sdg-m mt-[1px]">
            마이픽
          </span>
        </div>
      ) : (
        <div className="flex flex-col items-center">
          <Image alt="" src={myPick} />
          <span className="text-[8px] text-gray font-sdg-m mt-[5px]">
            마이픽
          </span>
        </div>
      )}
    </div>
  );
};

export default NavBar;
