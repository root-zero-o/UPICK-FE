import BlurBtn from "components/ui/BlurBtn";
import fullHeart from "../../../assets/images/icons/fullHeart.svg";
import chat from "../../../assets/images/icons/chat.svg";
import Router from "next/router";
const TabMenu = () => {
  const handleTabMenu = (menu: number) => {
    switch (menu) {
      case 1:
        return;
      case 2:
        Router.push("/pickup");
        return;
      case 3:
        Router.push("/chat");
        return;
      default:
        return;
    }
  };

  return (
    <>
      <div className="w-full flex flex-col space-y-4 mt-6 z-40 pb-4">
        <div className="flex w-full justify-evenly">
          <BlurBtn
            src={fullHeart}
            func={() => {
              handleTabMenu(1);
            }}
            text="찜"
          />
          <BlurBtn
            src={chat}
            func={() => {
              handleTabMenu(2);
            }}
            text="픽업"
          />
          <BlurBtn
            src={chat}
            func={() => {
              handleTabMenu(3);
            }}
            text="상담내역"
          />
        </div>
      </div>
    </>
  );
};

export default TabMenu;
