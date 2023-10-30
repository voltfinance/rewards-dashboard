import { ethers } from "ethers"

const VOLT_FUSE_REWARDER = {
    pid: 0,
    name: 'VOLT/WFUSE',
    address: '0xb0237dc75a8ebb78ff9c2dbe35e7fe4c5cf483c2',
    alloc: 800
}

const VOLT_FUSD_REWARDER = {
    pid: 17,
    name: 'VOLT/FUSD',
    address: '0xdE35ba0bD4F5b3df3ba01F247b6ac9faE7cfdDF0',
    alloc: 600
}

const WBTC_WETH_REWARDER = {
    pid: 2,
    name: 'WBTC/WETH',
    address: '0x807f8a3d739192aff32f4f3be954d6ebe9571f13',
    alloc: 1700
}

const FUSD_BNB_REWARDER = {
    pid: 4,
    name: 'FUSD/BNB',
    address: '0xe914af75eb5d9f304a31e273b819ac71e12ebfdc',
    alloc: 1000
}

const WFUSE_BUSD_REWARDER = {
    pid: 6,
    name: 'WFUSE/BUSD',
    address: '0xcd800a9b7f666adda28c9ac685c3a132b45ee56c',
    alloc: 1200
}

const WFUSE_WETH_REWARDER = {
    pid: 7,
    name: 'WFUSE/WETH',
    address: '0x60ea721ecd6e1762b2766d99570b2b854297cbbf',
    alloc: 1100
}

const WFUSE_FUSD_REWARDER = {
    pid: 8,
    name: 'WFUSE/FUSD',
    address: '0x1aadb7d8061bd2e38b01a0d9aef5da4e0d4d1b5b',
    alloc: 1050
}

const xVOLT_REWARDER = {
    pid: 11,
    name: 'xVOLT',
    address: '0x83210721336f0c364610254f65a8f41232619dbe',
    alloc: 0
}

const STABLE_REWARDER = {
    pid: 13,
    name: 'STABLE',
    address: '0xc67a8f8f5ba90d94eadb0aaca25a467ff0079afc',
    alloc: 500
}

const WFUSE_GDOLLAR = {
    pid: 10,
    name: 'WFUSE/G$',
    address: '0x0000000000000000000000000000000000000000',
    alloc: 150
}

const WFUSE_BTZ = {
    pid: 15,
    name: 'WFUSE/BTZ',
    address: '0x0000000000000000000000000000000000000000',
    alloc: 150
}

const FUSD = {
    pid: 16,
    name: 'FUSD',
    address: '0x260Cb87F35Af9FcF6bfc82fA97A9B227F658eFFa',
    alloc: 0
}

export const REWARDERS = [
    VOLT_FUSE_REWARDER,
    VOLT_FUSD_REWARDER,
    WBTC_WETH_REWARDER,
    FUSD_BNB_REWARDER,
    WFUSE_BUSD_REWARDER,
    WFUSE_WETH_REWARDER,
    WFUSE_FUSD_REWARDER,
    xVOLT_REWARDER,
    STABLE_REWARDER,
    WFUSE_GDOLLAR,
    WFUSE_BTZ,
    FUSD
]

export const TOTAL_ALLOC = 8250

export const VOLT_PER_SEC = 19.5550975529

export const SECONDS_IN_MONTH = 2592000

export const MULTICALL_ADDRESS = '0x3CE6158b7278Bf6792e014FA7B4f3c6c46fe9410'

export const WFUSE_ADDRESS = '0x0BE9e53fd7EDaC9F859882AfdDa116645287C629'

export const FUSD_ADDRESS = '0xd0ce1b4a349c35e61af02f5971e71ac502441e49'

export const FUSD_MIGRATION_PEGSWAP = '0xd7ad6f7a420b89f34dbb78a1c17634599500a094'

const RPC_URL = 'https://fuse-mainnet.chainstacklabs.com'

export const provider = new ethers.providers.JsonRpcProvider(RPC_URL)
