import useSWR from "swr"
import { getFusd } from "../services/graphql"

export default function useFusd() {
    const { data } = useSWR('fusd', getFusd)
    return data
}
