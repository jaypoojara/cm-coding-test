import { useRouter } from "next/router";
import { formatDateFunc } from "../../utils/date";
import { FormatDateProps } from "./types";

export const FormatDate = (props: FormatDateProps) => {
  const { locale: localeFromRouter } = useRouter();

  if (!localeFromRouter) {
    return <>{formatDateFunc({ ...props })}</>;
  }

  return <>{formatDateFunc({ ...props, locale: localeFromRouter })}</>;
};
