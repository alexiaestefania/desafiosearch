import dayjs from "dayjs";

export function UpdatedDate(ISO: string): string {
  const date = dayjs(ISO);
  const formatDate = `Atualizado em ${date.format("DD MMM YYYY")}`;
  return formatDate;
}
