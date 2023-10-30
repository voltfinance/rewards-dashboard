import { ApolloClient, InMemoryCache, gql } from '@apollo/client';
import { FUSD_ADDRESS, FUSD_MIGRATION_PEGSWAP } from '../constants'

export const client = new ApolloClient({
    uri: 'https://api.thegraph.com/subgraphs/name/voltfinance/rewarder',
    cache: new InMemoryCache()
})

export const fusdClient = new ApolloClient({
    uri: 'https://api.thegraph.com/subgraphs/name/voltfinance/fusd-subgraph',
    cache: new InMemoryCache()
})

export const pegClient = new ApolloClient({
    uri: 'https://api.thegraph.com/subgraphs/id/QmTzvcRSXhDseYa1MoSxSeAitJFDFY8bVdogMVtXo6iZSg',
    cache: new InMemoryCache()
})

export const GET_REWARDER = gql`
    query GetRewarder($id: String) {
        rewarder(id: $id) {
            id
            users {
                id
            }
        }
    }
`

export const getFusd = async () => {
    const result = await fusdClient.query({
        query: gql`
            {
                masset(id: "${FUSD_ADDRESS}") {
                    totalSupply {
                        exact
                    }
                }
            }
        `
    })

    return result.data?.masset
}

export const getPegMigration = async () => {
    const result = await pegClient.query({
        query: gql`
            {
                pegSwap(id: "${FUSD_MIGRATION_PEGSWAP}") {
                    migratedAmount
                }
            }
        `
    })

    return result.data?.pegSwap
}

export const getWeeklyDayDatas = async () => {
    const result = await fusdClient.query({
        query: gql`
            {
                massetDayDatas(first: 7, orderBy: id, orderDirection: desc) {
                    id
                    totalSupply
                    dailyMintAmount
                    dailyRedeemAmount
                    dailySwapAmount
                }
            }
        `
    })

    return result.data?.massetDayDatas
}

export const getBassets = async () => {
    const result = await fusdClient.query({
        query: gql`
            {
                masset(id: "${FUSD_ADDRESS}") {
                    basket {
                        bassets {
                            token {
                                name
                                symbol
                                decimals
                            }
                            vaultBalance {
                                exact
                            }
                        }
                    }
                }
            }
        `
    })

    return result.data?.masset?.basket?.bassets
}
