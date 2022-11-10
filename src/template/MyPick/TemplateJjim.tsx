import Layout from "components/Layout";
import JjimTab from "components/mypick/JjimTab";
import JjimMedCard from "components/mypick/JjimMedCard";
import { FC, useEffect, useState } from "react";
import axios from "axios";
import JjimSubCard from "components/mypick/JjimSubCard";
import JjimPharCard from "components/mypick/JjimPharCard";
import { TypeLikeMed, TypesLikePhar, TypesLikeSub } from "src/types/MyPickData";
import { useRouter } from "next/router";

interface IProps {
  type: string;
}
const TemplateJjim: FC<IProps> = ({ type }) => {
  const [jjimMed, setJjimMed] = useState<TypeLikeMed[]>([]);

  const [jjimPhar, setJjimPhar] = useState<TypesLikePhar[]>([]);

  const [jjimSub, setJjimSub] = useState<TypesLikeSub[]>([]);
  const responseSub = async () => {
    try {
      const result = await axios({
        method: "GET",
        url: `${process.env.NEXT_PUBLIC_SERVER}/customers/my-pick/like/postings`,
        headers: {
          Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJhYmNkMTJAZ21haWwuY29tIiwicm9sZSI6ImN1c3RvbWVyIiwiaWF0IjoxNjY3Mzk1ODkyLCJleHAiOjI2Njc0MDY2OTJ9.J7Vv2WeXjSiwOHZQdWX3QdgpuzX1yl8GethTmH8US2g`,
        },
      });
      setJjimSub(result?.data?.data);
    } catch (error) {
      console.log(error);
    }
  };
  const responsePhar = async () => {
    try {
      const result = await axios({
        method: "GET",
        url: `${process.env.NEXT_PUBLIC_SERVER}/customers/my-pick/like/pharmacists`,
        headers: {
          Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJhYmNkMTJAZ21haWwuY29tIiwicm9sZSI6ImN1c3RvbWVyIiwiaWF0IjoxNjY3Mzk1ODkyLCJleHAiOjI2Njc0MDY2OTJ9.J7Vv2WeXjSiwOHZQdWX3QdgpuzX1yl8GethTmH8US2g`,
        },
      });
      setJjimPhar(result?.data?.data);
    } catch (error) {
      console.log(error);
    }
  };

  const response = async () => {
    try {
      const result = await axios({
        method: "GET",
        url: `${process.env.NEXT_PUBLIC_SERVER}/customers/my-pick/like/merchandises`,
        headers: {
          Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJhYmNkMTJAZ21haWwuY29tIiwicm9sZSI6ImN1c3RvbWVyIiwiaWF0IjoxNjY3Mzk1ODkyLCJleHAiOjI2Njc0MDY2OTJ9.J7Vv2WeXjSiwOHZQdWX3QdgpuzX1yl8GethTmH8US2g`,
        },
      });
      setJjimMed(result?.data?.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (type === "med") {
      response();
    } else if (type === "phar") {
      responsePhar();
    } else if (type === "sub") {
      responseSub();
    }
  }, []);
  const router = useRouter();

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
            jjimMed &&
            jjimMed?.map((value, index) => {
              return (
                <>
                  <JjimMedCard name={value.name} src="asdf" />
                </>
              );
            })}
          {type === "phar" &&
            jjimPhar &&
            jjimPhar?.map((value, index) => {
              return (
                <>
                  <div
                    className="w-[100%] flex-col flex item-center bg-red cursor-pointer"
                    onClick={() =>
                      router.push(`/neighborhood/detail/${value.id}`)
                    }
                  >
                    <JjimSubCard
                      name={value.userName}
                      at={value.pharmacyName}
                      src={value.Image[0].url}
                    />
                    <div className="border-[1px] border-coolgray2 w-[100%] rounded-full" />
                  </div>
                </>
              );
            })}
          {type === "sub" &&
            jjimSub &&
            jjimSub?.map((value, index) => {
              return (
                <>
                  <JjimPharCard />
                </>
              );
            })}
        </div>
      </div>
    </Layout>
  );
};

export default TemplateJjim;
