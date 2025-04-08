export interface IReview {
    _id: string;
    review: string;
    rating: number;
    user: {
      _id: string;
      name: string;
    };
    product: string;
    createdAt: string;
    updatedAt: string;
  }
  
  