import dayjs from "dayjs";

export function joinedDate(ISO: string): string {
  const date = dayjs(ISO);
  const formatDate = `Ingressou em ${date.format("DD MMM YYYY")}`;
  return formatDate;
}
