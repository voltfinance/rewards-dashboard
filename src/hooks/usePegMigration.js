import useSWR from "swr"
import { getPegMigration } from "../services/graphql"

export default function usePegMigration() {
    const { data } = useSWR('pegMigration', getPegMigration)
    return data
}
