import { ethers } from "hardhat";

async function main() {

  //deploy token A to coinbase testnet
  const tokenA = await ethers.deployContract("TokenA");
  await tokenA.waitForDeployment();

  //deploy token B to coinbase testnet
  const tokenB = await ethers.deployContract("TokenB");
  await tokenB.waitForDeployment();

  console.log("Token A deployed address", tokenA.target);
  console.log("Token B deployed address", tokenB.target);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
