export interface UserProfile {
  name: string;

  gender: 'M' | 'F';
  birthdate: string;
  dni: number;
  profilePictureUrl: string;
  subscribersPrice: number;
  subsOn: boolean;
  tipsOn: boolean;
}
