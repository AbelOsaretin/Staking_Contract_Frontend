import { useCallback } from "react";
import { ethers } from "ethers";
import { isSupportedChian } from "../utils";
import { getProvider } from "../constants/providers";
import {
  useWeb3ModalAccount,
  useWeb3ModalProvider,
} from "@web3modal/ethers/react";
// import contractAbi from "../constants/ABIs/contractAbi.json";
// import { toast } from "react-toastify";

import {
  getStakingContract,
  getRewardTokenContract,
} from "../constants/contracts";

const useUnstake = () => {
  const { chainId } = useWeb3ModalAccount();
  const { walletProvider } = useWeb3ModalProvider();

  return useCallback(
    async (poolID) => {
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
        const unstakeTx = await StakeingContract.unstake(poolID);
        const receipt = await unstakeTx.wait();

        console.log("receipt: ", receipt);

        if (receipt.status) {
          return console.log("Stake successfull!");
        }

        console.log("Unstake failed");
      } catch (err) {
        console.error(err);
        console.log("An error occurred while unstaking");
      }
    },
    [chainId, walletProvider]
  );
};

export default useUnstake;
