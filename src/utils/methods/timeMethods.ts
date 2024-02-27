import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import relativeTimePlugin from "dayjs/plugin/relativeTime";
import timezone from "dayjs/plugin/timezone";

export const getRelativeTime = (givenDate: string, locale?: string) => {
  dayjs.extend(relativeTimePlugin);
  dayjs.extend(utc);
  dayjs.extend(timezone);
  dayjs.locale(locale ?? "ne");

  const relativeTime = dayjs(givenDate).fromNow();

  return relativeTime;
};
