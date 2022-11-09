type MerchandiseToPostingDataType = {
  id: number;
  companyId: number;
  name: string;
  certification: boolean;
  createdAt: string;
  description: string;
  rating: string;
  updatedAt: string;
  merchandiseHowToConsumeId: number;
};

type PostingToAgeRangeDataType = {
  ageRange: {
    name: string;
  };
};

type PostingToConsiderDataType = {
  consider: {
    name: string;
  };
};

type PostingToIngredientDataType = {
  ingredient: {
    name: string;
  };
};

type PharmacistDataType = {
  userName: string;
  pharmacyName: string;
  pharmacyAddress: string;
  Image: {
    url: string;
  };
};

export type PostingDataType = {
  MerchandiseToPosting: MerchandiseToPostingDataType[];
  PostingToAgeRange: PostingToAgeRangeDataType[];
  PostingToConsider: PostingToConsiderDataType[];
  PostingToIngredient: PostingToIngredientDataType[];
  content: string;
  createdAt: string;
  gender: string;
  id: number;
  pharmacist: PharmacistDataType[];
  postingLikes: string[];
  title: string;
  updatedAt: string;
};

export type initialStateType = {
  postings: PostingDataType[];
  loading: boolean;
  error: boolean;
};
