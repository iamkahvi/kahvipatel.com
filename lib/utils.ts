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
