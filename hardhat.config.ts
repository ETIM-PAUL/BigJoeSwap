import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
require("dotenv").config();

const config: HardhatUserConfig = {
  solidity: "0.8.19",
  networks: {
    "base-goerli": {
      url: process.env.ALCHEMY_COINBASE_ENDPOINT,
      accounts: [process.env.PRIVATE_KEY as string],
      gasPrice: 1000000000
    },
  },
};

export default config;
