import { ethers } from "hardhat";

async function main() {

  const TokenA = "0x80931330A8F49c26BaDb24474272FC263E408003";
  const TokenB = "0x3E8978CB20f992330af018353f07CF498c9999BB"

  const AmountinMax = ethers.parseEther('2')
  const AmountALiquidity = ethers.parseEther('50')
  const AmountBLiquidity = ethers.parseEther('50')
  const approveAmount = ethers.parseEther('100')


const joeSwap = await ethers.getContractAt(
  "SwapInterface",
  "0x1571f7813E898C4F566f0f9fFdd0ced65301f623"
);

const tokenAContract = await ethers.getContractAt('IIERC20', TokenA)
const tokenBContract = await ethers.getContractAt('IIERC20', TokenB)

// const TokenHolder = "0x9d4eF81F5225107049ba08F69F598D97B31ea644"
const to = "0x9d4eF81F5225107049ba08F69F598D97B31ea644"

await tokenAContract.approve("0x1571f7813E898C4F566f0f9fFdd0ced65301f623", approveAmount);
await tokenBContract.approve("0x1571f7813E898C4F566f0f9fFdd0ced65301f623", approveAmount);
await joeSwap.addLiquidity(AmountALiquidity, AmountBLiquidity);


console.log("balance before", (await tokenBContract.balanceOf(to)))

await joeSwap.swapTokenAForTokenB(AmountinMax);

console.log("balance after", (await tokenBContract.balanceOf(to)))

}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});