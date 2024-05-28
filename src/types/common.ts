import { USER_ROLE } from "@/contants/role";
import { SvgIconTypeMap } from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";

export type IMeta = {
  page: number;
  limit: number;
  total: number;
};

export interface DrawerItem {
  title: string;
  path: string;
  parentPath?: string;
  icon?: OverridableComponent<SvgIconTypeMap<{}, "svg">> & { muiName: string };
  child?: DrawerItem[];
}

export type ResponseSuccessType = {
  data: any;
  meta?: IMeta;
};

export type IGenericErrorResponse = {
  statusCode: number;
  message: string;
  errorMessages: IGenericErrorMessage[];
};

export type IGenericErrorMessage = {
  path: string | number;
  message: string;
};

export type UserRole = keyof typeof USER_ROLE;

export type TUser = {
  id: string;
  name: string;
  username: string;
  email: string;
  status: string;
  bloodType: string;
  location: string;
  dateOfBirth: string;
  lastDonationDate: string;
  availability: boolean;
  createdAt: string;
  updatedAt: string;
  userProfile: UserProfile;
};

export type UserProfile = {
  id: string;
  userId: string;
  bio?: string;
  profilePicture?: string;
  dateOfBirth: string;
  lastDonationDate: string;
  createdAt: string;
  updatedAt: string;
};
