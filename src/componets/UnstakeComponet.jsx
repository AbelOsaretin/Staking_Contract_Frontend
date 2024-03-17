import React, { useState } from "react";
import useUnstake from "../hooks/useUnstake";
import {
  Avatar,
  Box,
  Button,
  Card,
  Flex,
  Text,
  TextField,
} from "@radix-ui/themes";

const UnstakeComponet = () => {
  const [poolID, setPoolID] = useState("");
  const [amount, setAmount] = useState("");

  const unstake = useUnstake(poolID);

  // const handleUnstake = async () => {
  //   if (!poolID) {
  //     alert("Please enter a Pool ID");
  //     return;
  //   }
  //   await unstake(poolID);
  // };

  const handlePoolIDChange = (e) => {
    setPoolID(e.target.value);
  };

  //   return (
  //     <div className="w-80 h-80 bg-white p-6 rounded-lg shadow-md">
  //       <div className="mb-4">
  //         <h1 className="text-xl font-bold">Unstake</h1>
  //         <input
  //           value={poolID}
  //           onChange={handlePoolIDChange}
  //           placeholder="Enter Pool ID"
  //           className="w-full p-2 border rounded-md"
  //         />
  //         <button
  //           onClick={handleUnstake}
  //           className="text-white bg-blue-600 py-1 px-4 rounded-md"
  //         >
  //           Unstake
  //         </button>
  //       </div>
  //       <div className="flex items-center mb-4">
  //         <p>You will receive</p>
  //         <p>MONIE</p>
  //       </div>
  //       <div className="flex items-center">
  //         <p>Staking APR</p>
  //         <p>0.5% Daily</p>
  //       </div>
  //     </div>
  //   );

  return (
    <Card size="2" style={{ width: 425 }}>
      <Flex gap="" align="center">
        {/* <Avatar size="4" radius="full" fallback={id} color="indigo" /> */}
        <Box width={"100%"}>
          <Flex justify={"between"} align={"center"}>
            <label>
              <Text as="div" weight="bold">
                Unstake
              </Text>
              <TextField.Input
                value={poolID}
                onChange={handlePoolIDChange}
                placeholder="Enter Pool Id"
              />
            </label>
            <Button className="bg-blue-600" onClick={unstake}>
              Unstake
            </Button>
          </Flex>
        </Box>
      </Flex>
    </Card>
  );
};

export default UnstakeComponet;
