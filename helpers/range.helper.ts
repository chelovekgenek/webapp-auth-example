import { Analytics, AnalyticsQuery } from "@commerce-club/types"
import moment from "moment"

export const range = {
  today: (): AnalyticsQuery => ({
    start: moment().startOf("day").toDate(),
    end: moment().endOf("day").toDate(),
    groupby: Analytics.PointGroup.HOUR,
  }),
  yesterday: (): AnalyticsQuery => ({
    start: moment().subtract(1, "day").startOf("day").toDate(),
    end: moment().subtract(1, "day").endOf("day").toDate(),
    groupby: Analytics.PointGroup.HOUR,
  }),
  last7Days: (): AnalyticsQuery => ({
    start: moment().subtract(1, "week").startOf("day").toDate(),
    end: moment().endOf("day").toDate(),
    groupby: Analytics.PointGroup.DAY,
  }),
  last30Days: (): AnalyticsQuery => ({
    start: moment().subtract(30, "days").startOf("day").toDate(),
    end: moment().endOf("day").toDate(),
    groupby: Analytics.PointGroup.DAY,
  }),
  last90Days: (): AnalyticsQuery => ({
    start: moment().subtract(90, "days").startOf("day").toDate(),
    end: moment().endOf("day").toDate(),
    groupby: Analytics.PointGroup.WEEK,
  }),
  lastMonth: (): AnalyticsQuery => ({
    start: moment().subtract(1, "month").startOf("month").toDate(),
    end: moment().subtract(1, "month").endOf("month").toDate(),
    groupby: Analytics.PointGroup.DAY,
  }),
  weekToDate: (): AnalyticsQuery => ({
    start: moment().startOf("week").toDate(),
    end: moment().endOf("day").toDate(),
    groupby: Analytics.PointGroup.DAY,
  }),
  monthToDate: (): AnalyticsQuery => ({
    start: moment().startOf("month").toDate(),
    end: moment().endOf("day").toDate(),
    groupby: Analytics.PointGroup.DAY,
  }),
  yearToDate: (): AnalyticsQuery => ({
    start: moment().startOf("year").toDate(),
    end: moment().endOf("day").toDate(),
    groupby: Analytics.PointGroup.WEEK,
  }),
}

export type RangeKey = keyof typeof range
export const RangeKeys = Object.keys(range) as RangeKey[]

export const isRangeKey = (key: string): boolean => typeof key === "string" && RangeKeys.includes(key as RangeKey)
