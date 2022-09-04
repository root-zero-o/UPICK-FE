import Layout from "components/Layout";
import JjimTab from "components/mypick/JjimTab";
import JjimMedCard from "components/mypick/JjimMedCard";
import JjimFooter from "components/mypick/JjimFooter";
const TemplateJjim = () => {
  return (
    <Layout home={false} title="" isWhite={false} icon={false}>
      <div className="w-full flex justify-center box-border border-b-[1px] border-coolgray3">
        <div className="w-[80%] flex justify-between">
          <JjimTab title="찜 건기식(6)" link="/mypick/med" active={true} />
          <JjimTab title="찜 구독제(2)" link="/mypick/sub" active={false} />
          <JjimTab title="찜 약사(4)" link="/mypick/phar" active={false} />
        </div>
      </div>
      <div className="w-full flex justify-center">
        <div className="w-[90%] flex justify-between flex-col">
          <JjimMedCard />
          <JjimMedCard />
          <JjimMedCard />
        </div>
      </div>
      <JjimFooter />
    </Layout>
  );
};

export default TemplateJjim;
