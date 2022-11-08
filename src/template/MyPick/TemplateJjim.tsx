import Layout from "components/Layout";
import JjimTab from "components/mypick/JjimTab";
import JjimMedCard from "components/mypick/JjimMedCard";
import JjimFooter from "components/mypick/JjimFooter";
import fullHeart from "../../../assets/images/icons/fullHeart.svg";
import { FC, useEffect, useState } from "react";
import axios from "axios";
import JjimSubCard from "components/mypick/JjimSubCard";
import JjimPharCard from "components/mypick/JjimPharCard";

interface IProps {
  type: string;
}
const TemplateJjim: FC<IProps> = ({ type }) => {
  const [jjimData, setJjimData] = useState<any[]>([]);

  const response = async () => {
    try {
      const result = await axios({
        method: "GET",
        url: `${process.env.NEXT_PUBLIC_SERVER}/customers/my-pick/like/merchandises`,
        headers: {
          Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJhYmNkMTJAZ21haWwuY29tIiwicm9sZSI6ImN1c3RvbWVyIiwiaWF0IjoxNjY3Mzk1ODkyLCJleHAiOjI2Njc0MDY2OTJ9.J7Vv2WeXjSiwOHZQdWX3QdgpuzX1yl8GethTmH8US2g`,
        },
      });
      // console.log(result?.data?.data);
      setJjimData(result?.data?.data);
      // setMyPickData(result?.data?.data?._customer);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    response();
  }, []);

  const data = [
    "고려은단 비타민 C 1000mg 240정",
    "고려은단 비타민 C 1000mg 240정",
    "고려은단 비타민 C 1000mg 240정",
    "고려은단 비타민 C 1000mg 240정",
    "고려은단 비타민 C 1000mg 240정",
  ];
  return (
    <Layout home={false} title="" isWhite={false} icon={false} myPick>
      <div className="w-full flex justify-center box-border border-b-[1px] border-coolgray3">
        <div className="w-[80%] flex justify-between">
          <JjimTab
            title="영양제 찜"
            link="/mypick/jjim/med"
            active={type === "med"}
          />
          <JjimTab
            title="약사픽 찜"
            link="/mypick/jjim/sub"
            active={type === "sub"}
          />
          <JjimTab
            title="울동네약사 찜"
            link="/mypick/jjim/phar"
            active={type === "phar"}
          />
        </div>
      </div>
      <div className="w-full flex justify-center">
        <div className="w-[90%] flex justify-between flex-col">
          {type === "med" &&
            data.map((value, index) => {
              return (
                <>
                  <JjimMedCard src="asdf" />
                </>
              );
            })}
          {type === "phar" &&
            data.map((value, index) => {
              return (
                <>
                  <JjimPharCard />
                </>
              );
            })}
          {type === "sub" &&
            data.map((value, index) => {
              return (
                <>
                  <div className="w-[100%] flex-col flex item-center bg-red">
                    <JjimSubCard />
                    <div className="border-[1px] border-coolgray3 w-[100%] rounded-full" />
                  </div>
                </>
              );
            })}
        </div>
      </div>
    </Layout>
  );
};

export default TemplateJjim;
