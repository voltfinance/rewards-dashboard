import useSWR from "swr"
import { getBassets } from "../services/graphql"

export default function useBassets() {
    const { data } = useSWR('bassets', getBassets)
    return data
}