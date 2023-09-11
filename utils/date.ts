import { FormatDateProps } from "../components/shared/types";

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
