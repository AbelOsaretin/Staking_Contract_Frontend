import { useCallback } from "react";
import { isSupportedChian } from "../utils/index.js";
import { getProvider } from "../constants/providers";
import {
  useWeb3ModalAccount,
  useWeb3ModalProvider,
} from "@web3modal/ethers/react";
import {
  getStakingContract,
  getRewardTokenContract,
} from "../constants/contracts";

const useCreatePool = (rewardRate) => {
  const { chainId } = useWeb3ModalAccount();
  console.log(chainId);
  const { walletProvider } = useWeb3ModalProvider();
  // console.log(walletProvider);
  return useCallback(async () => {
    if (!isSupportedChian(chainId)) return console.error("Wrong network");
    const readWriteProvider = getProvider(walletProvider);
    const signer = await readWriteProvider.getSigner();
    console.log(signer);

    const RewardTokenContract = getRewardTokenContract(signer);
    console.log(RewardTokenContract);
    const StakeingContract = getStakingContract(signer);

    // try {
    //   //   const estimatedGas = await RewardTokenContract.approve.estimateGas();
    //   console.log("Token Aproval");
    //   const approveToken = await RewardTokenContract.approve(
    //     import.meta.env.VITE_staking_contract_address,
    //     BigInt(100000000000000000000)
    //   );

    //   console.log(approveToken);

    //   const receipt = await approveToken.wait();

    //   console.log("Token Approved", approveToken);

    //   console.log("Approve Token Recipt", receipt);

    //   if (receipt.status) {
    //     return console.log("Approval successfull!");
    //   }

    //   console.log("Approval Failed");
    // } catch (error) {
    //   console.log(error);
    // }

    try {
      const estimatedGas = await StakeingContract.createPool.estimateGas(100);
      console.log("Creating Pool");
      const createPool = await StakeingContract.createPool(rewardRate, {
        gasLimit: estimatedGas,
      });

      console.log(createPool);

      const receipt = await createPool.wait();

      console.log("Pool Creation", createPool);

      console.log("Pool Creation Recipt", receipt);

      if (receipt.status) {
        return console.log("Pool Creation successfull!");
      }

      console.log("Pool Creation Failed");
    } catch (error) {
      console.log(error);
    }
  }, [rewardRate, chainId, walletProvider]);
};

export default useCreatePool;
