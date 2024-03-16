import {
  Avatar,
  Box,
  Button,
  Card,
  Flex,
  Text,
  TextField,
} from "@radix-ui/themes";
import { useState } from "react";
import useStake from "../hooks/useStake";

const StakeComponet = () => {
  const [poolId, setPoolId] = useState("");
  const [amount, setAmount] = useState("");

  const handleStake = useStake(poolId, amount);
  return (
    <Card size="2" style={{ width: 425 }}>
      <Flex gap="" align="center">
        {/* <Avatar size="4" radius="full" fallback={id} color="indigo" /> */}
        <Box width={"100%"}>
          <Flex justify={"between"} align={"center"}>
            <label>
              <Text as="div" weight="bold">
                Stake To Pool
              </Text>
              <TextField.Input
                value={poolId}
                onChange={(e) => setPoolId(e.target.value)}
                placeholder="Enter Pool ID"
              />
              <TextField.Input
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                placeholder="Enter Stake Amount"
              />
            </label>
            <Button className="bg-blue-600" onClick={handleStake}>
              Stake
            </Button>
          </Flex>
        </Box>
      </Flex>
    </Card>
  );
};

export default StakeComponet;
