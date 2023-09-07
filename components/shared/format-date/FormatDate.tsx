import { useRouter } from "next/router";

interface FormatDateProps {
  date: number | Date | undefined;
  locale?: string;
}

export const formatDateFunc = ({ date, locale }: FormatDateProps) => {
  if (!date) return null;

  if (!locale) {
    return new Intl.DateTimeFormat("en-US", {
      dateStyle: "medium",
    }).format(new Date(date));
  }

  return new Intl.DateTimeFormat(locale, {
    dateStyle: "medium",
  }).format(new Date(date));
};

export const FormatDate = (props: FormatDateProps) => {
  const { locale: localeFromRouter } = useRouter();

  if (!localeFromRouter) {
    return <>{formatDateFunc({ ...props })}</>;
  }

  return <>{formatDateFunc({ ...props, locale: localeFromRouter })}</>;
};
