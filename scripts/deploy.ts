import { ethers } from "hardhat";

async function main() {

  //deploy token A to coinbase testnet
  // const tokenA = await ethers.deployContract("TokenA");
  // await tokenA.waitForDeployment();

  //deploy token B to coinbase testnet
  const swap = await ethers.deployContract("JoeSwap", ["0x80931330A8F49c26BaDb24474272FC263E408003", "0x3E8978CB20f992330af018353f07CF498c9999BB"]);
  await swap.waitForDeployment();

  console.log("swap contract deployed address", swap.target);
  // console.log("Token B deployed address", tokenB.target);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
