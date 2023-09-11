import { useRouter } from "next/router";
import { FormatDateProps, formatDateFunc } from "../../utils/date";

export const FormatDate = (props: FormatDateProps) => {
  const { locale: localeFromRouter } = useRouter();

  if (!localeFromRouter) {
    return <>{formatDateFunc({ ...props })}</>;
  }

  return <>{formatDateFunc({ ...props, locale: localeFromRouter })}</>;
};
