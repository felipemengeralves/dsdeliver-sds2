import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import "dayjs/locale/pt-br";
dayjs.locale("pt-br");
dayjs.extend(relativeTime);

export function dateFromNow(date: string) {
  return dayjs(date).fromNow();
}

export function formatPrice(price: number) {
  const formatter = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
    minimumFractionDigits: 2,
  });
  return formatter.format(price);
}
