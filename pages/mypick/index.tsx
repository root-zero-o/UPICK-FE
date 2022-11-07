import axios from "axios";
import { GetServerSideProps } from "next";
import { FC } from "react";
import TemplateMyPick from "../../src/template/MyPick/TemplateMyPick";

interface IProps {
  result: any;
}

const MyPick: FC<IProps> = () => {
  // console.log("hello");
  // console.log(result);
  // console.log(process.env.NEXT_PUBLIC_SERVER);
  return <TemplateMyPick></TemplateMyPick>;
};

export default MyPick;

// export const getServerSideProps: GetServerSideProps = async () => {
//   try {
//     const result = await axios({
//       method: "GET",
//       url: `${process.env.NEXT_PUBLIC_SERVER}/customers/my-pick/details`,
//       headers: {
//         Authorization: `BEARER eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJhYmNkMTJAZ21haWwuY29tIiwicm9sZSI6ImN1c3RvbWVyIiwiaWF0IjoxNjY3Mzk1ODkyLCJleHAiOjI2Njc0MDY2OTJ9.J7Vv2WeXjSiwOHZQdWX3QdgpuzX1yl8GethTmH8US2g`,
//       },
//     });
//     return {
//       props: { result: result?.data },
//     };
//   } catch (error) {
//     console.log(error);
//     return { notFound: true };
//   }
// };
