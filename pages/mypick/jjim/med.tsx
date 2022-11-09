import axios from "axios";
import { useEffect, useState } from "react";
import TemplateJjim from "src/template/MyPick/TemplateJjim";
import { TypeLikeMed } from "src/types/MyPickData";

export default function jjim() {
  // const [jjimMed, setJjimMed] = useState<TypeLikeMed[]>([]);
  // const response = async () => {
  //   try {
  //     const result = await axios({
  //       method: "GET",
  //       url: `${process.env.NEXT_PUBLIC_SERVER}/customers/my-pick/like/merchandises`,
  //       headers: {
  //         Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJhYmNkMTJAZ21haWwuY29tIiwicm9sZSI6ImN1c3RvbWVyIiwiaWF0IjoxNjY3Mzk1ODkyLCJleHAiOjI2Njc0MDY2OTJ9.J7Vv2WeXjSiwOHZQdWX3QdgpuzX1yl8GethTmH8US2g`,
  //       },
  //     });
  //     console.log(result?.data?.data);
  //     setJjimMed(result?.data?.data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // useEffect(() => {
  //   response();
  // }, []);

  return <TemplateJjim type={"med"}></TemplateJjim>;
}
