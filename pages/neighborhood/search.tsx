import HeaderBG from "components/HeaderBG";
import Layout from "components/Layout";
import NavBar from "components/NavBar";

const search = () => {
  return (
    <Layout home={false} title="" isWhite={true} icon={true}>
      <HeaderBG
        fullWidth="100%"
        fullHeight="350px"
        fullTop="-280px"
        innerWidth="504px"
        innerHeight="504px"
        innerTop="20.21%"
        innerLeft="-30%"
        outerWidth="504px"
        outerHeight="504px"
        outerTop="-28.57%"
        outerLeft="-31.73%"
        showInnerDIv={true}
        showOuterDiv={false}
        rot={150}
        bgFlag={false}
      />
      <input
        type="text"
        placeholder="약사명을 입력하세요"
        className="w-[300px] h-[44px] bg-coolgray1 bg-opacity-0 border-[1px] border-[#E4E5E6] text-white focus:outline-none text-sm font-sdg-m  absolute top-0 left-[60px] rounded-full  backdrop-blur px-4 bg-searchInput placeholder-white z-50"
      />
      <div className="mx-auto py-10 flex flex-col items-center">
        <span className="text-lg font-bold text-darkblue2">울동네약사</span>
        <span className="text-sm text-coolgray4 mt-2">
          검색한 약사/약국은 우리동네 기준으로 노출이 됩니다.
        </span>
      </div>
      <div className="h-[50vh] flex items-center justify-center">
        <span className="text-lg text-coolgray4">
          검색 결과를 찾을 수 없어요
        </span>
      </div>
      <NavBar location="neighborhood" />
    </Layout>
  );
};

export default search;
