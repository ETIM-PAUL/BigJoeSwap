import { ethers } from "hardhat";

async function main() {

  const TokenA = "0x80931330A8F49c26BaDb24474272FC263E408003";
  const TokenB = "0x3E8978CB20f992330af018353f07CF498c9999BB"
  const joeSwap = await ethers.getContractAt("SwapInterface", '0x7580708993de7CA120E957A62f26A5dDD4b3D8aC')
  const tokenAContract = await ethers.getContractAt('IIERC20', TokenA)
  const tokenBContract = await ethers.getContractAt('IIERC20', TokenB)

  const TokenAHolder = "0x9d4eF81F5225107049ba08F69F598D97B31ea644"
  const to = "0x9d4eF81F5225107049ba08F69F598D97B31ea644"

  const AmountinMax = ethers.parseEther('1')
  const AmountALiquidity = ethers.parseEther('50')
  const AmountBLiquidity = ethers.parseEther('50')
  const approveAmount = ethers.parseEther('100')

  const TokenAHolderSign = await ethers.getImpersonatedSigner(TokenAHolder);
  

  const liq =  await tokenAContract.connect(TokenAHolderSign).approve('0x7580708993de7CA120E957A62f26A5dDD4b3D8aC', approveAmount);
  await joeSwap.connect(TokenAHolderSign).addLiquidity(AmountALiquidity, AmountBLiquidity);


  console.log("balance before", ethers.formatEther(await tokenBContract.balanceOf(to)))

  await joeSwap.connect(TokenAHolderSign).swapTokenAForTokenB(AmountinMax);


  console.log("balance after", ethers.formatEther(await tokenBContract.balanceOf(to)))

}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});