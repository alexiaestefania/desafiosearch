import dayjs from "dayjs";

export function CreatedDate(ISO: string): string {
  const date = dayjs(ISO);
  const formatDate = `Criado em ${date.format("DD MMM YYYY")}`;
  return formatDate;
}
