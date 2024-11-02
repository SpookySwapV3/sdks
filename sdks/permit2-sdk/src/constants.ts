import { BigNumber } from '@ethersproject/bignumber'

// @deprecated please use permit2Address(chainId: number)
export const PERMIT2_ADDRESS = '0x000000000022D473030F116dDEE9F6B43aC78BA3'
export const BTT_PERMIT2_ADDRESS = '0x41846bd0E41dD42D80d00E99212040C871F40CB0'
export const FTM_PERMIT2_ADDRESS = '0x838c010F57889195C88f2097488e49B7ad04EcB1'
export const ZEN_PERMIT2_ADDRESS = '0xd119eF12fdC22756c8Ce4F03E463607742e3A59f'
export const BERA_TESTNET_PERMIT2_ADDRESS = '0x6AB0CA9c94FDE313a3A1d34A8247ae6065Bd2E73'
export const SONIC_TESTNET_PERMIT2_ADDRESS = '0xc67ED70B32D14EcDdb7d279b9A8D50d00aBD171e'
export const GOAT_TESTNET_PERMIT2_ADDRESS = '0x7928a2c48754501f3a8064765ECaE541daE5c3E6'

export function permit2Address(chainId?: number): string {
  switch (chainId) {
    case 324:
      return '0x0000000000225e31D15943971F47aD3022F714Fa'
    case 199: // btt
      return BTT_PERMIT2_ADDRESS
    case 7332:
      return ZEN_PERMIT2_ADDRESS
    case 250:
      return FTM_PERMIT2_ADDRESS
    case 80084:
      return BERA_TESTNET_PERMIT2_ADDRESS
    case 64165:
      return SONIC_TESTNET_PERMIT2_ADDRESS
    case 48815:
      return GOAT_TESTNET_PERMIT2_ADDRESS
    default:
      return PERMIT2_ADDRESS
  }
}

export const MaxUint48 = BigNumber.from('0xffffffffffff')
export const MaxUint160 = BigNumber.from('0xffffffffffffffffffffffffffffffffffffffff')
export const MaxUint256 = BigNumber.from('0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff')

// alias max types for their usages
// allowance transfer types
export const MaxAllowanceTransferAmount = MaxUint160
export const MaxAllowanceExpiration = MaxUint48
export const MaxOrderedNonce = MaxUint48

// signature transfer types
export const MaxSignatureTransferAmount = MaxUint256
export const MaxUnorderedNonce = MaxUint256
export const MaxSigDeadline = MaxUint256

export const InstantExpiration: BigNumber = BigNumber.from(0)
