import React from "react";
import Image from "next/image";
import pharmacist from "../assets/images/icons/pharmacist.png";
import pharmacistBlue from "../assets/images/icons/pharmacistBlue.png";
import people from "../assets/images/icons/people.svg";
import peopleBlue from "../assets/images/icons/peopleBlue.svg";
import pharmacy from "../assets/images/icons/pharmacy.svg";
import pharmacyBlue from "../assets/images/icons/phamacyBlue.svg";
import myPick from "../assets/images/icons/myPick.svg";
import myPickBlue from "../assets/images/icons/myPickBlue.svg";
import Home from "../assets/images/icons/Home.svg";
import HomeBlue from "../assets/images/icons/homeBlue.svg";
import useClickRoute from "hooks/useClickRoute";

const NavBar = ({ location }: { location: string }) => {
  const onHomeLink = useClickRoute({ link: "/home" });
  const naver = useClickRoute({ link: "/neighborhood" });
  const onPeoplePickLink = useClickRoute({ link: "/peoplePick/gender" });
  const onPharm = useClickRoute({ link: "/article" });
  const myPicks = useClickRoute({ link: "/mypick" });
  return (
    <div className="w-full h-[60px] fixed bottom-0 max-w-[420px] flex justify-evenly items-center z-40 pt-1 bg-coolgray1 ">
      {location === "pharmacistPick" ? (
        <div
          onClick={onPharm}
          className="flex flex-col items-center text-blue1"
        >
          <Image alt="" src={pharmacistBlue} />
          <span className="text-[8px]">약사픽</span>
        </div>
      ) : (
        <div
          onClick={onPharm}
          className="flex flex-col items-center hover:cursor-pointer"
        >
          <Image alt="" src={pharmacist} />
          <span className="text-[8px] text-coolgray3 mt-[5px]">약사픽</span>
        </div>
      )}
      {location === "peoplePick" ? (
        <div
          className="flex flex-col items-center text-skyblue"
          onClick={onPeoplePickLink}
        >
          <Image alt="" src={peopleBlue} />
          <span className="text-[8px] mt-[-3px] text-blue1">대중픽</span>
        </div>
      ) : (
        <div
          className="flex flex-col items-center hover:cursor-pointer "
          onClick={onPeoplePickLink}
        >
          <Image alt="" src={people} />
          <span className="text-[8px] text-coolgray3 mt-[5px]">대중픽</span>
        </div>
      )}
      {location === "home" ? (
        <div
          className="flex flex-col items-center text-skyblue"
          onClick={onHomeLink}
        >
          <Image alt="" src={HomeBlue} className="shadow-2xl" />
          <span className="text-[8px] mt-[5px] text-blue1">홈</span>
        </div>
      ) : (
        <div
          className="flex flex-col items-center hover:cursor-pointer "
          onClick={onHomeLink}
        >
          <Image alt="" src={Home} />
          <span className="text-[8px] text-coolgray3 font-sdg-m mt-[5px]">
            홈
          </span>
        </div>
      )}
      {location === "neighborhood" ? (
        <div onClick={naver} className="flex flex-col items-center">
          <Image alt="" src={pharmacyBlue} />
          <span className="text-[8px] text-blue1 font-sdg-m mt-[0px]">
            울동네약사
          </span>
        </div>
      ) : (
        <div
          onClick={naver}
          className="flex flex-col items-center hover:cursor-pointer"
        >
          <Image alt="" src={pharmacy} />
          <span className="text-[8px] text-coolgray3 mt-[5px]">울동네약사</span>
        </div>
      )}
      {location === "myPick" ? (
        <div onClick={myPicks} className="flex flex-col items-center">
          <Image alt="" src={myPickBlue} />
          <span className="text-[8px] text-blue1 t-[1px]">마이픽</span>
        </div>
      ) : (
        <div
          onClick={myPicks}
          className="flex flex-col items-center hover:cursor-pointer"
        >
          <Image alt="" src={myPick} />
          <span className="text-[8px] text-coolgray3 mt-[5px]">마이픽</span>
        </div>
      )}
    </div>
  );
};

export default NavBar;
