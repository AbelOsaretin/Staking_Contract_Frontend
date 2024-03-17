import { Box, Button, Card, Flex, Text, TextField } from "@radix-ui/themes";
import { useState } from "react";
import useCreatePool from "../hooks/useCreatePool";

const CreatePoolComponet = ({
  rewardRate,
  setRewardRate,
  handleCreatePool,
}) => {
  return (
    <Card size="2" style={{ width: 425 }}>
      <Flex gap="" align="center">
        {/* <Avatar size="4" radius="full" fallback={id} color="indigo" /> */}
        <Box width={"100%"}>
          <Flex justify={"between"} align={"center"}>
            <label>
              <Text as="div" weight="bold">
                Create New Pool
              </Text>
              <TextField.Input
                value={rewardRate}
                onChange={(e) => setRewardRate(e.target.value)}
                placeholder="Enter Reward Rate"
              />
            </label>
            <Button className="bg-blue-600" onClick={handleCreatePool}>
              Create Pool
            </Button>
          </Flex>
        </Box>
      </Flex>
    </Card>
  );
};

export default CreatePoolComponet;
