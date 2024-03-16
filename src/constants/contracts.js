import { ethers } from "ethers";
import StakingAbi from "./StakingAbi.json";
import Erc20Abi from "./Erc20Abi.json";

export const getStakeTokenContract = (providerOrSigner) =>
  new ethers.Contract(
    import.meta.env.VITE_stake_token_contract_address,
    Erc20Abi,
    providerOrSigner
  );

export const getRewardTokenContract = (providerOrSigner) =>
  new ethers.Contract(
    import.meta.env.VITE_reward_token_contract_address,
    Erc20Abi,
    providerOrSigner
  );

export const getStakingContract = (providerOrSigner) =>
  new ethers.Contract(
    import.meta.env.VITE_staking_contract_address,
    StakingAbi,
    providerOrSigner
  );
