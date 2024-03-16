import { ethers } from "ethers";

export const readOnlyProvider = new ethers.JsonRpcProvider(
  import.meta.env.VITE_rpc_url
);

export const getProvider = (provider) => new ethers.BrowserProvider(provider);
