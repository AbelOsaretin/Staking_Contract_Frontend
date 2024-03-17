import { useCallback } from "react";
import { isSupportedChian } from "../utils";
import { getProvider } from "../constants/providers";
import {
  useWeb3ModalAccount,
  useWeb3ModalProvider,
} from "@web3modal/ethers/react";

import {
  getStakingContract,
  getRewardTokenContract,
} from "../constants/contracts";

const useUnstake = (poolID) => {
  const { chainId } = useWeb3ModalAccount();
  const { walletProvider } = useWeb3ModalProvider();

  return useCallback(async () => {
    if (!poolID) {
      console.log("Invalid Pool ID");
      return;
    }

    if (!isSupportedChian(chainId)) {
      console.log("Wrong Network");
      return;
    }

    const readWriteProvider = getProvider(walletProvider);
    const signer = await readWriteProvider.getSigner();
    const StakeingContract = getStakingContract(signer);

    try {
      console.log("Unstaking From Pool ", poolID);
      const unstakeTx = await StakeingContract.unstake(poolID);
      const receipt = await unstakeTx.wait();

      console.log("receipt: ", receipt);

      if (receipt.status) {
        return console.log("UnStake successfull!");
      }

      console.log("Unstake failed");
    } catch (err) {
      console.error(err);
      console.log("An error occurred while unstaking");
    }
  }, [chainId, walletProvider]);
};

export default useUnstake;
