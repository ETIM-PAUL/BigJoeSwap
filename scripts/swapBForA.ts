import { ethers } from "hardhat";

async function main() {

  const TokenA = "0x80931330A8F49c26BaDb24474272FC263E408003";
  const TokenB = "0x3E8978CB20f992330af018353f07CF498c9999BB"
  const joeSwap = await ethers.getContractAt("SwapInterface", '0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D')
  const tokenAContract = await ethers.getContractAt('IIERC20', TokenA)

  const TokenAHolder = "0x9d4eF81F5225107049ba08F69F598D97B31ea644"
  const to = "0x9d4eF81F5225107049ba08F69F598D97B31ea644"

  // const currentTimestampInSeconds = Math.round(Date.now() / 1000)
  // const deadline = currentTimestampInSeconds + 86400
  
  const AmountinMax = ethers.parseEther('5')

  const TokenAHolderSign = await ethers.getImpersonatedSigner(TokenAHolder);

  console.log("balance before", ethers.formatEther(await tokenAContract.balanceOf(to)))

  await joeSwap.connect(TokenAHolderSign).swapTokenBForTokenA(AmountinMax);

  console.log("balance after", ethers.formatEther(await tokenAContract.balanceOf(to)))

}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});