import moment from "moment";

export function getDateFormats(
  date: string | number,
  formatOverride?: string
): {
  year: string;
  displayDate: string;
  displayDateSmall: string;
} {
  const momentDate = moment(date);

  const year = momentDate.format("YYYY");
  const displayDate = momentDate.format(formatOverride || "MMMM Do, YYYY");
  const displayDateSmall = momentDate.format("MMM D");

  return {
    year,
    displayDate,
    displayDateSmall,
  };
}

export const CURR_YEAR_STRING = new Date().getFullYear().toString();

export const yearMap = (year: string): string => {
  switch (year) {
    case CURR_YEAR_STRING:
      return "this year";
    case "2017":
      return "possibly in 2017";
    case "2016":
      return "possibly in 2016";
    default:
      return year;
  }
};
