import useSWR from "swr"
import { getWeeklyDayDatas } from "../services/graphql"

export default function useDayDatas() {
    const { data } = useSWR('dayDatas', getWeeklyDayDatas)
    return data
}
