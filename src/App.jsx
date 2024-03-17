import "./App.css";
import Header from "./componets/Header";
import { configureWeb3Modal } from "./connection/walletConnect";
import "@radix-ui/themes/styles.css";
import useCreatePool from "./hooks/useCreatePool";
import CreatePoolComponet from "./componets/CreatePoolComponet";
import { Container, Flex, Text } from "@radix-ui/themes";
import StakeComponet from "./componets/StakeComponet";
import UnstakeComponet from "./componets/UnstakeComponet";
import { useState } from "react";

configureWeb3Modal();

function App() {
  //const { loading, data: createPool } = useCreatePool();
  const [rewardRate, setRewardRate] = useState("");

  const handleCreatePool = useCreatePool(rewardRate);
  return (
    <div>
      <Header />
      <Container>
        <CreatePoolComponet
          rewardRate={rewardRate}
          setRewardRate={setRewardRate}
          handleCreatePool={handleCreatePool}
        />
        <StakeComponet />
        <UnstakeComponet />
      </Container>
    </div>
  );
}

export default App;
