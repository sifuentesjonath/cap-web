import customAxios from "@/service/customAxios";
import { UserProfileType } from "@/service/apiTypes"

const updateProfile = async (data) => {
  return await customAxios.patch<UserProfileType>(`/profile`, data);
};

export const updateStep = data => {
  return customAxios.post<UserProfileType>(`/profile/step`, data);
};

export default updateProfile;