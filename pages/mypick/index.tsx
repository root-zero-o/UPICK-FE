import { GetServerSideProps } from "next";
import TemplateMyPick from "../../src/template/MyPick/TemplateMyPick";

// interface IProps {
//   queryResult:
// }

// const MyPick = ({queryResult}) => {
const MyPick = () => {
  return <TemplateMyPick></TemplateMyPick>;
};

export default MyPick;

// export const getSeverSideProps:GetServerSideProps = async (context) => {
//   return {
//     // props: {queryResult}
//   }
// }
