import { PickUpStatusEnum } from "./EnumPickUpStatus";

export type TypePickUpData = {
  pharmacy: string;
  pharmacyAddress: string;
  imageUrl: string;
  medicine: string;
  reservation: string;
  price: string;
  pickUpTime: string;
  status: PickUpStatusEnum;
};
