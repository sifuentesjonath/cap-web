import customAxios from "@/service/customAxios";

export const getAllPayments = ({ titleholders = null }) => {
	if (titleholders) return customAxios.get(`/payments/all?titleholders=${titleholders}`);
	else return customAxios.get(`/payments/all`);
};

export const getPaymentsGraph = view => {
  return customAxios.get(`/payments/graph?view=${view}`);
};