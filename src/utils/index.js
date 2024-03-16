import { SUPPORTED_CHAIN } from "../connection/walletConnect.js";

export const isSupportedChian = (chainId) =>
  Number(chainId) === SUPPORTED_CHAIN;
