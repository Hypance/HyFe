export interface IUser {
    id: string;
    username: string;
    email: string;
    role: number;
    lastEnter: string;
    createdReviews: string[];
    likedReviews: string[];
    ratedArtItems: string[];
  }
  
  export interface IUserFull extends IUser {
    _id: string;
    password: string;
    status: string;
    enteredBySocial: boolean;
    fromGoogle: boolean;
    fromTwitter: boolean;
  }
  