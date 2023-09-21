import customAxios from "@/service/customAxios";

export const createPayment = data => {
  return customAxios.post(`/payments`, data).then(res => res.data);
};