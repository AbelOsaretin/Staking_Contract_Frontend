// import { useCallback } from "react";
// import { isSupportedChian } from "../utils/index.js";
// import { readOnlyProvider } from "../constants/providers";
// import {
//   useWeb3ModalAccount,
//   useWeb3ModalProvider,
// } from "@web3modal/ethers/react";
// import { getStakingContract } from "../constants/contracts";

// const useStake = (poolId, address) => {
//   const { chainId } = useWeb3ModalAccount();
//   const { walletProvider } = useWeb3ModalProvider();

//   return useCallback(async () => {
//     if (!isSupportedChian(chainId)) return console.error("Wrong network");
//     const readProvider = readOnlyProvider();

//     const StakingContract = getStakingContract(readProvider);

//     try {
//       //   const estimatedGas = await StakeingContract.createPool.estimateGas();
//       const transaction = await StakingContract.getUserClaimableReward(
//         poolId,
//         address
//       );
//       console.log("transaction: ", transaction);
//       const receipt = await transaction.wait();

//       console.log("receipt: ", receipt);
//     } catch (error) {
//       console.log(error);
//     }
//   }, [poolId, address, chainId, walletProvider]);
// };

// export default useStake;

import { getStakingContract } from "../constants/contracts";
import { useEffect, useState } from "react";
// import { getProposalContract } from "../constants/contracts";
import { readOnlyProvider } from "../constants/providers";
// import { decodeBytes32String } from "ethers";

const useViewRewards = (poolId, address) => {
  const [viewReward, setViewReward] = useState({
    loading: true,
    data: [],
  });

  useEffect(() => {
    const contract = getStakingContract(readOnlyProvider);
    contract
      .getUserClaimableReward(poolId, address)
      .then((res) => {
        const converted = res.map((item) => ({
          amount: item._reward,
        }));
        console.log("x", converted);
        setViewReward({
          loading: false,
          data: converted,
        });
      })
      .catch((err) => {
        console.error("Error Fetching Proposals", err);
        setViewReward((prev) => ({ ...prev, loading: false }));
      });
  }, []);

  return viewReward;
};

export default useViewRewards;
