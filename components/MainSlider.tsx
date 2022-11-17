import { FC } from "react";
import SwiperCore, { Navigation, Scrollbar } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

interface IProps {
  cardList: any;
}
const MainSlider: FC<IProps> = ({ cardList }) => {
  SwiperCore.use([Navigation, Scrollbar]);

  return (
    <Swiper>
      {cardList.map((card: React.ReactNode, index: number) => (
        <SwiperSlide key={index}>{card}</SwiperSlide>
      ))}
    </Swiper>
  );
};

export default MainSlider;
